import { on } from '@ember/modifier';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { modifier } from 'ember-modifier';
import AuButton from './au-button.gts';
import AuIcon, { type AuIconSignature } from './au-icon.gts';
import AuLoader from './au-loader.gts';
import AuToolbar from './au-toolbar.gts';
import { NavDownIcon } from './icons/nav-down.gts';
import { NavRightIcon } from './icons/nav-right.gts';
import type Owner from '@ember/owner';

const autofocus = modifier(function autofocus(element: HTMLElement) {
  element.focus();
});

export interface AuAccordionSignature {
  Args: {
    buttonLabel?: string;
    iconClosed?: AuIconSignature['Args']['icon'];
    iconOpen?: AuIconSignature['Args']['icon'];
    isOpenInitially?: boolean;
    loading?: boolean;
    reverse?: boolean;
    skin?: 'border';
    subtitle?: string;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

export default class AuAccordion extends Component<AuAccordionSignature> {
  @tracked isOpen;

  constructor(owner: Owner, args: AuAccordionSignature['Args']) {
    super(owner, args);

    this.isOpen = Boolean(this.args.isOpenInitially);
  }

  get loading() {
    if (this.args.loading) return 'is-loading';
    else return '';
  }

  get iconOpen() {
    if (this.args.iconOpen) {
      return this.args.iconOpen;
    } else {
      return NavDownIcon;
    }
  }

  get iconClosed() {
    if (this.args.iconClosed) {
      return this.args.iconClosed;
    } else {
      return NavRightIcon;
    }
  }

  get skin() {
    if (this.args.skin == 'border') return 'au-c-accordion--border';
    return '';
  }

  get reverse() {
    if (this.args.reverse) return 'au-c-accordion--reverse';
    return '';
  }

  @action
  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }

  <template>
    <div class="au-c-accordion {{this.skin}} {{this.reverse}}" ...attributes>
      <AuToolbar
        @nowrap={{true}}
        @reverse={{@reverse}}
        class="au-c-accordion__toggle"
        {{on "click" this.toggleAccordion}}
        data-test-accordion-toggle
        as |Group|
      >
        <Group>
          <div>
            <AuButton
              @skin="link"
              aria-expanded="{{if this.isOpen 'true' 'false'}}"
              class="au-c-accordion__button"
              data-test-accordion-button
            >
              {{@buttonLabel}}
            </AuButton>
            {{#if @subtitle}}
              <p data-test-accordion-subtitle>
                {{@subtitle}}
              </p>
            {{/if}}
          </div>
        </Group>
        <Group>
          <AuIcon
            @icon={{if this.isOpen this.iconOpen this.iconClosed}}
            @alignment="left"
            @size="large"
            @ariaHidden={{true}}
            class="au-c-accordion__icon"
          />
        </Group>
      </AuToolbar>
      {{#if this.isOpen}}
        <div tabindex="0" data-test-accordion-content {{autofocus}}>
          {{#if this.loading}}
            <AuLoader data-test-accordion-loader />
          {{else}}
            {{yield}}
          {{/if}}
        </div>
      {{/if}}
    </div>
  </template>
}
