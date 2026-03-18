import { modifier } from 'ember-modifier';
import Inputmask from 'inputmask';

interface Args {
  // TODO: we could probably expose the underlying Inputmask options types here?
  // Not sure if we want to do that, since it requires a `@types` package as well?
  options: object;
}

export default modifier(function auInputmask(
  element: HTMLElement,
  positional,
  { options = {} }: Args,
) {
  const inputmask = new Inputmask(options);

  inputmask.mask(element);

  return () => {
    element.inputmask?.remove();
  };
});
