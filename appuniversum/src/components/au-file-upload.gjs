import { AuAlert, AuHelpText, AuIcon } from '@appuniversum/ember-appuniversum';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';
import perform from 'ember-concurrency/helpers/perform';
import FileDropzone from 'ember-file-upload/components/file-dropzone';
import fileQueue from 'ember-file-upload/helpers/file-queue';

export default class AuFileUpload extends Component {
  @service fileQueue;
  @tracked uploadErrorData = [];

  get uploadingMsg() {
    return `Bezig met het opladen van ${this.queue.files.length} bestand(en). (${this.queue.progress}%)`;
  }

  get title() {
    return this.args.title || 'Bestanden toevoegen';
  }

  get helpTextDragDrop() {
    return (
      this.args.helpTextDragDrop ||
      'Sleep de bestanden naar hier om toe te voegen'
    );
  }

  get helpTextFileNotSupported() {
    return (
      this.args.helpTextFileNotSupported ||
      'Dit bestandsformaat wordt niet ondersteund.'
    );
  }

  get queueName() {
    return `${guidFor(this)}-fileUploads`;
  }

  get queue() {
    return this.fileQueue.findOrCreate(this.queueName);
  }

  get endPoint() {
    return this.args.endPoint || '/files';
  }

  get maxFileSizeMB() {
    return this.args.maxFileSizeMB || 20;
  }

  get hasErrors() {
    return this.uploadErrorData.length > 0;
  }

  @task
  *upload(file) {
    this.resetErrors();
    let uploadedFile = yield this.uploadFileTask.perform(file);

    this.notifyQueueUpdate();

    if (uploadedFile && this.args.onFinishUpload)
      this.args.onFinishUpload(uploadedFile, this.calculateQueueInfo());
  }

  @task({ enqueue: true, maxConcurrency: 3 })
  *uploadFileTask(file) {
    this.notifyQueueUpdate();
    try {
      const response = yield file.upload(this.endPoint, {
        'Content-Type': 'multipart/form-data',
      });
      const body = yield response.json();
      const fileId = body?.data?.id;
      return fileId;
    } catch (e) {
      this.addError(file);
      this.removeFileFromQueue(file);
      return null;
    }
  }

  @action
  filter(file, files, index) {
    let isFirstFile = index === 0;

    if (isFirstFile) {
      this.resetErrors();
    } else {
      if (!this.args.multiple) {
        // We only upload the first file if `@multiple` is not set to true. This matches the behavior of ember-file-upload v4.
        return false;
      }
    }

    if (!isValidFileSize(file.size, this.maxFileSizeMB)) {
      this.addError(file, `Bestand is te groot (max ${this.maxFileSizeMB} MB)`);
      return false;
    }

    if (!isValidFileType(file, this.args.accept)) {
      this.addError(file, this.helpTextFileNotSupported);
      return false;
    }

    return true;
  }

  notifyQueueUpdate() {
    if (this.args.onQueueUpdate) {
      this.args.onQueueUpdate(this.calculateQueueInfo());
    }
  }

  calculateQueueInfo() {
    const filesQueueInfo = {
      isQueueEmpty: this.uploadFileTask.isIdle,
    };
    return filesQueueInfo;
  }

  addError(file, errorMessage) {
    this.uploadErrorData = [
      ...this.uploadErrorData,
      {
        filename: file.name,
        error: errorMessage,
      },
    ];
  }

  resetErrors() {
    this.uploadErrorData = [];
  }

  removeFileFromQueue(file) {
    this.queue.remove(file);
  }

  <template>
    {{#let
      (fileQueue name=this.queueName onFileAdded=(perform this.upload))
      as |queue|
    }}
      <FileDropzone
        @queue={{queue}}
        @filter={{this.filter}}
        class="au-c-file-upload"
        ...attributes
        as |dropzone|
      >
        {{#if dropzone.active}}
          <p class="au-c-file-upload-message">
            <AuIcon @icon="attachment" @alignment="left" />
            <AuHelpText @skin="secondary">{{this.helpTextDragDrop}}</AuHelpText>
          </p>
        {{else if queue.files.length}}
          <p class="au-c-file-upload-message">
            <small class="au-c-small-text">{{this.uploadingMsg}}</small>
          </p>
        {{else}}
          <label>
            <input
              accept={{@accept}}
              multiple={{@multiple}}
              type="file"
              hidden=""
              {{queue.selectFile filter=this.filter}}
            />
            <span class="au-c-file-upload-label">
              <span class="au-c-file-upload-label__title">
                <AuIcon @icon="attachment" @alignment="left" />
                {{this.title}}
              </span>
              {{#if dropzone.supported}}
                <AuHelpText
                  @skin="secondary"
                >{{this.helpTextDragDrop}}</AuHelpText>
              {{/if}}
            </span>
          </label>
        {{/if}}
      </FileDropzone>
    {{/let}}

    {{#if this.hasErrors}}
      <AuAlert
        @icon="alert-triangle"
        @skin="error"
        @size="small"
        @closable={{false}}
        class="au-u-margin-top-tiny"
      >
        <ul>
          {{#each this.uploadErrorData as |data|}}
            <li>
              Fout bij het opladen van
              {{data.filename}}.
              {{#if data.error}}
                (Foutmelding:
                {{data.error}})
              {{/if}}
            </li>
          {{/each}}
        </ul>
      </AuAlert>
    {{/if}}
  </template>
}

// Private util that is exported for testing purposes
export function isValidFileType(file, accept) {
  if (!accept) {
    return true;
  }

  let tokens = accept.split(',').map(function (token) {
    return token.trim().toLowerCase();
  });

  let validMimeTypes = tokens.filter(function (token) {
    return !token.startsWith('.');
  });
  let type = file.type?.toLowerCase();

  let validExtensions = tokens.filter(function (token) {
    return token.startsWith('.');
  });

  let extension = null;
  if (file.name && /(\.[^.]+)$/.test(file.name)) {
    extension = file.name.toLowerCase().match(/(\.[^.]+)$/)[1];
  }

  return (
    isValidMimeType(type, validMimeTypes) ||
    isValidExtension(extension, validExtensions)
  );
}

function isValidMimeType(type, validMimeTypes = []) {
  return validMimeTypes.some(function (validType) {
    if (['audio/*', 'video/*', 'image/*'].includes(validType)) {
      let genericType = validType.split('/')[0];

      return type.startsWith(genericType);
    } else {
      return type === validType;
    }
  });
}

function isValidExtension(extension, validExtensions = []) {
  return validExtensions.includes(extension);
}

function isValidFileSize(fileSize, maximumSize) {
  return fileSize < maximumSize * Math.pow(1024, 2);
}
