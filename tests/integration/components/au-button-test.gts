import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import AuButton from '@appuniversum/ember-appuniversum/components/au-button';
import { tracked } from '@glimmer/tracking';
import { hasDeprecationStartingWith } from 'dummy/tests/helpers/deprecations';

class TestState {
  @tracked isDisabled?: boolean;
  @tracked isLoading?: boolean;
  @tracked loadingMessage?: string;
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

  test('the default loading message is deprecated', async function (assert) {
    const state = new TestState();
    state.isLoading = false;

    await render(
      <template>
        <AuButton
          @loading={{state.isLoading}}
          @loadingMessage={{state.loadingMessage}}
          data-test-button
        >
          Foo
        </AuButton>
      </template>,
    );

    assert.false(
      showsDeprecationMessage(),
      "it does't show the deprecation if @loading isn't true",
    );

    state.isLoading = true;
    state.loadingMessage = 'Loading';
    await settled();
    assert.false(
      showsDeprecationMessage(),
      "it does't show the deprecation if @loadingMessage is set",
    );

    state.loadingMessage = undefined;
    await settled();
    assert.true(
      showsDeprecationMessage(),
      "it shows the deprecation message if @loadingMessage isn't set",
    );
  });
});

function showsDeprecationMessage() {
  return hasDeprecationStartingWith(
    '[AuButton] Not providing `@loadingMessage` when setting `@loading` to `true` is deprecated.',
  );
}
