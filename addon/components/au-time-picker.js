import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { isPresent } from '@ember/utils';

export default class AuTimePickerComponent extends Component {
  @tracked hourValue = this.args.hours || 12;
  @tracked minuteValue = this.args.minutes || 0;
  @tracked secondValue =
    isPresent(this.args.showSeconds) && !this.args.showSeconds
      ? 0
      : this.args.seconds || 0; // ignore 'seconds' argument if 'showSeconds' is false
  @tracked keyCodes = [8, 9, 13, 33, 34, 37, 39, 46];

  get getTimeObject() {
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

  /*
   * Increments or decrements a time value.
   * HourValue has a max of 23 while minute & seconds have a max of 59
   * HourValue, minute & seconds have a min of 0
   */

  @action
  increment(elem) {
    if (elem == 'hourValue') {
      ++this[elem];

      if (this[elem] >= 23) {
        this[elem] = 23;
      }
    }

    if (elem != 'hourValue') {
      ++this[elem];

      if (this[elem] >= 59) {
        this[elem] = 59;
      }
    }
    this.callBackParent(this.getTimeObject);
  }

  @action
  decrement(elem) {
    --this[elem];

    if (this[elem] <= 0) {
      this[elem] = 0;
    }
    this.callBackParent(this.getTimeObject);
  }

  /*
   * Triggers on keydown
   * up arrow (38) increments the current value
   * down arrow (40) decrements the current value
   * If any other key that up or down has been pressed then check if it is a number key or one
   * of the allowed keys (left/right/shift/enter..) in the keyCodes list
   */

  @action
  setTimeValue(elem, e) {
    if (e.keyCode == 38) {
      this.increment(elem);
    } else if (e.keyCode == 40) {
      this.decrement(elem);
    } else if (
      isNaN(parseFloat(e.key)) &&
      this.keyCodes.indexOf(e.keyCode) == -1
    ) {
      e.preventDefault();
    } else if (
      e.target.value.length >= 2 &&
      this.keyCodes.indexOf(e.keyCode) == -1
    ) {
      e.preventDefault();
    }
  }

  /*
   * triggered after focussing out of field. Checks if the inputted value makes sense. (e.g. hour range: 1 - 23)
   * "elem" is the name of the tracked property
   * "e" is the context
   */

  @action
  updateTime(elem, e) {
    let inputValue = e.target.value;
    if (elem == 'hourValue') {
      if (inputValue < 0) {
        this[elem] = 0;
      } else if (inputValue > 23) {
        this[elem] = 23;
      } else {
        this[elem] = inputValue;
      }
    }

    if (elem != 'hourValue') {
      if (inputValue < 0) {
        this[elem] = 0;
      } else if (inputValue > 59) {
        this[elem] = 59;
      } else {
        this[elem] = inputValue;
      }
    }
    this.callBackParent(this.getTimeObject);
  }

  /*
   * calls the function assigned to @onChange by the user with the timeObject as argument
   */

  @action
  callBackParent(value) {
    if (this.args.onChange != undefined) {
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
