import AuCheckbox from '@appuniversum/ember-appuniversum/components/au-checkbox';
import { click, render, settled } from '@ember/test-helpers';
import { tracked } from '@glimmer/tracking';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

class TestState {
  @tracked checked?: boolean;
  @tracked disabled?: boolean;
}

module('Integration | Component | au-checkbox', function (hooks) {
  setupRenderingTest(hooks);

  test('its checked state can be controlled by the parent scope', async function (assert) {
    const state = new TestState();
    state.checked = false;

    await render(
      <template><AuCheckbox @checked={{state.checked}} /></template>,
    );
    assert.dom('input').isNotChecked();

    state.checked = true;
    await settled();
    assert.dom('input').isChecked();
  });

  test('it can show block content', async function (assert) {
    await render(
      <template>
        <AuCheckbox>foo</AuCheckbox>
      </template>,
    );
    assert.dom().hasText('foo');
  });

  test('it can be disabled', async function (assert) {
    const state = new TestState();
    state.disabled = true;

    await render(
      <template><AuCheckbox @disabled={{state.disabled}} /></template>,
    );
    assert.dom('label').hasClass('is-disabled');
    assert.dom('input').isDisabled();

    state.disabled = false;
    await settled();
    assert.dom('label').hasNoClass('is-disabled');
    assert.dom('input').isNotDisabled();
  });

  test('it can be given a value', async function (assert) {
    await render(<template><AuCheckbox @value="foo" /></template>);
    assert.dom('input').hasAttribute('value', 'foo');
  });

  test('it calls the provided @onChange action when its checked state changes', async function (assert) {
    const handleChange = (checked: boolean) => {
      assert.step(`value changed to "${checked}"`);
    };

    await render(
      <template><AuCheckbox @onChange={{handleChange}} /></template>,
    );
    await click('label');
    await click('label');

    assert.verifySteps(['value changed to "true"', 'value changed to "false"']);
  });

  test('it adds any extra attributes to the input element', async function (assert) {
    await render(<template><AuCheckbox foo="bar" /></template>);
    assert.dom('input').hasAttribute('foo', 'bar');
  });
});
