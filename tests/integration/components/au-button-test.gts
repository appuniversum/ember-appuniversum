import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import AuButton from '@appuniversum/ember-appuniversum/components/au-button';
import { tracked } from '@glimmer/tracking';

class TestState {
  @tracked isDisabled?: boolean;
  @tracked isLoading?: boolean;
}

module('Integration | Component | au-button', function (hooks) {
  setupRenderingTest(hooks);

  test('it accepts block content and extra attributes', async function (assert) {
    await render(
      <template>
        <AuButton data-test-button>
          template block text
        </AuButton>
      </template>,
    );

    assert.dom('[data-test-button]').hasText('template block text');
  });

  test('it disables the button when `@disabled` is true', async function (assert) {
    const state = new TestState();
    state.isDisabled = false;

    await render(
      <template>
        <AuButton @disabled={{state.isDisabled}} data-test-button>
          Foo
        </AuButton>
      </template>,
    );

    assert.dom('[data-test-button]').isNotDisabled();

    state.isDisabled = true;
    await settled();
    assert.dom('[data-test-button]').isDisabled();
  });

  test('it disables the button when `@loading` is true', async function (assert) {
    const state = new TestState();
    state.isLoading = false;

    await render(
      <template>
        <AuButton
          @loading={{state.isLoading}}
          @disabled={{false}}
          data-test-button
        >
          Foo
        </AuButton>
      </template>,
    );

    assert.dom('[data-test-button]').isNotDisabled();

    state.isLoading = true;
    await settled();
    assert.dom('[data-test-button]').isDisabled();
  });
});
