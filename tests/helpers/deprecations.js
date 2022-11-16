import { getDeprecations } from '@ember/test-helpers';

export function hasNoDeprecations() {
  return getDeprecations().length === 0;
}

export function hasDeprecation(deprecationMessage) {
  return getDeprecations().some(
    (deprecation) => deprecation.message === deprecationMessage
  );
}

export function hasDeprecationStartingWith(deprecationMessage) {
  return getDeprecations().some((deprecation) =>
    deprecation.message.startsWith(deprecationMessage)
  );
}
