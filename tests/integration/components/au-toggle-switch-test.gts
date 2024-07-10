import AuToggleSwitch from '@appuniversum/ember-appuniversum/components/au-toggle-switch';
import { click, render, settled } from '@ember/test-helpers';
import { tracked } from '@glimmer/tracking';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

const TOGGLE_SWITCH = {
  LABEL: 'label',
  INPUT: 'input',
};

module('Integration | Component | au-toggle-switch', function (hooks) {
  setupRenderingTest(hooks);

  test('its state can be modified externally', async function (assert) {
    const state = new TestState();
    state.checked = false;

    await render(
      <template><AuToggleSwitch @checked={{state.checked}} /></template>,
    );
    assert.dom(TOGGLE_SWITCH.INPUT).isNotChecked();

    state.checked = true;
    await settled();
    assert.dom(TOGGLE_SWITCH.INPUT).isChecked();
  });

  test('it calls `@onChange` when its state is modified by user input', async function (assert) {
    const state = new TestState();
    state.checked = false;
    const handleChange = (checked: boolean, event: Event) => {
      state.checked = checked;
      assert.true(event instanceof Event);
    };

    await render(
      <template>
        <AuToggleSwitch @checked={{state.checked}} @onChange={{handleChange}} />
      </template>,
    );

    await toggleSwitch();
    assert.true(state.checked);

    await toggleSwitch();
    assert.false(state.checked);
  });

  test('it uses the block content as a label', async function (assert) {
    await render(
      <template>
        <AuToggleSwitch>Choose me!</AuToggleSwitch>
      </template>,
    );

    assert.dom(TOGGLE_SWITCH.LABEL).hasText('Choose me!');
  });

  test('it can be disabled', async function (assert) {
    const state = new TestState();
    state.disabled = false;

    await render(
      <template><AuToggleSwitch @disabled={{state.disabled}} /></template>,
    );
    assert.dom(TOGGLE_SWITCH.INPUT).isNotDisabled();

    state.disabled = true;
    await settled();
    assert.dom(TOGGLE_SWITCH.INPUT).isDisabled();
    assert.dom(TOGGLE_SWITCH.INPUT).isNotChecked();

    await toggleSwitch();
    assert.dom(TOGGLE_SWITCH.INPUT).isNotChecked();
  });
});

function toggleSwitch() {
  return click(TOGGLE_SWITCH.LABEL);
}

class TestState {
  @tracked disabled?: boolean;
  @tracked checked?: boolean;
}
