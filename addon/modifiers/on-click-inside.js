import { modifier } from 'ember-modifier';

export default modifier(
  function onClickInside(element, [callback]) {
    function handleClick() {
      callback();
    }

    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('click', handleClick);
    };
  },
  { eager: false }
);
