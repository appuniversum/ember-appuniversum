import { on } from '@ember/modifier';
import { action } from '@ember/object';
import Component from '@glimmer/component';

// TODO: replace these with the named imports from ember-truth-helpers v4 once our dependencies support that version
import and from 'ember-truth-helpers/helpers/and';
import not from 'ember-truth-helpers/helpers/not';

export interface AuCheckboxSignature {
  Args: {
    checked?: boolean;
    disabled?: boolean;
    groupValue?: string[];
    indeterminate?: boolean;
    inGroup?: boolean;
    name?: string;
    onChange?: (checked: boolean, event: Event) => void;
    onChangeGroup?: (newValue: string[], event: Event) => void;
    value?: string;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLInputElement;
}

export default class AuCheckbox extends Component<AuCheckboxSignature> {
  get groupValue() {
    return this.args.groupValue || [];
  }

  get isCheckedInGroup() {
    const { value } = this.args;
    return value ? this.groupValue.includes(value) : false;
  }

  get checked() {
    const { inGroup, checked } = this.args;
    return inGroup ? this.isCheckedInGroup : checked;
  }

  @action
  onChange(event: Event) {
    const { checked } = event.target as HTMLInputElement;
    const { inGroup, onChange, onChangeGroup } = this.args;

    if (inGroup && typeof onChangeGroup === 'function') {
      const { groupValue } = this;
      const { value } = this.args;

      if (value) {
        let updatedGroupValue: string[];

        if (checked) {
          updatedGroupValue = [...groupValue, value];
        } else {
          updatedGroupValue = groupValue.filter((n) => n !== value);
        }

        onChangeGroup(updatedGroupValue, event);
      }
    } else if (typeof onChange === 'function') {
      onChange(checked, event);
    }
  }

  // We don't want whitespace between our component and the outer template tag since that's visible in the app (inline element): https://github.com/emberjs/rfcs/issues/982
  // prettier-ignore
  <template><label
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
    </label></template>
}
