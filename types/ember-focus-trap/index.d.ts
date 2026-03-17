import Modifier from 'ember-modifier';

type FocusTrapOptions = {
  initialFocus?:
    | HTMLElement
    | SVGElement
    | string
    | false
    | undefined
    | (() => HTMLElement | SVGElement | string | false | undefined);
  fallbackFocus?:
    | HTMLElement
    | SVGElement
    | string
    | (() => HTMLElement | SVGElement | string);
  escapeDeactivates?: () => boolean;
  allowOutsideClick?: boolean;
  clickOutsideDeactivates?: (Event) => boolean;
};

interface Signature {
  Element: HTMLElement;
  Args: {
    Named: {
      isActive?: boolean;
      additionalElements?: string[] | Element[];
      focusTrapOptions?: FocusTrapOptions;
      shouldSelfFocus?: boolean;
    };
  };
}

export class focusTrap extends Modifier<Signature> {}
