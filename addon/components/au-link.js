import Component from '@glimmer/component';
import { deprecate } from '@ember/debug';

const SKIN_CLASSES = {
  primary: 'au-c-link',
  secondary: 'au-c-link au-c-link--secondary',
  button: 'au-c-button au-c-button--primary',
  'button-secondary': 'au-c-button au-c-button--secondary',
  'button-naked': 'au-c-button au-c-button--naked',
};

export default class AuLink extends Component {
  get route() {
    if (this.args.linkRoute) {
      deprecate('@linkRoute is deprecated, use @route instead', false, {
        id: '@appuniversum/ember-appuniversum.au-link.linkRoute-argument',
        until: '2.0.0',
        for: '@appuniversum/ember-appuniversum',
        since: {
          enabled: '0.5.0',
        },
      });

      return this.args.linkRoute;
    } else if (this.args.route) {
      return this.args.route;
    } else {
      return undefined;
    }
  }

  get skinClass() {
    if (SKIN_CLASSES[this.args.skin]) {
      return SKIN_CLASSES[this.args.skin];
    } else {
      return SKIN_CLASSES.primary;
    }
  }

  get widthClass() {
    if (this.args.width == 'block')
      if (this.args.skin.startsWith('button')) return 'au-c-button--block';
      else return 'au-c-link--block';
    else return '';
  }

  get activeClass() {
    if (this.args.active) return 'is-active';
    else return '';
  }

  // this is a workaround for https://github.com/emberjs/ember.js/issues/19693
  // don't remove until we drop support for ember 3.27 and 3.28
  get queryParams() {
    if (this.args.query) {
      return this.args.query;
    } else {
      return {};
    }
  }

  get iconAlignment() {
    if (this.args.iconAlignment) return this.args.iconAlignment;
    else return 'left';
  }

  get iconOnlyClass() {
    if (this.args.icon && this.args.hideText)
      if (this.args.skin.startsWith('button')) return 'au-c-button--icon-only';
      else return 'au-c-link--icon-only';
    return '';
  }
}
