import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

export default class AuBrand extends Component {
  brandId = guidFor(this);

  get tagline() {
    if (this.args.tagline)
      return "au-c-brand--tagline";
    else
      return "";
  }
}
