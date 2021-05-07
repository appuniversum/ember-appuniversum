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
    if (this.args.flex)
      return "au-c-card--flex";
    return "";
  }

  get expandable() {
    if (this.args.expandable)
      return "au-c-card--expandable";
    return "";
  }

  get divided() {
    if (this.args.divided)
      return "au-c-card--divided";
    return "";
  }

  get textCenter() {
    if (this.args.textCenter)
      return "au-c-card--text-center";
    return "";
  }

  get standOut() {
    if (this.args.standOut)
      return "au-c-card--standout";
    return "";
  }
}
