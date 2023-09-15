import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { typeIn, fillIn, render, triggerKeyEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | au-date-input', function (hooks) {
  setupRenderingTest(hooks);

  test('it accepts an iso date string or date object as a value', async function (assert) {
    this.value = '2023-02-02';

    await render(hbs`
      <AuInput data-test-date-input {{au-date-input value=this.value}} />
    `);

    assert.dom('[data-test-date-input]').hasValue('02-02-2023');

    this.set('value', new Date(2024, 5, 3));
    assert.dom('[data-test-date-input]').hasValue('03-06-2024');

    this.set('value', undefined);
    assert.dom('[data-test-date-input]').hasNoValue();
  });

  test('it calls @onChange with the correct date', async function (assert) {
    this.onChange = (isoDate, date) => {
      assert.step(isoDate);
      assert.step((date instanceof Date).toString());
    };

    await render(hbs`
      <AuInput data-test-date-input {{au-date-input onChange=this.onChange}} />
    `);

    await fillIn('[data-test-date-input]', '0202202');
    await typeIn('[data-test-date-input]', '3'); // fillIn alone doesn't do the trick, but typeIn has issues when typing all the characters..

    assert.verifySteps(
      ['2023-02-02', 'true'],
      '@onChange returns an iso string and date instance',
    );
  });

  test('it calls @onChange with `null` if the input is cleared', async function (assert) {
    this.onChange = (isoDate, date) => {
      assert.step((isoDate === null).toString());
      assert.step((date === null).toString());
    };

    await render(hbs`
      <AuInput data-test-date-input {{au-date-input value="2023-02-02" onChange=this.onChange}} />
    `);

    let input = document.querySelector('[data-test-date-input]');

    await clearInput(input);
    assert.verifySteps(
      ['true', 'true'],
      '`@onChange` returns `null` if the input is cleared',
    );
  });
});

async function clearInput(input) {
  // Focus seems to be needed to make the backspace work
  input.focus();

  while (input.value.length > 0) {
    await triggerKeyEvent(input, 'keydown', 'Backspace');
  }
}
