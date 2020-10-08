
import Component from '@ember/component';
import { tracked } from "@glimmer/tracking";

export default class localizationDefault extends Component {


    // BEGIN-SNIPPET au-date-picker-adapter.js

// Default values
@tracked adapter = {
  parse: function(value = "", createDate) {
    const matches = value.match(/^(\d{1,2})\.(\d{1,})\.(\d{4})$/)
    if (matches) {
      return createDate(matches[3], matches[2], matches[1])
    }
  },
  format: function(date) {
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  },
}
    // END-SNIPPET

}