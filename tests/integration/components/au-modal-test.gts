import {
  click,
  render,
  resetOnerror,
  setupOnerror,
  triggerKeyEvent,
} from '@ember/test-helpers';
import AuModalContainer from '@appuniversum/ember-appuniversum/components/au-modal-container';
import AuModal from '@appuniversum/ember-appuniversum/components/au-modal';
import { on } from '@ember/modifier';
import { tracked } from '@glimmer/tracking';
import PowerSelect from 'ember-power-select/components/power-select';
import { selectChoose } from 'ember-power-select/test-support';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

const MODAL = {
  ELEMENT: '[data-test-modal]',
  HEADER: '[data-test-modal-header]',
  CLOSE: '[data-test-modal-close]',
  TITLE: '[data-test-modal-title]',
  BODY: '[data-test-modal-body]',
  FOOTER: '[data-test-modal-footer]',
};

module('Integration | Component | au-modal', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders when @modalOpen is set to `true`', async function (assert) {
    await render(<template><AuModalContainer /><AuModal /></template>);
    assert.dom(MODAL.ELEMENT).doesNotExist();

    await render(
      <template><AuModalContainer /><AuModal @modalOpen={{true}} /></template>,
    );
    assert.dom(MODAL.ELEMENT).exists();
  });

  test("it throws an error if the `<AuModalContainer />` component wasn't found", async function (assert) {
    setupOnerror((error) => {
      if (error.message.includes('au-modal: No target element was found')) {
        assert.step('correct error thrown');
      }
    });

    await render(<template><AuModal @modalOpen={{true}} /></template>);

    assert.verifySteps(['correct error thrown']);
    resetOnerror();
  });

  test('it yields body and footer components', async function (assert) {
    await render(
      <template>
        <AuModalContainer />
        <AuModal @modalOpen={{true}} as |Modal|>
          <Modal.Body>
            Body
          </Modal.Body>
          <Modal.Footer>
            Footer
          </Modal.Footer>
        </AuModal>
      </template>,
    );

    assert.dom(MODAL.BODY).containsText('Body');
    assert.dom(MODAL.FOOTER).containsText('Footer');
  });

  test('it has named blocks for the body and footer', async function (assert) {
    await render(
      <template>
        <AuModalContainer />
        <AuModal @modalOpen={{true}}>
          <:body>Body</:body>
          <:footer>Footer</:footer>
        </AuModal>
      </template>,
    );

    assert.dom(MODAL.BODY).hasText('Body');
    assert.dom(MODAL.FOOTER).hasText('Footer');
  });

  test('it stops yielding the contextual components once a named block is used', async function (assert) {
    await render(
      <template>
        <AuModalContainer />
        <AuModal @modalOpen={{true}}>
          <:default as |Modal|>
            <Modal.Body>Not rendered</Modal.Body>
            <Modal.Footer>Not rendered</Modal.Footer>
          </:default>
          <:body>Body</:body>
          <:footer>Footer</:footer>
        </AuModal>
      </template>,
    );

    assert.dom(MODAL.BODY).exists({ count: 1 }).hasText('Body');
    assert.dom(MODAL.FOOTER).exists({ count: 1 }).hasText('Footer');
  });

  test('its title can be set through an argument or a named block', async function (assert) {
    await render(
      <template>
        <AuModalContainer />
        <AuModal @title="Title set through @title" @modalOpen={{true}} />
      </template>,
    );

    assert.dom(MODAL.TITLE).hasText('Title set through @title');

    await render(
      <template>
        <AuModalContainer />
        <AuModal @modalOpen={{true}}>
          <:title>Title set through block</:title>
        </AuModal>
      </template>,
    );

    assert.dom(MODAL.TITLE).hasText('Title set through block');

    // the block version is prioritized
    await render(
      <template>
        <AuModalContainer />
        <AuModal @title="Title set through @title" @modalOpen={{true}}>
          <:title>Title set through block</:title>
        </AuModal>
      </template>,
    );

    assert.dom(MODAL.TITLE).hasText('Title set through block');
  });

  test('it calls `@closeModal` when the modal should be closed', async function (assert) {
    let timesCalled = 0;
    const state = new TestState();
    const handleClose = () => {
      timesCalled++;
      state.isOpen = false;
    };

    await render(
      <template>
        <AuModalContainer />
        <AuModal @modalOpen={{state.isOpen}} @closeModal={{handleClose}} />
      </template>,
    );

    const closeButton = document.querySelector(
      MODAL.CLOSE,
    ) as HTMLButtonElement;
    await click(closeButton);
    assert.strictEqual(timesCalled, 1);
  });

  test('it calls @closeModal when the `escape` button is pressed', async function (assert) {
    let timesCalled = 0;
    const state = new TestState();

    const handleClose = () => {
      timesCalled++;

      if (timesCalled === 1) {
        // We want to test if the focus trap is still active if the app doesn't close the modal for some reason
        return;
      }

      state.isOpen = false;
    };

    await render(
      <template>
        <AuModalContainer />
        <AuModal @modalOpen={{state.isOpen}} @closeModal={{handleClose}} />
      </template>,
    );

    await triggerKeyEvent(document, 'keydown', 'Escape');
    assert.strictEqual(timesCalled, 1);

    await triggerKeyEvent(document, 'keydown', 'Escape');
    assert.strictEqual(
      timesCalled,
      2,
      'it calls the action as long as the modal stays open',
    );

    await triggerKeyEvent(document, 'keydown', 'Escape');
    assert.strictEqual(
      timesCalled,
      2,
      "it doesn't call the @closeModal action if the modal is closed",
    );
  });

  test("it doesn't close the modal when @closable is set to false", async function (assert) {
    let timesCalled = 0;
    const state = new TestState();
    const handleClose = () => {
      timesCalled++;
      state.isOpen = false;
    };

    await render(
      <template>
        <AuModalContainer />
        <AuModal
          @modalOpen={{state.isOpen}}
          @closeModal={{handleClose}}
          @closable={{false}}
        />
      </template>,
    );

    assert.dom(MODAL.CLOSE).isDisabled();

    await triggerKeyEvent(document, 'keydown', 'Escape');
    assert.strictEqual(timesCalled, 0);
  });

  test("it doesn't close the modal when an option in an embedded power-select is clicked", async function (assert) {
    let timesCalled = 0;
    const state = new TestState();
    const handleClose = () => {
      timesCalled++;
      state.isOpen = false;
    };

    const options = ['foo', 'bar', 'baz'];
    const onChange = () => {};

    await render(
      <template>
        <AuModalContainer />
        <AuModal @modalOpen={{state.isOpen}} @closeModal={{handleClose}}>
          <:body>
            {{! @glint-ignore: ember-power-select doesn't have full Glint support yet, Block and Element types are missing }}
            <PowerSelect
              @options={{options}}
              @onChange={{onChange}}
              data-test-select
              as |option|
            >{{option}}</PowerSelect>
          </:body>
        </AuModal>
      </template>,
    );

    await selectChoose('[data-test-select]', 'bar');

    assert.strictEqual(timesCalled, 0);
  });

  test('it calls @onClose only once when the component is rendered conditionally', async function (assert) {
    let timesCalled = 0;
    const state = new TestState();
    const handleClose = () => {
      timesCalled++;
      state.isOpen = false;
    };

    await render(
      <template>
        <AuModalContainer />
        {{#if state.isOpen}}
          <AuModal @modalOpen={{true}} @closeModal={{handleClose}} />
          <button
            data-test-close-button
            type="button"
            {{on "click" handleClose}}
          >Close modal</button>
        {{/if}}
      </template>,
    );

    const closeButton = document.querySelector(
      MODAL.CLOSE,
    ) as HTMLButtonElement;
    await click(closeButton);
    assert.strictEqual(timesCalled, 1);
  });

  test('it can render multiple modals at once', async function (assert) {
    await render(
      <template>
        <AuModalContainer />
        <AuModal @modalOpen={{true}}>
          <div data-test-content-one>One!</div>
        </AuModal>
        <AuModal @modalOpen={{true}}>
          <div data-test-content-two>Two!</div>
        </AuModal>
      </template>,
    );

    assert.dom('[data-test-content-one]').containsText('One!');
    assert.dom('[data-test-content-two]').containsText('Two!');
  });
});

class TestState {
  @tracked isOpen?: boolean = true;
}
