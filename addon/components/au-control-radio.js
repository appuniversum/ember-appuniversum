import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class AuControlRadio extends Component {
  get disabled() {
    if (this.args.disabled)
      return "is-disabled";
    else
      return "";
  }

  @action
  onChange(event) {
    if (this.args.onChange) {
      this.args.onChange(event.target.value);
    }
  }
}
