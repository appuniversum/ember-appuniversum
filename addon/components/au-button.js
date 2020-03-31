import Component from '@glimmer/component';

export default class AuButton extends Component {
  get widthClass() {
    if (this.args.width == "block")
      return "au-c-input--block";
    else
      return "";
  }

  get skinClass() {
    if (this.args.error == "ghost")
      return "au-c-input--ghost";
    else
      return "";
  }
}
