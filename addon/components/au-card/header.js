import Component from '@glimmer/component';

export default class AuCardHeader extends Component {
  get badgeSkin() {
    if (this.args.badgeSkin == "border")
      return "au-c-badge--border";
    if (this.args.badgeSkin == "action")
      return "au-c-badge--action";
    if (this.args.badgeSkin == "brand")
      return "au-c-badge--brand";
    if (this.args.badgeSkin == "success")
      return "au-c-badge--success";
    if (this.args.badgeSkin == "warning")
      return "au-c-badge--warning";
    if (this.args.badgeSkin == "error")
      return "au-c-badge--error";
    return "au-c-badge--default";
  }

  get badgeSize() {
    if (this.args.badgeSize == "small")
      return "au-c-badge--small";
    return "";
  }
}
