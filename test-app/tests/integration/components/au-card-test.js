import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | au-card', function (hooks) {
  setupRenderingTest(hooks);

  /** @type {import("qunit-dom").test} */
  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AuCard />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <AuCard as |Card|>
        <Card.content>
          template block text
        </Card.content>
      </AuCard>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
