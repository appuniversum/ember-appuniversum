import Service, { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { task, timeout } from 'ember-concurrency';
import { A } from '@ember/array';

export default class ToasterService extends Service {
  @tracked toasts = A([]);

  @task
  *displayToast(toast) {
    this.toasts.pushObject(toast);

    if (toast.options.timeOut) {
      yield timeout(toast.options.timeOut);

      if (this.toasts.includes(toast)) {
        this.toasts.removeObject(toast);
      }
    }
  }

  notify(message, title, options) {
    options.icon = options.icon || 'circle-info';
    options.timeOut = options.timeOut || null;

    const toast = {
      title,
      message,
      options,
    };

    options.timeOut = options.timeOut;
    this.displayToast.perform(toast);
    return toast;
  }

  success(message, title, options) {
    options.type = 'success';
    options.icon = options.icon || 'check';
    options.timeOut = options.timeOut || null;

    const toast = {
      title,
      message,
      options,
    };

    this.displayToast.perform(toast);
    return toast;
  }

  warning(message, title, options) {
    options.type = 'warning';
    options.icon = options.icon || 'alert-triangle';
    options.timeOut = options.timeOut || null;

    const toast = {
      title,
      message,
      options,
    };

    this.displayToast.perform(toast);
    return toast;
  }

  error(message, title, options) {
    options.type = 'error';
    options.icon = options.icon || 'circle-x';
    options.timeOut = options.timeOut || null;

    const toast = {
      title,
      message,
      options,
    };

    this.displayToast.perform(toast);
    return toast;
  }

  loading(message, title, options) {
    options = options || {};
    options.type = 'loading';
    options.icon = options.icon || 'renew';
    options.timeOut = options.timeOut || null;

    const toast = {
      title,
      message,
      options,
    };

    this.displayToast.perform(toast);
    return toast;
  }
}
