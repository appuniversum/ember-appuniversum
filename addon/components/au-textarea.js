import Component from '@glimmer/component';

export default class AuTextarea extends Component {
  get width() {
    if (this.args.width == "block")
      return "au-c-textarea--block";
    else
      return "";
  }

  get error() {
    if (this.args.error)
      return "au-c-textarea--error";
    else
      return "";
  }
}
