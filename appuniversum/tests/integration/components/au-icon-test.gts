import { render, settled } from '@ember/test-helpers';
import { tracked } from '@glimmer/tracking';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

// TODO: use the "nice" import path once everything is converted to TS.
import AuIcon from '@appuniversum/ember-appuniversum/components/au-icon';

module('Integration | Component | au-icon', function (hooks) {
  setupRenderingTest(hooks);

  test('it passes through attributes', async function (assert) {
    await render(<template><AuIcon data-test-icon @icon="test" /></template>);

    assert.dom('[data-test-icon]').exists();
  });

  test('it sets the aria-hidden attribute based on the @ariaHidden argument', async function (assert) {
    class TestState {
      @tracked hidden: boolean | 'true' | 'false' | undefined;
    }
    const state = new TestState();
    await render(
      <template>
        <AuIcon data-test-icon @icon="test" @ariaHidden={{state.hidden}} />
      </template>,
    );

    assert
      .dom('[data-test-icon]')
      .hasAttribute(
        'aria-hidden',
        'true',
        "it defaults to true if @ariaHidden isn't provided",
      );

    state.hidden = false;
    await settled();
    assert.dom('[data-test-icon]').hasAttribute('aria-hidden', 'false');

    state.hidden = 'false';
    await settled();
    assert.dom('[data-test-icon]').hasAttribute('aria-hidden', 'false');

    state.hidden = true;
    await settled();
    assert.dom('[data-test-icon]').hasAttribute('aria-hidden', 'true');

    state.hidden = 'true';
    await settled();
    assert.dom('[data-test-icon]').hasAttribute('aria-hidden', 'true');
  });
});
