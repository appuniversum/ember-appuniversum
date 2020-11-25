
import Component from '@ember/component';
import { action } from "@ember/object";

export default class localizationDefault extends Component {


// BEGIN-SNIPPET au-date-picker-on-change.js

// value argument contains the new date inputted by user
@action myCallBackFunc(value) {
  window.alert(`Selected date: ${value}`);
}
// END-SNIPPET

}