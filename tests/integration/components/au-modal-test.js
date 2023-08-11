import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  click,
  render,
  resetOnerror,
  setupOnerror,
  triggerKeyEvent,
} from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { selectChoose } from 'ember-power-select/test-support';

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
    await render(hbs`<AuModalContainer/><AuModal />`);
    assert.dom(MODAL.ELEMENT).doesNotExist();

    await render(hbs`<AuModalContainer /><AuModal @modalOpen={{true}} />`);
    assert.dom(MODAL.ELEMENT).exists();
  });

  test("it falls back to the #ember-appuniversum-wormhole element if the AuModalContainer component isn't used", async function (assert) {
    function getFallbackWormholeElement() {
      return document.querySelector('#ember-appuniversum-wormhole');
    }

    await render(hbs`
      <div id="ember-appuniversum-wormhole"></div>
      <AuModal @modalOpen={{true}} />
    `);

    assert.dom(MODAL.ELEMENT, getFallbackWormholeElement()).exists();
  });

  test('it throws an error if no target element was found', async function (assert) {
    setupOnerror((error) => {
      if (error.message.includes('au-modal: No target element was found')) {
        assert.step('correct error thrown');
      }
    });

    await render(hbs`
      <AuModal @modalOpen={{true}} />
    `);

    assert.verifySteps(['correct error thrown']);
    resetOnerror();
  });

  test('it yields body and footer components', async function (assert) {
    await render(hbs`
      <AuModalContainer />
      <AuModal @modalOpen={{true}} as |Modal|>
        <Modal.Body>
          Body
        </Modal.Body>
        <Modal.Footer>
          Footer
        </Modal.Footer>
      </AuModal>
    `);

    assert.dom(MODAL.BODY).containsText('Body');
    assert.dom(MODAL.FOOTER).containsText('Footer');
  });

  test('it has named blocks for the body and footer', async function (assert) {
    await render(hbs`
      <AuModalContainer />
      <AuModal @modalOpen={{true}}>
        <:body>Body</:body>
        <:footer>Footer</:footer>
      </AuModal>
    `);

    assert.dom(MODAL.BODY).hasText('Body');
    assert.dom(MODAL.FOOTER).hasText('Footer');
  });

  test('it stops yielding the contextual components once a named block is used', async function (assert) {
    await render(hbs`
      <AuModalContainer />
      <AuModal @modalOpen={{true}}>
        <:default as |Modal|>
          <Modal.Body>Not rendered</Modal.Body>
          <Modal.Footer>Not rendered</Modal.Footer>
        </:default>
        <:body>Body</:body>
        <:footer>Footer</:footer>
      </AuModal>
    `);

    assert.dom(MODAL.BODY).exists({ count: 1 }).hasText('Body');
    assert.dom(MODAL.FOOTER).exists({ count: 1 }).hasText('Footer');
  });

  test('its title can be set through an argument or a named block', async function (assert) {
    await render(hbs`
      <AuModalContainer />
      <AuModal @title="Title set through @title" @modalOpen={{true}}/>
    `);

    assert.dom(MODAL.TITLE).hasText('Title set through @title');

    await render(hbs`
      <AuModalContainer />
      <AuModal @modalOpen={{true}}>
        <:title>Title set through block</:title>
      </AuModal>
    `);

    assert.dom(MODAL.TITLE).hasText('Title set through block');

    // the block version is prioritized
    await render(hbs`
      <AuModalContainer />
      <AuModal @title="Title set through @title" @modalOpen={{true}}>
        <:title>Title set through block</:title>
      </AuModal>
    `);

    assert.dom(MODAL.TITLE).hasText('Title set through block');
  });

  test('it calls `@closeModal` when the modal should be closed', async function (assert) {
    let timesCalled = 0;
    this.set('handleClose', () => {
      timesCalled++;
      this.set('isOpen', false);
    });

    this.isOpen = true;

    await render(hbs`
      <AuModalContainer />
      <AuModal @modalOpen={{this.isOpen}} @closeModal={{this.handleClose}}></AuModal>
    `);

    let closeButton = document.querySelector(MODAL.CLOSE);
    await click(closeButton);
    assert.strictEqual(timesCalled, 1);
  });

  test('it calls @closeModal when the `escape` button is pressed', async function (assert) {
    let timesCalled = 0;
    this.handleClose = () => {
      timesCalled++;

      if (timesCalled === 1) {
        // We want to test if the focus trap is still active if the app doesn't close the modal for some reason
        return;
      }

      this.set('isOpen', false);
    };

    this.isOpen = true;

    await render(hbs`
      <AuModalContainer />
      <AuModal @modalOpen={{this.isOpen}} @closeModal={{this.handleClose}}></AuModal>
    `);

    await triggerKeyEvent(document, 'keydown', 'Escape');
    assert.strictEqual(timesCalled, 1);

    await triggerKeyEvent(document, 'keydown', 'Escape');
    assert.strictEqual(
      timesCalled,
      2,
      'it calls the action as long as the modal stays open'
    );

    await triggerKeyEvent(document, 'keydown', 'Escape');
    assert.strictEqual(
      timesCalled,
      2,
      "it doesn't call the @closeModal action if the modal is closed"
    );
  });

  test("it doesn't close the modal when @closable is set to false", async function (assert) {
    let timesCalled = 0;
    this.set('handleClose', () => {
      timesCalled++;
      this.set('isOpen', false);
    });

    this.isOpen = true;

    await render(hbs`
      <AuModalContainer />
      <AuModal @modalOpen={{this.isOpen}} @closeModal={{this.handleClose}} @closable={{false}}></AuModal>
    `);

    let closeButton = document.querySelector(MODAL.CLOSE);
    await click(closeButton);
    assert.strictEqual(timesCalled, 0);
  });

  test("it doesn't close the modal when an option in an embedded power-select is clicked", async function (assert) {
    let timesCalled = 0;
    this.set('handleClose', () => {
      timesCalled++;
      this.set('isOpen', false);
    });

    this.options = ['foo', 'bar', 'baz'];
    this.isOpen = true;
    this.onChange = () => {};

    await render(hbs`
      <AuModalContainer />
      <AuModal @modalOpen={{this.isOpen}} @closeModal={{this.handleClose}}>
        <:body>
          <PowerSelect
            @options={{this.options}}
            @onChange={{this.onChange}}
            data-test-select
            as |option|
          >{{option}}</PowerSelect>
        </:body>
      </AuModal>
    `);

    await selectChoose('[data-test-select]', 'bar');

    assert.strictEqual(timesCalled, 0);
  });

  test('it calls @onClose only once when the component is rendered conditionally', async function (assert) {
    let timesCalled = 0;
    this.handleClose = () => {
      timesCalled++;
      this.set('showModal', false);
    };

    this.showModal = true;

    await render(hbs`
      <AuModalContainer />
      {{#if this.showModal}}
        <AuModal @modalOpen={{true}} @closeModal={{this.handleClose}}></AuModal>
        <button data-test-close-button type="button" {{on "click" this.handleClose}}>Close modal</button>
      {{/if}}
    `);

    let closeButton = document.querySelector(MODAL.CLOSE);
    await click(closeButton);
    assert.strictEqual(timesCalled, 1);
  });
});
