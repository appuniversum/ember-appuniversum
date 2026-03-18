import { LinkTo } from '@ember/routing';
import Component from '@glimmer/component';
import AuIcon, { type AuIconSignature } from './au-icon';
import linkToModels from '../private/helpers/link-to-models';

const SKIN_CLASSES = {
  primary: 'au-c-link',
  secondary: 'au-c-link au-c-link--secondary',
  bold: 'au-c-link au-c-link--bold',
  button: 'au-c-button au-c-button--primary',
  'button-secondary': 'au-c-button au-c-button--secondary',
  'button-naked': 'au-c-button au-c-button--naked',
};

export interface AuLinkSignature {
  Args: {
    active?: boolean;
    skin?:
      | 'primary'
      | 'secondary'
      | 'bold'
      | 'button'
      | 'button-secondary'
      | 'button-naked';
    width?: 'block';
    query?: Record<string, unknown>;
    icon?: AuIconSignature['Args']['icon'];
    route: string;
    hideText?: boolean;
    model?: unknown;
    models?: unknown[];
    iconAlignment?: 'left' | 'right';
  };
  Blocks: {
    default: [];
  };
  Element: HTMLAnchorElement; // TODO: Retrieve this from the LinkTo component types in some way
}

export default class AuLink extends Component<AuLinkSignature> {
  get skinClass() {
    return this.args.skin ? SKIN_CLASSES[this.args.skin] : SKIN_CLASSES.primary;
  }

  get widthClass() {
    if (this.args.width === 'block')
      if (this.args.skin?.startsWith('button')) return 'au-c-button--block';
      else return 'au-c-link--block';
    else return '';
  }

  get activeClass() {
    if (this.args.active) return 'is-active';
    else return '';
  }

  // this is a workaround for https://github.com/emberjs/ember.js/issues/19693
  get queryParams() {
    if (this.args.query) {
      return this.args.query;
    } else {
      return {};
    }
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

  // We don't want whitespace between our component and the outer template tag since that's visible in the app (inline element): https://github.com/emberjs/rfcs/issues/982
  // prettier-ignore
  <template><LinkTo
      @route={{@route}}
      @models={{linkToModels @model @models}}
      @query={{this.queryParams}}
      class="{{this.skinClass}}
        {{this.activeClass}}
        {{this.widthClass}}
        {{this.iconOnlyClass}}"
      ...attributes
    >
      {{~#if this.isIconLeft~}}
        {{! @glint-expect-error: this.isIconLeft ensures that @icon is set }}
        <AuIcon @icon={{@icon}} />
      {{/if}}
      {{#if @hideText}}
        <span class="au-u-hidden-visually">{{yield}}</span>
      {{else}}
        {{yield}}
      {{/if}}
      {{#if this.isIconRight}}
        {{! @glint-expect-error: this.isIconRight ensures that @icon is set }}
        <AuIcon @icon={{@icon}} />
      {{~/if~}}
    </LinkTo></template>
}
