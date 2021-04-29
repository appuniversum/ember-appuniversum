import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class extends Controller {
  today = new Date();

  // BEGIN-SNIPPET au-date-picker-custom-placeholder.js
  localization = {
    placeholder: "DD/MM/YYYY",
  };

  adapter = {
    parse: function(value = "", createDate) {
      const matches = value.match(/^(\d{1,2})\/(\d{1,})\/(\d{4})$/);
      if (matches) {
        return createDate(matches[3], matches[2], matches[1]);
      }
    },
    format: function(date) {
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    },
  };
  // END-SNIPPET

  // BEGIN-SNIPPET au-date-picker-on-change.js
  @action handleDateChange(isoDate, date) {
    window.alert(`Selected date: ${isoDate}`);
    console.log(`Selected date: ${date}`);
  }
  // END-SNIPPET
}
