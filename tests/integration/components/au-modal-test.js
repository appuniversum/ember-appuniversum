import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, triggerKeyEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | au-modal', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AuModal />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <AuModal @modalOpen={{true}} as |Modal|>
        <Modal.Body>
          template block text
        </Modal.Body>
      </AuModal>
    `);

    // the wormhole exists outside of the test dom,
    // so we explicitly pass in the document as rootelement here
    assert
      .dom('#ember-appuniversum-wormhole', document)
      .containsText('template block text');
  });

  test('it calls `@closeModal` when the modal should be closed', async function (assert) {
    let timesCalled = 0;
    this.set('handleClose', () => {
      timesCalled++;
      this.set('isOpen', false);
    });

    this.set('isOpen', true);

    await render(hbs`
      <AuModal @modalOpen={{this.isOpen}} @closeModal={{this.handleClose}}></AuModal>
    `);

    let closeButton = document.querySelector('[data-test-au-modal-close]');
    await click(closeButton);
    assert.equal(timesCalled, 1);

    this.set('isOpen', true);
    await triggerKeyEvent(document, 'keydown', 'Escape');
    assert.equal(timesCalled, 2);

    // Verify that it doesn't call the method when closed
    await triggerKeyEvent(document, 'keydown', 'Escape');
    assert.equal(timesCalled, 2);
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

    let closeButton = document.querySelector('[data-test-close-button]');
    await click(closeButton);
    assert.equal(timesCalled, 1);
  });
});
