import Component from '@glimmer/component';

export default class AuFormRow extends Component {
  get alignment() {
    if (this.args.alignment == 'inline') return 'au-c-form-row--inline';
    if (this.args.alignment == 'pre')
      return 'au-c-form-row--inline au-c-form-row--pre';
    if (this.args.alignment == 'post')
      return 'au-c-form-row--inline au-c-form-row--post';
    else return '';
  }

  <template>
    <div class="au-c-form-row {{this.alignment}}" ...attributes>
      {{yield}}
    </div>
  </template>
}
