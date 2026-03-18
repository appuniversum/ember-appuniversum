import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import AuPill from '@appuniversum/ember-appuniversum/components/au-pill';

module('Integration | Component | au-pill', function (hooks) {
  setupRenderingTest(hooks);

  test('it accepts block contents and extra attributes', async function (assert) {
    await render(
      <template>
        <AuPill data-test-pill>
          foo
        </AuPill>
      </template>,
    );

    assert.dom('[data-test-pill]').hasText('foo');
  });

  test('it calls the provided @onClickAction action when the action button is clicked', async function (assert) {
    let isButtonClicked = false;

    const handleClick = () => {
      isButtonClicked = !isButtonClicked;
    };

    await render(
      <template>
        <AuPill @onClickAction={{handleClick}}>
          template block text
        </AuPill>
      </template>,
    );
    await click('button');

    assert.true(isButtonClicked, 'action button is clicked');
  });
});
