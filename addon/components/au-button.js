import Component from '@glimmer/component';

const SKINS = ['primary', 'secondary', 'naked', 'link', 'link-secondary'];

export default class AuButton extends Component {
  get skin() {
    if (SKINS.includes(this.args.skin)) return this.args.skin;
    else if (this.args.skin === 'tertiary') return 'link'; // DEPRECATED
    else return 'primary';
  }

  get sizeClass() {
    if (this.args.size == 'large' && !this.skin.startsWith('link'))
      return 'au-c-button--large';
    else return '';
  }

  get widthClass() {
    if (this.args.width == 'block') return 'au-c-button--block';
    else return '';
  }

  get skinClass() {
    return `au-c-button--${this.skin}`;
  }

  get alertClass() {
    if (this.args.alert) return 'au-c-button--alert';
    else return '';
  }

  get disabledClass() {
    if (this.args.disabled) return 'is-disabled';
    else return '';
  }

  get loadingClass() {
    if (this.args.loading) return 'is-loading';
    else return '';
  }

  get loadingMessage() {
    if (this.args.loadingMessage) return this.args.loadingMessage;
    else return 'Aan het laden';
  }

  get iconAlignment() {
    if (this.args.iconAlignment) return this.args.iconAlignment;
    else return 'left';
  }

  get iconOnlyClass() {
    if (this.args.icon && this.args.hideText) return 'au-c-button--icon-only';
    return '';
  }
}
