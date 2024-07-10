import AuDatePicker from '@appuniversum/ember-appuniversum/components/au-date-picker';
import {
  click,
  find,
  findAll,
  render,
  waitFor,
  waitUntil,
} from '@ember/test-helpers';
import { tracked } from '@glimmer/tracking';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | au-date-picker', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a label', async function (assert) {
    await render(
      <template><AuDatePicker @label="Some label" data-test /></template>,
    );

    assert.dom('[data-test-au-date-picker-label]').containsText('Some label');
  });

  test('it uses the provided id to link the label to the input', async function (assert) {
    await render(
      <template>
        <AuDatePicker @label="Choose a date" @id="label-test" />
      </template>,
    );
    await webComponentRender();

    assert
      .dom('[data-test-au-date-picker-label]')
      .hasAttribute('for', 'label-test');

    assert
      .dom('[data-test-au-date-picker-component] input')
      .hasAttribute('id', 'label-test');
  });

  test("it generates an id if the user doesn't provide one", async function (assert) {
    await render(<template><AuDatePicker @label="Choose a date" /></template>);

    await webComponentRender();

    const labelFor = find('[data-test-au-date-picker-label]')!.getAttribute(
      'for',
    );

    const inputId = find('[data-test-au-date-picker-component] input')!.id;

    assert.strictEqual(labelFor, inputId);
  });

  test('it supports disabling the date picker', async function (assert) {
    await render(<template><AuDatePicker @disabled={{true}} /></template>);
    await webComponentRender();

    assert
      .dom('[data-test-au-date-picker-component] input')
      .hasAttribute('disabled');

    assert
      .dom('[data-test-au-date-picker-component] button')
      .hasAttribute('disabled');
  });

  test('it is possible to set a selected date', async function (assert) {
    class TestState {
      @tracked date?: Date | string;
    }

    const isoDate = '2021-01-01';
    const state = new TestState();
    state.date = isoDate;

    await render(<template><AuDatePicker @value={{state.date}} /></template>);
    await webComponentRender();

    const input = assert.dom('[data-test-au-date-picker-component] input');
    input.hasValue('01-01-2021');

    const utcDate = new Date('2021-12-31T00:00:00Z');
    state.date = utcDate;

    // The web component updates aren't monitored by Ember, so we need to do some manual waiting.
    await waitUntil(
      () => {
        return (
          (
            find(
              '[data-test-au-date-picker-component] input',
            ) as HTMLInputElement
          ).value !== '01-01-2021'
        );
      },
      { timeout: 2000 },
    );
    input.hasValue('31-12-2021');
  });

  test('it calls the @onChange handler when the user selects a date', async function (assert) {
    let wasOnChangeCalled = false;
    const assertChange = (isoDate: string | null, date: Date | null) => {
      wasOnChangeCalled = true;

      assert.strictEqual(isoDate, '2021-01-02');
      assert.strictEqual(date?.getDate(), 2);
    };

    await render(
      <template>
        <AuDatePicker @value="2021-01-01" @onChange={{assertChange}} />
      </template>,
    );
    await webComponentRender();

    await toggleDatePicker();
    await datePickerOpened();

    // Another hack to make sure the date picker buttons have actual values..
    await waitUntil(
      () => {
        const spanElement = find('.duet-date__day')!.children[0] as HTMLElement;
        return spanElement.innerText !== '';
      },
      { timeout: 2000 },
    );

    const availableDateButtons = findAll(
      '.duet-date__day',
    ) as HTMLButtonElement[];
    const targetDateButton = [...availableDateButtons].find((date) => {
      return (date.children[0]! as HTMLElement).innerText === '2';
    });

    assert.ok(targetDateButton);
    await click(targetDateButton!);
    assert.ok(wasOnChangeCalled);
  });
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
