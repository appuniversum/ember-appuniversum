import Component from '@glimmer/component';

export default class AuList extends Component {
  get direction() {
    if (this.args.direction == 'horizontal') return 'au-c-list--horizontal';
    if (this.args.direction == 'vertical') return 'au-c-list--vertical';
    else return '';
  }

  get divider() {
    if (this.args.divider) return 'au-c-list--divider';
    else return '';
  }
}
