import { modifier } from 'ember-modifier';
import Inputmask from 'inputmask';

export default modifier(
  function auInputmask(element, positional, { options = {} }) {
    let inputmask = new Inputmask(options);

    inputmask.mask(element);

    return () => {
      element.inputmask?.remove();
    };
  },
  { eager: false },
);
