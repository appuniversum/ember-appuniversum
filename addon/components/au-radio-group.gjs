import { AuRadio } from '@appuniversum/ember-appuniversum';
import { hash } from '@ember/helper';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

// TODO: replace these with the named imports from ember-truth-helpers v4 once our dependencies support that version
import or from 'ember-truth-helpers/helpers/or';

export default class AuRadioGroup extends Component {
  uniqueName = guidFor(this);

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
          Radio=(component
            AuRadio
            name=(or @name this.uniqueName)
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
