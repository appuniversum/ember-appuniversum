import Component from '@glimmer/component';

export default class AuFieldsetLegend extends Component {
  get inline() {
    if (this.args.inline) return 'au-c-fieldset__legend--inline';
    else return '';
  }

  get error() {
    if (this.args.error) return 'au-c-fieldset__legend--error';
    else return '';
  }

  get warning() {
    if (this.args.warning) return 'au-c-fieldset__legend--warning';
    else return '';
  }
}
