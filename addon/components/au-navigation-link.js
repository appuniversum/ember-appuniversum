import linkToModels from '@appuniversum/ember-appuniversum/private/helpers/link-to-models';
import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class AuNavigationLink extends Component {
  linkToModels = linkToModels;

  // this is a workaround for https://github.com/emberjs/ember.js/issues/19693
  // don't remove until we drop support for ember 3.27 and 3.28
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
}
