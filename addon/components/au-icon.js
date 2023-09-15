import Component from '@glimmer/component';

export default class AuIcon extends Component {
  get icon() {
    return `#${this.args.icon}`;
  }

  get size() {
    if (this.args.size == 'large') return 'au-c-icon--large';
    if (this.args.size == 'medium') return 'au-c-icon--medium';
    else return '';
  }

  get alignment() {
    if (this.args.alignment == 'left') return 'au-c-icon--left';
    if (this.args.alignment == 'right') return 'au-c-icon--right';
    else return '';
  }

  get ariaHiddenAttribute() {
    if (this.args.ariaHidden === false || this.args.ariaHidden === 'false') {
      return 'false';
    } else {
      return 'true';
    }
  }
}
