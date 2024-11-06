import { hash } from '@ember/helper';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { focusTrap } from 'ember-focus-trap';
import { modifier } from 'ember-modifier';
import { ChevronDownIcon } from './icons/chevron-down';
import AuButton from './au-button';
import type { AuButtonSignature } from './au-button';
import floatingUi from '../private/modifiers/floating-ui';

export interface AuDropdownSignature {
  Args: {
    alignment?: 'left' | 'right';
    alert?: boolean;
    hideText?: boolean;
    icon?: AuButtonSignature['Args']['icon'];
    iconAlignment?: AuButtonSignature['Args']['iconAlignment'];
    onClose?: () => unknown;
    size?: AuButtonSignature['Args']['size'];
    skin?: AuButtonSignature['Args']['skin'];
    title?: string;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

export default class AuDropdown extends Component<AuDropdownSignature> {
  // We use declare here, so TS doesn't consider `undefined` as part of the type since the initialisation happens after the constructor.
  @tracked declare referenceElement: HTMLElement;
  @tracked declare arrowElement: HTMLElement;
  @tracked dropdownOpen = false;

  reference = modifier((element: HTMLElement) => {
    this.referenceElement = element;
  });

  arrow = modifier((element: HTMLElement) => {
    this.arrowElement = element;
  });

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
  clickOutsideDeactivates(event: Event) {
    const isClosedByToggleButton = this.referenceElement?.contains(
      event.target as HTMLElement,
    );

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
    else return ChevronDownIcon;
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

  // We don't want whitespace between our component and the outer template tag since that's visible in the app (inline element): https://github.com/emberjs/rfcs/issues/982
  // prettier-ignore
  <template><div class="au-c-dropdown" ...attributes>
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
          {{floatingUi
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
    </div></template>
}
