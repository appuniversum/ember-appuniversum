/* eslint-disable ember/no-actions-hash, ember/no-classic-classes, ember/no-classic-components, ember/no-get, ember/require-tagless-components */
import { reads } from '@ember/object/computed';
import Component from '@ember/component';

// Source: https://github.com/mu-semtech/ember-data-table/blob/c690a3948b2d9d5f91d69f0a935c6b5cdb4862ca/addon/components/data-table-menu-selected.js
export default Component.extend({
  init: function () {
    this._super(...arguments);
    this.set('data-table.enableSelection', true);
  },
  selectionCount: reads('data-table.selection.length'),
  actions: {
    clearSelection() {
      this.get('data-table').clearSelection();
    },
  },
});
