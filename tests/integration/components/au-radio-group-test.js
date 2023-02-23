import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | au-radio-group', function (hooks) {
  setupRenderingTest(hooks);

  test('it can be given a name', async function (assert) {
    await render(hbs`
      <AuRadioGroup @name="foo" as |Group|>
        <Group.Radio data-test-foo>Foo</Group.Radio>
      </AuRadioGroup>
    `);
    assert.dom('[data-test-foo]').hasAttribute('name', 'foo');
  });

  test('if it is given no name, it will automatically generate a unique id', async function (assert) {
    await render(hbs`
      <AuRadioGroup as |Group|>
        <Group.Radio data-test-foo>Foo</Group.Radio>
      </AuRadioGroup>
    `);
    assert.dom('[data-test-foo]').hasAttribute('name', /^ember\d+/); // E.g. 'ember308'
  });

  test('it can be given a value', async function (assert) {
    this.groupValue = 'bar';
    await render(hbs`
      <AuRadioGroup @value={{this.groupValue}} as |Group|>
        <Group.Radio @value="foo" data-test-foo>Foo</Group.Radio>
        <Group.Radio @value="bar" data-test-bar>Bar</Group.Radio>
      </AuRadioGroup>
    `);

    assert.dom('[data-test-bar]').isChecked();

    this.set('groupValue', 'foo');
    assert.dom('[data-test-foo]').isChecked();
  });

  test('it can be disabled', async function (assert) {
    this.disabled = true;
    await render(hbs`
      <AuRadioGroup @disabled={{this.disabled}} as |Group|>
        <Group.Radio data-test-foo>Foo</Group.Radio>
      </AuRadioGroup>
    `);

    assert.dom('[data-test-foo]').isDisabled();

    this.set('disabled', false);
    assert.dom('[data-test-foo]').isNotDisabled();
  });

  test('it calls the provided @onChange action when its state changes by user input', async function (assert) {
    assert.expect(4);

    this.value = null;
    this.handleChange = (value, event) => {
      this.set('value', value);
      assert.true(event instanceof Event);
    };

    await render(hbs`
      <AuRadioGroup @onChange={{this.handleChange}} as |Group|>
        <Group.Radio @value="foo" data-test-foo>Foo</Group.Radio>
        <Group.Radio @value="bar" data-test-bar>Bar</Group.Radio>
      </AuRadioGroup>
    `);

    await click('[data-test-bar]');
    assert.strictEqual(this.value, 'bar');

    await click('[data-test-foo]');
    assert.strictEqual(this.value, 'foo');
  });

  test('it adds any extra attributes to the group element', async function (assert) {
    await render(hbs`
      <AuRadioGroup foo="bar" as |Group|>
        <Group.Radio>Foo</Group.Radio>
      </AuRadioGroup>
    `);
    assert.dom('[data-test-radio-group]').hasAttribute('foo', 'bar');
  });
});
