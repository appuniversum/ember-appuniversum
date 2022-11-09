import Component from '@glimmer/component';

const SKIN_CLASSES = {
  primary: 'au-c-link',
  secondary: 'au-c-link au-c-link--secondary',
  button: 'au-c-button au-c-button--primary',
  'button-secondary': 'au-c-button au-c-button--secondary',
  'button-naked': 'au-c-button au-c-button--naked',
};

export default class AuLinkExternal extends Component {
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

  get iconAlignment() {
    if (this.args.iconAlignment) return this.args.iconAlignment;
    else return 'left';
  }

  get iconOnlyClass() {
    if (this.args.icon && this.args.hideText)
      if (this.args.skin && this.args.skin.startsWith('button'))
        return 'au-c-button--icon-only';
      else return 'au-c-link--icon-only';
    return '';
  }
}
