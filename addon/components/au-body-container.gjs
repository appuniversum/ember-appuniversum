import Component from '@glimmer/component';

export default class AuBodyContainer extends Component {
  get scroll() {
    if (this.args.scroll) return 'au-c-body-container--scroll';
    else return '';
  }

  <template>
    <div class="au-c-body-container {{this.scroll}}" ...attributes>
      {{yield}}
    </div>
  </template>
}
