// Types based on https://github.com/tracked-tools/tracked-toolbox/pull/23/files but simplified for our use
import Component from '@glimmer/component';

interface TrackedResetConfig<C extends Component = Component, T = unknown> {
  /**
   * A path to a "remote" property to use to indicate when to reset to the
   * default value
   */
  memo: string;

  /**
   * A function which can be used to provide a different value than the original
   * on updates.
   */
  update: (component: C, key: string, last: T) => T;
}

/**
 * Similar to @localCopy, but instead of copying the remote value, it will reset
 * to the class field's default value when another value changes.
 * @param config a configuration object with an update function, which can be
 *   used to provide a different value than the original on updates
 */
export function trackedReset<C, T = unknown>(
  config: TrackedResetConfig<C, T>,
): PropertyDecorator;
