import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | au-radio', function (hooks) {
  setupRenderingTest(hooks);

  test('its checked state can be controlled by the parent scope', async function (assert) {
    await render(hbs`<AuRadio @checked={{this.checked}} />`);
    assert.dom('input').isNotChecked();

    this.set('checked', true);
    assert.dom('input').isChecked();
  });

  test('it can show block content', async function (assert) {
    await render(hbs`<AuRadio>foo</AuRadio>`);
    assert.dom().hasText('foo');
  });

  test('it can be disabled', async function (assert) {
    this.disabled = true;

    await render(hbs`<AuRadio @disabled={{this.disabled}} />`);
    assert.dom('label').hasClass('is-disabled');
    assert.dom('input').isDisabled();

    this.set('disabled', false);
    assert.dom('label').hasNoClass('is-disabled');
    assert.dom('input').isNotDisabled();
  });

  test('it can be given a name', async function (assert) {
    await render(hbs`<AuRadio @name="foo" />`);
    assert.dom('input').hasAttribute('name', 'foo');
  });

  test('it calls the provided @onChange action when its state changes by user input', async function (assert) {
    this.value = null;
    this.handleChange = (value, event) => {
      this.set('value', value);
      assert.true(event instanceof Event);
    };

    await render(hbs`<AuRadio @value="foo" @onChange={{this.handleChange}} />`);
    await click('label');

    assert.strictEqual(this.value, 'foo');
  });

  test('it adds any extra attributes to the input element', async function (assert) {
    await render(hbs`<AuRadio foo="bar" />`);
    assert.dom('input').hasAttribute('foo', 'bar');
  });
});
