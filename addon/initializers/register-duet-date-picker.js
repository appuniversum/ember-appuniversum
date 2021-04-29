import { defineCustomElements as registerDuetDatePicker } from "@duetds/date-picker/custom-element";

export function initialize() {
  registerDuetDatePicker();
}

export default {
  initialize
};
