import { on } from '@ember/modifier';
import { action } from '@ember/object';
import Component from '@glimmer/component';

// TODO: replace these with the named imports from ember-truth-helpers v4 once our dependencies support that version
import and from 'ember-truth-helpers/helpers/and';
import not from 'ember-truth-helpers/helpers/not';

export default class AuCheckbox extends Component {
  get groupValue() {
    return this.args.groupValue || [];
  }

  get isCheckedInGroup() {
    const { value } = this.args;
    return this.groupValue.includes(value);
  }

  get checked() {
    const { inGroup, checked } = this.args;
    return inGroup ? this.isCheckedInGroup : checked;
  }

  @action
  onChange(event) {
    const { checked } = event.target;
    const { inGroup, onChange, onChangeGroup } = this.args;

    if (inGroup && typeof onChangeGroup === 'function') {
      const { groupValue } = this;
      const { value } = this.args;

      let updatedGroupValue;

      if (checked) {
        updatedGroupValue = [...groupValue, value];
      } else {
        updatedGroupValue = groupValue.filter((n) => n !== value);
      }

      onChangeGroup(updatedGroupValue, event);
    } else if (typeof onChange === 'function') {
      onChange(checked, event);
    }
  }

  <template>
    {{~!~}}
    <label
      class="au-c-control au-c-control--checkbox
        {{if (and (not @inGroup) (not (has-block))) 'au-c-control--labelless'}}
        {{if @disabled 'is-disabled'}}"
    >
      <input
        type="checkbox"
        name={{@name}}
        value={{@value}}
        checked={{this.checked}}
        indeterminate={{@indeterminate}}
        disabled={{@disabled}}
        class="au-c-control__input"
        {{on "change" this.onChange}}
        ...attributes
      />
      <span class="au-c-control__indicator"></span>
      {{yield}}
    </label>
    {{~!~}}
  </template>
}
