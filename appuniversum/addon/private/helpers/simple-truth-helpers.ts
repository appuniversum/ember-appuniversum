// These are simplified versions of the ember-truth-helpers that are hard to replace in some of our components

export function and(valueA: unknown, valueB: unknown) {
  return valueA && valueB;
}

export function not(value: unknown): boolean {
  return !value;
}
