import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { task, timeout } from 'ember-concurrency';
import { A } from '@ember/array';

import AuToast from '@appuniversum/ember-appuniversum/components/au-toast';

export default class ToasterService extends Service {
  @tracked toasts = A([]);

  @task
  *displayToast(toast) {
    if (typeof toast.options.timeOut === 'undefined') {
      toast.options.timeOut = null;
    }

    if (typeof toast.options.closable === 'undefined') {
      toast.options.closable = true;
    }

    this.toasts.pushObject(toast);

    if (toast.options.timeOut) {
      yield timeout(toast.options.timeOut);

      if (this.toasts.includes(toast)) {
        this.toasts.removeObject(toast);
      }
    }
  }

  show(name, options = {}) {
    const toast = {
      name,
      options,
    };

    this.displayToast.perform(toast);
    return toast;
  }

  notify(message, title, options = {}) {
    if (typeof options.icon === 'undefined') {
      options.icon = 'circle-info';
    }

    const toast = {
      name: AuToast,
      title,
      message,
      options,
    };

    this.displayToast.perform(toast);
    return toast;
  }

  success(message, title, options = {}) {
    if (typeof options.type === 'undefined') {
      options.type = 'success';
    }

    if (typeof options.icon === 'undefined') {
      options.icon = 'check';
    }

    const toast = {
      name: AuToast,
      title,
      message,
      options,
    };

    this.displayToast.perform(toast);
    return toast;
  }

  warning(message, title, options = {}) {
    if (typeof options.type === 'undefined') {
      options.type = 'warning';
    }

    if (typeof options.icon === 'undefined') {
      options.icon = 'alert-triangle';
    }

    const toast = {
      name: AuToast,
      title,
      message,
      options,
    };

    this.displayToast.perform(toast);
    return toast;
  }

  error(message, title, options = {}) {
    if (typeof options.type === 'undefined') {
      options.type = 'error';
    }

    if (typeof options.icon === 'undefined') {
      options.icon = 'circle-x';
    }

    const toast = {
      name: AuToast,
      title,
      message,
      options,
    };

    this.displayToast.perform(toast);
    return toast;
  }

  loading(message, title, options = {}) {
    if (typeof options.icon === 'undefined') {
      options.icon = 'renew';
    }

    const toast = {
      name: AuToast,
      title,
      message,
      options,
    };

    this.displayToast.perform(toast);
    return toast;
  }
}
