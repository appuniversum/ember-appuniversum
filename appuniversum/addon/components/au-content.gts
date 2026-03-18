import Component from '@glimmer/component';

export interface AuContentSignature {
  Args: {
    skin?: 'tiny' | 'small' | 'large';
  };
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

export default class AuContent extends Component<AuContentSignature> {
  get skin() {
    if (this.args.skin == 'tiny') return 'au-c-content--tiny';
    if (this.args.skin == 'small') return 'au-c-content--small';
    if (this.args.skin == 'large') return 'au-c-content--large';
    else return '';
  }

  <template>
    <div class="au-c-content {{this.skin}}" ...attributes>
      {{yield}}
    </div>
  </template>
}
