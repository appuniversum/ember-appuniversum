import Component from '@glimmer/component';

export default class AuInput extends Component {
  get width() {
    if (this.args.width == "block")
      return "au-c-input--block";
    else
      return "";
  }

  get error() {
    if (this.args.error == "true")
      return "au-c-input--error";
    else
      return "";
  }
}
