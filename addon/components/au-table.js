import Component from '@glimmer/component';

export default class AuTable extends Component {
  get size() {
    if (this.args.size == 'small') return 'au-c-table--small';
    else return '';
  }
}
