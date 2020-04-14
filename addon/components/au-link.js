import Component from '@glimmer/component';

export default class AuLink extends Component {
  get skin() {
    if (this.args.skin == "secondary")
      return "au-c-link--secondary";
    else
      return "";
  }

  get active() {
    if (this.args.active == "true")
      return "is-active";
    else
      return "";
  }
}
