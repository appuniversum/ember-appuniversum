import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import { isPresent } from '@ember/utils';
import Component from '@glimmer/component';
import { trackedReset } from 'tracked-toolbox';
import AuButton from './au-button';
import AuInput from './au-input';
import type { AuInputSignature } from './au-input';
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

type TimeData = {
  hours: number;
  minutes: number;
  seconds: number;
};

type TimeProperty = 'hours' | 'minutes' | 'seconds';

export default class AuTimePicker extends Component<AuTimePickerSignature> {
  @trackedReset<AuTimePicker, number>({
    memo: 'args.hours',
    update(component: AuTimePicker) {
      const { hours } = component.args;
      if (hours || hours == 0) {
        return component.normalizeTimeValue(hours, 'hours');
      } else {
        return 12;
      }
    },
  })
  hours = 12;

  @trackedReset<AuTimePicker, number>({
    memo: 'args.minutes',
    update(component: AuTimePicker) {
      let { minutes } = component.args;

      if (typeof minutes !== 'number' && typeof minutes !== 'string') {
        return 0;
      }

      if (typeof minutes === 'string') {
        minutes = parseInt(minutes, 10);
      }

      return component.normalizeTimeValue(minutes, 'minutes');
    },
  })
  minutes = 0;

  @trackedReset<AuTimePicker, number>({
    memo: 'args.seconds',
    update(component: AuTimePicker) {
      let { seconds } = component.args;

      if (typeof seconds !== 'number' && typeof seconds !== 'string') {
        return 0;
      }

      if (typeof seconds === 'string') {
        seconds = parseInt(seconds, 10);
      }

      return component.normalizeTimeValue(seconds, 'seconds');
    },
  })
  seconds = 0;

  get timeData(): TimeData {
    return {
      hours: this.hours,
      minutes: this.minutes,
      seconds: this.seconds,
    };
  }

  get showSeconds() {
    return isPresent(this.args.showSeconds) ? this.args.showSeconds : true;
  }

  get showNow() {
    return isPresent(this.args.showNow) ? this.args.showNow : true;
  }

  @action
  increment(propertyName: TimeProperty) {
    this[propertyName] = this.normalizeTimeValue(
      this[propertyName] + 1,
      propertyName,
    );
    this.onChange(this.timeData);
  }

  @action
  decrement(propertyName: TimeProperty) {
    this[propertyName] = this.normalizeTimeValue(
      this[propertyName] - 1,
      propertyName,
    );
    this.onChange(this.timeData);
  }

  @action
  timeValueKeyPress(type: TimeProperty, event: KeyboardEvent) {
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
  validateTime(type: TimeProperty, event: Event) {
    const newValue = parseInt(
      // We can't use .valueAsNumber since we're using a type="text" input field, which always returns NaN
      (event.target as AuInputSignature['Element']).value,
      10,
    );
    this[type] = this.normalizeTimeValue(newValue, type);
    this.onChange(this.timeData);
  }

  normalizeTimeValue(value: number, type: TimeProperty) {
    let normalizedValue = !isNaN(value) ? value : 0;
    const max = type === 'hours' ? 23 : 59;
    normalizedValue = normalizedValue < 0 ? 0 : normalizedValue;
    normalizedValue = normalizedValue > max ? max : normalizedValue;
    return normalizedValue;
  }

  onChange(value: TimeData) {
    if (typeof this.args.onChange === 'function') {
      this.args.onChange(value);
    }
  }

  @action
  setCurrentTime() {
    const current = new Date();
    this.hours = current.getHours();
    this.minutes = current.getMinutes();
    this.seconds = current.getSeconds();
    this.onChange(this.timeData);
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
            value={{formatTime this.hours}}
            data-test-autimepicker-hourinput
            {{on "keyup" (fn this.timeValueKeyPress "hours")}}
            {{on "input" (fn this.validateTime "hours")}}
          />
          <div class="au-c-time-picker__button-wrapper">
            <button
              type="button"
              aria-label="increment hours"
              aria-controls="input-hour"
              class="au-c-time-picker__button"
              data-test-autimepicker-hourincrement
              {{on "click" (fn this.increment "hours")}}
            >
              +
            </button>
            <button
              type="button"
              aria-label="decrement hours"
              aria-controls="input-hour"
              class="au-c-time-picker__button"
              data-test-autimepicker-hourdecrement
              {{on "click" (fn this.decrement "hours")}}
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
            value={{formatTime this.minutes}}
            data-test-autimepicker-minuteinput
            {{on "keyup" (fn this.timeValueKeyPress "minutes")}}
            {{on "input" (fn this.validateTime "minutes")}}
          />
          <div class="au-c-time-picker__button-wrapper">
            <button
              aria-label="increment minutes"
              type="button"
              aria-controls="input-minute"
              class="au-c-time-picker__button"
              data-test-autimepicker-minuteincrement
              {{on "click" (fn this.increment "minutes")}}
            >
              +
            </button>
            <button
              aria-label="decrement minutes"
              type="button"
              aria-controls="input-minute"
              class="au-c-time-picker__button"
              data-test-autimepicker-minutedecrement
              {{on "click" (fn this.decrement "minutes")}}
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
              value={{formatTime this.seconds}}
              data-test-autimepicker-secondinput
              {{on "keyup" (fn this.timeValueKeyPress "seconds")}}
              {{on "input" (fn this.validateTime "seconds")}}
            />
            <div class="au-c-time-picker__button-wrapper">
              <button
                aria-label="increment seconds"
                type="button"
                aria-controls="input-second"
                class="au-c-time-picker__button"
                data-test-autimepicker-secondincrement
                {{on "click" (fn this.increment "seconds")}}
              >
                +
              </button>
              <button
                aria-label="decrement seconds"
                type="button"
                aria-controls="input-second"
                class="au-c-time-picker__button"
                data-test-autimepicker-seconddecrement
                {{on "click" (fn this.decrement "seconds")}}
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

      <span class="au-u-hidden-visually">{{this.hours}}
        {{@hoursLabel}},
        {{this.minutes}}
        {{@minutesLabel}},
        {{this.seconds}}
        {{@secondsLabel}}.</span>
    </div>
  </template>
}

function formatTime(number: number): string {
  return number.toString().padStart(2, '0');
}
