import Component from '@glimmer/component';
import { getOwner } from '@ember/application';

// TODO: replace these with the named imports from ember-truth-helpers v4 once our dependencies support that version
import eq from 'ember-truth-helpers/helpers/eq';
import or from 'ember-truth-helpers/helpers/or';

export default class AuButton extends Component {
  get iconPrefix() {
    const config = getOwner(this).resolveRegistration('config:environment');

    return config.rootURL || '/';
  }

  get size() {
    if (this.args.size == 'large') return 'au-c-icon--large';
    else return '';
  }

  get alignment() {
    if (this.args.alignment == 'left') return 'au-c-icon--left';
    if (this.args.alignment == 'right') return 'au-c-icon--right';
    else return '';
  }

  <template>
    <svg
      role="img"
      class="au-c-icon au-c-icon--{{@icon}} {{this.alignment}} {{this.size}}"
      aria-hidden={{if
        (or (eq @ariaHidden false) (eq @ariaHidden "false"))
        "false"
        "true"
      }}
      ...attributes
    >
      <use
        xlink:href="{{this.iconPrefix}}@appuniversum/ember-appuniversum/appuniversum-symbolset.svg#{{@icon}}"
      ></use>
    </svg>
  </template>
}
