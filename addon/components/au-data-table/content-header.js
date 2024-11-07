/* eslint-disable ember/no-classic-classes, ember/no-classic-components, ember/require-tagless-components */
import { oneWay } from '@ember/object/computed';
import { alias } from '@ember/object/computed';
import Component from '@ember/component';

// Source: https://github.com/mu-semtech/ember-data-table/blob/c690a3948b2d9d5f91d69f0a935c6b5cdb4862ca/addon/components/data-table-content-header.js
export default Component.extend({
  tagName: 'thead',
  sort: alias('data-table.sort'),
  fields: oneWay('data-table.parsedFields'),
});
