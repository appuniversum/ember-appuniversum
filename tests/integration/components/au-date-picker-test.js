import { click, render, waitFor, waitUntil } from '@ember/test-helpers';
import { getConfig, getOwnConfig } from '@embroider/macros';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import { hasDeprecationStartingWith } from '../../helpers/deprecations';

/** @type import("qunit-dom").module */
module('Integration | Component | au-date-picker', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a label', async function (assert) {
    await render(hbs`
      <AuDatePicker @label="Some label" data-test />
    `);

    assert.dom('[data-test-au-date-picker-label]').containsText('Some label');
  });

  test('it uses the provided id to link the label to the input', async function (assert) {
    await render(hbs`
      <AuDatePicker @label="Choose a date" @id="label-test" />
    `);
    await webComponentRender();

    assert
      .dom('[data-test-au-date-picker-label]')
      .hasAttribute('for', 'label-test');

    assert
      .dom('[data-test-au-date-picker-component] input')
      .hasAttribute('id', 'label-test');
  });

  test("it generates an id if the user doesn't provide one", async function (assert) {
    await render(hbs`
      <AuDatePicker @label="Choose a date" />
    `);

    await webComponentRender();

    let labelFor = this.element
      .querySelector('[data-test-au-date-picker-label]')
      .getAttribute('for');

    let inputId = this.element.querySelector(
      '[data-test-au-date-picker-component] input'
    ).id;

    assert.strictEqual(labelFor, inputId);
  });

  test('it supports disabling the date picker', async function (assert) {
    await render(hbs`
      <AuDatePicker @disabled={{true}} />
    `);
    await webComponentRender();

    assert
      .dom('[data-test-au-date-picker-component] input')
      .hasAttribute('disabled');

    assert
      .dom('[data-test-au-date-picker-component] button')
      .hasAttribute('disabled');
  });

  test('it is possible to set a selected date', async function (assert) {
    let isoDate = '2021-01-01';

    this.set('date', isoDate);
    await render(hbs`
      <AuDatePicker @value={{this.date}} />
    `);
    await webComponentRender();

    let input = assert.dom('[data-test-au-date-picker-component] input');
    input.hasValue('01-01-2021');

    let utcDate = new Date('2021-12-31T00:00:00Z');
    this.set('date', utcDate);

    // The web component updates aren't monitored by Ember, so we need to do some manual waiting.
    await waitUntil(
      () => {
        return (
          this.element.querySelector(
            '[data-test-au-date-picker-component] input'
          ).value !== '01-01-2021'
        );
      },
      { timeout: 2000 }
    );
    input.hasValue('31-12-2021');
  });

  test('it calls the @onChange handler when the user selects a date', async function (assert) {
    let wasOnChangeCalled = false;
    this.set('assertChange', (isoDate, date) => {
      wasOnChangeCalled = true;

      assert.strictEqual(isoDate, '2021-01-02');
      assert.strictEqual(date.getDate(), 2);
    });

    await render(hbs`
      <AuDatePicker @value="2021-01-01" @onChange={{this.assertChange}}/>
    `);
    await webComponentRender();

    await toggleDatePicker();
    await datePickerOpened();

    // Another hack to make sure the date picker buttons have actual values..
    await waitUntil(
      () => {
        return (
          this.element.querySelector('.duet-date__day').children[0]
            .innerText !== ''
        );
      },
      { timeout: 2000 }
    );

    let availableDateButtons = this.element.querySelectorAll('.duet-date__day');
    let targetDateButton = [...availableDateButtons].find((date) => {
      return date.children[0].innerText === '2';
    });

    assert.ok(targetDateButton);
    await click(targetDateButton);
    assert.ok(wasOnChangeCalled);
  });

  // It seems we are running into this issue where both getConfig and getOwnConfig are needed to cover the classic and Embroider tests:
  // https://github.com/embroider-build/embroider/issues/537
  if (
    getConfig('@appuniversum/ember-appuniversum')
      ?.dutchDatePickerLocalization ||
    getOwnConfig()?.dutchDatePickerLocalization
  ) {
    test('it does not show a deprecation message if the Dutch localization is enabled', async function (assert) {
      await render(hbs`
      <AuDatePicker @value="2021-01-01" />
    `);
      await webComponentRender();

      assert.false(
        hasDeprecationStartingWith(
          '[AuDatePicker] The English localization is deprecated.'
        )
      );
    });
  } else {
    test("it shows a deprecation message if the Dutch localization isn't enabled", async function (assert) {
      await render(hbs`
      <AuDatePicker @value="2021-01-01" />
    `);
      await webComponentRender();

      assert.true(
        hasDeprecationStartingWith(
          '[AuDatePicker] The English localization is deprecated.'
        ),
        'it shows a deprecation message'
      );
    });
  }
});

// Ember doesn't know when the web component is finished rendering its HTML.
// As a workaround we wait for the input element to appear in the DOM.
function webComponentRender() {
  return waitFor('[data-test-au-date-picker-component] input', {
    timeout: 2000,
  });
}

function toggleDatePicker() {
  return click('.duet-date__toggle');
}

function datePickerOpened() {
  return waitFor('.duet-date__dialog.is-active', { timeout: 2000 });
}
