import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | au-pill', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AuPill />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <AuPill>
        template block text
      </AuPill>
    `);

    assert.dom(this.element).hasText('template block text');
  });

  test('it calls the provided @onClickAction action when the action button is clicked', async function (assert) {
    let isButtonClicked = false;

    this.handleClick = () => {
      isButtonClicked = !isButtonClicked;
    };

    await render(hbs`
      <AuPill
        @onClickAction={{this.handleClick}}
      >
        template block text
      </AuPill>
    `);
    await click('button');

    assert.true(isButtonClicked, 'action button is clicked');
  });
});
