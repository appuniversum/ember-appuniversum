import Service from '@ember/service';
import { task, timeout } from 'ember-concurrency';
import { A, type NativeArray } from '@ember/array';
import type { ComponentLike } from '@glint/template';

// Link to a TS Playground where I try to get back to the essence to see if I can solve it in plain TS:
// https://www.typescriptlang.org/play/?#code/C4TwDgpgBAKg9gQwM7ACIOAqBeKBvAKCigGMBXFOAWwH4AuKAIzjgBsIEA7AbiKmACWwdvSgoATgM4BzXsSoQkSBNIiiJU2XzhhBcTkgYAhMgNbAAkpwDyugfqRQAPlADCFYNVt6DvAL68BFLAEOIAZggk0N72Bvh8xGEs6sCSMv4EQZwh4ZHQJmaWNnYOUBAAHiGcACaOMaWExMSMCOIpaVp+mcGhEVFuHl4lcRVVtVD1cY1NANoA1hAgDBoyALoMZJxznHAA7jxQAPSHUACCrKx7jgjV1UKxCKxQYOI6oYKKBF0EJKzIjvBkDl4k1+IgUIZYOC0BgEDNVjgoPDAqDGKZzFIABSCYRqZapTQAShBoKawAAFgIkAA6TxAmlgCjkzHTUmknHsAA0CTZTR0PkhrN5bJa4gYAHJReKecKurLCXImt9QeRKFQADwwMqVCA1RzuNWTJAAPmxQhE+I6nKg-NikK1uDwfmJQtBFKptOhDKZLJlvNVnioDFSZAg3OFbvNYb9bNtDnDvOdPK63xIDmAYKBoURnAguyhWfEmIVBDpKFC1LRhSx4oK5igUkzKHFJbLOWpAeomPFBsDTeA4uteCgSTgEtHg6YCAAXhKWtPxc7AklxFBMWmDBm2zawv2K22kC6eQJd9joR3BlQj8LjgM1f3rXG4khyXAyKxqkxoHcwmFQrqMzCV4qH4cloCrcwAFpGwAN1CJBYhjI4TgsRwhGeOAlAERh2DBKBtj2KBdnJDAp2nBtHDA8QwzEagIFfXYaCQjckDYCBqUuaQzyBaknxpecS1BPwylYJBoFdJpbzrDNGzbZiHDYji4C4tteOGfjWkEpUviAA

export type ToastData = {
  component?: ComponentLike<CustomToastSignature>;
  title?: string;
  message?: string;
  options: ToastOptions | CustomToastOptions;
};

interface BaseOptions {
  icon?: string | ComponentLike<{ Element: Element }>;
  closable?: boolean;
  timeOut?: number | null;
}

export interface ToastOptions extends BaseOptions {
  type?: 'error' | 'success' | 'warning';
}

export interface CustomToastOptions extends BaseOptions {
  [key: string]: unknown; // Allows additional properties
}

export interface CustomToastSignature {
  Args: {
    // ToastOptions shouldn't be needed, but I don't know how to do type assertions in templates
    options: ToastOptions | CustomToastOptions;
    close: () => void;
  };
}

export default class ToasterService extends Service {
  // TODO: Replace A with a regular array
  toasts: NativeArray<ToastData> = A<ToastData>([]);

  private displayToast = task(async (toast: ToastData) => {
    if (typeof toast.options['timeOut'] === 'undefined') {
      toast.options['timeOut'] = null;
    }

    if (typeof toast.options['closable'] === 'undefined') {
      toast.options['closable'] = true;
    }

    this.toasts.pushObject(toast);

    if (toast.options['timeOut']) {
      await timeout(toast.options['timeOut']);

      this.close(toast);
    }
  });

  show(
    component: ComponentLike<CustomToastSignature>,
    options: Record<string, unknown> = {},
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
