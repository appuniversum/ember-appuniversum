import linkToModels from '@appuniversum/ember-appuniversum/private/helpers/link-to-models';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import { LinkTo } from '@ember/routing';
import Component from '@glimmer/component';
import { ensureRoot } from '../services/ensure-root';

export interface AuNavigationLinkSignature {
  Args: {
    model?: unknown;
    models?: unknown[];
    query?: Record<string, unknown>;
    route: string;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLAnchorElement; // TODO: Retrieve this from the LinkTo component types in some way
}

export default class AuNavigationLink extends Component<AuNavigationLinkSignature> {
  // this is a workaround for https://github.com/emberjs/ember.js/issues/19693
  get queryParams() {
    if (this.args.query) {
      return this.args.query;
    } else {
      return {};
    }
  }

  @action
  linkFocus(event: MouseEvent) {
    ensureRoot(event.target as HTMLElement)
      .querySelector<HTMLElement>('#content')
      ?.focus?.();
  }

  <template>
    <LinkTo
      @route={{@route}}
      @models={{linkToModels @model @models}}
      @query={{this.queryParams}}
      class="au-c-list-navigation__link"
      ...attributes
      {{on "click" this.linkFocus}}
    >
      {{yield}}
    </LinkTo>
  </template>
}
