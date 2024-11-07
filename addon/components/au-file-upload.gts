import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';
import FileDropzone from 'ember-file-upload/components/file-dropzone';
import fileQueue from 'ember-file-upload/helpers/file-queue';
import type { FileQueueService, UploadFile } from 'ember-file-upload';
import AuAlert from './au-alert';
import AuHelpText from './au-help-text';
import AuIcon from './au-icon';
import { AttachmentIcon } from './icons/attachment';
import { AlertTriangleIcon } from './icons/alert-triangle';

export interface AuFileUploadSignature {
  Args: {
    accept?: string;
    endPoint?: string;
    helpTextDragDrop?: string;
    helpTextFileNotSupported?: string;
    maxFileSizeMB?: number;
    multiple?: boolean;
    onFinishUpload?: (uploadedFile: number, queueInfo: QueueInfo) => void;
    onQueueUpdate?: (queueInfo: QueueInfo) => void;
    title?: string;
  };
  // ember-file-upload doesn't seem to expose the signature of the FileDropzone component
  // We just hardcode what they have defined in the addon for now.
  Element: HTMLElement;
}

export type QueueInfo = {
  isQueueEmpty: boolean;
};

// A simpler version of the File and UploadFile types
type BasicFile = {
  name: string;
  type: string;
};

type UploadError = {
  filename: string;
  error?: string;
};

export default class AuFileUpload extends Component<AuFileUploadSignature> {
  @service declare fileQueue: FileQueueService;
  @tracked uploadErrorData: UploadError[] = [];

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

  @action
  upload(file: UploadFile): void | undefined {
    void this.uploadTask.perform(file);
  }

  uploadTask = task(async (file: UploadFile) => {
    this.resetErrors();
    const uploadedFile = await this.uploadFileTask.perform(file);

    this.notifyQueueUpdate();

    if (uploadedFile && this.args.onFinishUpload)
      this.args.onFinishUpload(uploadedFile, this.calculateQueueInfo());
  });

  uploadFileTask = task(
    { enqueue: true, maxConcurrency: 3 },
    async (file: UploadFile): Promise<number | null> => {
      this.notifyQueueUpdate();
      try {
        const response = await file.upload(this.endPoint, {
          contentType: 'multipart/form-data',
        });
        const body = (await response.json()) as { data: { id: number } };
        const fileId = body?.data?.id;
        return fileId;
      } catch {
        this.addError(file);
        this.removeFileFromQueue(file);
        return null;
      }
    },
  );

  @action
  filter(file: File, files: File[], index: number) {
    const isFirstFile = index === 0;

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

  calculateQueueInfo(): QueueInfo {
    const filesQueueInfo = {
      isQueueEmpty: this.uploadFileTask.isIdle,
    };
    return filesQueueInfo;
  }

  addError(file: BasicFile, errorMessage?: string) {
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

  removeFileFromQueue(file: UploadFile) {
    this.queue.remove(file);
  }

  <template>
    {{#let
      (fileQueue name=this.queueName onFileAdded=this.uploadTask.perform)
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
            <AuIcon @icon={{AttachmentIcon}} @alignment="left" />
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
                <AuIcon @icon={{AttachmentIcon}} @alignment="left" />
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
        @icon={{AlertTriangleIcon}}
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
export function isValidFileType(file: Partial<BasicFile>, accept?: string) {
  if (!accept) {
    return true;
  }

  const tokens = accept.split(',').map(function (token) {
    return token.trim().toLowerCase();
  });

  const validMimeTypes = tokens.filter(function (token) {
    return !token.startsWith('.');
  });
  const type = file.type?.toLowerCase();

  const validExtensions = tokens.filter(function (token) {
    return token.startsWith('.');
  });

  let extension = null;
  if (file.name && /(\.[^.]+)$/.test(file.name)) {
    extension = file.name.toLowerCase().match(/(\.[^.]+)$/)?.[1];
  }

  return (
    (!!type && isValidMimeType(type, validMimeTypes)) ||
    (!!extension && isValidExtension(extension, validExtensions))
  );
}

function isValidMimeType(type: string, validMimeTypes: string[] = []) {
  return validMimeTypes.some(function (validType) {
    if (['audio/*', 'video/*', 'image/*'].includes(validType)) {
      const genericType = validType.split('/')[0] as string;

      return type.startsWith(genericType);
    } else {
      return type === validType;
    }
  });
}

function isValidExtension(
  extension: string,
  validExtensions: string[] = [],
): boolean {
  return validExtensions.includes(extension);
}

function isValidFileSize(fileSize: number, maximumSize: number): boolean {
  return fileSize < maximumSize * Math.pow(1024, 2);
}
