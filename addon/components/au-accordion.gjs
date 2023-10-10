import {
  AuButton,
  AuContent,
  AuIcon,
  AuLoader,
  AuToolbar,
} from '@appuniversum/ember-appuniversum';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import autoFocus from '@zestia/ember-auto-focus/modifiers/auto-focus';

export default class AuAccordion extends Component {
  @tracked isOpen = false;

  get loading() {
    if (this.args.loading) return 'is-loading';
    else return '';
  }

  get iconOpen() {
    if (this.args.iconOpen) {
      return this.args.iconOpen;
    } else {
      return 'nav-down';
    }
  }

  get iconClosed() {
    if (this.args.iconClosed) {
      return this.args.iconClosed;
    } else {
      return 'nav-right';
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
        {{on "click" this.toggleAccordion}}
        data-test-accordion-toggle
        as |Group|
      >
        <Group>
          <div>
            <AuButton
              @skin="link"
              aria-expanded="{{if this.isOpen 'true' 'false'}}"
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
          {{#if this.isOpen}}
            <AuIcon
              @icon={{this.iconOpen}}
              @alignment="left"
              @size="large"
              @ariaHidden={{true}}
              data-test-accordion-icon-open={{this.iconOpen}}
            />
          {{else}}
            <AuIcon
              @icon={{this.iconClosed}}
              @alignment="left"
              @size="large"
              @ariaHidden={{true}}
              data-test-accordion-icon-closed={{this.iconClosed}}
            />
          {{/if}}
        </Group>
      </AuToolbar>
      {{#if this.isOpen}}
        <AuContent {{autoFocus}} tabindex="0" data-test-accordion-content>
          {{#if this.loading}}
            <AuLoader data-test-accordion-loader />
          {{else}}
            {{yield}}
          {{/if}}
        </AuContent>
      {{/if}}
    </div>
  </template>
}
