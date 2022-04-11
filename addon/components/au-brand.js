import Component from '@glimmer/component';
import { deprecate } from '@ember/debug';
import { guidFor } from '@ember/object/internals';

export default class AuBrand extends Component {
  id = guidFor(this);

  get link() {
    if (this.args.brandLink) {
      deprecate('@brandLink is deprecated, use @link instead', false, {
        id: '@appuniversum/ember-appuniversum.au-brand.brandLink-argument',
        until: '2.0.0',
        for: '@appuniversum/ember-appuniversum',
        since: {
          enabled: '0.5.0',
        },
      });

      return this.args.brandLink;
    } else if (this.args.link) {
      return this.args.link;
    } else {
      return undefined;
    }
  }

  get tagline() {
    if (this.args.tagline) return 'au-c-brand--tagline';
    else return '';
  }
}
