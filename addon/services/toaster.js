import Service, { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { task, timeout } from 'ember-concurrency';
import { A } from '@ember/array';

export default class ToasterService extends Service {
  @service intl;
  @tracked toasts = A([]);

  get toasts() {
    return this.toasts.filter((toast) =>
      ['notify', 'success', 'warning', 'error', 'loading'].includes(
        toast.options.type
      )
    );
  }

  @task
  *displayToast(toast) {
    this.toasts.pushObject(toast);
    yield timeout(toast.options.timeOut);

    if (this.toasts.includes(toast)) {
      this.toasts.removeObject(toast);
    }
  }

  notify(message, title, options) {
    // eslint-disable-next-line no-param-reassign
    options = options || {};
    options.icon = 'circle-info';
    if (typeof options.timeOut === 'undefined') {
      options.timeOut = 5000;
    }
    const toast = {
      title,
      message,
      options,
    };
    this.displayToast.perform(toast);
    return toast;
  }

  success(message, title, options) {
    // eslint-disable-next-line no-param-reassign
    options = options || {};
    options.type = 'success';
    options.icon = 'check';
    if (typeof options.timeOut === 'undefined') {
      options.timeOut = 5000;
    }
    return this.notify(message, title, options);
  }

  warning(message, title, options) {
    // eslint-disable-next-line no-param-reassign
    options = options || {};
    options.type = 'warning';
    options.icon = 'alert-triangle';
    if (typeof options.timeOut === 'undefined') {
      options.timeOut = 5000;
    }
    return this.notify(message, title, options);
  }

  error(message, title, options) {
    // eslint-disable-next-line no-param-reassign
    options = options || {};
    options.type = 'error';
    options.icon = 'circle-x';
    if (typeof options.timeOut === 'undefined') {
      options.timeOut = 5000;
    }
    return this.notify(message, title, options);
  }

  loading(message, title, options) {
    // eslint-disable-next-line no-param-reassign
    options = options || {};
    options.type = 'loading';
    options.icon = 'renew';
    if (typeof options.timeOut === 'undefined') {
      options.timeOut = 5000;
    }
    return this.notify(message, title, options);
  }
}
