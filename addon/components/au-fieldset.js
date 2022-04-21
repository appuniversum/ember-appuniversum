import Component from '@glimmer/component';

export default class AuFieldset extends Component {
  get alignment() {
    if (this.args.alignment == 'inline') return 'au-c-fieldset--inline';
    if (this.args.alignment == 'pre')
      return 'au-c-fieldset--inline au-c-fieldset--pre';
    if (this.args.alignment == 'post')
      return 'au-c-fieldset--inline au-c-fieldset--post';
    else return '';
  }
}
