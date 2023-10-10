import { AuCheckbox } from '@appuniversum/ember-appuniversum';
import { hash } from '@ember/helper';
import Component from '@glimmer/component';

export default class AuCheckboxGroup extends Component {
  get alignmentClass() {
    if (this.args.alignment == 'inline') return 'au-c-control-group--inline';
    else return '';
  }

  <template>
    <div
      class="au-c-control-group {{this.alignmentClass}}"
      role="group"
      ...attributes
    >
      {{yield
        (hash
          Checkbox=(component
            AuCheckbox
            name=@name
            inGroup=true
            groupValue=@selected
            disabled=@disabled
            onChangeGroup=@onChange
          )
        )
      }}
    </div>
  </template>
}
