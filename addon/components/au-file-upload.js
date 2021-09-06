import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';
import { guidFor } from '@ember/object/internals';

export default class AuFileUploadComponent extends Component {
  @service fileQueue;
  @tracked uploadErrorData = [];

  constructor() {
    super(...arguments);
    this.queueName = `${guidFor(this)}-fileUploads`;
  }

  ////////
  // Properties which may be overridden
  ////////
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

  get queue() {
    this.fileQueue.find(this.queueName);
  }

  get endPoint() {
    return this.args.endPoint || '/files';
  }

  get maxFileSizeMB() {
    return this.args.maxFileSizeMB || 20;
  }

  ////////
  // Error handling and introspection
  ////////
  get hasErrors() {
    return this.uploadErrorData.length > 0;
  }

  // uploadFileTask = {};

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
      this.uploadErrorData = [...this.uploadErrorData, { filename: file.name }];
      this.removeFileFromQueue(file);
      return null;
    }
  }

  hasValidationErrors(file) {
    // TODO: see if we can split the side-effects from the
    // non-side-effects.  The name doesn't suggest this will yield a
    // state change.
    if (file.size > this.maxFileSizeMB * Math.pow(1024, 2)) {
      this.uploadErrorData = [
        ...this.uploadErrorData,
        {
          filename: file.name,
          error: `Bestand is te groot (max ${this.maxFileSizeMB} MB)`,
        },
      ];
      this.removeFileFromQueue(file);
      return true;
    }
    return false;
  }

  resetErrors() {
    this.uploadErrorData = [];
  }

  click() {
    this.resetErrors();
  }

  ////////
  // File queue
  ////////
  removeFileFromQueue(file) {
    this.queue.remove(file);
  }

  calculateQueueInfo() {
    const filesQueueInfo = {
      isQueueEmpty: this.uploadFileTask.isIdle
    };
    return filesQueueInfo;
  }

  notifyQueueUpdate() {
    if (this.args.onQueueUpdate) {
      this.args.onQueueUpdate(this.calculateQueueInfo());
    }
  }

  ////////
  // Actions
  ////////
  @action
  async upload(file) {
    if (this.hasValidationErrors(file)) return;
    let uploadedFile = await this.uploadFileTask.perform(file);

    this.notifyQueueUpdate();

    if (uploadedFile && this.args.onFinishUpload)
      this.args.onFinishUpload(uploadedFile, this.calculateQueueInfo());
  }

  @action
  onDrop() {
    this.resetErrors();
  }
}
