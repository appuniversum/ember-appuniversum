import Component from '@glimmer/component';
import AuIcon, { type AuIconSignature } from './au-icon';

const SKIN_CLASSES = {
  primary: 'au-c-link',
  secondary: 'au-c-link au-c-link--secondary',
  button: 'au-c-button au-c-button--primary',
  'button-secondary': 'au-c-button au-c-button--secondary',
  'button-naked': 'au-c-button au-c-button--naked',
};

export interface AuLinkExternalSignature {
  Args: {
    hideText?: boolean;
    icon?: AuIconSignature['Args']['icon'];
    iconAlignment?: 'left' | 'right';
    newTab?: boolean;
    skin?:
      | 'primary'
      | 'secondary'
      | 'button'
      | 'button-secondary'
      | 'button-naked';
    width?: 'block';
  };
  Blocks: {
    default: [];
  };
  Element: HTMLAnchorElement;
}

export default class AuLinkExternal extends Component<AuLinkExternalSignature> {
  get skinClass() {
    return this.args.skin ? SKIN_CLASSES[this.args.skin] : SKIN_CLASSES.primary;
  }

  get widthClass() {
    if (this.args.width === 'block')
      if (this.args.skin?.startsWith('button')) return 'au-c-button--block';
      else return 'au-c-link--block';
    else return '';
  }

  get isIconLeft() {
    return !!this.args.icon && this.iconAlignment === 'left';
  }

  get isIconRight() {
    return !!this.args.icon && this.iconAlignment === 'right';
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

  get newTab() {
    return typeof this.args.newTab === 'boolean' ? this.args.newTab : true;
  }

  // We don't want whitespace between our component and the outer template tag since that's visible in the app (inline element): https://github.com/emberjs/rfcs/issues/982
  // prettier-ignore
  <template><a
      class="{{this.skinClass}} {{this.widthClass}} {{this.iconOnlyClass}}"
      target={{if this.newTab "_blank"}}
      rel={{if this.newTab "noopener noreferrer"}}
      href=""
      ...attributes
    >
      {{#if this.isIconLeft}}
        {{! @glint-expect-error: this.isIconLeft ensures that @icon is set }}
        <AuIcon @icon={{@icon}} />
      {{/if}}
      {{#if @hideText}}
        <span class="au-u-hidden-visually">{{yield}}</span>
      {{else}}
        {{yield}}
      {{/if}}
      {{#if this.isIconRight}}
        {{! @glint-expect-error: this.isIconLeft ensures that @icon is set }}
        <AuIcon @icon={{@icon}} />
      {{/if}}
    </a></template>
}
