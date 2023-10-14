import { setComponentTemplate } from '@ember/component';
import templateOnlyComponent from '@ember/component/template-only';
import {
  click,
  getRootElement,
  render,
  settled,
  waitUntil,
} from '@ember/test-helpers';
import { queryByText } from '@testing-library/dom';
import { setupRenderingTest } from 'test-app/tests/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';

const TOASTER = {
  CONTAINER: '[data-test-toaster-container]',
  TOAST: '[data-test-toast]',
  CLOSE: '[data-test-alert-close]',
};

module('Integration | Component | au-toaster', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function () {
    this.toaster = this.owner.lookup('service:toaster');
    await renderToasterContainer();
  });

  test('it only renders the container if toasts are present', async function (assert) {
    assert.dom(TOASTER.CONTAINER).doesNotExist();

    this.toaster.notify('Bar', 'Foo');
    await settled();

    assert.dom(TOASTER.CONTAINER).exists();
  });

  test('it has different methods to show styled toasts', async function (assert) {
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

  test('`notify` displays the title and message', async function (assert) {
    this.toaster.notify('toast', 'notify');
    await settled();

    assert.dom(TOASTER.TOAST).containsText('notify toast');
  });

  test('`success` displays the title and message', async function (assert) {
    this.toaster.success('toast', 'success');
    await settled();

    assert.dom(TOASTER.TOAST).containsText('success toast');
  });

  test('`warning` displays the title and message', async function (assert) {
    this.toaster.success('toast', 'warning');
    await settled();

    assert.dom(TOASTER.TOAST).containsText('warning toast');
  });

  test('`error` displays the title and message', async function (assert) {
    this.toaster.success('toast', 'error');
    await settled();

    assert.dom(TOASTER.TOAST).containsText('error toast');
  });

  test('`loading` displays the title and message', async function (assert) {
    this.toaster.success('toast', 'loading');
    await settled();

    assert.dom(TOASTER.TOAST).containsText('loading toast');
  });

  test('toasts can be configured to be closable', async function (assert) {
    this.toaster.notify('toast', 'closable');
    await settled();

    let toast = getRootElement().querySelector(TOASTER.TOAST);
    assert.dom(toast).exists();
    let closeButton = queryByText(toast, 'Sluit');
    assert.dom(closeButton).exists('Toasts are closable by default');

    await click(closeButton);
    assert
      .dom(TOASTER.TOAST)
      .doesNotExist('Toasts are completely removed when closed');

    this.toaster.notify('toast', 'non-closable', { closable: false });
    await settled();

    toast = getRootElement().querySelector(TOASTER.TOAST);
    assert.dom(toast).exists();
    closeButton = queryByText(toast, 'Sluit');

    assert
      .dom(closeButton)
      .doesNotExist('The close button is hidden if the alert is not closable');
  });

  test('toasts can be configured to auto-close after a certain time', async function (assert) {
    this.toaster.notify('toast', 'auto-closing', { timeOut: 20 });

    // We can't use `await settled();` here since it seemingly waits for the timeOut duration as well
    // That has the side-effect that the toaster will already be removed again before the test continues
    await timeout(1);

    assert.dom(TOASTER.TOAST).exists();

    await waitUntil(() => {
      return !getRootElement().querySelector(TOASTER.TOAST);
    });
  });

  test('toasts can be closed with the `close` method', async function (assert) {
    let toast = this.toaster.notify('toast', 'notify');
    assert.ok(toast, 'display methods return a toast object');
    await settled();

    assert.dom(TOASTER.TOAST).exists();

    this.toaster.close(toast);
    await settled();
    assert.dom(TOASTER.TOAST).doesNotExist();
  });

  test('custom toast components can be used', async function (assert) {
    const CUSTOM_TOAST = '[data-test-custom-toast]';
    const CustomToast = setComponentTemplate(
      hbs`<div data-test-custom-toast>
            <p>
              {{@options.foo}}
            </p>
            <button {{on "click" @close}} type="button">Close me</button>
          </div>`,
      templateOnlyComponent(),
    );

    this.toaster.show(CustomToast, { foo: 'Foo' });
    await settled();

    const toastElement = getRootElement().querySelector(CUSTOM_TOAST);
    assert.dom(toastElement).exists();

    assert.dom(toastElement.querySelector('p')).containsText('Foo');
    await click(queryByText(toastElement, 'Close me'));

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
  await render(hbs`<AuToaster data-test-toaster-container />`);
}

function timeout(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
