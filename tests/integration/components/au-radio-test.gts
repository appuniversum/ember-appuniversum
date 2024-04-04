import AuRadio from '@appuniversum/ember-appuniversum/components/au-radio';
import { click, render, settled } from '@ember/test-helpers';
import { tracked } from '@glimmer/tracking';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { module, test } from 'qunit';

module('Integration | Component | au-radio', function (hooks) {
  setupRenderingTest(hooks);

  test('its checked state can be controlled by the parent scope', async function (assert) {
    const state = new TestState();
    await render(<template><AuRadio @checked={{state.checked}} /></template>);
    assert.dom('input').isNotChecked();

    state.checked = true;
    await settled();
    assert.dom('input').isChecked();
  });

  test('it can show block content', async function (assert) {
    await render(
      <template>
        <AuRadio>foo</AuRadio>
      </template>,
    );
    assert.dom().hasText('foo');
  });

  test('it can be disabled', async function (assert) {
    const state = new TestState();
    state.disabled = true;

    await render(<template><AuRadio @disabled={{state.disabled}} /></template>);
    assert.dom('label').hasClass('is-disabled');
    assert.dom('input').isDisabled();

    state.disabled = false;
    await settled();
    assert.dom('label').hasNoClass('is-disabled');
    assert.dom('input').isNotDisabled();
  });

  test('it can be given a name', async function (assert) {
    await render(<template><AuRadio @name="foo" /></template>);
    assert.dom('input').hasAttribute('name', 'foo');
  });

  test('it calls the provided @onChange action when its state changes by user input', async function (assert) {
    const state = new TestState();

    const handleChange = (value: string, event: Event) => {
      state.value = value;
      assert.true(event instanceof Event);
    };

    await render(
      <template><AuRadio @value="foo" @onChange={{handleChange}} /></template>,
    );
    await click('label');

    assert.strictEqual(state.value, 'foo');
  });

  test('it adds any extra attributes to the input element', async function (assert) {
    await render(<template><AuRadio foo="bar" /></template>);
    assert.dom('input').hasAttribute('foo', 'bar');
  });
});

class TestState {
  @tracked disabled?: boolean;
  @tracked checked?: boolean;
  @tracked value?: string;
}
