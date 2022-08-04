import Service from '@ember/service';
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
    // eslint-disable-next-line no-param-reassign
    options.icon = options.icon || 'circle-info';
    // eslint-disable-next-line no-param-reassign
    options.timeOut = options.timeOut || null;

    const toast = {
      title,
      message,
      options,
    };

    this.displayToast.perform(toast);
    return toast;
  }

  success(message, title, options) {
    options.type = 'success';
    // eslint-disable-next-line no-param-reassign
    options.icon = options.icon || 'check';
    // eslint-disable-next-line no-param-reassign
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
    // eslint-disable-next-line no-param-reassign
    options.icon = options.icon || 'alert-triangle';
    // eslint-disable-next-line no-param-reassign
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
    // eslint-disable-next-line no-param-reassign
    options.icon = options.icon || 'circle-x';
    // eslint-disable-next-line no-param-reassign
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
    options.type = 'loading';
    // eslint-disable-next-line no-param-reassign
    options.icon = options.icon || 'renew';
    // eslint-disable-next-line no-param-reassign
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
