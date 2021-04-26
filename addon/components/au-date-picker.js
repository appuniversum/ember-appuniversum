import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { assert, runInDebug } from '@ember/debug';

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
  get localization() {
    let localizationArg = this.args.localization;

    if (!localizationArg) {
      return DEFAULT_LOCALIZATION;
    }

    runInDebug(() => validateLocalization(localizationArg));

    return {
      ...DEFAULT_LOCALIZATION,
      ...localizationArg,
    };
  }

  // Default Adapter
  @tracked adapter = {
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

  constructor(owner, args) {
    super(owner, args);
    this._assignAdapter(args);
  }

  @action _assignAdapter(args){
    let adaptArgs = args.adapter;
    // Check if adapter argument has been defined
    if (adaptArgs) {

      // Check if adapter argument passed in is of type object
      if (typeof adaptArgs != 'object') {
        throw SyntaxError(`The passed in value for the adapter argument needs to be of type "object", You passed in a "${typeof adaptArgs}"`);
      }

      // Update adapter properties where needed
      for (const [key, value] of Object.entries(adaptArgs)) {
        if (this.adapter[key]) {
          this.adapter[key] = value;
        } else {
          throw Error(`"${key}" is not a property of adapter, maybe it is just a typo?`);
        }
      }
    }
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

function validateLocalization(localizationArg) {
  assert(
    `The @localization argument needs to be an object but it is a "${typeof localizationArg}"`,
    Boolean(localizationArg) && typeof localizationArg === 'object'
  );

  Object.keys(localizationArg).map((key) => {
    assert(`"${key}" is not a property of localization, maybe it is just a typo?`, key in DEFAULT_LOCALIZATION);
  });
}
