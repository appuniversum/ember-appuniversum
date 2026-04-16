/* eslint-disable ember/no-classic-classes, ember/no-classic-components, ember/no-get, ember/require-tagless-components, ember/no-computed-properties-in-native-classes */
import { action, computed } from '@ember/object';
import { reads } from '@ember/object/computed';
import Component from '@ember/component';

// Source: https://github.com/mu-semtech/ember-data-table/blob/c690a3948b2d9d5f91d69f0a935c6b5cdb4862ca/addon/components/data-table-menu-selected.js
const Base = Component.extend({
  init: function () {
    this._super(...arguments);
    this.set('data-table.enableSelection', true);
  },
  selectionCount: reads('data-table.selection.length'),
  selection: computed('data-table.selection.[]', function () {
    return this.get('data-table.selection').slice();
  }),
  clearSelection: action(function () {
    this.get('data-table').clearSelection();
  }),
});

export default class MenuSelected extends Base {
  <template>
    {{#unless this.data-table.selectionIsEmpty}}
      {{yield this.selection this.data-table}}
    {{/unless}}
  </template>
}
