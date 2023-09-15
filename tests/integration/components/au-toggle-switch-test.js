import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { hasDeprecationStartingWith } from '../../helpers/deprecations';

const TOGGLE_SWITCH = {
  LABEL: '[data-test-toggle-switch-label]',
  INPUT: '[data-test-toggle-switch-input]',
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

    assert.false(
      hasDeprecationStartingWith(
        '[AuToggleSwitch] The 2-way-binding setup has been deprecated.',
      ),
      '2-way-binding deprecation message is not shown if `@onChange` is set',
    );
  });

  test('it updates the value with 2-way-binding', async function (assert) {
    this.isChecked = false;

    await render(hbs`
      <AuToggleSwitch
        @checked={{this.isChecked}}
      />
    `);

    await toggleSwitch();
    assert.true(this.isChecked);

    await toggleSwitch();
    assert.false(this.isChecked);

    assert.true(
      hasDeprecationStartingWith(
        '[AuToggleSwitch] The 2-way-binding setup has been deprecated.',
      ),
      '2-way-binding is deprecated',
    );
  });

  test('it shows the provided label text', async function (assert) {
    await render(hbs`<AuToggleSwitch @label="Choose me!" />`);

    assert.dom(TOGGLE_SWITCH.LABEL).hasText('Choose me!');
    assert.true(
      hasDeprecationStartingWith(
        '[AuToggleSwitch] The @label argument for this component is deprecated in favour of using block content.',
      ),
      '@label throws a deprecation warning',
    );
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
