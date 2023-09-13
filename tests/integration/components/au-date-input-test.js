import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { typeIn, fillIn, render, triggerKeyEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | au-date-input', function (hooks) {
  setupRenderingTest(hooks);

  test('it adds attributes to the input element', async function (assert) {
    await render(hbs`
      <AuDateInput data-test-date-input />
    `);

    assert.dom('[data-test-date-input]').hasTagName('input');
  });

  test('it supports disabling the date input', async function (assert) {
    await render(hbs`
      <AuDateInput @disabled={{true}} data-test-date-input />
    `);

    assert.dom('[data-test-date-input]').hasAttribute('disabled');
  });

  test('it accepts an iso date string or date object as a value', async function (assert) {
    this.value = '2023-02-02';

    await render(hbs`
      <AuDateInput data-test-date-input @value={{this.value}} />
    `);

    assert.dom('[data-test-date-input]').hasValue('02-02-2023');

    this.set('value', new Date(2024, 5, 3));
    assert.dom('[data-test-date-input]').hasValue('03-06-2024');

    this.set('value', undefined);
    assert.dom('[data-test-date-input]').hasNoValue();
  });

  test('it calls @onChange with the correct date', async function (assert) {
    this.onChange = (isoDate, date) => {
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

    await render(hbs`
      <AuDateInput data-test-date-input @onChange={{this.onChange}} />
    `);

    await fillIn('[data-test-date-input]', '0202202');
    await typeIn('[data-test-date-input]', '3'); // fillIn alone doesn't do the trick, but typeIn has issues when typing all the characters..
  });

  test('it calls @onChange with `null` if the input is cleared', async function (assert) {
    this.onChange = (isoDate, date) => {
      assert.strictEqual(
        isoDate,
        null,
        'it returns null if the input is cleared',
      );
      assert.strictEqual(date, null, 'it returns null if the input is cleared');
    };

    await render(hbs`
      <AuDateInput data-test-date-input @value="2023-02-02" @onChange={{this.onChange}} />
    `);

    let input = document.querySelector('[data-test-date-input]');

    await clearInput(input);
  });
});

async function clearInput(input) {
  // Focus seems to be needed to make the backspace work
  input.focus();

  while (input.value.length > 0) {
    await triggerKeyEvent(input, 'keydown', 'Backspace');
  }
}
