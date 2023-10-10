import {
  AuBadge,
  AuButton,
  AuContent,
  AuIcon,
} from '@appuniversum/ember-appuniversum';
import { hash } from '@ember/helper';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class AuCard extends Component {
  @tracked isExpanded = false;

  constructor() {
    super(...arguments);

    if (this.args.isOpenInitially) {
      this.isExpanded = true;
    }
  }

  get sectionOpen() {
    if (this.args.manualControl) {
      return this.args.isExpanded;
    } else {
      return this.isExpanded;
    }
  }

  get size() {
    if (this.args.size == 'small') return 'au-c-card--padding-small';
    if (this.args.size == 'tiny') return 'au-c-card--padding-tiny';
    if (this.args.size == 'flush') return '';
    else return 'au-c-card--padding';
  }

  get flex() {
    if (this.args.flex) return 'au-c-card--flex';
    return '';
  }

  get expandable() {
    if (this.args.expandable) return 'au-c-card--expandable';
    return '';
  }

  get shadow() {
    if (this.args.shadow) return 'au-c-card--shadow';
    return '';
  }

  get divided() {
    if (this.args.divided) return 'au-c-card--divided';
    return '';
  }

  get textCenter() {
    if (this.args.textCenter) return 'au-c-card--text-center';
    return '';
  }

  get standOut() {
    if (this.args.standOut) return 'au-c-card--standout';
    return '';
  }

  @action
  openSection() {
    if (this.args.manualControl) {
      this.args.openSection();
    } else {
      this.isExpanded = !this.isExpanded;
    }
  }

  <template>
    <article
      class="au-c-card au-c-card--fill
        {{this.size}}
        {{this.flex}}
        {{this.expandable}}
        {{this.shadow}}
        {{this.divided}}
        {{this.textCenter}}
        {{this.standOut}}"
      ...attributes
    >
      {{#if this.expandable}}
        {{#if this.shadow}}
          <div
            class="au-c-card__clickable"
            role="button"
            {{on "click" this.openSection}}
            {{! template-lint-disable require-presentational-children}}
            {{! this triggers a false positive for components: https://github.com/ember-template-lint/ember-template-lint/issues/2334}}
          >
            <AuButton
              @size="small"
              @skin="link"
              class="au-c-card__toggle"
              aria-hidden="true"
              focusable="false"
              aria-expanded={{if this.sectionOpen "true" "false"}}
            >
              {{#if this.sectionOpen}}
                <AuIcon @icon="remove" @size="large" @ariaHidden={{true}} />
                <span class="au-u-hidden-visually au-c-card__toggle-false">
                  Verberg
                </span>
              {{else}}
                <AuIcon @icon="add" @size="large" @ariaHidden={{true}} />
                <span class="au-u-hidden-visually au-c-card__toggle-true">
                  Toon
                </span>
              {{/if}}
            </AuButton>
            {{yield (hash header=Header)}}
          </div>
        {{else}}
          <div
            class="au-c-card__clickable"
            role="button"
            {{on "click" this.openSection}}
            {{! template-lint-disable require-presentational-children}}
            {{! this triggers a false positive for components: https://github.com/ember-template-lint/ember-template-lint/issues/2334}}
          >
            {{yield (hash header=Header)}}
            <AuButton
              @size="small"
              @skin="link"
              class="au-c-card__toggle"
              aria-hidden="true"
              focusable="false"
              aria-expanded={{if this.sectionOpen "true" "false"}}
            >
              {{#if this.sectionOpen}}
                <AuIcon @icon="nav-up" @size="large" @ariaHidden={{true}} />
                <span class="au-u-hidden-visually au-c-card__toggle-false">
                  Verberg
                </span>
              {{else}}
                <AuIcon @icon="nav-down" @size="large" @ariaHidden={{true}} />
                <span class="au-u-hidden-visually au-c-card__toggle-true">
                  Toon
                </span>
              {{/if}}
            </AuButton>
          </div>
        {{/if}}
        {{#if this.sectionOpen}}
          <div tabindex="0">
            {{yield (hash content=Content)}}
          </div>
        {{/if}}
      {{else}}
        {{yield (hash header=Header)}}
        {{yield (hash content=Content)}}
      {{/if}}

      {{yield (hash footer=Footer)}}
    </article>
  </template>
}

class Header extends Component {
  get badgeSkin() {
    if (this.args.badgeSkin == 'border') return 'au-c-badge--border';
    if (this.args.badgeSkin == 'action') return 'au-c-badge--action';
    if (this.args.badgeSkin == 'brand') return 'au-c-badge--brand';
    if (this.args.badgeSkin == 'success') return 'au-c-badge--success';
    if (this.args.badgeSkin == 'warning') return 'au-c-badge--warning';
    if (this.args.badgeSkin == 'error') return 'au-c-badge--error';
    return 'au-c-badge--default';
  }

  get badgeSize() {
    if (this.args.badgeSize == 'small') return 'au-c-badge--small';
    return '';
  }

  <template>
    <div class="au-c-card__header" ...attributes>
      {{#if @badgeIcon}}
        <AuBadge
          @size="{{@badgeSize}}"
          @skin="{{@badgeSkin}}"
          @icon="{{@badgeIcon}}"
        />
      {{else if @badgeNumber}}
        <AuBadge
          @size="{{@badgeSize}}"
          @skin="{{@badgeSkin}}"
          @number="{{@badgeNumber}}"
        />
      {{/if}}

      {{#if (has-block)}}
        <div>
          {{yield}}
        </div>
      {{/if}}
    </div>
  </template>
}

const Content = <template>
  {{#if (has-block)}}
    <AuContent class="au-c-card__content" ...attributes>
      {{yield}}
    </AuContent>
  {{/if}}
</template>;

const Footer = <template>
  {{#if (has-block)}}
    <AuContent class="au-c-card__footer" ...attributes>
      {{yield}}
    </AuContent>
  {{/if}}
</template>;
