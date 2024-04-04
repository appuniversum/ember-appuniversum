import AuToaster from '@appuniversum/ember-appuniversum/components/au-toaster';
import type ToasterService from '@appuniversum/ember-appuniversum/services/toaster';
import type {
  CustomToastSignature,
  ToastOptions,
} from '@appuniversum/ember-appuniversum/services/toaster';
import type { TOC } from '@ember/component/template-only';
import { on } from '@ember/modifier';
import {
  click,
  getRootElement,
  render,
  settled,
  waitUntil,
  type TestContext as BaseTestContext,
} from '@ember/test-helpers';
import { queryByText } from '@testing-library/dom';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { module, test } from 'qunit';

const TOASTER = {
  CONTAINER: '[data-test-toaster-container]',
  TOAST: '[data-test-toast]',
  CLOSE: '[data-test-alert-close]',
};

interface TestContext extends BaseTestContext {
  toaster: ToasterService;
}

module('Integration | Component | au-toaster', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach<TestContext>(async function () {
    this.toaster = this.owner.lookup('service:toaster') as ToasterService;
    await renderToasterContainer();
  });

  test<TestContext>('it only renders the container if toasts are present', async function (assert) {
    assert.dom(TOASTER.CONTAINER).doesNotExist();

    this.toaster.notify('Bar', 'Foo');
    await settled();

    assert.dom(TOASTER.CONTAINER).exists();
  });

  test<TestContext>('it has different methods to show styled toasts', async function (assert) {
    this.toaster.notify('toast', 'notify');
    this.toaster.success('toast', 'success');
    this.toaster.warning('toast', 'warning');
    this.toaster.error('toast', 'error');
    this.toaster.loading('toast', 'loading');
    await settled();

    assert
      .dom(TOASTER.TOAST)
      .exists({ count: 5 }, 'it displays a toast for every method call');
  });

  test<TestContext>('`notify` displays the title and message', async function (assert) {
    this.toaster.notify('toast', 'notify');
    await settled();

    assert.dom(TOASTER.TOAST).containsText('notify toast');
  });

  test<TestContext>('`success` displays the title and message', async function (assert) {
    this.toaster.success('toast', 'success');
    await settled();

    assert.dom(TOASTER.TOAST).containsText('success toast');
  });

  test<TestContext>('`warning` displays the title and message', async function (assert) {
    this.toaster.success('toast', 'warning');
    await settled();

    assert.dom(TOASTER.TOAST).containsText('warning toast');
  });

  test<TestContext>('`error` displays the title and message', async function (assert) {
    this.toaster.success('toast', 'error');
    await settled();

    assert.dom(TOASTER.TOAST).containsText('error toast');
  });

  test<TestContext>('`loading` displays the title and message', async function (assert) {
    this.toaster.success('toast', 'loading');
    await settled();

    assert.dom(TOASTER.TOAST).containsText('loading toast');
  });

  test<TestContext>('toasts can be configured to be closable', async function (assert) {
    this.toaster.notify('toast', 'closable');
    await settled();

    let toast = getRootElement().querySelector(TOASTER.TOAST) as HTMLElement;
    assert.dom(toast).exists();
    let closeButton = queryByText(toast, 'Sluit') as HTMLButtonElement;
    assert.dom(closeButton).exists('Toasts are closable by default');

    await click(closeButton);
    assert
      .dom(TOASTER.TOAST)
      .doesNotExist('Toasts are completely removed when closed');

    this.toaster.notify('toast', 'non-closable', { closable: false });
    await settled();

    toast = getRootElement().querySelector(TOASTER.TOAST) as HTMLElement;
    assert.dom(toast).exists();
    closeButton = queryByText(toast, 'Sluit') as HTMLButtonElement;

    assert
      .dom(closeButton)
      .doesNotExist('The close button is hidden if the alert is not closable');
  });

  test<TestContext>('toasts can be configured to auto-close after a certain time', async function (assert) {
    this.toaster.notify('toast', 'auto-closing', { timeOut: 20 });

    // We can't use `await settled();` here since it seemingly waits for the timeOut duration as well
    // That has the side-effect that the toaster will already be removed again before the test continues
    await timeout(1);

    assert.dom(TOASTER.TOAST).exists();

    await waitUntil(() => {
      return !getRootElement().querySelector(TOASTER.TOAST);
    });
  });

  test<TestContext>('toasts can be closed with the `close` method', async function (assert) {
    const toast = this.toaster.notify('toast', 'notify');
    assert.ok(toast, 'display methods return a toast object');
    await settled();

    assert.dom(TOASTER.TOAST).exists();

    this.toaster.close(toast);
    await settled();
    assert.dom(TOASTER.TOAST).doesNotExist();
  });

  test<TestContext>('custom toast components can be used', async function (assert) {
    const CUSTOM_TOAST = '[data-test-custom-toast]';
    interface ToastOptionsWithFoo extends ToastOptions {
      foo: string;
    }

    const CustomToast: TOC<{
      Args: {
        options: {
          foo: string
        };
        // options: ToastOptionsWithFoo; // Doesn't work
        // options: ToastOptions; // Works, but fails on the `@options.foo` usage in the template
        // options: ToastOptions & { foo: string }; // Doesn't work
        close: CustomToastSignature['Args']['close'];
      };
    }> = <template>
      <div data-test-custom-toast>
        <p>
          {{@options.foo}}
        </p>
        <button {{on "click" @close}} type="button">Close me</button>
      </div>
    </template>;

    this.toaster.show(CustomToast, { foo: 'Foo' });
    await settled();

    const toastElement = getRootElement().querySelector(CUSTOM_TOAST) as HTMLElement;
    assert.dom(toastElement).exists();

    assert.dom(toastElement.querySelector('p')).containsText('Foo');
    await click(queryByText(toastElement, 'Close me') as HTMLButtonElement);

    assert
      .dom(CUSTOM_TOAST)
      .doesNotExist(
        'It receives a `@close` action that can be used to close the toast from the custom toast component itself',
      );

    const toast = this.toaster.show(CustomToast, { foo: 'Foo' });
    assert.ok(toast, '`show` returns a toast object');
    await settled();

    this.toaster.close(toast);
    await settled();
    assert
      .dom(CUSTOM_TOAST)
      .doesNotExist(
        'Custom toasts components can be closed with the `close` method',
      );
  });
});

async function renderToasterContainer() {
  await render(<template><AuToaster data-test-toaster-container /></template>);
}

function timeout(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
