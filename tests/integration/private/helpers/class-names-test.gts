import { settled, render } from '@ember/test-helpers';
import { tracked } from '@glimmer/tracking';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import { cn } from '@appuniversum/ember-appuniversum/private/helpers/class-names';

module('Integration | Private Helper | class-names', function (hooks) {
  setupRenderingTest(hooks);

  test('it accepts a list of classes and adds the needed whitespace', async function (assert) {
    await render(
      <template>
        <div data-test class={{cn "foo" "bar" "baz"}}></div>
      </template>,
    );

    assert.dom('[data-test]').hasClass('foo').hasClass('bar').hasClass('baz');
  });

  test('it removes falsy values', async function (assert) {
    class TestState {
      @tracked someFlag: boolean = false;
    }

    const state = new TestState();
    await render(
      <template>
        <div data-test class={{cn "foo" (if state.someFlag "bar") "baz"}}></div>
      </template>,
    );

    assert.dom('[data-test]').hasClass('foo').hasNoClass('bar').hasClass('baz');

    state.someFlag = true;
    await settled();

    assert.dom('[data-test]').hasClass('foo').hasClass('bar').hasClass('baz');
  });
});
