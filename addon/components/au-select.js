import Component from '@glimmer/component';
import { action } from '@ember/object';

const CLEAR_VALUE = 'CLEAR';
const EMPTY = null;

export default class AuSelectComponent extends Component {
  CLEAR_VALUE = CLEAR_VALUE;

  @action
  handleSelectionChange(event) {
    let optionIndexOrClear = event.target.value;
    let selectedOption = EMPTY;

    if (optionIndexOrClear !== CLEAR_VALUE) {
      selectedOption = this.args.options[optionIndexOrClear];
    }

    this.args.onChange?.(selectedOption);
  }
}
