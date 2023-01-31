import linkToModels from '@appuniversum/ember-appuniversum/private/helpers/link-to-models';
import Component from '@glimmer/component';

const PILL_SIZES = ['small'];

export default class AuPillComponent extends Component {
  linkToModels = linkToModels;

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
    if (this.args.draft == true) return 'au-c-pill--draft';
    return '';
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
}
