import Component from '@glimmer/component';

export default class AuInput extends Component {
  get widthClass() {
    if (this.args.width == "block")
      return "au-c-input--block";
    else
      return "";
  }

  get errorClass() {
    if (this.args.error == "error")
      return "au-c-input--error";
    else
      return "";
  }
}
