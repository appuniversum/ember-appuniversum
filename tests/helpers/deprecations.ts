import { getDeprecations } from '@ember/test-helpers';

export function hasDeprecation(deprecationMessage: string): boolean {
  return getDeprecations().some(
    (deprecation) => deprecation.message === deprecationMessage,
  );
}

export function hasDeprecationStartingWith(
  deprecationMessage: string,
): boolean {
  return getDeprecations().some((deprecation) =>
    deprecation.message.startsWith(deprecationMessage),
  );
}
