import { AuIcon } from '@appuniversum/ember-appuniversum';
import Component from '@glimmer/component';

// TODO: replace these with the named imports from ember-truth-helpers v4 once our dependencies support that version
import and from 'ember-truth-helpers/helpers/and';
import eq from 'ember-truth-helpers/helpers/eq';

const SKIN_CLASSES = {
  primary: 'au-c-link',
  secondary: 'au-c-link au-c-link--secondary',
  button: 'au-c-button au-c-button--primary',
  'button-secondary': 'au-c-button au-c-button--secondary',
  'button-naked': 'au-c-button au-c-button--naked',
};

export default class AuLinkExternal extends Component {
  get skinClass() {
    if (SKIN_CLASSES[this.args.skin]) {
      return SKIN_CLASSES[this.args.skin];
    } else {
      return SKIN_CLASSES.primary;
    }
  }

  get widthClass() {
    if (this.args.width == 'block')
      if (this.args.skin.startsWith('button')) return 'au-c-button--block';
      else return 'au-c-link--block';
    else return '';
  }

  get iconAlignment() {
    if (this.args.iconAlignment) return this.args.iconAlignment;
    else return 'left';
  }

  get iconOnlyClass() {
    if (this.args.icon && this.args.hideText)
      if (this.args.skin && this.args.skin.startsWith('button'))
        return 'au-c-button--icon-only';
      else return 'au-c-link--icon-only';
    return '';
  }

  <template>
    {{~!~}}
    <a
      class="{{this.skinClass}} {{this.widthClass}} {{this.iconOnlyClass}}"
      target="_blank"
      rel="noopener noreferrer"
      href=""
      ...attributes
    >
      {{#if (and @icon (eq this.iconAlignment "left"))}}
        <AuIcon @icon={{@icon}} />
      {{/if}}
      {{#if @hideText}}
        <span class="au-u-hidden-visually">{{yield}}</span>
      {{else}}
        {{yield}}
      {{/if}}
      {{#if (and @icon (eq this.iconAlignment "right"))}}
        <AuIcon @icon={{@icon}} />
      {{/if}}
    </a>
    {{~!~}}
  </template>
}
