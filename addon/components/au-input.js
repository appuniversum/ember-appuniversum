import { action } from '@ember/object';
import Component from '@glimmer/component';
import { assert } from '@ember/debug';

export default class AuInput extends Component {
  constructor() {
    super(...arguments);

    assert(
      '<AuInput>: An `@onChange` handler was provided but that will only be called if a `@mask` is provided as well.',
      !this.args.onChange ||
        (typeof this.args.onChange === 'function' && this.args.mask)
    );
  }

  get width() {
    if (this.args.width == 'block') return 'au-c-input--block';
    else return '';
  }

  get iconAlignment() {
    if (this.args.iconAlignment == 'left') return 'au-c-input-wrapper--left';
    if (this.args.iconAlignment == 'right') return 'au-c-input-wrapper--right';
    else return '';
  }

  get error() {
    if (this.args.error) return 'au-c-input--error';
    else return '';
  }

  get warning() {
    if (this.args.warning) return 'au-c-input--warning';
    else return '';
  }

  get disabled() {
    if (this.args.disabled) return 'is-disabled';
    else return '';
  }

  get type() {
    return this.args.type || 'text';
  }

  @action
  handleChange(value) {
    this.args.onChange?.(value);
  }
}
