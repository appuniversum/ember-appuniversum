import { action } from '@ember/object';
import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import auInputmask from '@appuniversum/ember-appuniversum/modifiers/au-inputmask';

export default class AuInput extends Component {
  constructor() {
    super(...arguments);

    assert(
      '<AuInput>: An `@onChange` handler was provided but that will only be called if `@mask` or `@maskOptions` is provided as well.',
      !this.args.onChange ||
        (typeof this.args.onChange === 'function' && this.isMasked),
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

  get classes() {
    return [
      'au-c-input',
      this.isMasked ? 'au-c-input--mask' : '',
      this.error,
      this.warning,
      this.disabled,
      this.width,
    ]
      .filter(Boolean)
      .join(' ');
  }

  get isMasked() {
    return Boolean(this.args.mask) || Boolean(this.args.maskOptions);
  }

  get inputmaskModifier() {
    return this.isMasked ? auInputmask : undefined;
  }

  get inputmaskOptions() {
    if (!this.isMasked) {
      return {};
    }

    let { mask, maskPlaceholder, maskOptions = {} } = this.args;

    let options = {
      ...maskOptions,
    };

    if (mask) {
      options.mask = mask;
    }

    if (maskPlaceholder) {
      options.placeholder = maskPlaceholder;
    }

    return options;
  }

  @action
  handleChange(event) {
    // Inputmask is a no-op if no options are provided when setting it up, as a result, the .inputmask property won't be set on the element
    // In that situation we fall back to the regular value.
    let value = event.target.inputmask?.unmaskedvalue() || event.target.value;
    this.args.onChange?.(value);
  }
}
