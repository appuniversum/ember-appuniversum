import { on } from '@ember/modifier';
import { action } from '@ember/object';
import { LinkTo } from '@ember/routing';
import type RouterService from '@ember/routing/router-service';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import AuBrand from './au-brand';
import AuLink from './au-link';
import { QuestionCircleIcon } from './icons/question-circle';

export interface AuMainHeaderSignature {
  Args: {
    appTitle: string;
    brandLink?: string;
    contactRoute?: string;
    homeRoute?: string;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLElement;
}

export default class AuMainHeader extends Component<AuMainHeaderSignature> {
  @action
  headerLinkFocus() {
    document.querySelector<HTMLElement>('#main')?.focus();
  }

  <template>
    <header class="au-c-main-header" ...attributes>
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
                @icon={{QuestionCircleIcon}}
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
  @service declare router: RouterService;

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
