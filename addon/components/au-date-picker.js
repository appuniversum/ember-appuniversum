import Component from '@glimmer/component';
import { action } from "@ember/object";
import { assert, runInDebug } from '@ember/debug';

const DEFAULT_ADAPTER = {
  parse: function(value = '', createDate) {
    const matches = value.match(/^(\d{1,2})-(\d{1,2})-(\d{4})$/);
    if (matches) {
      return createDate(matches[3], matches[2], matches[1]);
    }
  },
  format: function(date) {
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  },
};

const DEFAULT_LOCALIZATION = {
  buttonLabel: 'Choose date',
  placeholder: 'DD-MM-YYYY',
  selectedDateMessage: 'Selected date is',
  prevMonthLabel: 'Previous month',
  nextMonthLabel: 'Next month',
  monthSelectLabel: 'Month',
  yearSelectLabel: 'Year',
  closeLabel: 'Close window',
  keyboardInstruction: 'You can use arrow keys to navigate dates',
  calendarHeading: 'Choose a date',
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

export default class AuDatePickerComponent extends Component {
  get adapter() {
    if (!this.args.adapter) {
      return DEFAULT_ADAPTER;
    }

    runInDebug(() => validateAdapter(this.args.adapter));

    return {
      ...DEFAULT_ADAPTER,
      ...this.args.adapter,
    };
  }

  get localization() {
    if (!this.args.localization) {
      return DEFAULT_LOCALIZATION;
    }

    runInDebug(() => validateLocalization(this.args.localization));

    return {
      ...DEFAULT_LOCALIZATION,
      ...this.args.localization,
    };
  }

  @action
  handleDuetDateChange(event) {
    let wasDatePickerCleared = !event.detail.value;
    if (wasDatePickerCleared) {
      this.args.onChange?.(null, null);
    } else {
      this.args.onChange?.(event.detail.value, event.detail.valueAsDate);
    }
  }
}

function validateAdapter(adapterArg) {
  assert(
    `The @adapter argument needs to be an object but it is a "${typeof adapterArg}"`,
    Boolean(adapterArg) && typeof adapterArg === 'object'
  );

  Object.keys(adapterArg).map((key) => {
    assert(`"${key}" is not a property of adapter, maybe it is just a typo?`, key in DEFAULT_ADAPTER);
  });
}

function validateLocalization(localizationArg) {
  assert(
    `The @localization argument needs to be an object but it is a "${typeof localizationArg}"`,
    Boolean(localizationArg) && typeof localizationArg === 'object'
  );

  Object.keys(localizationArg).map((key) => {
    assert(`"${key}" is not a property of localization, maybe it is just a typo?`, key in DEFAULT_LOCALIZATION);
  });
}
