import { AuButton } from '@appuniversum/ember-appuniversum';
import FloatingUiModifier from '@appuniversum/ember-appuniversum/private/modifiers/floating-ui';
import { hash } from '@ember/helper';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { focusTrap } from 'ember-focus-trap';
import { modifier } from 'ember-modifier';

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

  <template>
    {{~!~}}
    <div class="au-c-dropdown" ...attributes>
      <AuButton
        {{this.reference}}
        @skin={{this.skin}}
        @size={{@size}}
        @icon={{this.icon}}
        @iconAlignment={{this.iconAlignment}}
        @hideText={{@hideText}}
        @alert={{@alert}}
        aria-haspopup="true"
        aria-expanded="{{if this.dropdownOpen 'true' 'false'}}"
        type="button"
        {{on "click" this.toggleDropdown}}
        data-test-dropdown-button
        data-au-dropdown-toggle
      >
        <span class="au-c-dropdown__name" data-test-dropdown-title>
          {{@title}}
        </span>
      </AuButton>
      {{#if this.dropdownOpen}}
        <div
          {{this.floatingUi
            this.referenceElement
            this.arrowElement
            defaultPlacement=this.alignment
            options=this.floatingUiOptions
          }}
          class="au-c-dropdown__floater"
        >
          <div {{this.arrow}} class="au-c-dropdown__arrow"></div>
          <div
            {{focusTrap
              shouldSelfFocus=true
              focusTrapOptions=(hash
                clickOutsideDeactivates=this.clickOutsideDeactivates
              )
            }}
            {{on "click" this.closeDropdown}}
            class="au-c-dropdown__menu"
            role="menu"
            tabindex="-1"
          >
            {{yield}}
          </div>
        </div>
      {{/if}}
    </div>
    {{~!~}}
  </template>
}
