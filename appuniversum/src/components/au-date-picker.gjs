import { AuLabel } from '@appuniversum/ember-appuniversum';
import {
  formatDate,
  isIsoDateString,
  toIsoDateString,
} from '@appuniversum/ember-appuniversum/utils/date';
import { assert, runInDebug } from '@ember/debug';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { modifier } from 'ember-modifier';

const props = modifier(
  function props(element, positional, properties) {
    for (let propertyName in properties) {
      element[propertyName] = properties[propertyName];
    }
  },
  { eager: false },
);

const DEFAULT_ADAPTER = {
  parse: function (value = '', createDate) {
    let dateRegex = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;

    const matches = value.match(dateRegex);
    if (matches) {
      return createDate(matches[3], matches[2], matches[1]);
    }
  },
  format: formatDate,
};

const DEFAULT_LOCALIZATION = {
  dayNames: getLocalizedDays(),
  monthNames: getLocalizedMonths(),
  monthNamesShort: getLocalizedMonths('short'),
  buttonLabel: 'Kies een datum',
  placeholder: 'DD-MM-JJJJ',
  selectedDateMessage: 'De geselecteerde datum is',
  prevMonthLabel: 'Vorige maand',
  nextMonthLabel: 'Volgende maand',
  monthSelectLabel: 'Maand',
  yearSelectLabel: 'Jaar',
  closeLabel: 'Sluit venster',
  keyboardInstruction: 'Gebruik de pijltjestoetsen om te navigeren',
  calendarHeading: 'Kies een datum',
};

export default class AuDatePicker extends Component {
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
    if (this.args.error) return 'duet-date-error';
    if (this.args.warning) return 'duet-date-warning';
    else return '';
  }

  get alignment() {
    if (this.args.alignment == 'top') return 'au-c-datepicker--top';
    else return '';
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
      const { defineCustomElements: registerDuetDatePicker } = await import(
        '@duetds/date-picker/custom-element'
      );
      registerDuetDatePicker();
      this.isInitialized = true;
    }
  }

  <template>
    <div class="au-c-datepicker {{this.alignment}}" data-test-au-date-picker>
      {{#if @label}}
        <AuLabel
          @error={{@error}}
          @warning={{@warning}}
          for={{this.id}}
          data-test-au-date-picker-label
        >{{@label}}</AuLabel>
      {{/if}}

      {{#if this.isInitialized}}
        <duet-date-picker
          class={{this.error}}
          disabled={{@disabled}}
          buttonLabel={{@buttonLabel}}
          identifier={{this.id}}
          value={{this.value}}
          min={{this.min}}
          max={{this.max}}
          first-day-of-week={{@first-day}}
          data-test-au-date-picker-component
          {{on "duetChange" this.handleDuetDateChange}}
          {{props localization=this.localization dateAdapter=this.adapter}}
          ...attributes
        ></duet-date-picker>
      {{/if}}
    </div>
  </template>
}

function validateAdapter(adapterArg) {
  assert(
    `The @adapter argument needs to be an object but it is a "${typeof adapterArg}"`,
    Boolean(adapterArg) && typeof adapterArg === 'object',
  );

  Object.keys(adapterArg).map((key) => {
    assert(
      `"${key}" is not a property of adapter, maybe it is just a typo?`,
      key in DEFAULT_ADAPTER,
    );
  });
}

function validateLocalization(localizationArg) {
  assert(
    `The @localization argument needs to be an object but it is a "${typeof localizationArg}"`,
    Boolean(localizationArg) && typeof localizationArg === 'object',
  );

  Object.keys(localizationArg).map((key) => {
    assert(
      `"${key}" is not a property of localization, maybe it is just a typo?`,
      key in DEFAULT_LOCALIZATION,
    );
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
        `@${key} should be a string or a Date instance but it is a "${typeof argValue}"`,
        typeof argValue === 'string' || argValue instanceof Date,
      );

      if (argValue instanceof Date) {
        return toIsoDateString(argValue);
      } else {
        assert(
          `@${key} ("${argValue}") should be a valid ISO 8601 formatted date`,
          isIsoDateString(argValue),
        );
        return argValue;
      }
    },
  };
}

function getLocalizedMonths(monthFormat = 'long') {
  let someYear = 2021;
  return [...Array(12).keys()].map((monthIndex) => {
    let date = new Date(someYear, monthIndex);
    return intl({ month: monthFormat }).format(date);
  });
}

function getLocalizedDays(weekdayFormat = 'long') {
  let someSunday = new Date('2021-01-03');
  return [...Array(7).keys()].map((index) => {
    let weekday = new Date(someSunday.getTime());
    weekday.setDate(someSunday.getDate() + index);
    return intl({ weekday: weekdayFormat }).format(weekday);
  });
}

function intl(options) {
  return new Intl.DateTimeFormat('nl-BE', options);
}
