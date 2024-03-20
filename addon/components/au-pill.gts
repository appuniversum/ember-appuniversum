import { on } from '@ember/modifier';
import { LinkTo } from '@ember/routing';
import Component from '@glimmer/component';
import AuIcon, { type AuIconSignature } from './au-icon';
import linkToModels from '../private/helpers/link-to-models';

const PILL_SIZES = ['small'];

export interface AuPillSignature {
  Args: {
    actionIcon?: AuIconSignature['Args']['icon'];
    actionText?: string;
    draft?: boolean;
    href?: string;
    model?: unknown;
    models?: unknown[];
    onClickAction?: () => void;
    route?: string;
    size?: 'small';
    skin?:
      | 'action'
      | 'border'
      | 'error'
      | 'link'
      | 'ongoing'
      | 'success'
      | 'warning';
    query?: Record<string, unknown>;
  } & InnerSignature['Args'];
  Blocks: {
    default: [];
  };
  Element: HTMLSpanElement | HTMLAnchorElement;
}

export default class AuPill extends Component<AuPillSignature> {
  get skin() {
    if (this.args.skin == 'border') return 'au-c-pill--border';
    if (this.args.skin == 'action') return 'au-c-pill--ongoing';
    if (this.args.skin == 'ongoing') return 'au-c-pill--ongoing';
    if (this.args.skin == 'link') return 'au-c-pill--link';
    if (this.args.skin == 'success') return 'au-c-pill--success';
    if (this.args.skin == 'warning') return 'au-c-pill--warning';
    if (this.args.skin == 'error') return 'au-c-pill--error';
    return 'au-c-pill--default';
  }

  get size() {
    if (this.args.size && PILL_SIZES.includes(this.args.size))
      return `au-c-pill--${this.args.size}`;
    return '';
  }

  get actionSize() {
    if (this.args.size && PILL_SIZES.includes(this.args.size))
      return `au-c-pill-action--${this.args.size}`;
    return '';
  }

  get draft() {
    if (this.args.draft) return 'au-c-pill--draft';
    return '';
  }

  // this is a workaround for https://github.com/emberjs/ember.js/issues/19693
  get queryParams() {
    if (this.args.query) {
      return this.args.query;
    } else {
      return {};
    }
  }

  <template>
    {{#if @onClickAction}}
      <span class="au-c-pill-container">
        <span
          class="au-c-pill {{this.skin}} {{this.size}} {{this.draft}}"
          ...attributes
        >
          <Inner
            @icon={{@icon}}
            @iconAlignment={{@iconAlignment}}
            @hideText={{@hideText}}
          >{{yield}}</Inner>
        </span>
        <button
          class="au-c-pill-action {{this.actionSize}} {{this.skin}}"
          type="button"
          {{on "click" @onClickAction}}
        >
          {{#if @actionIcon}}<AuIcon @icon={{@actionIcon}} />{{/if}}
          <span class="au-u-hidden-visually">{{@actionText}}</span>
        </button>
      </span>
    {{else}}
      {{#if @route}}
        <LinkTo
          class="au-c-pill au-c-pill--hover
            {{this.skin}}
            {{this.size}}
            {{this.draft}}"
          @route={{@route}}
          @models={{linkToModels @model @models}}
          @query={{this.queryParams}}
          ...attributes
        >
          <Inner
            @icon={{@icon}}
            @iconAlignment={{@iconAlignment}}
            @hideText={{@hideText}}
          >{{yield}}</Inner>
        </LinkTo>
      {{else if @href}}
        <a
          href={{@href}}
          class="au-c-pill au-c-pill--hover
            {{this.skin}}
            {{this.size}}
            {{this.draft}}"
          ...attributes
        >
          <Inner
            @icon={{@icon}}
            @iconAlignment={{@iconAlignment}}
            @hideText={{@hideText}}
          >{{yield}}</Inner>
        </a>
      {{else}}
        <span
          class="au-c-pill {{this.skin}} {{this.size}} {{this.draft}}"
          ...attributes
        >
          <Inner
            @icon={{@icon}}
            @iconAlignment={{@iconAlignment}}
            @hideText={{@hideText}}
          >{{yield}}</Inner>
        </span>
      {{/if}}
    {{/if}}
  </template>
}

interface InnerSignature {
  Args: {
    icon?: AuIconSignature['Args']['icon'];
    iconAlignment?: 'left' | 'right';
    hideText?: boolean;
  };
  Blocks: {
    default: [];
  };
}

class Inner extends Component<InnerSignature> {
  get isIconLeft() {
    return !!this.args.icon && this.args.iconAlignment !== 'right';
  }

  get isIconRight() {
    return !!this.args.icon && this.args.iconAlignment === 'right';
  }

  <template>
    {{#if @icon}}
      {{#if this.isIconLeft}}
        <AuIcon @icon={{@icon}} />
      {{/if}}
    {{/if}}
    {{#if @hideText}}
      <span class="au-u-hidden-visually">{{yield}}</span>
    {{else}}
      {{yield}}
    {{/if}}
    {{#if @icon}}
      {{#if this.isIconRight}}
        <AuIcon @icon={{@icon}} />
      {{/if}}
    {{/if}}
  </template>
}
