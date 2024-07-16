/* eslint-disable ember/no-actions-hash, ember/no-classic-classes, ember/no-classic-components, ember/no-get */
import { A } from '@ember/array';
import { computed } from '@ember/object';
import { oneWay } from '@ember/object/computed';
import Component from '@ember/component';

// Source: https://github.com/mu-semtech/ember-data-table/blob/c690a3948b2d9d5f91d69f0a935c6b5cdb4862ca/addon/components/default-data-table-content-body.js

export default Component.extend({
  tagName: '',
  allFields: oneWay('data-table.parsedFields'),
  firstColumn: computed('data-table.parsedFields', function () {
    const parsedFields = A(this.get('data-table.parsedFields'));
    return parsedFields.get('firstObject');
  }),
  otherColumns: computed('data-table.parsedFields', function () {
    let fields;
    [, ...fields] = this.get('data-table.parsedFields');
    return fields;
  }),
  linkedRoute: oneWay('data-table.link'),
});
