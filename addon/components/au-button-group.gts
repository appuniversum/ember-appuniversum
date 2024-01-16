import Component from '@glimmer/component';

export interface AuButtonGroupSignature {
  Args: {
    inline?: boolean;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

export default class AuButtonGroup extends Component<AuButtonGroupSignature> {
  get inline() {
    if (this.args.inline) return 'au-c-button-group--inline';
    else return '';
  }

  <template>
    <div class="au-c-button-group {{this.inline}}" ...attributes>
      {{yield}}
    </div>
  </template>
}
