import Component from '@glimmer/component';

export default class AuInput extends Component {
  get width() {
    if (this.args.width == "block")
      return "au-c-input--block";
    else
      return "";
  }

  get iconAlignment() {
    if (this.args.iconAlignment == "left")
      return "au-c-input-wrapper--left";
    if (this.args.iconAlignment == "right")
      return "au-c-input-wrapper--right";
    else
      return "";
  }

  get error() {
    if (this.args.error)
      return "au-c-input--error";
    else
      return "";
  }
}
