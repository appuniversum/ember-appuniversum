import Component from "@glimmer/component";
import { action } from "@ember/object";
import { guidFor } from '@ember/object/internals';
import { tracked } from "@glimmer/tracking";
import { deprecate } from '@ember/debug';

export default class AuDropdown extends Component {
  // Create a dropdown ID
  id = 'dropdown-' + guidFor(this);

  // Track dropdown state
  @tracked dropdownOpen = false;

  // Open dropdown
  @action
  openDropdown() {
    // Toggle dropdown view state
    if (!this.dropdownOpen)
      this.dropdownOpen = true;
  }

  @action
  closeDropdown() {
    // Toggle dropdown view state
    if (this.dropdownOpen)
      this.dropdownOpen = false;
  }

  get title() {
    if (this.args.dropdownTitle) {
      deprecate(
        '@dropdownTitle is deprecated, use @title instead',
        false,
        {
          id: '@appuniversum/ember-appuniversum.au-accordion.dropdownTitle-argument',
          until: "1.0.0",
          for: '@appuniversum/ember-appuniversum',
          since: {
            enabled: '0.5.0'
          }
        }
      );

      return this.args.dropdownTitle;
    } else if (this.args.title) {
      return this.args.title;
    } else {
      return undefined;
    }
  }

  get buttonLabel() {
    if (this.args.dropdownButtonLabel) {
      deprecate(
        '@dropdownButtonLabel is deprecated, use @buttonLabel instead',
        false,
        {
          id: '@appuniversum/ember-appuniversum.au-accordion.dropdownButtonLabel-argument',
          until: "1.0.0",
          for: '@appuniversum/ember-appuniversum',
          since: {
            enabled: '0.5.0'
          }
        }
      );

      return this.args.dropdownButtonLabel;
    } else if (this.args.buttonLabel) {
      return this.args.buttonLabel;
    } else {
      return undefined;
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
