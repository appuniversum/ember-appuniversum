import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';

export default class AuFileUploadComponent extends Component {
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
      const fileId = response.body?.data?.id;
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

    let hasValidFileSize = file.size < this.maxFileSizeMB * Math.pow(1024, 2);
    if (!hasValidFileSize) {
      this.addError(file, `Bestand is te groot (max ${this.maxFileSizeMB} MB)`);
      return false;
    }

    if (typeof this.args.filter === 'function') {
      let shouldBeUploaded = this.args.filter(...arguments);

      if (shouldBeUploaded) {
        return true;
      } else {
        this.addError(file, this.helpTextFileNotSupported);
        return false;
      }
    } else {
      return true;
    }
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
}
