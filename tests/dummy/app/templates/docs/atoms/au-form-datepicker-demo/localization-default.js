
import Component from '@ember/component';
import { tracked } from "@glimmer/tracking";

export default class localizationDefault extends Component {
// BEGIN-SNIPPET au-date-picker.js
// Default values
@tracked localization = {
  buttonLabel: "Choose date",
  placeholder: "DD-MM-YYYY",
  selectedDateMessage: "Selected date is",
  prevMonthLabel: "Previous month",
  nextMonthLabel: "Next month",
  monthSelectLabel: "Month",
  yearSelectLabel: "Year",
  closeLabel: "Close window",
  keyboardInstruction: "You can use arrow keys to navigate dates",
  calendarHeading: "Choose a date",
  dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
}
// END-SNIPPET
}
