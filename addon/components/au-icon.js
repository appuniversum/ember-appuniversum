import Component from '@glimmer/component';
import { getOwner } from '@ember/application';

export default class AuIcon extends Component {
  get iconPrefix() {
    const config = getOwner(this).resolveRegistration('config:environment');
    const prefix = config.rootURL || '/';
    const symbolset = document.querySelectorAll('.au-c-symbols');

    if (symbolset.length > 0) {
      return;
    } else {
      return (
        prefix + '@appuniversum/ember-appuniversum/appuniversum-symbolset.svg'
      );
    }
  }

  get size() {
    if (this.args.size == 'large') return 'au-c-icon--large';
    else return '';
  }

  get alignment() {
    if (this.args.alignment == 'left') return 'au-c-icon--left';
    if (this.args.alignment == 'right') return 'au-c-icon--right';
    else return '';
  }
}
