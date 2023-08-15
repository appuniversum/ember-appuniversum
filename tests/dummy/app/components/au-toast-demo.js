import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AuToastDemo extends Component {
  @service toaster;
  @tracked clearableToast;

  @action
  triggerToast() {
    this.toaster.notify('Message', 'Notify');
  }

  @action
  triggerSuccessToast() {
    this.toaster.success('Message', 'Success');
  }

  @action
  triggerWarningToast() {
    this.toaster.warning('Message', 'Warning');
  }

  @action
  triggerErrorToast() {
    this.toaster.error('Message', 'Error');
  }

  @action
  triggerLoadingToast() {
    this.toaster.loading('Message', 'Loading');
  }

  @action
  triggerTimeoutToast() {
    this.toaster.notify('Message', 'Timeout', {
      timeOut: 3000,
      closable: false,
    });
  }

  @action
  triggerClearableToast() {
    this.clearableToast = this.toaster.warning(
      'This toast will be closed when clicking the "Close toast" button',
      'Close me with code'
    );
  }

  @action
  triggerClearToast() {
    if (this.clearableToast) {
      this.toaster.close(this.clearableToast);
    }
  }
}
