import { modifier } from 'ember-modifier';
import Inputmask from 'inputmask';

export interface AuInputMaskSignature {
  Element: HTMLElement;
  Args: {
    Named: {
      // Inputmask.Options would be the more correct type, but that means we have to move `@types/inputmask` to dependencies.
      // We'll keep it simple for now and stick with a generic object.
      options: object;
    };
  };
}

export default modifier<AuInputMaskSignature>(function auInputmask(
  element: HTMLElement,
  positional,
  { options = {} },
) {
  const inputmask = new Inputmask(options);

  inputmask.mask(element);

  return () => {
    element.inputmask?.remove();
  };
});
