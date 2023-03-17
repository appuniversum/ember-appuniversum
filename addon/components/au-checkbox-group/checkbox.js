import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class Checkbox extends Component {
  get groupValue() {
    return this.args.groupValue || [];
  }

  get isCheckedInGroup() {
    return this.groupValue.includes(this.args.name);
  }

  @action
  onChange(checked, event) {
    const { onChangeGroup } = this.args;

    const { groupValue } = this;
    const { name } = this.args;

    let updatedGroupValue;

    if (checked) {
      updatedGroupValue = [...groupValue, name];
    } else {
      updatedGroupValue = groupValue.filter((n) => n !== name);
    }

    onChangeGroup?.(updatedGroupValue, event);
  }
}
