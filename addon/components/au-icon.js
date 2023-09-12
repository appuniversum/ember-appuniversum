import Component from '@glimmer/component';
import { getOwner } from '@ember/application';

export default class AuButton extends Component {
  get iconPrefix() {
    const config = getOwner(this).resolveRegistration('config:environment');

    return config.rootURL || '/';
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

  get classAttribute(){
    return `au-c-icon au-c-icon--${this.args.icon} ${this.alignment} ${this.size}`
  }

  get ariaHiddenAttribute(){
    if(!this.args.ariaHidden || this.args.ariaHidden === 'false'){
      return 'false';
    } else {
      return 'true';
    }
  }
}
