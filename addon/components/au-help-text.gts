import Component from '@glimmer/component';

export interface AuHelpTextSignature {
  Args: {
    skin?: 'secondary' | 'tertiary';
    size?: 'normal' | 'large';
    error?: boolean;
    warning?: boolean;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLSpanElement;
}

export default class AuHelpText extends Component<AuHelpTextSignature> {
  get skin() {
    if (this.args.skin == 'secondary') return 'au-c-help-text--secondary';
    if (this.args.skin == 'tertiary') return 'au-c-help-text--tertiary';
    else return '';
  }

  get size() {
    if (this.args.size == 'normal') return 'au-c-help-text--normal';
    if (this.args.size == 'large') return 'au-c-help-text--large';
    else return '';
  }

  get error() {
    if (this.args.error) return 'au-c-help-text--error';
    else return '';
  }

  get warning() {
    if (this.args.warning) return 'au-c-help-text--warning';
    else return '';
  }

  <template>
    <span
      class="au-c-help-text
        {{this.skin}}
        {{this.size}}
        {{this.error}}
        {{this.warning}}"
      ...attributes
    >
      {{yield}}
    </span>
  </template>
}
