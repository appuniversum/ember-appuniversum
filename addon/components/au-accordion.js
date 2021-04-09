import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class AuAccordionComponent extends Component {
  // Track section state
  @tracked accordionOpen = false;

  // Open accordion
  @action
  openAccordion() {
    // Toggle accordion view state
    this.accordionOpen = !this.accordionOpen;
  }

  get loading() {
    if (this.args.loading)
      return "is-loading";
    else
      return "";
  }
}
