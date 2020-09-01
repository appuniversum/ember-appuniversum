import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class AuCardComponent extends Component {
  // Track section state
  @tracked sectionOpen = false;

  // Open section
  @action
  openSection() {
    // Toggle section view state
    this.sectionOpen = !this.sectionOpen;
  }

  get flex() {
    if (this.args.flex == "true")
      return "au-c-card--flex";
    return "";
  }

  get expandable() {
    if (this.args.expandable == "true")
      return "au-c-card--expandable";
    return "";
  }

  get divided() {
    if (this.args.divided == "true")
      return "au-c-card--divided";
    return "";
  }

  get textCenter() {
    if (this.args.textCenter == "true")
      return "au-c-card--text-center";
    return "";
  }

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
