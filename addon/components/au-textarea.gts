import Component from '@glimmer/component';

export interface AuTextareaSignature {
  Args: {
    disabled?: boolean;
    error?: boolean;
    warning?: boolean;
    width?: 'block';
  };
  Blocks: {
    default: [];
  };
  Element: HTMLTextAreaElement;
}

export default class AuTextarea extends Component<AuTextareaSignature> {
  get width() {
    if (this.args.width == 'block') return 'au-c-textarea--block';
    else return '';
  }

  get error() {
    if (this.args.error) return 'au-c-textarea--error';
    else return '';
  }

  get warning() {
    if (this.args.warning) return 'au-c-textarea--warning';
    else return '';
  }

  get disabled() {
    if (this.args.disabled) return 'is-disabled';
    else return '';
  }

  // We don't want whitespace between our component and the outer template tag since that's visible in the app (inline element): https://github.com/emberjs/rfcs/issues/982
  // prettier-ignore
  <template><textarea
      class="au-c-textarea
        {{this.error}}
        {{this.warning}}
        {{this.width}}
        {{this.disabled}}"
      disabled={{@disabled}}
      ...attributes
    >
      {{~yield~}}
    </textarea></template>
}
