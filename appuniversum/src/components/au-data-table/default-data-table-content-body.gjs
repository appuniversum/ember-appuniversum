/* eslint-disable ember/no-classic-classes, ember/no-classic-components, ember/no-get, ember/no-computed-properties-in-native-classes */
import { A } from '@ember/array';
import { computed, get } from '@ember/object';
import { oneWay } from '@ember/object/computed';
import Component from '@ember/component';
import AuLink from '../au-link.gts';

// Source: https://github.com/mu-semtech/ember-data-table/blob/c690a3948b2d9d5f91d69f0a935c6b5cdb4862ca/addon/components/default-data-table-content-body.js
const Base = Component.extend({
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

export default class DefaultDataTableContentBody extends Base {
  <template>
    {{#if this.firstColumn}}
      {{#if this.linkedRoute}}
        <td>
          <AuLink @route={{this.linkedRoute}} @model={{this.item}}>{{get
              this.item
              this.firstColumn
            }}</AuLink>
        </td>
      {{else}}
        <td>{{get this.item this.firstColumn}}</td>
      {{/if}}
    {{/if}}
    {{#each this.otherColumns as |field|}}
      <td>
        {{! This should be based on the type of the field }}
        {{get this.item field}}
      </td>
    {{/each}}
    {{yield}}
  </template>
}
