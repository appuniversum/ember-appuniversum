import Component from '@glimmer/component';

// TODO: replace these with the named imports from ember-truth-helpers v4 once our dependencies support that version
import eq from 'ember-truth-helpers/helpers/eq';

export default class AuHeading extends Component {
  get skin() {
    if (this.args.skin == '1') return 'au-c-heading--1';
    if (this.args.skin == '2') return 'au-c-heading--2';
    if (this.args.skin == '3') return 'au-c-heading--3';
    if (this.args.skin == '4') return 'au-c-heading--4';
    if (this.args.skin == '5') return 'au-c-heading--5';
    if (this.args.skin == '6') return 'au-c-heading--6';
    if (this.args.skin == 'functional') return 'au-c-heading--functional';
    else return 'au-c-heading--1';
  }

  <template>
    {{#if (eq @level "1")}}
      <h1 class="au-c-heading {{this.skin}}" ...attributes>
        {{yield}}
      </h1>
    {{else if (eq @level "2")}}
      <h2 class="au-c-heading {{this.skin}}" ...attributes>
        {{yield}}
      </h2>
    {{else if (eq @level "3")}}
      <h3 class="au-c-heading {{this.skin}}" ...attributes>
        {{yield}}
      </h3>
    {{else if (eq @level "4")}}
      <h4 class="au-c-heading {{this.skin}}" ...attributes>
        {{yield}}
      </h4>
    {{else if (eq @level "5")}}
      <h5 class="au-c-heading {{this.skin}}" ...attributes>
        {{yield}}
      </h5>
    {{else if (eq @level "6")}}
      <h6 class="au-c-heading {{this.skin}}" ...attributes>
        {{yield}}
      </h6>
    {{else}}
      <h1 class="au-c-heading {{this.skin}}" ...attributes>
        {{yield}}
      </h1>
    {{/if}}
  </template>
}
