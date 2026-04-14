/* eslint-disable ember/no-classic-classes, ember/no-classic-components, ember/require-tagless-components */
import Component from '@ember/component';

export default class MenuGeneral extends Component.extend({}) {
  <template>
    {{#if this.data-table.selectionIsEmpty}}
      {{yield}}
    {{/if}}
  </template>
}
