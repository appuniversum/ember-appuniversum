import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | au-modal', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
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
    assert.dom("#ember-appuniversum-wormhole", document).containsText('template block text');
  });
});
