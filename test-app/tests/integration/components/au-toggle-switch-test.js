import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const TOGGLE_SWITCH = {
  LABEL: 'label',
  INPUT: 'input',
};

module('Integration | Component | au-toggle-switch', function (hooks) {
  setupRenderingTest(hooks);

  test('its state can be modified externally', async function (assert) {
    this.isChecked = false;

    await render(hbs`<AuToggleSwitch @checked={{this.isChecked}} />`);
    assert.dom(TOGGLE_SWITCH.INPUT).isNotChecked();

    this.set('isChecked', true);
    assert.dom(TOGGLE_SWITCH.INPUT).isChecked();
  });

  test('it calls `@onChange` when its state is modified by user input', async function (assert) {
    this.isChecked = false;
    this.handleChange = (isChecked, event) => {
      this.set('isChecked', isChecked);
      assert.true(event instanceof Event);
    };

    await render(hbs`
      <AuToggleSwitch
        @checked={{this.isChecked}}
        @onChange={{this.handleChange}}
      />
    `);

    await toggleSwitch();
    assert.true(this.isChecked);

    await toggleSwitch();
    assert.false(this.isChecked);
  });

  test('it uses the block content as a label', async function (assert) {
    await render(hbs`<AuToggleSwitch>Choose me!</AuToggleSwitch>`);

    assert.dom(TOGGLE_SWITCH.LABEL).hasText('Choose me!');
  });

  test('it can be disabled', async function (assert) {
    this.isDisabled = false;

    await render(hbs`<AuToggleSwitch @disabled={{this.isDisabled}} />`);
    assert.dom(TOGGLE_SWITCH.INPUT).isNotDisabled();

    this.set('isDisabled', true);
    assert.dom(TOGGLE_SWITCH.INPUT).isDisabled();
    assert.dom(TOGGLE_SWITCH.INPUT).isNotChecked();

    await toggleSwitch();
    assert.dom(TOGGLE_SWITCH.INPUT).isNotChecked();
  });
});

function toggleSwitch() {
  return click(TOGGLE_SWITCH.LABEL);
}
