/* eslint-disable ember/no-classic-classes, ember/no-classic-components, ember/require-tagless-components */
import Component from '@ember/component';
import { alias } from '@ember/object/computed';

// Source: https://github.com/mu-semtech/ember-data-table/blob/c690a3948b2d9d5f91d69f0a935c6b5cdb4862ca/addon/components/data-table-content.js
const DataTableContentBody = Component.extend({
  classNames: ['data-table-content'],
  tableClass: alias('data-table.tableClass'),
});

export default DataTableContentBody.extend({
  tagName: '',
});
