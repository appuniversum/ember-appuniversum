import Component from '@glimmer/component';

export default class AuButton extends Component {
  get skinClass() {
    if (this.args.skin == "neutral")
      return "au-c-button-link--neutral";
    else
      return "";
  }

  get widthClass() {
    if (this.args.width == "neutral")
      return "au-c-button-link--block";
    else
      return "";
  }
}
