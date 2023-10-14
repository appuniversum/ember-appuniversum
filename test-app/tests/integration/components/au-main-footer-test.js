import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | au-main-footer', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AuMainFooter />`);

    assert
      .dom(this.element)
      .hasText('Logo Vlaanderen Vlaanderen verbeelding werkt');

    // Template block usage:
    await render(hbs`
      <AuMainFooter>
        template block text
      </AuMainFooter>
    `);

    assert.dom(this.element).containsText('template block text');
  });
});
