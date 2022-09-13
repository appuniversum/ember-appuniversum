import Component from '@glimmer/component';

const SKIN_CLASSES = {
  primary: 'au-c-link',
  secondary: 'au-c-link au-c-link--secondary',
  button: 'au-c-button au-c-button--primary',
  'button-secondary': 'au-c-button au-c-button--secondary',
  'button-naked': 'au-c-button au-c-button--naked',
};

export default class AuLink extends Component {
  get skin() {
    if (SKIN_CLASSES[this.args.skin]) {
      return SKIN_CLASSES[this.args.skin];
    } else {
      return SKIN_CLASSES.primary;
    }
  }

  get width() {
    if (this.args.width == 'block')
      if ((this.args.skin == 'button') | 'button-secondary')
        return 'au-c-button--block';
      else return 'au-c-link--block';
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

  get active() {
    if (this.args.active) return 'is-active';
    else return '';
  }

  get iconAlignment() {
    if (this.args.iconAlignment) return this.args.iconAlignment;
    else return 'left';
  }
}
