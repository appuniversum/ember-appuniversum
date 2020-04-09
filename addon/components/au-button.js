import Component from '@glimmer/component';

export default class AuButton extends Component {
  get widthClass() {
    if (this.args.width == "block")
      return "au-c-button--block";
    else
      return "";
  }

  get skin() {
    if (this.args.skin == "ghost")
      return "au-c-button--ghost";
    else
      return "";
  }

  get error() {
    if (this.args.error == "true")
      return "au-c-button--error";
    else
      return "";
  }

  get disabled() {
    if (this.args.disabled == "true")
      return "au-c-button--disabled";
    else
      return "";
  }
}
