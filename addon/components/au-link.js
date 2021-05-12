import Component from '@glimmer/component';
import linkComponent from '@ember/routing/link-component';
import { ensureSafeComponent } from '@embroider/util';

export default class AuLink extends Component {
  get linkTo() {
    return ensureSafeComponent(linkComponent, this);
  }

  get skin() {
    if (this.args.skin == "secondary")
      return "au-c-link--secondary";
    else
      return "";
  }

  get active() {
    if (this.args.active)
      return "is-active";
    else
      return "";
  }
}
