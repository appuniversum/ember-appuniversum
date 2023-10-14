import { on } from '@ember/modifier';
import { action } from '@ember/object';
import Component from '@glimmer/component';

// TODO: replace these with the named imports from ember-truth-helpers v4 once our dependencies support that version
import and from 'ember-truth-helpers/helpers/and';
import not from 'ember-truth-helpers/helpers/not';

export default class AuToggleSwitch extends Component {
  get alignmentClass() {
    if (this.args.alignment === 'right')
      return 'au-c-toggle-switch--alignment-right';
    else return '';
  }

  @action
  onChange(event) {
    if (this.args.onChange) {
      this.args.onChange(event.target.checked, event);
    }
  }

  <template>
    {{~!~}}
    <label
      for={{@identifier}}
      class="au-c-toggle-switch
        {{this.alignmentClass}}
        {{if
          (and (not (has-block)) (not @label))
          'au-c-toggle-switch--labelless'
        }}
        {{if @disabled 'is-disabled'}}"
      data-test-toggle-switch-label
    >
      <input
        checked={{@checked}}
        type="checkbox"
        class="au-c-toggle-switch__input au-u-hidden-visually"
        id={{@identifier}}
        name={{@name}}
        disabled={{@disabled}}
        data-test-toggle-switch-input
        {{on "change" this.onChange}}
        ...attributes
      />
      <span class="au-c-toggle-switch__toggle"></span>
      {{yield}}
    </label>
    {{~!~}}
  </template>
}
