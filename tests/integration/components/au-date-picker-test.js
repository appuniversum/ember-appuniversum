import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, waitFor, waitUntil } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

/** @type import("qunit-dom").module */
module('Integration | Component | au-date-picker', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a label', async function(assert) {
    await render(hbs`
      <AuDatePicker @label="Some label" data-test />
    `);

    assert.dom('[data-test-au-date-picker-label]').containsText('Some label');
  });

  test('it uses the provided id to link the label to the input', async function(assert) {
    await render(hbs`
      <AuDatePicker @label="Choose a date" @id="label-test" />
    `);
    await webComponentRender();

    let labelFor = this.element.querySelector('[data-test-au-date-picker-label]').getAttribute('for');
    assert.equal(labelFor, 'label-test');

    let inputId = this.element.querySelector('[data-test-au-date-picker-component] input').id;
    assert.equal(labelFor, inputId);
  });

  test('it generates an id if the user doesn\'t provide one', async function(assert) {
    await render(hbs`
      <AuDatePicker @label="Choose a date" />
    `);

    let labelFor = this.element.querySelector('[data-test-au-date-picker-label]').getAttribute('for');
    await webComponentRender();
    let inputId = this.element.querySelector('[data-test-au-date-picker-component] input').id;
    assert.equal(labelFor, inputId);
  });

  test('it supports disabling the date picker', async function(assert) {
    await render(hbs`
      <AuDatePicker @disabled={{true}} />
    `);
    await webComponentRender();

    assert.dom('[data-test-au-date-picker-component] input').hasAttribute('disabled');
    assert.dom('[data-test-au-date-picker-component] button').hasAttribute('disabled');
  });

  test('it is possible to set a selected date', async function(assert) {
    let isoDate = '2021-01-01';
    let date = new Date('2021-12-31');

    this.set('date', isoDate);
    await render(hbs`
      <AuDatePicker @value={{this.date}} />
    `);
    await webComponentRender();

    let input = assert.dom('[data-test-au-date-picker-component] input');
    input.hasValue('1-1-2021');

    this.set('date', date);

    // The web component updates aren't monitored by Ember, so we need to do some manual waiting.
    await waitUntil(() => {
      return this.element.querySelector('[data-test-au-date-picker-component] input').value !== '1-1-2021';
    }, { timeout: 2000 })
    input.hasValue('31-12-2021');
  });


  test('it calls the @onChange handler when the user selects a date', async function(assert) {
    let wasOnChangeCalled = false;
    this.set('assertChange', (isoDate, date) => {
      wasOnChangeCalled = true;

      assert.equal(isoDate, '2021-01-02');
      assert.equal(date.getDate(), '2');
    });

    await render(hbs`
      <AuDatePicker @value="2021-01-01" @onChange={{this.assertChange}}/>
    `);
    await webComponentRender();

    await toggleDatePicker();
    await datePickerOpened();

    // Another hack to make sure the date picker buttons have actual values..
    await waitUntil(() => {
      return this.element.querySelector('.duet-date__day').children[0].innerText !== '';
    }, { timeout: 2000 })

    let availableDateButtons = this.element.querySelectorAll('.duet-date__day');
    let targetDateButton = [...availableDateButtons].find((date) => {
      return date.children[0].innerText === '2';
    });

    assert.ok(targetDateButton);
    await click(targetDateButton);
    assert.ok(wasOnChangeCalled);
  });
});

// Ember doesn't know when the web component is finished rendering its HTML.
// As a workaround we wait for the input element to appear in the DOM.
function webComponentRender() {
  return waitFor('[data-test-au-date-picker-component] input', { timeout: 2000 });
}

function toggleDatePicker() {
  return click('.duet-date__toggle');
}

function datePickerOpened() {
  return waitFor('.duet-date__dialog.is-active', { timeout: 2000 });
}
