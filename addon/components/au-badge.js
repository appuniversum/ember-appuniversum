import Component from '@glimmer/component';

export default class AuBadgeComponent extends Component {
  get skin() {
    if (this.args.skin == "border")
      return "au-c-badge--border";
    if (this.args.skin == "action")
      return "au-c-badge--action";
    if (this.args.skin == "brand")
      return "au-c-badge--brand";
    if (this.args.skin == "success")
      return "au-c-badge--success";
    if (this.args.skin == "warning")
      return "au-c-badge--warning";
    if (this.args.skin == "error")
      return "au-c-badge--error";
    return "au-c-badge--default";
  }
  get size() {
    if (this.args.size == "small")
      return "au-c-badge--small";
    return "";
  }
}
