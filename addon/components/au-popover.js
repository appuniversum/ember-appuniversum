import Component from "@ember/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class popover extends Component {
  // Track Popover state
  @tracked popoverOpen = false;
  // Check for keyboard access
  @tracked keyboardAccess = false;

  // Open Popover
  @action
  openPopover() {
    // Toggle Popover view state
    this.popoverOpen = true;
  }

  @action
  closePopover() {
    // Toggle Popover view state
    this.popoverOpen = false;
  }

  @action
  escapePopover(event) {
    // Toggle Popover view state and enable keyboardAccess on escape keydown
    if (event.keyCode === 27) {
      this.popoverOpen = false;
      this.keyboardAccess = true;
    }

    // Enable keyboardAccess on tab keydown
    if (event.keyCode === 9) {
      this.keyboardAccess = true;
    }
  }

  @action
  tabPopover(event) {
    // Enable keyboardAccess on enter keydown
    if (event.keyCode === 13) {
      this.keyboardAccess = true;
    }
  }

  @action
  popoverFocus(element) {
    let menuItems = element.querySelectorAll('button');

    if (this.keyboardAccess) {
      // Focus first button
      menuItems[0].focus();
    } else {
      // Focus popover
      element.focus();
    }
  }

  @action
  buttonFocus(element) {
    if (this.keyboardAccess) {
      // Focus button on insert
      element.focus();
      // Disable keyboardAccess
      this.keyboardAccess = false;
    }
  }
}
