import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class AuPopover extends Component {
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

    // Reset keyboardAccess
    this.keyboardAccess = false;
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

    // Enable keyboardAccess on space keydown
    if (event.keyCode === 32) {
      this.keyboardAccess = true;
    }
  }

  @action
  focusPopover(element) {
    let menuItems = element.querySelectorAll('[role="menuitem"]');

    if (this.keyboardAccess) {
      // Focus first button
      menuItems[0].focus();
    } else {
      // Focus popover
      element.focus();
    }
  }
}
