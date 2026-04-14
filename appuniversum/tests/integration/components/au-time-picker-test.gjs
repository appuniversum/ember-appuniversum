import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, fillIn, settled } from '@ember/test-helpers';
import AuTimePicker from '#src/components/au-time-picker.gts';
import { tracked } from '@glimmer/tracking';

function makeTimeChecker(assert, h, m, s) {
  return function (timeObject) {
    assert.strictEqual(timeObject.hours, h);
    assert.strictEqual(timeObject.minutes, m);
    assert.strictEqual(timeObject.seconds, s);
  };
}

class TestState {
  @tracked hours;
  @tracked minutes;
  @tracked seconds;
  @tracked timeChange;
}

module('Integration | Component | au-time-picker', function (hooks) {
  setupRenderingTest(hooks);

  test('renders with inputs and labels', async function (assert) {
    await render(
      <template>
        <AuTimePicker
          @hoursLabel="uren"
          @minutesLabel="minuten"
          @secondsLabel="seconden"
          @nowLabel="Nu"
        />
      </template>,
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
    await render(<template><AuTimePicker @showSeconds={{true}} /></template>);
    assert.dom('[data-test-autimepicker-hourinput]').exists();
    assert.dom('[data-test-autimepicker-minuteinput]').exists();
    assert.dom('[data-test-autimepicker-secondinput]').exists();
    assert.dom('[data-test-autimepicker-nowbutton]').exists();

    await render(<template><AuTimePicker @showSeconds={{false}} /></template>);
    assert.dom('[data-test-autimepicker-hourinput]').exists();
    assert.dom('[data-test-autimepicker-minuteinput]').exists();
    assert.dom('[data-test-autimepicker-secondinput]').doesNotExist();
    assert.dom('[data-test-autimepicker-nowbutton]').exists();
  });

  test('renders with or without "Now" button', async function (assert) {
    await render(<template><AuTimePicker @showNow={{true}} /></template>);
    assert.dom('[data-test-autimepicker-hourinput]').exists();
    assert.dom('[data-test-autimepicker-minuteinput]').exists();
    assert.dom('[data-test-autimepicker-secondinput]').exists();
    assert.dom('[data-test-autimepicker-nowbutton]').exists();

    await render(<template><AuTimePicker @showNow={{false}} /></template>);
    assert.dom('[data-test-autimepicker-hourinput]').exists();
    assert.dom('[data-test-autimepicker-minuteinput]').exists();
    assert.dom('[data-test-autimepicker-secondinput]').exists();
    assert.dom('[data-test-autimepicker-nowbutton]').doesNotExist();
  });

  test('correct input values rendered', async function (assert) {
    const state = new TestState();
    state.hours = 5;
    state.minutes = 5;
    state.seconds = 5;

    await render(
      <template>
        <AuTimePicker
          @hours={{state.hours}}
          @minutes={{state.minutes}}
          @seconds={{state.seconds}}
        />
      </template>,
    );

    //Keeping in mind the formatting '##'
    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('05');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('05');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('05');
  });

  test('input values correctly incremented', async function (assert) {
    const state = new TestState();
    state.hours = 5;
    state.minutes = 6;
    state.seconds = 7;

    await render(
      <template>
        <AuTimePicker
          @hours={{state.hours}}
          @minutes={{state.minutes}}
          @seconds={{state.seconds}}
          @onChange={{state.timeChange}}
        />
      </template>,
    );

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('05');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('06');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('07');

    state.timeChange = makeTimeChecker(assert, 6, 6, 7);
    await click('[data-test-autimepicker-hourincrement]');
    state.timeChange = makeTimeChecker(assert, 6, 7, 7);
    await click('[data-test-autimepicker-minuteincrement]');
    state.timeChange = makeTimeChecker(assert, 6, 7, 8);
    await click('[data-test-autimepicker-secondincrement]');

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('06');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('07');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('08');
  });

  test('input values correctly decremented', async function (assert) {
    const state = new TestState();
    state.hours = 5;
    state.minutes = 6;
    state.seconds = 7;

    await render(
      <template>
        <AuTimePicker
          @hours={{state.hours}}
          @minutes={{state.minutes}}
          @seconds={{state.seconds}}
          @onChange={{state.timeChange}}
        />
      </template>,
    );

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('05');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('06');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('07');

    state.timeChange = makeTimeChecker(assert, 4, 6, 7);
    await click('[data-test-autimepicker-hourdecrement]');
    state.timeChange = makeTimeChecker(assert, 4, 5, 7);
    await click('[data-test-autimepicker-minutedecrement]');
    state.timeChange = makeTimeChecker(assert, 4, 5, 6);
    await click('[data-test-autimepicker-seconddecrement]');

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('04');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('05');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('06');
  });

  test('input values follow component arguments', async function (assert) {
    const state = new TestState();
    state.hours = 5;
    state.minutes = 6;
    state.seconds = 7;

    await render(
      <template>
        <AuTimePicker
          @hours={{state.hours}}
          @minutes={{state.minutes}}
          @seconds={{state.seconds}}
          @onChange={{state.timeChange}}
        />
      </template>,
    );

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('05');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('06');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('07');

    state.timeChange = makeTimeChecker(assert, 4, 6, 7);
    await click('[data-test-autimepicker-hourdecrement]');
    state.timeChange = makeTimeChecker(assert, 4, 5, 7);
    await click('[data-test-autimepicker-minutedecrement]');
    state.timeChange = makeTimeChecker(assert, 4, 5, 6);
    await click('[data-test-autimepicker-seconddecrement]');

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('04');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('05');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('06');

    state.hours = 3;
    state.minutes = 3;
    state.seconds = 3;
    await settled();

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('03');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('03');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('03');

    state.hours = 4;
    state.minutes = 4;
    state.seconds = 4;
    await settled();

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('04');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('04');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('04');

    state.timeChange = makeTimeChecker(assert, 3, 4, 4);
    await click('[data-test-autimepicker-hourdecrement]');
    state.timeChange = makeTimeChecker(assert, 3, 3, 4);
    await click('[data-test-autimepicker-minutedecrement]');
    state.timeChange = makeTimeChecker(assert, 3, 3, 3);
    await click('[data-test-autimepicker-seconddecrement]');

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('03');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('03');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('03');

    //This does not really update anything as state.hours was already 4 before.
    state.hours = 4;
    state.minutes = 4;
    state.seconds = 4;
    await settled();

    //Hence the 03 values here, because they remain from the previous stage.
    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('03');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('03');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('03');
  });

  test('showing some default values', async function (assert) {
    const state = new TestState();
    await render(
      <template>
        <AuTimePicker
          @hours={{state.hours}}
          @minutes={{state.minutes}}
          @seconds={{state.seconds}}
        />
      </template>,
    );

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('12');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('00');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('00');
  });

  test('do not overcorrect zero values', async function (assert) {
    const state = new TestState();
    state.hours = 0;
    state.minutes = 0;
    state.seconds = 0;

    await render(
      <template>
        <AuTimePicker
          @hours={{state.hours}}
          @minutes={{state.minutes}}
          @seconds={{state.seconds}}
        />
      </template>,
    );

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('00');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('00');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('00');
  });

  test('coping with weird input values', async function (assert) {
    const state = new TestState();
    state.hours = 'a';
    state.minutes = 'b';
    state.seconds = 'c';

    await render(
      <template>
        <AuTimePicker
          @hours={{state.hours}}
          @minutes={{state.minutes}}
          @seconds={{state.seconds}}
        />
      </template>,
    );

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('00');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('00');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('00');
  });

  test('input values render time boundaries correctly', async function (assert) {
    const state = new TestState();
    state.hours = 70;
    state.minutes = 70;
    state.seconds = 70;

    await render(
      <template>
        <AuTimePicker
          @hours={{state.hours}}
          @minutes={{state.minutes}}
          @seconds={{state.seconds}}
        />
      </template>,
    );

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('23');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('59');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('59');

    state.hours = -10;
    state.minutes = -20;
    state.seconds = -30;
    await settled();

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('00');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('00');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('00');
  });

  test('input values render invalid time correctly', async function (assert) {
    const state = new TestState();
    state.hours = 'a';
    state.minutes = 'b';
    state.seconds = 'c';

    await render(
      <template>
        <AuTimePicker
          @hours={{state.hours}}
          @minutes={{state.minutes}}
          @seconds={{state.seconds}}
        />
      </template>,
    );

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('00');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('00');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('00');

    state.hours = '10';
    state.minutes = '15a';
    state.seconds = '0x11'; // 0x11 = 17
    await settled();

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('10');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('15');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('00');
  });

  test('Now button sets current time', async function (assert) {
    const state = new TestState();
    state.hours = 5;
    state.minutes = 6;
    state.seconds = 7;

    await render(
      <template>
        <AuTimePicker
          @hours={{state.hours}}
          @minutes={{state.minutes}}
          @seconds={{state.seconds}}
          @onChange={{state.timeChange}}
        />
      </template>,
    );

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('05');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('06');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('07');

    const now = new Date();
    const hours =
      now.getHours() < 10 ? `0${now.getHours()}` : now.getHours().toString();
    const minutes =
      now.getMinutes() < 10
        ? `0${now.getMinutes()}`
        : now.getMinutes().toString();
    const seconds =
      now.getSeconds() < 10
        ? `0${now.getSeconds()}`
        : now.getSeconds().toString();

    state.timeChange = makeTimeChecker(
      assert,
      now.getHours(),
      now.getMinutes(),
      now.getSeconds(),
    );

    await click('[data-test-autimepicker-nowbutton]');

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue(hours);
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue(minutes);
    assert.dom('[data-test-autimepicker-secondinput]').hasValue(seconds);
  });

  test('inputs deal with changes', async function (assert) {
    const state = new TestState();
    state.hours = 5;
    state.minutes = 6;
    state.seconds = 7;

    await render(
      <template>
        <AuTimePicker
          @hours={{state.hours}}
          @minutes={{state.minutes}}
          @seconds={{state.seconds}}
          @onChange={{state.timeChange}}
        />
      </template>,
    );

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('05');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('06');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('07');

    state.timeChange = makeTimeChecker(assert, 6, 6, 7);
    await fillIn('[data-test-autimepicker-hourinput]  ', '6');
    state.timeChange = makeTimeChecker(assert, 6, 7, 7);
    await fillIn('[data-test-autimepicker-minuteinput]', '7');
    state.timeChange = makeTimeChecker(assert, 6, 7, 8);
    await fillIn('[data-test-autimepicker-secondinput]', '8');

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('06');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('07');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('08');
  });

  test('inputs deal with time boundaries and weird input', async function (assert) {
    const state = new TestState();
    state.hours = 5;
    state.minutes = 6;
    state.seconds = 7;

    await render(
      <template>
        <AuTimePicker
          @hours={{state.hours}}
          @minutes={{state.minutes}}
          @seconds={{state.seconds}}
          @onChange={{state.timeChange}}
        />
      </template>,
    );

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('05');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('06');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('07');

    state.timeChange = makeTimeChecker(assert, 23, 6, 7);
    await fillIn('[data-test-autimepicker-hourinput]  ', '25');
    state.timeChange = makeTimeChecker(assert, 23, 59, 7);
    await fillIn('[data-test-autimepicker-minuteinput]', '70');
    state.timeChange = makeTimeChecker(assert, 23, 59, 59);
    await fillIn('[data-test-autimepicker-secondinput]', '70');

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('23');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('59');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('59');

    state.timeChange = makeTimeChecker(assert, 0, 59, 59);
    await fillIn('[data-test-autimepicker-hourinput]  ', '-10');
    state.timeChange = makeTimeChecker(assert, 0, 0, 59);
    await fillIn('[data-test-autimepicker-minuteinput]', '-20');
    state.timeChange = makeTimeChecker(assert, 0, 0, 0);
    await fillIn('[data-test-autimepicker-secondinput]', '-30');

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('00');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('00');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('00');

    state.hours = 1;
    state.minutes = 2;
    state.seconds = 3;
    await settled();

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('01');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('02');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('03');

    state.timeChange = makeTimeChecker(assert, 0, 2, 3);
    await fillIn('[data-test-autimepicker-hourinput]  ', 'a');
    state.timeChange = makeTimeChecker(assert, 0, 0, 3);
    await fillIn('[data-test-autimepicker-minuteinput]', 'b');
    state.timeChange = makeTimeChecker(assert, 0, 0, 0);
    await fillIn('[data-test-autimepicker-secondinput]', 'c');

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('00');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('00');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('00');

    state.hours = 5;
    state.minutes = 6;
    state.seconds = 7;
    await settled();

    state.timeChange = makeTimeChecker(assert, 10, 6, 7);
    await fillIn('[data-test-autimepicker-hourinput]  ', '10');
    state.timeChange = makeTimeChecker(assert, 10, 15, 7);
    await fillIn('[data-test-autimepicker-minuteinput]', '15a');
    state.timeChange = makeTimeChecker(assert, 10, 15, 0);
    await fillIn('[data-test-autimepicker-secondinput]', '0x11');

    assert.dom('[data-test-autimepicker-hourinput]  ').hasValue('10');
    assert.dom('[data-test-autimepicker-minuteinput]').hasValue('15');
    assert.dom('[data-test-autimepicker-secondinput]').hasValue('00');
  });
});
