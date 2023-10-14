import { AuIcon, AuLoader } from '@appuniversum/ember-appuniversum';
import Component from '@glimmer/component';

// TODO: replace these with the named imports from ember-truth-helpers v4 once our dependencies support that version
import and from 'ember-truth-helpers/helpers/and';
import eq from 'ember-truth-helpers/helpers/eq';

const SKINS = ['primary', 'secondary', 'naked', 'link', 'link-secondary'];

export default class AuButton extends Component {
  get skin() {
    if (SKINS.includes(this.args.skin)) return this.args.skin;
    else return 'primary';
  }

  get isDisabled() {
    return this.args.disabled || this.args.loading;
  }

  get sizeClass() {
    if (this.args.size == 'large' && !this.skin.startsWith('link'))
      return 'au-c-button--large';
    else return '';
  }

  get widthClass() {
    if (this.args.width == 'block') return 'au-c-button--block';
    else return '';
  }

  get skinClass() {
    return `au-c-button--${this.skin}`;
  }

  get alertClass() {
    if (this.args.alert) return 'au-c-button--alert';
    else return '';
  }

  get disabledClass() {
    if (this.isDisabled) return 'is-disabled';
    else return '';
  }

  get loadingClass() {
    if (this.args.loading) return 'is-loading';
    else return '';
  }

  get loadingMessage() {
    if (this.args.loadingMessage) return this.args.loadingMessage;
    else return 'Aan het laden';
  }

  get iconAlignment() {
    if (this.args.iconAlignment) return this.args.iconAlignment;
    else return 'left';
  }

  get iconOnlyClass() {
    if (this.args.icon && this.args.hideText) return 'au-c-button--icon-only';
    return '';
  }

  <template>
    <button
      class="au-c-button
        {{this.widthClass}}
        {{this.sizeClass}}
        {{this.skinClass}}
        {{this.alertClass}}
        {{this.loadingClass}}
        {{this.disabledClass}}
        {{this.iconOnlyClass}}
        {{if @wrap 'au-c-button--wrap'}}"
      disabled={{this.isDisabled}}
      type="button"
      ...attributes
    >
      {{#unless @loading}}
        {{#if (and @icon (eq this.iconAlignment "left"))}}
          <AuIcon @icon={{@icon}} />
        {{/if}}
      {{/unless}}

      {{#if @hideText}}
        {{#if @loading}}
          <span class="au-u-hidden-visually">{{this.loadingMessage}}</span>
          <AuLoader @padding="small" />
        {{else}}
          <span class="au-u-hidden-visually">{{yield}}</span>
        {{/if}}
      {{else}}
        {{#if @loading}}
          {{this.loadingMessage}}
          <AuLoader @padding="small" />
        {{else}}
          {{yield}}
        {{/if}}
      {{/if}}

      {{#unless @loading}}
        {{#if (and @icon (eq this.iconAlignment "right"))}}
          <AuIcon @icon={{@icon}} />
        {{/if}}
      {{/unless}}
    </button>
  </template>
}
