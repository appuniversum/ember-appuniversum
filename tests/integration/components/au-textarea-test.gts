import AuTextarea from '@appuniversum/ember-appuniversum/components/au-textarea';
import { on } from '@ember/modifier';
import { fillIn, render, settled } from '@ember/test-helpers';
import { tracked } from '@glimmer/tracking';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | au-textarea', function (hooks) {
  setupRenderingTest(hooks);

  test('it can be disabled', async function (assert) {
    const state = new TestState();
    state.isDisabled = true;
    await render(
      <template><AuTextarea @disabled={{state.isDisabled}} /></template>,
    );

    assert.dom('textarea').isDisabled();

    state.isDisabled = false;
    await settled();
    assert.dom('textarea').isNotDisabled();
  });

  test('it supports the `value` attribute', async function (assert) {
    const state = new TestState();

    const handleChange = (event: Event) => {
      state.value = (event.target as HTMLTextAreaElement).value;
    };

    await render(
      <template>
        <AuTextarea value={{state.value}} {{on "change" handleChange}} />
      </template>,
    );
    assert.dom('textarea').hasNoValue();

    state.value = 'foo';
    await settled();
    assert.dom('textarea').hasValue('foo');

    await fillIn('textarea', 'bar');
    assert.strictEqual(state.value, 'bar');
  });

  test('it supports updating the value through the block contents', async function (assert) {
    const state = new TestState();
    const handleChange = (event: Event) => {
      state.value = (event.target as HTMLTextAreaElement).value;
    };

    await render(
      <template>
        <AuTextarea {{on "change" handleChange}}>{{state.value}}</AuTextarea>
      </template>,
    );
    assert.dom('textarea').hasNoValue();

    state.value = 'foo';
    await settled();
    assert.dom('textarea').hasValue('foo');

    await fillIn('textarea', 'bar');
    assert.dom('textarea').hasValue('bar');
    assert.strictEqual(state.value, 'bar');
  });
});

class TestState {
  @tracked isDisabled?: boolean;
  @tracked value?: string = '';
}
