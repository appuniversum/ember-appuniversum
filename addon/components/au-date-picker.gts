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
import AuLabel from './au-label';
import type { DuetDatePickerChangeEvent } from '@duetds/date-picker/dist/types/components/duet-date-picker/duet-date-picker';
import type { DuetLocalizedText } from '@duetds/date-picker/dist/types/components/duet-date-picker/date-localization';
import type { DuetDateAdapter } from '@duetds/date-picker/dist/types/components/duet-date-picker/date-adapter';

type IsoDate = string;
type Adapter = DuetDateAdapter;
type Localization = DuetLocalizedText;
type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6; // Based on this enum: https://github.com/duetds/date-picker/blob/a89499198d6e5555073bb0dec3a3dab9a5b3648b/src/components/duet-date-picker/date-utils.ts#L3

export interface AuDatePickerSignature {
  Args: {
    alignment?: 'top';
    adapter?: Adapter;
    buttonLabel?: string;
    disabled?: boolean;
    error?: boolean;
    'first-day'?: DayOfWeek;
    firstDay?: DayOfWeek;
    id?: string;
    label?: string;
    localization?: Localization;
    max?: IsoDate | Date;
    min?: IsoDate | Date;
    value?: IsoDate | Date;
    warning?: boolean;
    onChange?: (isoDate: IsoDate | null, date: Date | null) => void;
  };
  Element: HTMLDuetDatePickerElement;
}

type DayNames = [string, string, string, string, string, string, string];
// prettier-ignore
type MonthNames = [string, string, string, string, string, string, string, string, string, string, string, string];

const DEFAULT_LOCALIZATION: Localization = {
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
  calendarHeading: 'Kies een datum',
  locale: 'nl-BE',
};

const DEFAULT_ADAPTER: Adapter = {
  parse: function (
    value = '',
    createDate: (day: string, month: string, year: string) => Date,
  ) {
    const dateRegex = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;

    const matches = value.match(dateRegex);
    if (matches) {
      return createDate(
        matches[3] as string,
        matches[2] as string,
        matches[1] as string,
      );
    }
  },
  format: formatDate,
};

export default class AuDatePicker extends Component<AuDatePickerSignature> {
  // @ts-expect-error TODO: Something is wrong with the decorator types, but I'm not sure how to fix it.
  @asIsoDate declare value: IsoDate;
  // @ts-expect-error TODO: Something is wrong with the decorator types, but I'm not sure how to fix it.
  @asIsoDate declare min: IsoDate;
  // @ts-expect-error TODO: Something is wrong with the decorator types, but I'm not sure how to fix it.
  @asIsoDate declare max: IsoDate;
  @tracked isInitialized = false;

  constructor(owner: unknown, args: AuDatePickerSignature['Args']) {
    super(owner, args);
    void this.registerDuetDatePicker();
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

  get firstDayOfWeek() {
    return this.args.firstDay || this.args['first-day'];
  }

  @action
  handleDuetDateChange(event: CustomEvent<DuetDatePickerChangeEvent>) {
    const wasDatePickerCleared = !event.detail.value;
    if (wasDatePickerCleared) {
      this.args.onChange?.(null, null);
    } else {
      this.args.onChange?.(event.detail.value, event.detail.valueAsDate);
    }
  }

  async registerDuetDatePicker() {
    if (typeof globalThis.FastBoot === 'undefined') {
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
          first-day-of-week={{this.firstDayOfWeek}}
          data-test-au-date-picker-component
          {{! @glint-expect-error duetChange is a custom event but the types expect Event instead}}
          {{on "duetChange" this.handleDuetDateChange}}
          {{props localization=this.localization dateAdapter=this.adapter}}
          ...attributes
        ></duet-date-picker>
      {{/if}}
    </div>
  </template>
}

function validateAdapter(adapterArg?: Adapter) {
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

function validateLocalization(localizationArg?: Localization) {
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

function asIsoDate(target: unknown, key: string /*, descriptor */) {
  return {
    get(this: AuDatePicker): string | undefined {
      const argValue = (this.args as { [key: string]: unknown })[key];

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

function getLocalizedMonths(monthFormat = 'long'): MonthNames {
  const someYear = 2021;
  return [...Array(12).keys()].map((monthIndex) => {
    const date = new Date(someYear, monthIndex);
    return intl({ month: monthFormat }).format(date);
  }) as MonthNames;
}

function getLocalizedDays(weekdayFormat = 'long'): DayNames {
  const someSunday = new Date('2021-01-03');
  return [...Array(7).keys()].map((index) => {
    const weekday = new Date(someSunday.getTime());
    weekday.setDate(someSunday.getDate() + index);
    return intl({ weekday: weekdayFormat }).format(weekday);
  }) as DayNames;
}

function intl(options: object) {
  return new Intl.DateTimeFormat('nl-BE', options);
}

const props = modifier(function props(
  element: HTMLElement,
  positional,
  properties: { [key: string]: unknown },
) {
  for (const propertyName in properties) {
    (element as unknown as { [key: string]: unknown })[propertyName] =
      properties[propertyName];
  }
});
