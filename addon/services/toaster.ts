import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { task, timeout } from 'ember-concurrency';
import { A, type NativeArray } from '@ember/array';
import type { ComponentLike } from '@glint/template';

export type ToastData = {
  component?: ComponentLike<CustomToastSignature>;
  title?: string;
  message?: string;
  options: ToastOptions;
};

export type ToastOptions = {
  icon?: string | ComponentLike<{ Element: Element }>;
  closable?: boolean;
  timeOut?: number | null;
  type?: 'error' | 'success' | 'warning';
};

export interface CustomToastSignature {
  Args: {
    options: ToastOptions;
    close: () => void;
  };
}

export default class ToasterService extends Service {
  // TS was complaining without the explicit NativeArray import and type here, not sure why.
  // TODO: Replace A with a regular array
  @tracked toasts: NativeArray<ToastData> = A<ToastData>([]);

  displayToast = task(async (toast: ToastData) => {
    if (typeof toast.options.timeOut === 'undefined') {
      toast.options.timeOut = null;
    }

    if (typeof toast.options.closable === 'undefined') {
      toast.options.closable = true;
    }

    this.toasts.pushObject(toast);

    if (toast.options.timeOut) {
      await timeout(toast.options.timeOut);

      this.close(toast);
    }
  });

  show(
    component: ComponentLike<CustomToastSignature>,
    options: ToastOptions = {},
  ) {
    const toast = {
      component,
      options,
    };

    this.displayToast.perform(toast);
    return toast;
  }

  notify(message: string, title: string, options: ToastOptions = {}) {
    if (typeof options.icon === 'undefined') {
      options.icon = 'circle-info';
    }

    const toast = {
      title,
      message,
      options,
    };

    this.displayToast.perform(toast);
    return toast;
  }

  success(message: string, title: string, options: ToastOptions = {}) {
    if (typeof options.type === 'undefined') {
      options.type = 'success';
    }

    if (typeof options.icon === 'undefined') {
      options.icon = 'check';
    }

    const toast = {
      title,
      message,
      options,
    };

    this.displayToast.perform(toast);
    return toast;
  }

  warning(message: string, title: string, options: ToastOptions = {}) {
    if (typeof options.type === 'undefined') {
      options.type = 'warning';
    }

    if (typeof options.icon === 'undefined') {
      options.icon = 'alert-triangle';
    }

    const toast = {
      title,
      message,
      options,
    };

    this.displayToast.perform(toast);
    return toast;
  }

  error(message?: string, title?: string, options: ToastOptions = {}) {
    if (typeof options.type === 'undefined') {
      options.type = 'error';
    }

    if (typeof options.icon === 'undefined') {
      options.icon = 'circle-x';
    }

    const toast = {
      title,
      message,
      options,
    };

    this.displayToast.perform(toast);
    return toast;
  }

  loading(message?: string, title?: string, options: ToastOptions = {}) {
    if (typeof options.icon === 'undefined') {
      options.icon = 'renew';
    }

    const toast = {
      title,
      message,
      options,
    };

    this.displayToast.perform(toast);
    return toast;
  }

  close(toast: ToastData) {
    if (this.toasts.includes(toast)) {
      this.toasts.removeObject(toast);
    }
  }
}
