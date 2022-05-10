import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | au-control-checkbox', function (hooks) {
  setupRenderingTest(hooks);

  test('its checked state can be controlled by the parent scope', async function (assert) {
    await render(hbs`<AuControlCheckbox @checked={{this.checked}} />`);
    assert.dom('input').isNotChecked();

    this.set('checked', true);
    assert.dom('input').isChecked();
  });

  test('it can show a label', async function (assert) {
    await render(hbs`<AuControlCheckbox @label="foo" />`);
    assert.dom().hasText('foo');
  });

  test('it can be disabled', async function (assert) {
    this.disabled = true;

    await render(hbs`<AuControlCheckbox @disabled={{this.disabled}} />`);
    assert.dom('input').isDisabled();

    this.set('disabled', false);
    assert.dom('input').isNotDisabled();
  });

  test('it can be given a unique identifier', async function (assert) {
    this.disabled = true;

    await render(hbs`<AuControlCheckbox @identifier="123" />`);
    assert.dom('label').hasAttribute('for', '123');
    assert.dom('input').hasAttribute('id', '123');
  });

  test('it can be given a name', async function (assert) {
    this.disabled = true;

    await render(hbs`<AuControlCheckbox @name="foo" />`);
    assert.dom('input').hasAttribute('name', 'foo');
  });

  test('it calls the provided @onChange action when its value changes', async function (assert) {
    this.handleChange = (checked) => {
      assert.step(`value changed to "${checked}"`);
    };

    await render(hbs`<AuControlCheckbox @onChange={{this.handleChange}} />`);
    await click('label');
    await click('label');

    assert.verifySteps(['value changed to "true"', 'value changed to "false"']);
  });

  test('it adds any extra attributes to the input element', async function (assert) {
    await render(hbs`<AuControlCheckbox foo="bar" />`);
    assert.dom('input').hasAttribute('foo', 'bar');
  });
});
