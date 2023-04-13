import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class AuToggleSwitch extends Component {
  get alignmentClass() {
    if (this.args.alignment === 'right') return 'au-c-toggle-switch--alignment-right';
    else return '';
  }

  @action
  onChange(event) {
    if (this.args.onChange) {
      this.args.onChange(event.target.checked, event);
    }
  }
}
