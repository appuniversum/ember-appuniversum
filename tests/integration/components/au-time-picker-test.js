import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, pauseTest, click, fillIn, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

function makeTimeChecker(assert, h, m, s) {
  return function (timeObject) {
    assert.strictEqual(timeObject.hours, h);
    assert.strictEqual(timeObject.minutes, m);
    assert.strictEqual(timeObject.seconds, s);
  };
}

module('Integration | Component | au-time-picker', function (hooks) {
  setupRenderingTest(hooks);

  test('renders with inputs and labels', async function (assert) {
    await render(
      hbs`<AuTimePicker
            @hoursLabel="uren"
            @minutesLabel="minuten"
            @secondsLabel="seconden"
            @nowLabel="Nu"/>`
    );
    assert.dom('[data-test-autimepicker-hourinput]').exists();
    assert.dom('[data-test-autimepicker-minuteinput]').exists();
    assert.dom('[data-test-autimepicker-secondinput]').exists();
    assert.dom('[data-test-autimepicker-nowbutton]').exists();

    assert.dom('[data-test-autimepicker-hourlabel]').hasText('uren');
    assert.dom('[data-test-autimepicker-minutelabel]').hasText('minuten');
    assert.dom('[data-test-autimepicker-secondlabel]').hasText('seconden');
    assert.dom('[data-test-autimepicker-nowbutton]').hasText('Nu');
  });

  test('renders with or without seconds', async function (assert) {
    await render(hbs`<AuTimePicker @showSeconds={{true}}/>`);
    assert.dom('[data-test-autimepicker-hourinput]').exists();
    assert.dom('[data-test-autimepicker-minuteinput]').exists();
    assert.dom('[data-test-autimepicker-secondinput]').exists();
    assert.dom('[data-test-autimepicker-nowbutton]').exists();

    await render(hbs`<AuTimePicker @showSeconds={{false}}/>`);
    assert.dom('[data-test-autimepicker-hourinput]').exists();
    assert.dom('[data-test-autimepicker-minuteinput]').exists();
    assert.dom('[data-test-autimepicker-secondinput]').doesNotExist();
    assert.dom('[data-test-autimepicker-nowbutton]').exists();
  });

  test('renders with or without "Now" button', async function (assert) {
    await render(hbs`<AuTimePicker @showNow={{true}}/>`);
    assert.dom('[data-test-autimepicker-hourinput]').exists();
    assert.dom('[data-test-autimepicker-minuteinput]').exists();
    assert.dom('[data-test-autimepicker-secondinput]').exists();
    assert.dom('[data-test-autimepicker-nowbutton]').exists();

    await render(hbs`<AuTimePicker @showNow={{false}}/>`);
    assert.dom('[data-test-autimepicker-hourinput]').exists();
    assert.dom('[data-test-autimepicker-minuteinput]').exists();
    assert.dom('[data-test-autimepicker-secondinput]').exists();
    assert.dom('[data-test-autimepicker-nowbutton]').doesNotExist();
  });

  test('correct input values rendered', async function (assert) {
    this.set('hours', 5);
    this.set('minutes', 5);
    this.set('seconds', 5);

    await render(hbs`
      <AuTimePicker
        @hours={{this.hours}}
        @minutes={{this.minutes}}
        @seconds={{this.seconds}}/>
    `);

    //Keeping in mind the formatting '##'
    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('05');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('05');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('05');
  });

  test('input values correctly incremented', async function (assert) {
    this.set('hours', 5);
    this.set('minutes', 6);
    this.set('seconds', 7);

    await render(hbs`
      <AuTimePicker
        @hours={{this.hours}}
        @minutes={{this.minutes}}
        @seconds={{this.seconds}}
        @onChange={{this.timeChange}}/>
    `);

    assert.expect(15);

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('05');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('06');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('07');

    this.set('timeChange', makeTimeChecker(assert, 6, 6, 7));
    await click('[data-test-autimepicker-hourincrement]');
    this.set('timeChange', makeTimeChecker(assert, 6, 7, 7));
    await click('[data-test-autimepicker-minuteincrement]');
    this.set('timeChange', makeTimeChecker(assert, 6, 7, 8));
    await click('[data-test-autimepicker-secondincrement]');

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('06');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('07');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('08');
  });

  test('input values correctly decremented', async function (assert) {
    this.set('hours', 5);
    this.set('minutes', 6);
    this.set('seconds', 7);

    await render(hbs`
      <AuTimePicker
        @hours={{this.hours}}
        @minutes={{this.minutes}}
        @seconds={{this.seconds}}
        @onChange={{this.timeChange}}/>
    `);

    assert.expect(15);

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('05');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('06');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('07');

    this.set('timeChange', makeTimeChecker(assert, 4, 6, 7));
    await click('[data-test-autimepicker-hourdecrement]');
    this.set('timeChange', makeTimeChecker(assert, 4, 5, 7));
    await click('[data-test-autimepicker-minutedecrement]');
    this.set('timeChange', makeTimeChecker(assert, 4, 5, 6));
    await click('[data-test-autimepicker-seconddecrement]');

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('04');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('05');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('06');
  });

  test('input values follow component arguments', async function (assert) {
    this.set('hours', 5);
    this.set('minutes', 6);
    this.set('seconds', 7);

    await render(hbs`
      <AuTimePicker
        @hours={{this.hours}}
        @minutes={{this.minutes}}
        @seconds={{this.seconds}}
        @onChange={{this.timeChange}}/>
    `);

    assert.expect(36);

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('05');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('06');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('07');

    this.set('timeChange', makeTimeChecker(assert, 4, 6, 7));
    await click('[data-test-autimepicker-hourdecrement]');
    this.set('timeChange', makeTimeChecker(assert, 4, 5, 7));
    await click('[data-test-autimepicker-minutedecrement]');
    this.set('timeChange', makeTimeChecker(assert, 4, 5, 6));
    await click('[data-test-autimepicker-seconddecrement]');

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('04');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('05');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('06');

    this.set('hours', 3);
    this.set('minutes', 3);
    this.set('seconds', 3);

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('03');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('03');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('03');

    this.set('hours', 4);
    this.set('minutes', 4);
    this.set('seconds', 4);

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('04');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('04');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('04');

    this.set('timeChange', makeTimeChecker(assert, 3, 4, 4));
    await click('[data-test-autimepicker-hourdecrement]');
    this.set('timeChange', makeTimeChecker(assert, 3, 3, 4));
    await click('[data-test-autimepicker-minutedecrement]');
    this.set('timeChange', makeTimeChecker(assert, 3, 3, 3));
    await click('[data-test-autimepicker-seconddecrement]');

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('03');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('03');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('03');

    //This does not really update anything as this.hours was already 4 before.
    this.set('hours', 4);
    this.set('minutes', 4);
    this.set('seconds', 4);

    //Hence the 03 values here, because they remain from the previous stage.
    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('03');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('03');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('03');
  });

  test('showing some default values', async function (assert) {
    await render(hbs`
      <AuTimePicker
        @hours={{this.hours}}
        @minutes={{this.minutes}}
        @seconds={{this.seconds}}/>
    `);

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('12');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('00');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('00');
  });

  test('coping with weird input values', async function (assert) {
    this.set('hours', 'a');
    this.set('minutes', 'b');
    this.set('seconds', 'c');

    await render(hbs`
      <AuTimePicker
        @hours={{this.hours}}
        @minutes={{this.minutes}}
        @seconds={{this.seconds}}/>
    `);

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('00');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('00');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('00');
  });

  test('input values render time boundaries correctly', async function (assert) {
    this.set('hours', 70);
    this.set('minutes', 70);
    this.set('seconds', 70);

    await render(hbs`
      <AuTimePicker
        @hours={{this.hours}}
        @minutes={{this.minutes}}
        @seconds={{this.seconds}}/>
    `);

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('23');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('59');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('59');

    this.set('hours', -10);
    this.set('minutes', -20);
    this.set('seconds', -30);

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('00');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('00');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('00');
  });

  test('input values render invalid time correctly', async function (assert) {
    this.set('hours', 'a');
    this.set('minutes', 'b');
    this.set('seconds', 'c');

    await render(hbs`
      <AuTimePicker
        @hours={{this.hours}}
        @minutes={{this.minutes}}
        @seconds={{this.seconds}}/>
    `);

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('00');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('00');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('00');

    this.set('hours', '10');
    this.set('minutes', '15a');
    this.set('seconds', '0x11'); // 0x11 = 17

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('10');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('15');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('00');
  });

  test('Now button sets current time', async function (assert) {
    this.set('hours', 5);
    this.set('minutes', 6);
    this.set('seconds', 7);

    await render(hbs`
      <AuTimePicker
        @hours={{this.hours}}
        @minutes={{this.minutes}}
        @seconds={{this.seconds}}
        @onChange={{this.timeChange}}/>
    `);

    assert.expect(9);

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('05');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('06');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('07');

    const now = new Date();
    const hours = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours().toString();
    const minutes =
      now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes().toString();
    const seconds =
      now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds().toString();
    this.set('timeChange', makeTimeChecker(assert, now.getHours(), now.getMinutes(), now.getSeconds()));
    await click('[data-test-autimepicker-nowbutton]');

    assert
      .dom('[data-test-autimepicker-hourinput]  ')
      .hasValue(hours);
    assert
      .dom('[data-test-autimepicker-minuteinput]')
      .hasValue(minutes);
    assert
      .dom('[data-test-autimepicker-secondinput]')
      .hasValue(seconds);
  });

  test('inputs deal with changes', async function (assert) {
    this.set('hours', 5);
    this.set('minutes', 6);
    this.set('seconds', 7);

    await render(hbs`
      <AuTimePicker
        @hours={{this.hours}}
        @minutes={{this.minutes}}
        @seconds={{this.seconds}}
        @onChange={{this.timeChange}}/>
    `);

    assert.expect(15);

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('05');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('06');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('07');

    this.set('timeChange', makeTimeChecker(assert, 6, 6, 7));
    await fillIn('[data-test-autimepicker-hourinput]  ', '6');
    this.set('timeChange', makeTimeChecker(assert, 6, 7, 7));
    await fillIn('[data-test-autimepicker-minuteinput]', '7');
    this.set('timeChange', makeTimeChecker(assert, 6, 7, 8));
    await fillIn('[data-test-autimepicker-secondinput]', '8');

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('06');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('07');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('08');
  });

  test('inputs deal with time boundaries and weird input', async function (assert) {
    this.set('hours', 5);
    this.set('minutes', 6);
    this.set('seconds', 7);

    await render(hbs`
      <AuTimePicker
        @hours={{this.hours}}
        @minutes={{this.minutes}}
        @seconds={{this.seconds}}
        @onChange={{this.timeChange}}/>
    `);

    assert.expect(54);

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('05');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('06');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('07');

    this.set('timeChange', makeTimeChecker(assert, 23, 6, 7));
    await fillIn('[data-test-autimepicker-hourinput]  ', '25');
    this.set('timeChange', makeTimeChecker(assert, 23, 59, 7));
    await fillIn('[data-test-autimepicker-minuteinput]', '70');
    this.set('timeChange', makeTimeChecker(assert, 23, 59, 59));
    await fillIn('[data-test-autimepicker-secondinput]', '70');

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('23');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('59');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('59');

    this.set('timeChange', makeTimeChecker(assert, 0, 59, 59));
    await fillIn('[data-test-autimepicker-hourinput]  ', '-10');
    this.set('timeChange', makeTimeChecker(assert, 0, 0, 59));
    await fillIn('[data-test-autimepicker-minuteinput]', '-20');
    this.set('timeChange', makeTimeChecker(assert, 0, 0, 0));
    await fillIn('[data-test-autimepicker-secondinput]', '-30');

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('00');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('00');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('00');


    this.set('hours', 1);
    this.set('minutes', 2);
    this.set('seconds', 3);

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('01');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('02');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('03');

    this.set('timeChange', makeTimeChecker(assert, 0, 2, 3));
    await fillIn('[data-test-autimepicker-hourinput]  ', 'a');
    this.set('timeChange', makeTimeChecker(assert, 0, 0, 3));
    await fillIn('[data-test-autimepicker-minuteinput]', 'b');
    this.set('timeChange', makeTimeChecker(assert, 0, 0, 0));
    await fillIn('[data-test-autimepicker-secondinput]', 'c');

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('00');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('00');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('00');

    this.set('hours', 5);
    this.set('minutes', 6);
    this.set('seconds', 7);

    this.set('timeChange', makeTimeChecker(assert, 10, 6, 7));
    await fillIn('[data-test-autimepicker-hourinput]  ', '10');
    this.set('timeChange', makeTimeChecker(assert, 10, 15, 7));
    await fillIn('[data-test-autimepicker-minuteinput]', '15a');
    this.set('timeChange', makeTimeChecker(assert, 10, 15, 0));
    await fillIn('[data-test-autimepicker-secondinput]', '0x11');

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('10');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('15');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('00');
  });
});
