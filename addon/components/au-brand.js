import Component from '@glimmer/component';

export default class AuBrand extends Component {
  get tagline() {
    if (this.args.tagline)
      return "au-c-brand--tagline";
    else
      return "";
  }
}
