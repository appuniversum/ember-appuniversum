import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, triggerKeyEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const MODAL = {
  ELEMENT: '[data-test-modal]',
  BACKDROP: '[data-test-modal-backdrop]',
  HEADER: '[data-test-modal-header]',
  CLOSE: '[data-test-modal-close]',
  TITLE: '[data-test-modal-title]',
  BODY: '[data-test-modal-body]',
  FOOTER: '[data-test-modal-footer]',
};

function getWormholeElement() {
  return document.querySelector('#ember-appuniversum-wormhole');
}

module('Integration | Component | au-modal', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders when @modalOpen is set to `true`', async function (assert) {
    await render(hbs`<AuModal />`);
    assert.dom(MODAL.ELEMENT, getWormholeElement()).doesNotExist();

    await render(hbs`<AuModal @modalOpen={{true}} />`);
    assert.dom(MODAL.ELEMENT, getWormholeElement()).exists();
  });

  test('it yields body and footer components', async function (assert) {
    await render(hbs`
      <AuModal @modalOpen={{true}} as |Modal|>
        <Modal.Body>
          Body
        </Modal.Body>
        <Modal.Footer>
          Footer
        </Modal.Footer>
      </AuModal>
    `);

    assert.dom(MODAL.BODY, getWormholeElement()).containsText('Body');
    assert.dom(MODAL.FOOTER, getWormholeElement()).containsText('Footer');
  });

  test('it has named blocks for the body and footer', async function (assert) {
    await render(hbs`
      <AuModal @modalOpen={{true}}>
        <:body>Body</:body>
        <:footer>Footer</:footer>
      </AuModal>
    `);

    assert.dom(MODAL.BODY, getWormholeElement()).hasText('Body');
    assert.dom(MODAL.FOOTER, getWormholeElement()).hasText('Footer');
  });

  test('it stops yielding the contextual components once a named block is used', async function (assert) {
    await render(hbs`
      <AuModal @modalOpen={{true}}>
        <:default as |Modal|>
          <Modal.Body>Not rendered</Modal.Body>
          <Modal.Footer>Not rendered</Modal.Footer>
        </:default>
        <:body>Body</:body>
        <:footer>Footer</:footer>
      </AuModal>
    `);

    assert
      .dom(MODAL.BODY, getWormholeElement())
      .exists({ count: 1 })
      .hasText('Body');

    assert
      .dom(MODAL.FOOTER, getWormholeElement())
      .exists({ count: 1 })
      .hasText('Footer');
  });

  test("it's title can be set through an argument or a named block", async function (assert) {
    await render(hbs`
      <AuModal @title="Title set through @title" @modalOpen={{true}}/>
    `);

    assert
      .dom(MODAL.TITLE, getWormholeElement())
      .hasText('Title set through @title');

    await render(hbs`
      <AuModal @modalOpen={{true}}>
        <:title>Title set through block</:title>
      </AuModal>
    `);

    assert
      .dom(MODAL.TITLE, getWormholeElement())
      .hasText('Title set through block');

    // the block version is prioritized
    await render(hbs`
      <AuModal @title="Title set through @title" @modalOpen={{true}}>
        <:title>Title set through block</:title>
      </AuModal>
    `);

    assert
      .dom(MODAL.TITLE, getWormholeElement())
      .hasText('Title set through block');
  });

  test('it calls `@closeModal` when the modal should be closed', async function (assert) {
    let timesCalled = 0;
    this.set('handleClose', () => {
      timesCalled++;
      this.set('isOpen', false);
    });

    this.isOpen = true;

    await render(hbs`
      <AuModal @modalOpen={{this.isOpen}} @closeModal={{this.handleClose}}></AuModal>
    `);

    let closeButton = document.querySelector(MODAL.CLOSE);
    await click(closeButton);
    assert.equal(timesCalled, 1);
  });

  test('it calls @closeModal when the `escape` button is pressed', async function (assert) {
    let timesCalled = 0;
    this.handleClose = () => {
      timesCalled++;
      this.set('isOpen', false);
    };

    this.isOpen = true;

    await render(hbs`
      <AuModal @modalOpen={{this.isOpen}} @closeModal={{this.handleClose}}></AuModal>
    `);

    await triggerKeyEvent(document, 'keydown', 'Escape');
    assert.equal(timesCalled, 1, 'it closes the modal when escape is pressed');

    await triggerKeyEvent(document, 'keydown', 'Escape');
    assert.equal(
      timesCalled,
      1,
      "it doesn't call the @closeModal action if the modal is closed"
    );
  });

  test('it calls `@closeModal` when the modal backdrop is clicked', async function (assert) {
    let timesCalled = 0;
    this.set('handleClose', () => {
      timesCalled++;
      this.set('isOpen', false);
    });

    this.isOpen = true;

    await render(hbs`
      <AuModal @modalOpen={{this.isOpen}} @closeModal={{this.handleClose}}></AuModal>
    `);

    let backdrop = document.querySelector(MODAL.BACKDROP);
    await click(backdrop);
    assert.equal(timesCalled, 1);
  });

  test('it calls @onClose only once when the component is rendered conditionally', async function (assert) {
    let timesCalled = 0;
    this.handleClose = () => {
      timesCalled++;
      this.set('showModal', false);
    };

    this.showModal = true;

    await render(hbs`
      {{#if this.showModal}}
        <AuModal @modalOpen={{true}} @closeModal={{this.handleClose}}></AuModal>
        <button data-test-close-button type="button" {{on "click" this.handleClose}}>Close modal</button>
      {{/if}}
    `);

    let closeButton = document.querySelector(MODAL.CLOSE);
    await click(closeButton);
    assert.equal(timesCalled, 1);
  });
});
