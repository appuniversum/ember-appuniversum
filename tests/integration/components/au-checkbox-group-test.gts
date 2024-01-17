import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { click, render, settled } from '@ember/test-helpers';
import { tracked } from '@glimmer/tracking';
import AuCheckboxGroup from '@appuniversum/ember-appuniversum/components/au-checkbox-group';

class TestState {
  @tracked groupValue: string[] = [];
  @tracked disabled?: boolean;
}

module('Integration | Component | au-checkbox-group', function (hooks) {
  setupRenderingTest(hooks);

  test('it can be given a value', async function (assert) {
    const state = new TestState();
    state.groupValue = ['bar'];

    await render(
      <template>
        <AuCheckboxGroup @selected={{state.groupValue}} as |Group|>
          <Group.Checkbox @value="foo" data-test-foo>Foo</Group.Checkbox>
          <Group.Checkbox @value="bar" data-test-bar>Bar</Group.Checkbox>
        </AuCheckboxGroup>
      </template>,
    );

    assert.dom('[data-test-bar]').isChecked();

    state.groupValue = ['foo'];
    await settled();
    assert.dom('[data-test-foo]').isChecked();
  });

  test('it can be disabled', async function (assert) {
    const state = new TestState();
    state.disabled = true;

    await render(
      <template>
        <AuCheckboxGroup @disabled={{state.disabled}} as |Group|>
          <Group.Checkbox data-test-foo>Foo</Group.Checkbox>
        </AuCheckboxGroup>
      </template>,
    );

    assert.dom('[data-test-foo]').isDisabled();

    state.disabled = false;
    await settled();
    assert.dom('[data-test-foo]').isNotDisabled();
  });

  test('it calls the provided @onChange action when its checked state changes by user input', async function (assert) {
    const state = new TestState();
    const handleChange = (updatedGroupValue: string[], event: Event) => {
      state.groupValue = updatedGroupValue;
      assert.step(`${event instanceof Event}`);
    };

    await render(
      <template>
        <AuCheckboxGroup
          @selected={{state.groupValue}}
          @onChange={{handleChange}}
          as |Group|
        >
          <Group.Checkbox @value="foo" data-test-foo>Foo</Group.Checkbox>
          <Group.Checkbox @value="bar" data-test-bar>Bar</Group.Checkbox>
        </AuCheckboxGroup>
      </template>,
    );

    await click('[data-test-bar]');
    assert.deepEqual(state.groupValue, ['bar']);

    await click('[data-test-foo]');
    assert.deepEqual(state.groupValue, ['bar', 'foo']);
    assert.verifySteps(
      ['true', 'true'],
      'the second argument is an Event instance',
    );
  });

  test('it adds any extra attributes to the group element', async function (assert) {
    await render(
      <template>
        <AuCheckboxGroup foo="bar" data-test-checkbox-group as |Group|>
          <Group.Checkbox>Foo</Group.Checkbox>
        </AuCheckboxGroup>
      </template>,
    );
    assert.dom('[data-test-checkbox-group]').hasAttribute('foo', 'bar');
  });
});
