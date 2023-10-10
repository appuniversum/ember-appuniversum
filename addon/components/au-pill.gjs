import { AuIcon } from '@appuniversum/ember-appuniversum';
import linkToModels from '@appuniversum/ember-appuniversum/private/helpers/link-to-models';
import { on } from '@ember/modifier';
import { LinkTo } from '@ember/routing';
import Component from '@glimmer/component';

// TODO: replace these with the named imports from ember-truth-helpers v4 once our dependencies support that version
import eq from 'ember-truth-helpers/helpers/eq';
import notEq from 'ember-truth-helpers/helpers/not-eq';

const PILL_SIZES = ['small'];

export default class AuPill extends Component {
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
    if (PILL_SIZES.includes(this.args.size))
      return `au-c-pill--${this.args.size}`;
    return '';
  }

  get actionSize() {
    if (PILL_SIZES.includes(this.args.size))
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
          <AuIcon @icon={{@actionIcon}} />
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

const Inner = <template>
  {{#if @icon}}
    {{#if (notEq @iconAlignment "right")}}
      <AuIcon @icon={{@icon}} />
    {{/if}}
  {{/if}}
  {{#if @hideText}}
    <span class="au-u-hidden-visually">{{yield}}</span>
  {{else}}
    {{yield}}
  {{/if}}
  {{#if @icon}}
    {{#if (eq @iconAlignment "right")}}
      <AuIcon @icon={{@icon}} />
    {{/if}}
  {{/if}}
</template>;
