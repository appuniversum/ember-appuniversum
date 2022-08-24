import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | au-button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AuButton />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <AuButton>
        template block text
      </AuButton>
    `);

    assert.dom(this.element).hasText('template block text');
  });

  test('it hides the text when @hideText is set to true', async function (assert) {
    await render(hbs`
      <AuButton
        @hideText={{true}}
      >
        template block text
      </AuButton>
    `);

    assert.dom('.au-u-hidden-visually').exists();
  });

  test('it adds the icon-only modifier class when an icon is defined and @hideText is set to true', async function (assert) {
    await render(hbs`
      <AuButton
        @icon="plus"
        @hideText={{true}}
      >
        template block text
      </AuButton>
    `);

    assert.dom('button').hasClass('au-c-button--icon-only');
  });
});
