import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";
import { assert, runInDebug } from '@ember/debug';
import { guidFor } from '@ember/object/internals';
import formatISO from 'date-fns/formatISO'

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
  @asIsoDate value;
  @asIsoDate min;
  @asIsoDate max;
  @tracked isInitialized = false;

  constructor() {
    super(...arguments);
    this.registerDuetDatePicker();
  }

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

  get id() {
    return this.args.id ? this.args.id : guidFor(this);
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

  get error() {
    if (this.args.error)
      return "duet-date-error";
    if (this.args.warning)
      return "duet-date-warning";
    else
      return "";
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

  async registerDuetDatePicker() {
    if (typeof FastBoot === 'undefined') {
      const { defineCustomElements: registerDuetDatePicker } = await import('@duetds/date-picker/custom-element');
      registerDuetDatePicker();
      this.isInitialized = true;
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

function asIsoDate(target, key /*, descriptor */) {
  return {
    get() {
      let argValue = this.args[key];

      if (!argValue) {
        return;
      }

      assert(
        `@${key} should be a string or a Date instance but it is a "${typeof valueArg}"`,
        typeof argValue === 'string' || argValue instanceof Date
      );


      if (argValue instanceof Date) {
        return toIsoDateString(argValue);
      } else {
        assert(
          `@${key} ("${argValue}") should be a valid ISO 8601 formatted date`,
          isIsoDateString(argValue)
        );
        return argValue;
      }
    }
  };
}

function toIsoDateString(date) {
  return formatISO(date, { representation: 'date' });
}

function isIsoDateString(isoDate) {
  let date = new Date(isoDate);

  return isValidDate(date) && isoDate === toIsoDateString(date);
}

function isValidDate(date) {
  return !isNaN(date);
}
