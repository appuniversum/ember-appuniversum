import Component from '@glimmer/component';

export default class AuButton extends Component {
  get widthClass() {
    if (this.args.width == "block")
      return "au-c-button--block";
    else
      return "";
  }

  get skinClass() {
    if (this.args.skin == "ghost")
      return "au-c-button--ghost";
    else
      return "";
  }

  get errorClass() {
    if (this.args.error == "error")
      return "au-c-button--error";
    else
      return "";
  }

  get disabledClass() {
    if (this.args.disabled == "disabled")
      return "au-c-button--disabled";
    else
      return "";
  }
}
