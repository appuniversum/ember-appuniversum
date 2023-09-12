import Component from '@glimmer/component';
import { deprecate } from '@ember/debug';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { modifier } from 'ember-modifier';
import FloatingUiModifier from '@appuniversum/ember-appuniversum/private/modifiers/floating-ui';

export default class AuDropdown extends Component {
  @tracked referenceElement = undefined;
  @tracked arrowElement = undefined;
  @tracked dropdownOpen = false;
  floatingUi = FloatingUiModifier;

  reference = modifier(
    (element) => {
      this.referenceElement = element;
    },
    { eager: false },
  );

  arrow = modifier(
    (element) => {
      this.arrowElement = element;
    },
    { eager: false },
  );

  @action
  openDropdown() {
    this.dropdownOpen = true;
  }

  @action
  closeDropdown() {
    this.dropdownOpen = false;
    this.args.onClose?.();
  }

  @action
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;

    if (!this.dropdownOpen) {
      this.args.onClose?.();
    }
  }

  @action
  clickOutsideDeactivates(event) {
    let isClosedByToggleButton = this.referenceElement.contains(event.target);

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

  get alignment() {
    if (this.args.alignment == 'left') return 'bottom-start';
    if (this.args.alignment == 'right') return 'bottom-end';
    return 'bottom';
  }

  get skin() {
    if (this.args.skin) return this.args.skin;
    else return 'naked';
  }

  get icon() {
    if (this.args.icon) return this.args.icon;
    else return 'chevron-down';
  }

  get iconAlignment() {
    if (this.args.iconAlignment) return this.args.iconAlignment;
    else return 'right';
  }

  get floatingUiOptions() {
    return {
      arrow: {
        offset: 0,
      },
    };
  }
}
