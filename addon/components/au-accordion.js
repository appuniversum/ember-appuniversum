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

  get buttonSize() {
    if (this.args.size == "large")
      return "au-c-button--large";
    else
      return "";
  }

  get buttonWidth() {
    if (this.args.width == "block")
      return "au-c-button--block";
    else
      return "";
  }

  get buttonSkin() {
    if (this.args.skin == "secondary")
      return "au-c-button--secondary";
    if (this.args.skin == "tertiary")
      return "au-c-button--tertiary";
    else
      return "";
  }

  get buttonAlert() {
    if (this.args.alert)
      return "au-c-button--alert";
    else
      return "";
  }

  get disabled() {
    if (this.args.disabled)
      return "is-disabled";
    else
      return "";
  }

  get loading() {
    if (this.args.loading)
      return "is-loading";
    else
      return "";
  }
}
