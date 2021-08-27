import Component from '@glimmer/component';

export default class AuLabelComponent extends Component {
  get inline() {
    if (this.args.inline)
      return "au-c-label--inline";
    else
      return "";
  }

  get error() {
    if (this.args.error)
      return "au-c-label--error";
    else
      return "";
  }
}
