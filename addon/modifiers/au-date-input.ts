import { assert } from '@ember/debug';
import { registerDestructor } from '@ember/destroyable';
import type Owner from '@ember/owner';
import Modifier, { type ArgsFor } from 'ember-modifier';
import Inputmask from 'inputmask';
import {
  toIsoDateString,
  isIsoDateString,
  isoDateToBelgianFormat,
} from '../utils/date';

export interface AuDateInputModifierSignature {
  Args: {
    Named: {
      value?: string | Date;
      prefillYear?: boolean;
      onChange?: (isoDate: string | null, date: Date | null) => void;
    };
  };
  Element: HTMLInputElement;
}

type Signature = AuDateInputModifierSignature;

export default class AuDateInputModifier extends Modifier<Signature> {
  input!: Signature['Element'];
  argValue?: Signature['Args']['Named']['value'];
  argOnChange?: Signature['Args']['Named']['onChange'];
  currentIsoDate?: string | null;

  constructor(owner: Owner, args: ArgsFor<Signature>) {
    super(owner, args);
    registerDestructor(this, this.removeInputmask);
  }

  get isInitialized() {
    return Boolean(this.input);
  }

  modify(
    input: Signature['Element'],
    _positional: never,
    { value, onChange, prefillYear = false }: Signature['Args']['Named'],
  ) {
    const valueHasChanged = this.argValue !== value;

    if (valueHasChanged || !this.isInitialized) {
      this.argValue = value;
      const isoDate = ensureIsoDate(value);
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

  initialize(input: Signature['Element'], prefillYear?: boolean) {
    this.input = input;

    const inputmask = new Inputmask({
      alias: 'datetime',
      inputFormat: 'dd-mm-yyyy',
      outputFormat: 'yyyy-mm-dd',
      placeholder: 'DD-MM-JJJJ',
      prefillYear,
      oncomplete: () => {
        const isoDate = this.input.inputmask!.unmaskedvalue();

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

  onChange(isoDate: string | null, date: Date | null) {
    this.argOnChange?.(isoDate, date);
  }

  removeInputmask = () => {
    this.input.inputmask?.remove();
  };
}

function ensureIsoDate(argValue?: unknown): string | undefined {
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
