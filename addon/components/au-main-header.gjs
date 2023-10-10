import { AuBrand, AuLink } from '@appuniversum/ember-appuniversum';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import { LinkTo } from '@ember/routing';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class AuMainHeader extends Component {
  @action
  headerLinkFocus() {
    document.querySelector('#main')?.focus();
  }

  <template>
    <header class="au-c-main-header">
      <div class="au-c-main-header__title-group">
        <NavigationNarrator />
        <AuBrand @link="{{@brandLink}}" />
        {{#if @homeRoute}}
          <LinkTo
            @route={{@homeRoute}}
            class="au-c-main-header__title au-c-main-header__title--link"
            {{on "click" this.headerLinkFocus}}
          >
            {{@appTitle}}
          </LinkTo>
        {{else}}
          <p class="au-c-main-header__title">
            {{@appTitle}}
          </p>
        {{/if}}
        <a href="#content" class="au-c-main-header__skiplink">
          Naar de hoofdinhoud
        </a>
      </div>
      <nav class="au-c-main-header__actions">
        <ul class="au-c-list-horizontal">
          {{#if @contactRoute}}
            <li class="au-c-list-horizontal__item">
              <AuLink
                @route={{@contactRoute}}
                @skin="secondary"
                @icon="question-circle"
              >
                Contacteer ons
              </AuLink>
            </li>
          {{/if}}
          <li class="au-c-list-horizontal__item">
            {{yield}}
          </li>
        </ul>
      </nav>
    </header>
  </template>
}

class NavigationNarrator extends Component {
  @service router;

  get activeRoute() {
    return 'Nieuwe pagina: ' + this.router.currentRouteName;
  }

  <template>
    <div
      aria-live="assertive"
      aria-controls="main"
      aria-atomic="true"
      aria-relevant="all"
    >
      <span class="au-u-hidden-visually">
        {{this.activeRoute}}
      </span>
    </div>
  </template>
}
