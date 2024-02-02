import auDateInput from '@appuniversum/ember-appuniversum/modifiers/au-date-input';
import { find } from '@ember/test-helpers';
import {
  typeIn,
  fillIn,
  render,
  settled,
  triggerKeyEvent,
} from '@ember/test-helpers';
import { tracked } from '@glimmer/tracking';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Modifier | au-date-input', function (hooks) {
  setupRenderingTest(hooks);

  test('it accepts an iso date string or date object as a value', async function (assert) {
    class TestState {
      @tracked value?: string | Date;
    }
    const state = new TestState();
    state.value = '2023-02-02';

    await render(
      <template><input {{auDateInput value=state.value}} /></template>,
    );

    assert.dom('input').hasValue('02-02-2023');

    state.value = new Date(2024, 5, 3);
    await settled();
    assert.dom('input').hasValue('03-06-2024');

    state.value = undefined;
    await settled();
    assert.dom('input').hasNoValue();
  });

  test('it calls @onChange with the correct date', async function (assert) {
    const onChange = (isoDate: string | null, date: Date | null) => {
      assert.step(isoDate!);
      assert.step((date instanceof Date).toString());
    };

    await render(
      <template><input {{auDateInput onChange=onChange}} /></template>,
    );

    await fillIn('input', '0202202');
    await typeIn('input', '3'); // fillIn alone doesn't do the trick, but typeIn has issues when typing all the characters..

    assert.verifySteps(
      ['2023-02-02', 'true'],
      '@onChange returns an iso string and date instance',
    );
  });

  test('it calls @onChange with `null` if the input is cleared', async function (assert) {
    const onChange = (isoDate: string | null, date: Date | null) => {
      assert.step((isoDate === null).toString());
      assert.step((date === null).toString());
    };

    await render(
      <template>
        <input {{auDateInput value="2023-02-02" onChange=onChange}} />
      </template>,
    );

    const input = find('input');

    await clearInput(input!);
    assert.verifySteps(
      ['true', 'true'],
      '`@onChange` returns `null` if the input is cleared',
    );
  });
});

async function clearInput(input: HTMLInputElement) {
  // Focus seems to be needed to make the backspace work
  input.focus();

  while (input.value.length > 0) {
    await triggerKeyEvent(input, 'keydown', 'Backspace');
  }
}
