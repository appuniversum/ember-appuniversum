import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

export default class AuRadioGroupComponent extends Component {
  uniqueName = guidFor(this);

  get alignmentClass() {
    if (this.args.alignment == 'inline') return 'au-c-control-group--inline';
    else return '';
  }
}
