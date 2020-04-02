import Component from '@glimmer/component';

export default class AuButton extends Component {
  get size() {
    if (this.args.size == "large")
      return "au-c-icon--large";
    else
      return "";
  }

  get alignment() {
    if (this.args.alignment == "left")
      return "au-c-icon--left";
    if (this.args.alignment == "right")
      return "au-c-icon--right";
    else
      return "";
  }
}
