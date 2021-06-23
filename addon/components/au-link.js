import Component from '@glimmer/component';

const SKIN_CLASSES = {
  primary: 'au-c-link',
  secondary: 'au-c-link au-c-link--secondary',
  button: 'au-c-button',
  'button-secondary': 'au-c-button au-c-button--secondary',
};

export default class AuLink extends Component {
  get skin() {
    if (SKIN_CLASSES[this.args.skin]) {
      return SKIN_CLASSES[this.args.skin];
    } else {
      return SKIN_CLASSES.primary;
    }
  }

  get active() {
    if (this.args.active)
      return 'is-active';
    else
      return '';
  }
}
