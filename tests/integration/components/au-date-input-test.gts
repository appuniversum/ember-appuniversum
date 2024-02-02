import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { typeIn, fillIn, render, triggerKeyEvent } from '@ember/test-helpers';
import AuDateInput from '@appuniversum/ember-appuniversum/components/au-date-input';
import { tracked } from '@glimmer/tracking';
import { settled } from '@ember/test-helpers';

class TestState {
  @tracked value?: string | Date;
}
module('Integration | Component | au-date-input', function (hooks) {
  setupRenderingTest(hooks);

  test('it adds attributes to the input element', async function (assert) {
    await render(<template><AuDateInput data-test-date-input /></template>);

    assert.dom('[data-test-date-input]').hasTagName('input');
  });

  test('it supports disabling the date input', async function (assert) {
    await render(
      <template>
        <AuDateInput @disabled={{true}} data-test-date-input />
      </template>,
    );

    assert.dom('[data-test-date-input]').hasAttribute('disabled');
  });

  test('it accepts an iso date string or date object as a value', async function (assert) {
    const state = new TestState();
    state.value = '2023-02-02';

    await render(
      <template>
        <AuDateInput data-test-date-input @value={{state.value}} />
      </template>,
    );

    assert.dom('[data-test-date-input]').hasValue('02-02-2023');

    state.value = new Date(2024, 5, 3);
    await settled();
    assert.dom('[data-test-date-input]').hasValue('03-06-2024');

    state.value = undefined;
    await settled();
    assert.dom('[data-test-date-input]').hasNoValue();
  });

  test('it calls @onChange with the correct date', async function (assert) {
    const onChange = (isoDate: string | null, date: Date | null) => {
      assert.strictEqual(
        isoDate,
        '2023-02-02',
        'it returns the date in iso string format',
      );
      assert.true(
        date instanceof Date,
        'it returns a date object as the second argument',
      );
    };

    await render(
      <template>
        <AuDateInput data-test-date-input @onChange={{onChange}} />
      </template>,
    );

    await fillIn('[data-test-date-input]', '0202202');
    await typeIn('[data-test-date-input]', '3'); // fillIn alone doesn't do the trick, but typeIn has issues when typing all the characters..
  });

  test('it calls @onChange with `null` if the input is cleared', async function (assert) {
    const onChange = (isoDate: string | null, date: Date | null) => {
      assert.strictEqual(
        isoDate,
        null,
        'it returns null if the input is cleared',
      );
      assert.strictEqual(date, null, 'it returns null if the input is cleared');
    };

    await render(
      <template>
        <AuDateInput
          data-test-date-input
          @value="2023-02-02"
          @onChange={{onChange}}
        />
      </template>,
    );

    const input = document.querySelector(
      '[data-test-date-input]',
    ) as HTMLInputElement;

    await clearInput(input);
  });
});

async function clearInput(input: HTMLInputElement) {
  // Focus seems to be needed to make the backspace work
  input.focus();

  while (input.value.length > 0) {
    await triggerKeyEvent(input, 'keydown', 'Backspace');
  }
}
