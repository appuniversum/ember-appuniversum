import Component from '@glimmer/component';

export default class AuPanelSection extends Component {
  get padding() {
    if (this.args.padding == 'flush') return 'au-o-box--flush';
    if (this.args.padding == 'small') return 'au-o-box--tiny';
    if (this.args.padding == 'large') return '';
    return 'au-o-box--small';
  }
}
