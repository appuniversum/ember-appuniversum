import AuRadioGroup from '@appuniversum/ember-appuniversum/components/au-radio-group';
import { settled } from '@ember/test-helpers';
import { click, render } from '@ember/test-helpers';
import { tracked } from '@glimmer/tracking';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { module, test } from 'qunit';

module('Integration | Component | au-radio-group', function (hooks) {
  setupRenderingTest(hooks);

  test('it can be given a name', async function (assert) {
    await render(
      <template>
        <AuRadioGroup @name="foo" as |Group|>
          <Group.Radio data-test-foo>Foo</Group.Radio>
        </AuRadioGroup>
      </template>,
    );
    assert.dom('[data-test-foo]').hasAttribute('name', 'foo');
  });

  test('if it is given no name, it will automatically generate a unique name', async function (assert) {
    await render(
      <template>
        <AuRadioGroup as |Group|>
          <Group.Radio data-test-foo>Foo</Group.Radio>
        </AuRadioGroup>
      </template>,
    );
    assert.dom('[data-test-foo]').hasAttribute('name');
  });

  test('it can be given a value', async function (assert) {
    const state = new TestState();
    state.value = 'bar';

    await render(
      <template>
        <AuRadioGroup @selected={{state.value}} as |Group|>
          <Group.Radio @value="foo" data-test-foo>Foo</Group.Radio>
          <Group.Radio @value="bar" data-test-bar>Bar</Group.Radio>
        </AuRadioGroup>
      </template>,
    );

    assert.dom('[data-test-bar]').isChecked();
    assert.dom('[data-test-foo]').isNotChecked();

    state.value = 'foo';
    await settled();
    assert.dom('[data-test-bar]').isNotChecked();
    assert.dom('[data-test-foo]').isChecked();
  });

  test('it can be disabled', async function (assert) {
    const state = new TestState();
    state.disabled = true;
    await render(
      <template>
        <AuRadioGroup @disabled={{state.disabled}} as |Group|>
          <Group.Radio data-test-foo>Foo</Group.Radio>
        </AuRadioGroup>
      </template>,
    );

    assert.dom('[data-test-foo]').isDisabled();

    state.disabled = false;
    await settled();
    assert.dom('[data-test-foo]').isNotDisabled();
  });

  test('it calls the provided @onChange action when its state changes by user input', async function (assert) {
    let currentValue: string | undefined;

    const handleChange = (value: string | undefined, event: Event) => {
      currentValue = value;
      assert.true(event instanceof Event);
    };

    await render(
      <template>
        <AuRadioGroup @onChange={{handleChange}} as |Group|>
          <Group.Radio @value="foo" data-test-foo>Foo</Group.Radio>
          <Group.Radio @value="bar" data-test-bar>Bar</Group.Radio>
        </AuRadioGroup>
      </template>,
    );

    await click('[data-test-bar]');
    assert.strictEqual(currentValue, 'bar');

    await click('[data-test-foo]');
    assert.strictEqual(currentValue, 'foo');
  });

  test('it adds any extra attributes to the group element', async function (assert) {
    await render(
      <template>
        <AuRadioGroup foo="bar" data-test-radio-group as |Group|>
          <Group.Radio>Foo</Group.Radio>
        </AuRadioGroup>
      </template>,
    );
    assert.dom('[data-test-radio-group]').hasAttribute('foo', 'bar');
  });
});

class TestState {
  @tracked disabled?: boolean;
  @tracked value?: string;
}
