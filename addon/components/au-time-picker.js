import Component from '@glimmer/component';
import { action } from '@ember/object';
import { isPresent } from '@ember/utils';
import { trackedReset } from 'tracked-toolbox';
import { formatTimeDigit } from '../helpers/format-time-digit';

export default class AuTimePickerComponent extends Component {
  @trackedReset({
    memo() {
      return this.validateTimeValue(this.args.hours, 'hourValue');
    },
    update() {
      return this.validateTimeValue(this.args.hours, 'hourValue');
    },
  })
  hourValue = 12;
  @trackedReset({
    memo() {
      return this.validateTimeValue(this.args.minutes, 'minuteValue');
    },
    update() {
      return this.validateTimeValue(this.args.minutes, 'minuteValue');
    },
  })
  minuteValue = 0;
  @trackedReset({
    memo() {
      return this.validateTimeValue(this.args.seconds, 'secondValue');
    },
    update() {
      return this.validateTimeValue(this.args.seconds, 'secondValue');
    },
  })
  secondValue = 0;

  get hourValueFormatted() {
    return formatTimeDigit([this.hourValue]);
  }
  get minuteValueFormatted() {
    return formatTimeDigit([this.minuteValue]);
  }
  get secondValueFormatted() {
    return formatTimeDigit([this.secondValue]);
  }

  //No-operation setters. Input changes handled by events.
  set hourValueFormatted(newHourValue) {}
  set minuteValueFormatted(newMinuteValue) {}
  set secondValueFormatted(newSecondValue) {}

  get getTimeObject() {
    return {
      hours: parseInt(this.hourValue),
      minutes: parseInt(this.minuteValue),
      seconds: parseInt(this.secondValue),
    };
  }

  get showSeconds() {
    return isPresent(this.args.showSeconds) ? this.args.showSeconds : true;
  }

  get showNow() {
    return isPresent(this.args.showNow) ? this.args.showNow : true;
  }

  @action
  increment(elem) {
    this[elem] = this.validateTimeValue(this[elem] + 1, elem);
    this.callBackParent(this.getTimeObject);
  }

  @action
  decrement(elem) {
    this[elem] = this.validateTimeValue(this[elem] - 1, elem);
    this.callBackParent(this.getTimeObject);
  }

  @action
  timeValueKeyPress(type, event) {
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
  validateTime(type, event) {
    this[type] = this.validateTimeValue(event.target.value, type);
    this.callBackParent(this.getTimeObject);
  }

  validateTimeValue(value, type) {
    let tempValue = parseInt(value, 10);
    if (isNaN(tempValue)) tempValue = 0;
    const max = type === 'hourValue' ? 23 : 59;
    tempValue = tempValue < 0 ? 0 : tempValue;
    tempValue = tempValue > max ? max : tempValue;
    return tempValue;
  }

  @action
  callBackParent(value) {
    if (typeof this.args.onChange === 'function') {
      this.args.onChange(value);
    }
  }

  @action
  setCurrentTime() {
    let current = new Date();
    this.hourValue = current.getHours();
    this.minuteValue = current.getMinutes();
    this.secondValue = current.getSeconds();
    this.callBackParent(this.getTimeObject);
  }
}
