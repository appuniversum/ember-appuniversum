import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | au-brand', function (hooks) {
  setupRenderingTest(hooks);

  /** @type {import("qunit-dom").test} */
  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AuBrand />`);

    assert.dom(this.element).hasText('Logo Vlaanderen Vlaanderen');

    // Template block usage:
    await render(hbs`
      <AuBrand @tagline="template block text"/>
    `);

    assert.dom(this.element).containsText('template block text');
  });
});
