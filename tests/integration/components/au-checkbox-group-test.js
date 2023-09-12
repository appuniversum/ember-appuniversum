import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | au-checkbox-group', function (hooks) {
  setupRenderingTest(hooks);

  test('it can be given a value', async function (assert) {
    this.groupValue = ['bar'];
    await render(hbs`
      <AuCheckboxGroup @selected={{this.groupValue}} as |Group|>
        <Group.Checkbox @value="foo" data-test-foo>Foo</Group.Checkbox>
        <Group.Checkbox @value="bar" data-test-bar>Bar</Group.Checkbox>
      </AuCheckboxGroup>
    `);

    assert.dom('[data-test-bar]').isChecked();

    this.set('groupValue', ['foo']);
    assert.dom('[data-test-foo]').isChecked();
  });

  test('it can be disabled', async function (assert) {
    this.disabled = true;
    await render(hbs`
      <AuCheckboxGroup @disabled={{this.disabled}} as |Group|>
        <Group.Checkbox data-test-foo>Foo</Group.Checkbox>
      </AuCheckboxGroup>
    `);

    assert.dom('[data-test-foo]').isDisabled();

    this.set('disabled', false);
    assert.dom('[data-test-foo]').isNotDisabled();
  });

  test('it calls the provided @onChange action when its cheked state changes by user input', async function (assert) {
    this.groupValue = [];
    this.handleChange = (updatedGroupValue, event) => {
      this.set('groupValue', updatedGroupValue);
      assert.true(event instanceof Event);
    };

    await render(hbs`
      <AuCheckboxGroup @selected={{this.groupValue}} @onChange={{this.handleChange}} as |Group|>
        <Group.Checkbox @value="foo" data-test-foo>Foo</Group.Checkbox>
        <Group.Checkbox @value="bar" data-test-bar>Bar</Group.Checkbox>
      </AuCheckboxGroup>
    `);

    await click('[data-test-bar]');
    assert.deepEqual(this.groupValue, ['bar']);

    await click('[data-test-foo]');
    assert.deepEqual(this.groupValue, ['bar', 'foo']);
  });

  test('it adds any extra attributes to the group element', async function (assert) {
    await render(hbs`
      <AuCheckboxGroup foo="bar" data-test-checkbox-group as |Group|>
        <Group.Checkbox>Foo</Group.Checkbox>
      </AuCheckboxGroup>
    `);
    assert.dom('[data-test-checkbox-group]').hasAttribute('foo', 'bar');
  });
});
