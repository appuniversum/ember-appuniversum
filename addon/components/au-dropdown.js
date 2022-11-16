import Component from '@glimmer/component';
import { deprecate } from '@ember/debug';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AuDropdown extends Component {
  @tracked dropdownOpen = false;

  @action
  openDropdown() {
    this.dropdownOpen = true;
  }

  @action
  closeDropdown() {
    this.dropdownOpen = false;
  }

  @action
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  @action
  clickOutsideDeactivates(event) {
    let toggleButton = document.querySelector('[data-au-dropdown-toggle]');
    let isClosedByToggleButton = toggleButton.contains(event.target);

    if (!isClosedByToggleButton) {
      this.closeDropdown();
    }

    return true;
  }

  get buttonLabel() {
    if (this.args.buttonLabel) {
      deprecate('@dropdownLabel is no longer used, use @title instead', false, {
        id: '@appuniversum/ember-appuniversum.au-dropdown.dropdownButtonLabel-argument',
        until: '3.0.0',
        for: '@appuniversum/ember-appuniversum',
        since: {
          enabled: '1.7.0',
        },
      });

      return this.args.buttonLabel;
    } else {
      return undefined;
    }
  }

  // Dropdown alignment
  get alignment() {
    if (this.args.alignment == 'left') return 'au-c-dropdown__menu--left';
    if (this.args.alignment == 'right') return 'au-c-dropdown__menu--right';
    return '';
  }

  // Set default button skin
  get skin() {
    if (this.args.skin) return this.args.skin;
    else return 'naked';
  }

  // Set default button icon
  get icon() {
    if (this.args.icon) return this.args.icon;
    else return 'chevron-down';
  }

  // Set default icon alignment
  get iconAlignment() {
    if (this.args.iconAlignment) return this.args.iconAlignment;
    else return 'right';
  }
}
