import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | au-main-header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AuMainHeader />`);

    assert.dom(this.element).containsText('Naar de hoofdinhoud');

    // Template block usage:
    await render(hbs`
      <AuMainHeader>
        template block text
      </AuMainHeader>
    `);

    assert.dom(this.element).containsText('template block text');
  });
});
