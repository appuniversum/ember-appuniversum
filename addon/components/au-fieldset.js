import Component from '@glimmer/component';

export default class AuFieldset extends Component {
  get alignment() {
    if (this.args.alignment == 'inline') return 'au-c-fieldset--inline';
    else return '';
  }
}
