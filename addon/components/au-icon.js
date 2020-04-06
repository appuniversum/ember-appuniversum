import Component from '@glimmer/component';
import { getOwner } from '@ember/application';
const config = getOwner(this).resolveRegistration('config:environment');

export default class AuButton extends Component {
  // Variables
  iconURL = null

  constructor() {
    super(...arguments);

    // Set wormhole destination
    if (!this.iconURL) {
      this.iconURL = config.ENV.rootURL;
      ;
    }
  }

  get size() {
    if (this.args.size == "large")
      return "au-c-icon--large";
    else
      return "";
  }

  get alignment() {
    if (this.args.alignment == "left")
      return "au-c-icon--left";
    if (this.args.alignment == "right")
      return "au-c-icon--right";
    else
      return "";
  }
}
