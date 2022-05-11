import Component from '@glimmer/component';
import { action } from '@ember/object';
import { isPresent } from '@ember/utils';
import { localCopy } from 'tracked-toolbox';
import { formatTimeDigit } from '../helpers/format-time-digit';

export default class AuTimePickerComponent extends Component {
  @localCopy('args.hours') hourValue;
  @localCopy('args.minutes') minuteValue;
  @localCopy('args.seconds') secondValue;

  constructor() {
    super(...arguments);
    this.hourValue = this.hourValue || 12;
    this.minuteValue = this.minuteValue || 0;
    this.secondValue = this.secondValue || 0;
  }

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
  set secondValueFormatted(newMinuteValue) {}

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
    let tempValue = parseInt(event.target.value, 10);
    if (isNaN(tempValue)) tempValue = 0;
    this[type] = this.validateTimeValue(tempValue, type);
    this.callBackParent(this.getTimeObject);
  }

  validateTimeValue(value, type) {
    const max = type === 'hourValue' ? 23 : 59;
    value = value < 0 ? 0 : value;
    value = value > max ? max : value;
    return value;
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
