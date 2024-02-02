import Component from '@glimmer/component';
import AuIcon from './au-icon';

export interface AuInputSignature {
  Args: {
    disabled?: boolean;
    error?: boolean;
    icon?: string;
    iconAlignment?: 'left' | 'right';
    warning?: boolean;
    width?: 'block';
  };
  Element: HTMLInputElement;
}

export default class AuInput extends Component<AuInputSignature> {
  get width() {
    if (this.args.width == 'block') return 'au-c-input--block';
    else return '';
  }

  get iconAlignment() {
    return this.args.iconAlignment === 'right' ? 'right' : 'left';
  }

  get iconAlignmentClass() {
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

  get classes() {
    return ['au-c-input', this.error, this.warning, this.disabled, this.width]
      .filter(Boolean)
      .join(' ');
  }

  <template>
    {{~#if @icon~}}
      <span
        class="au-c-input-wrapper {{this.iconAlignmentClass}} {{this.width}}"
      >
        <input class={{this.classes}} disabled={{@disabled}} ...attributes />
        <AuIcon @icon={{@icon}} @alignment={{this.iconAlignment}} />
      </span>
    {{~else~}}
      <input class={{this.classes}} disabled={{@disabled}} ...attributes />
    {{~/if~}}
  </template>
}
