
/* eslint-disable no-dupe-class-members */
import Component from '@ember/component';
import { action } from "@ember/object";

export default class localizationDefault extends Component {


// BEGIN-SNIPPET au-date-picker-on-change.js

// value argument contains the new date inputted by user
@action myCallBackFunc(value) {
  window.alert(`Selected date: ${value}`);
}
// END-SNIPPET

// BEGIN-SNIPPET au-time-picker-on-change.js

// value argument contains the time object inputted by user
@action myCallBackFunc(value) {
  window.alert(`Selected hour: ${value.hours}, minutes: ${value.minutes}, seconds: ${value.seconds}`);
}

/*
Value object example:

  {
    hours: '24'
    minutes: '00'
    seconds: '50'
  }

*/

// END-SNIPPET
}
