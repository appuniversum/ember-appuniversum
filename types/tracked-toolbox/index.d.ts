// Types based on https://github.com/tracked-tools/tracked-toolbox/pull/23/files
import Component from "@glimmer/component";

type Join<K extends string, L extends string> = `${K}.${L}`;

type AllNestedPropsOf<
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
  T extends unknown,
  K extends keyof T = keyof T
> = K extends string
  ? T[K] extends Record<string, unknown>
    ? K | Join<K, AllNestedPropsOf<T[K]>>
    : K
  : never;

type UsefulPropsOf<C extends Component> = Exclude<
  AllNestedPropsOf<C>,
  Exclude<AllNestedPropsOf<Component>, "args">
>;

interface TrackedResetConfig<C extends Component = Component, T = unknown> {
  /**
   * A path to a "remote" property to use to indicate when to reset to the
   * default value, or a function which returns the default value.
   */
  memo: UsefulPropsOf<C> | (() => T);

  /**
   * A function which can be used to provide a different value than the original
   * on updates.
   */
  update: (component: C, key: string, last: T) => T;
}

/**
 * Similar to @localCopy, but instead of copying the remote value, it will reset
 * to the class field's default value when another value changes.
 *
 * @param memo The path to a "remote" property to use to indicate when to reset
 *   to the default value.
 */
export function trackedReset<C extends Component>(
  memo: UsefulPropsOf<C>
): PropertyDecorator;

/**
 * Similar to @localCopy, but instead of copying the remote value, it will reset
 * to the class field's default value when another value changes.
 * @param config a configuration object with an update function, which can be
 *   used to provide a different value than the original on updates
 */
export function trackedReset<C extends Component = Component, T = unknown>(
  config: TrackedResetConfig<C, T>
): PropertyDecorator;
