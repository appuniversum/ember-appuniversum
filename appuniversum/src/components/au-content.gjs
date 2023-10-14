import Component from '@glimmer/component';

export default class AuContent extends Component {
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
