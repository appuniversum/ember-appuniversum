import Component from '@glimmer/component';
import GroupCheckbox from './au-checkbox-group/checkbox';

export default class AuCheckboxGroupComponent extends Component {
  GroupCheckbox = GroupCheckbox;

  get alignmentClass() {
    if (this.args.alignment == 'inline') return 'au-c-control-group--inline';
    else return '';
  }
}
