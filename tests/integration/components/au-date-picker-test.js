import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

/** @type import("qunit-dom").module */
module('Integration | Component | au-date-picker', function(hooks) {
  setupRenderingTest(hooks);
  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AuDatePicker />`);

    assert.dom(this.element).exists();

    // Template block usage:
    await render(hbs`
      <AuDatePicker @label="template block text">
        template block text
      </AuDatePicker>
    `);

    assert.dom(this.element).containsText('template block text');
  });
});
