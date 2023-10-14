import linkToModels from '@appuniversum/ember-appuniversum/private/helpers/link-to-models';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import { LinkTo } from '@ember/routing';
import Component from '@glimmer/component';

export default class AuNavigationLink extends Component {
  // this is a workaround for https://github.com/emberjs/ember.js/issues/19693
  get queryParams() {
    if (this.args.query) {
      return this.args.query;
    } else {
      return {};
    }
  }

  @action
  linkFocus() {
    // Focus content window
    document.querySelectorAll('#content')[0].focus();
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
