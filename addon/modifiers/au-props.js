import { modifier } from 'ember-modifier';

export default modifier(
  function auProps(element, positional, properties) {
    for (let propertyName in properties) {
      element[propertyName] = properties[propertyName];
    }
  },
  { eager: false },
);
