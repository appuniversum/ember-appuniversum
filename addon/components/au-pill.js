import Component from '@glimmer/component';

export default class AuPillComponent extends Component {
  get skin() {
    if (this.args.skin == "border")
      return "au-c-pill--border";
    if (this.args.skin == "action")
      return "au-c-pill--action";
    if (this.args.skin == "success")
      return "au-c-pill--success";
    if (this.args.skin == "warning")
      return "au-c-pill--warning";
    if (this.args.skin == "error")
      return "au-c-pill--error";
    return "au-c-pill--default";
  }
}
