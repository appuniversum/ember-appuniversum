import Component from '@glimmer/component';

export default class AuLegendComponent extends Component {
  get error() {
    if (this.args.error) return 'au-c-legend--error';
    else return '';
  }

  get warning() {
    if (this.args.warning) return 'au-c-legend--warning';
    else return '';
  }
}
