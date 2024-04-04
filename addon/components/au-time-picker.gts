import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import { isPresent } from '@ember/utils';
import Component from '@glimmer/component';
import { trackedReset } from 'tracked-toolbox';
import AuButton from './au-button';
import AuInput, { type AuInputSignature } from './au-input';
import AuLabel from './au-label';

export interface AuTimePickerSignature {
  Args: {
    hours?: number;
    hoursLabel?: string;
    minutes?: number;
    minutesLabel?: string;
    nowLabel?: string;
    onChange?: (data: TimeData) => void;
    seconds?: number;
    secondsLabel?: string;
    showNow?: boolean;
    showSeconds?: boolean;
  };
}

export type TimeData = {
  hours: number;
  minutes: number;
  seconds: number;
};

export default class AuTimePicker extends Component<AuTimePickerSignature> {
  @trackedReset<AuTimePicker, number>({
    memo: 'args.hours',
    update(component: AuTimePicker) {
      if (component.args.hours || component.args.hours == 0) {
        return component.validateTimeValue(
          component.args.hours.toString(),
          'hourValue',
        );
      } else {
        return 12;
      }
    },
  })
  hourValue = 12;

  @trackedReset<AuTimePicker, number>({
    memo: 'args.minutes',
    update(component: AuTimePicker) {
      return component.validateTimeValue(
        component.args.minutes.toString(),
        'minuteValue',
      );
    },
  })
  minuteValue = 0;

  @trackedReset<AuTimePicker, number>({
    memo: 'args.seconds',
    update(component: AuTimePicker) {
      return component.validateTimeValue(component.args.seconds, 'secondValue');
    },
  })
  secondValue = 0;

  get hourValueFormatted() {
    return this.formatTimeNumber(this.hourValue);
  }
  get minuteValueFormatted() {
    return this.formatTimeNumber(this.minuteValue);
  }
  get secondValueFormatted() {
    return this.formatTimeNumber(this.secondValue);
  }

  get getTimeObject(): TimeData {
    return {
      hours: this.hourValue,
      minutes: this.minuteValue,
      seconds: this.secondValue,
    };
  }

  get showSeconds() {
    return isPresent(this.args.showSeconds) ? this.args.showSeconds : true;
  }

  get showNow() {
    return isPresent(this.args.showNow) ? this.args.showNow : true;
  }

  @action
  increment(elem: 'hourValue' | 'minuteValue' | 'secondValue') {
    this[elem] = this.validateTimeValue(this[elem] + 1, elem);
    this.callBackParent(this.getTimeObject);
  }

  @action
  decrement(elem: 'hourValue' | 'minuteValue' | 'secondValue') {
    this[elem] = this.validateTimeValue(this[elem] - 1, elem);
    this.callBackParent(this.getTimeObject);
  }

  @action
  timeValueKeyPress(
    type: 'hourValue' | 'minuteValue' | 'secondValue',
    event: KeyboardEvent,
  ) {
    switch (event.key) {
      case 'ArrowUp':
        this.increment(type);
        break;
      case 'ArrowDown':
        this.decrement(type);
        break;
    }
  }

  @action
  validateTime(
    type: 'hourValue' | 'minuteValue' | 'secondValue',
    event: Event,
  ) {
    this[type] = this.validateTimeValue(
      (event.target as AuInputSignature['Element']).value,
      type,
    );
    this.callBackParent(this.getTimeObject);
  }

  validateTimeValue(
    value: string,
    type: 'hourValue' | 'minuteValue' | 'secondValue',
  ) {
    let tempValue = parseInt(value, 10);
    if (isNaN(tempValue)) tempValue = 0;
    const max = type === 'hourValue' ? 23 : 59;
    tempValue = tempValue < 0 ? 0 : tempValue;
    tempValue = tempValue > max ? max : tempValue;
    return tempValue;
  }

  @action
  callBackParent(value: TimeData) {
    if (typeof this.args.onChange === 'function') {
      this.args.onChange(value);
    }
  }

  @action
  setCurrentTime() {
    const current = new Date();
    this.hourValue = current.getHours();
    this.minuteValue = current.getMinutes();
    this.secondValue = current.getSeconds();
    this.callBackParent(this.getTimeObject);
  }

  formatTimeNumber(number: number): string {
    return number.toString().padStart(2, '0');
  }

  <template>
    <div class="au-c-time-picker">
      <div class="au-c-time-picker__box">
        <AuLabel
          for="input-hour"
          data-test-autimepicker-hourlabel
        >{{@hoursLabel}}</AuLabel>
        <div class="au-c-time-picker__input-wrapper">
          <AuInput
            class="au-c-time-picker__input"
            name="input-hour"
            id="input-hour"
            value={{this.hourValueFormatted}}
            data-test-autimepicker-hourinput
            {{on "keyup" (fn this.timeValueKeyPress "hourValue")}}
            {{on "input" (fn this.validateTime "hourValue")}}
          />
          <div class="au-c-time-picker__button-wrapper">
            <button
              type="button"
              aria-label="increment hours"
              aria-controls="input-hour"
              class="au-c-time-picker__button"
              data-test-autimepicker-hourincrement
              {{on "click" (fn this.increment "hourValue")}}
            >
              +
            </button>
            <button
              type="button"
              aria-label="decrement hours"
              aria-controls="input-hour"
              class="au-c-time-picker__button"
              data-test-autimepicker-hourdecrement
              {{on "click" (fn this.decrement "hourValue")}}
            >
              -
            </button>
          </div>
        </div>
      </div>

      <span class="au-c-time-picker__separator">:</span>

      <div class="au-c-time-picker__box">
        <AuLabel
          for="input-minute"
          data-test-autimepicker-minutelabel
        >{{@minutesLabel}}</AuLabel>
        <div class="au-c-time-picker__input-wrapper">
          <AuInput
            class="au-c-time-picker__input"
            name="input-minute"
            id="input-minute"
            value={{this.minuteValueFormatted}}
            data-test-autimepicker-minuteinput
            {{on "keyup" (fn this.timeValueKeyPress "minuteValue")}}
            {{on "input" (fn this.validateTime "minuteValue")}}
          />
          <div class="au-c-time-picker__button-wrapper">
            <button
              aria-label="increment minutes"
              type="button"
              aria-controls="input-minute"
              class="au-c-time-picker__button"
              data-test-autimepicker-minuteincrement
              {{on "click" (fn this.increment "minuteValue")}}
            >
              +
            </button>
            <button
              aria-label="decrement minutes"
              type="button"
              aria-controls="input-minute"
              class="au-c-time-picker__button"
              data-test-autimepicker-minutedecrement
              {{on "click" (fn this.decrement "minuteValue")}}
            >
              -
            </button>
          </div>
        </div>
      </div>

      {{#if this.showSeconds}}
        <span class="au-c-time-picker__separator">:</span>

        <div class="au-c-time-picker__box">
          <AuLabel
            for="input-second"
            data-test-autimepicker-secondlabel
          >{{@secondsLabel}}</AuLabel>
          <div class="au-c-time-picker__input-wrapper">
            <AuInput
              class="au-c-time-picker__input"
              name="input-second"
              id="input-second"
              value={{this.secondValueFormatted}}
              data-test-autimepicker-secondinput
              {{on "keyup" (fn this.timeValueKeyPress "secondValue")}}
              {{on "input" (fn this.validateTime "secondValue")}}
            />
            <div class="au-c-time-picker__button-wrapper">
              <button
                aria-label="increment seconds"
                type="button"
                aria-controls="input-second"
                class="au-c-time-picker__button"
                data-test-autimepicker-secondincrement
                {{on "click" (fn this.increment "secondValue")}}
              >
                +
              </button>
              <button
                aria-label="decrement seconds"
                type="button"
                aria-controls="input-second"
                class="au-c-time-picker__button"
                data-test-autimepicker-seconddecrement
                {{on "click" (fn this.decrement "secondValue")}}
              >
                -
              </button>
            </div>
          </div>
        </div>
      {{/if}}

      {{#if this.showNow}}
        <div class="au-c-time-picker__box">
          <AuButton
            class="au-c-time-picker__current"
            data-test-autimepicker-nowbutton
            {{on "click" this.setCurrentTime}}
          >
            {{@nowLabel}}
          </AuButton>
        </div>
      {{/if}}

      <span class="au-u-hidden-visually">{{this.hourValue}}
        {{@hoursLabel}},
        {{this.minuteValue}}
        {{@minutesLabel}},
        {{this.secondValue}}
        {{@secondsLabel}}.</span>
    </div>
  </template>
}
