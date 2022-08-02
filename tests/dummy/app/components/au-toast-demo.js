import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class AuToastDemo extends Component {
  @service intl;
  @service toaster;

  @action
  triggerToast() {
    this.toaster.notify('Message', 'Title', {
      timeOut: 5000,
    });
  }

  @action
  triggerSuccessToast() {
    this.toaster.success('Message', 'Title', {
      timeOut: 5000,
    });
  }

  @action
  triggerWarningToast() {
    this.toaster.warning('Message', 'Title', {
      timeOut: 5000,
    });
  }

  @action
  triggerErrorToast() {
    this.toaster.error('Message', 'Title', {
      timeOut: 5000,
    });
  }

  @action
  triggerLoadingToast() {
    this.toaster.loading('Message', 'Title', {
      timeOut: 5000,
    });
  }
}
