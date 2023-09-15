import {
  toIsoDateString,
  isIsoDateString,
  isoDateToBelgianFormat,
} from '@appuniversum/ember-appuniversum/utils/date';
import { assert } from '@ember/debug';
import { registerDestructor } from '@ember/destroyable';
import Modifier from 'ember-modifier';
import Inputmask from 'inputmask';

export default class AuDateInputModifier extends Modifier {
  input;
  argValue;
  argOnChange;
  currentIsoDate;

  constructor() {
    super(...arguments);
    registerDestructor(this, this.removeInputmask);
  }

  get isInitialized() {
    return Boolean(this.input);
  }

  modify(input, positional, { value, onChange, prefillYear = false }) {
    let valueHasChanged = this.argValue !== value;

    if (valueHasChanged || !this.isInitialized) {
      this.argValue = value;
      let isoDate = ensureIsoDate(value);
      this.currentIsoDate = isoDate;
      input.value = isoDate ? isoDateToBelgianFormat(isoDate) : '';
    }

    if (this.argOnChange !== onChange) {
      this.argOnChange = onChange;
    }

    if (!this.isInitialized) {
      this.initialize(input, prefillYear);
    }
  }

  initialize(input, prefillYear) {
    this.input = input;

    let inputmask = new Inputmask({
      alias: 'datetime',
      inputFormat: 'dd-mm-yyyy',
      outputFormat: 'yyyy-mm-dd',
      placeholder: 'DD-MM-JJJJ',
      prefillYear,
      oncomplete: () => {
        let isoDate = this.input.inputmask.unmaskedvalue();

        if (isoDate !== this.currentIsoDate) {
          this.currentIsoDate = isoDate;
          this.onChange(isoDate, new Date(isoDate));
        }
      },
      oncleared: () => {
        if (this.currentIsoDate !== null) {
          this.currentIsoDate = null;
          this.onChange(null, null);
        }
      },
    });

    inputmask.mask(input);
  }

  onChange(isoDate, date) {
    this.argOnChange?.(isoDate, date);
  }

  removeInputmask = () => {
    this.input.inputmask?.remove();
  };
}

function ensureIsoDate(argValue) {
  if (!argValue) {
    return;
  }

  assert(
    `@value should be a ISO 8601 formatted date string or a Date instance but it is a "${typeof argValue}"`,
    typeof argValue === 'string' || argValue instanceof Date,
  );

  if (argValue instanceof Date) {
    return toIsoDateString(argValue);
  } else {
    assert(
      `@value ("${argValue}") should be a valid ISO 8601 formatted date`,
      isIsoDateString(argValue),
    );
    return argValue;
  }
}
