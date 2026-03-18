/**
 * A very basic alternative to https://github.com/JedWatson/classnames
 */
export function cn(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(' ');
}
