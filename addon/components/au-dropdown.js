import Component from "@glimmer/component";
import { action } from "@ember/object";
import { guidFor } from '@ember/object/internals';
import { tracked } from "@glimmer/tracking";

export default class AuDropdown extends Component {
  // Create a dropdown ID
  dropdownId = 'dropdown-' + guidFor(this);

  // Track dropdown state
  @tracked dropdownOpen = false;
  // Check for keyboard access
  @tracked keyboardAccess = false;

  // Open dropdown
  @action
  openDropdown() {
    // Toggle dropdown view state
    this.dropdownOpen = true;
  }

  @action
  closeDropdown() {
    // Toggle dropdown view state
    this.dropdownOpen = false;

    // Reset keyboardAccess
    this.keyboardAccess = false;
  }

  @action
  escapeDropdown(event) {
    // Toggle dropdown view state and enable keyboardAccess on escape keydown
    if (event.keyCode === 27) {
      this.dropdownOpen = false;
      this.keyboardAccess = true;
    }

    // Enable keyboardAccess on tab keydown
    if (event.keyCode === 9) {
      this.keyboardAccess = true;
    }
  }

  @action
  tabDropdown(event) {
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
  focusDropdown(element) {
    let menuItems = element.querySelectorAll('[role="menuitem"]');

    if (this.keyboardAccess) {
      // Focus first button
      menuItems[0].focus();
    } else {
      // Focus dropdown
      element.focus();
    }
  }

  // Dropdown alignment
  get alignment() {
    if (this.args.alignment == "left")
      return "au-c-dropdown--left";
    if (this.args.alignment == "right")
      return "au-c-dropdown--right";
    return "";
  }
}
