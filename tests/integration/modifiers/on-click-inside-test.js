import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Modifier | on-click-inside', function (hooks) {
  setupRenderingTest(hooks);

  test('it calls the provided function when clicking the element or one of its children', async function (assert) {
    this.handleClick = () => {
      assert.step('clicked');
    };

    await render(hbs`
      <div {{on-click-inside this.handleClick}}>
        <button type="button" data-test-inside-button>Inside</button>
      </div>
      <button type="button" data-test-outside-button>Outside</button>
    `);

    await click('[data-test-inside-button]');
    assert.verifySteps(
      ['clicked'],
      'clicking a child element triggers the callback'
    );

    await click('[data-test-outside-button]');
    assert.verifySteps(
      [],
      "clicking an outside element doesn't trigger the callback"
    );

    await click('div');
    assert.verifySteps(
      ['clicked'],
      'clicking the element itself also calls the callback'
    );
  });
});
