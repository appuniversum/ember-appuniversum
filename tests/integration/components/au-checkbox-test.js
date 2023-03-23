import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | au-checkbox', function (hooks) {
  setupRenderingTest(hooks);

  test('its checked state can be controlled by the parent scope', async function (assert) {
    await render(hbs`<AuCheckbox @checked={{this.checked}} />`);
    assert.dom('input').isNotChecked();

    this.set('checked', true);
    assert.dom('input').isChecked();
  });

  test('it can show block content', async function (assert) {
    await render(hbs`<AuCheckbox>foo</AuCheckbox>`);
    assert.dom().hasText('foo');
  });

  test('it can be disabled', async function (assert) {
    this.disabled = true;

    await render(hbs`<AuCheckbox @disabled={{this.disabled}} />`);
    assert.dom('label').hasClass('is-disabled');
    assert.dom('input').isDisabled();

    this.set('disabled', false);
    assert.dom('label').hasNoClass('is-disabled');
    assert.dom('input').isNotDisabled();
  });

  test('it can be given a value', async function (assert) {
    await render(hbs`<AuCheckbox @value="foo" />`);
    assert.dom('input').hasAttribute('value', 'foo');
  });

  test('it calls the provided @onChange action when its checked state changes', async function (assert) {
    this.handleChange = (checked) => {
      assert.step(`value changed to "${checked}"`);
    };

    await render(hbs`<AuCheckbox @onChange={{this.handleChange}} />`);
    await click('label');
    await click('label');

    assert.verifySteps(['value changed to "true"', 'value changed to "false"']);
  });

  test('it adds any extra attributes to the input element', async function (assert) {
    await render(hbs`<AuCheckbox foo="bar" />`);
    assert.dom('input').hasAttribute('foo', 'bar');
  });
});
