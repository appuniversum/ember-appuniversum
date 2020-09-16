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
}
