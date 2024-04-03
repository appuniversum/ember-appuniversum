import Modifier from 'ember-modifier';

type FocusTrapOptions = {
  initialFocus?: string;
  fallbackFocus?: string;
  escapeDeactivates?: () => boolean;
  allowOutsideClick?: boolean;
};

interface Signature {
  Element: HTMLElement;
  Args: {
    Named: {
      isActive?: boolean;
      additionalElements?: string[] | Element[];
      focusTrapOptions?: FocusTrapOptions;
    };
  };
}

export class focusTrap extends Modifier<Signature> {}
