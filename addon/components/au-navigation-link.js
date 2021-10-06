import Component from "@glimmer/component";
import { deprecate } from '@ember/debug';
import { action } from "@ember/object";

export default class AuNavigationLink extends Component {
  get route() {
    if (this.args.linkRoute) {
      deprecate(
        '@linkRoute is deprecated, use @route instead',
        false,
        {
          id: '@appuniversum/ember-appuniversum.au-navigation-link.linkRoute-argument',
          until: "0.7.0",
          for: '@appuniversum/ember-appuniversum',
          since: {
            enabled: '0.5.0'
          }
        }
      );

      return this.args.linkRoute;
    } else if (this.args.route) {
      return this.args.route;
    } else {
      return undefined;
    }
  }

  // this is a workaround for https://github.com/emberjs/ember.js/issues/19693
  // don't remove until we drop support for ember 3.27 and 3.28
  get queryParams() {
    if (this.args.query) {
      return this.args.query;
    }
    else {
      return {};
    }
  }

  @action
  linkFocus() {
    // Focus content window
    document.querySelectorAll('#content')[0].focus();
  }
}
