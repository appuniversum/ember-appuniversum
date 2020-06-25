import Component from '@glimmer/component';

export default class AuContent extends Component {
  get skin() {
    if (this.args.skin == "small")
      return "au-c-content--small";
    if (this.args.skin == "large")
      return "au-c-content--large";
    else
      return "";
  }
}
