import Component from '@glimmer/component';

const SKIN_CLASSES = {
  primary: 'au-c-link',
  secondary: 'au-c-link au-c-link--secondary',
};

export default class AuLinkExternal extends Component {
  get skin() {
    if (SKIN_CLASSES[this.args.skin]) {
      return SKIN_CLASSES[this.args.skin];
    } else {
      return SKIN_CLASSES.primary;
    }
  }

  get width() {
    if (this.args.width == "block")
      return "au-c-link--block";
    else
      return "";
  }
}
