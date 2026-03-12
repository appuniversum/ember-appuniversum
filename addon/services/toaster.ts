import Service from '@ember/service';
import { task, timeout } from 'ember-concurrency';
import { A, type NativeArray } from '@ember/array';
import type { ComponentLike } from '@glint/template';
import type { AuAlertSignature } from '../components/au-alert';

// shared configuration that both built–in and user supplied toasts may use
export interface BaseOptions {
  icon?: string | ComponentLike<{ Element: Element }>;
  closable?: boolean;
  timeOut?: number | null;
}

export interface ToastOptions extends BaseOptions {
  type?: AuAlertSignature['Args']['skin'];
}

// generic signature so consumers can plug in their own option shape
export interface CustomToastSignature<Options extends BaseOptions = BaseOptions> {
  Args: {
    options: Options;
    close: () => void;
  };
}

// two flavours of toast data – the absence/presence of `component` is the
// discriminant that lets Glint narrow the union in templates
export type DefaultToastData = {
  component?: undefined;
  title?: string;
  message?: string;
  options: ToastOptions;
};

export type CustomToastData<Options extends BaseOptions = BaseOptions> = {
  component: ComponentLike<CustomToastSignature<Options>>;
  title?: string;
  message?: string;
  options: Options;
};

// whenever the store needs to hold toasts we don't care about the particular
// option type; making this alias allows the generic `show` method to still work
export type AnyToastData<Options extends BaseOptions = BaseOptions> = DefaultToastData | CustomToastData<Options>;

// public API type – kept for backwards compatibility with consumers of the
// service who might have directly referenced `ToastData`
export type ToastData<Options extends BaseOptions = BaseOptions> = AnyToastData<Options>;

export default class ToasterService extends Service {
  // TODO: Replace A with a regular array
  toasts: NativeArray<AnyToastData> = A<AnyToastData>([]);

  private displayToast = task(async (toast: AnyToastData) => {
    // the task treats the union of possible options; the callers ensure the
    // correct shape, so we can safely index on the base properties here
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

  // generic helper for custom components – the `Options` type is inferred from
  // the component signature and ensures callers pass matching data
  show<Options extends BaseOptions = BaseOptions>(
    component: ComponentLike<CustomToastSignature<Options>>,
    options: Options = {} as Options,
  ): CustomToastData<Options> {
    const toast: CustomToastData<Options> = {
      component,
      options,
    };

    // widen the argument so the task can accept any option shape
    void this.displayToast.perform(toast as unknown as AnyToastData);
    return toast;
  }

  notify(message: string, title: string, options: ToastOptions = {}) {
    if (typeof options.icon === 'undefined') {
      options.icon = 'circle-info';
    }

    const toast: DefaultToastData = {
      title,
      message,
      options,
    };

    void this.displayToast.perform(toast);
    return toast;
  }

  success(message: string, title: string, options: ToastOptions = {}) {
    if (typeof options.type === 'undefined') {
      options.type = 'success';
    }

    if (typeof options.icon === 'undefined') {
      options.icon = 'check';
    }

    const toast: DefaultToastData = {
      title,
      message,
      options,
    };

    void this.displayToast.perform(toast);
    return toast;
  }

  warning(message: string, title: string, options: ToastOptions = {}) {
    if (typeof options.type === 'undefined') {
      options.type = 'warning';
    }

    if (typeof options.icon === 'undefined') {
      options.icon = 'alert-triangle';
    }

    const toast: DefaultToastData = {
      title,
      message,
      options,
    };

    void this.displayToast.perform(toast);
    return toast;
  }

  error(message?: string, title?: string, options: ToastOptions = {}) {
    if (typeof options.type === 'undefined') {
      options.type = 'error';
    }

    if (typeof options.icon === 'undefined') {
      options.icon = 'circle-x';
    }

    const toast: DefaultToastData = {
      title,
      message,
      options,
    };

    void this.displayToast.perform(toast);
    return toast;
  }

  loading(message?: string, title?: string, options: ToastOptions = {}) {
    if (typeof options.icon === 'undefined') {
      options.icon = 'renew';
    }

    const toast: DefaultToastData = {
      title,
      message,
      options,
    };

    void this.displayToast.perform(toast);
    return toast;
  }

  close<Options extends BaseOptions = BaseOptions>(toast: ToastData<Options>) {
    if (this.toasts.includes(toast as unknown as AnyToastData)) {
      this.toasts.removeObject(toast as unknown as AnyToastData);
    }
  }
}
