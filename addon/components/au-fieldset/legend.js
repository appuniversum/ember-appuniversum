import Component from '@glimmer/component';

export default class AuFieldsetLegend extends Component {
  get skin() {
    if (this.args.skin == '1') return 'au-u-h1';
    if (this.args.skin == '2') return 'au-u-h2';
    if (this.args.skin == '3') return 'au-u-h3';
    if (this.args.skin == '4') return 'au-u-h4';
    if (this.args.skin == '5') return 'au-u-h5';
    if (this.args.skin == '6') return 'au-u-h6';
    if (this.args.skin == 'functional') return 'au-u-h-functional';
    else return 'au-u-h6';
  }

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
