/* eslint-disable ember/no-classic-classes, ember/no-classic-components, ember/require-tagless-components, ember/no-computed-properties-in-native-classes */
import { oneWay } from '@ember/object/computed';
import { alias } from '@ember/object/computed';
import Component from '@ember/component';
import ThSortable from './th-sortable.gjs';

// Source: https://github.com/mu-semtech/ember-data-table/blob/c690a3948b2d9d5f91d69f0a935c6b5cdb4862ca/addon/components/data-table-content-header.js
const Base = Component.extend({
  tagName: 'thead',
  sort: alias('data-table.sort'),
  fields: oneWay('data-table.parsedFields'),
});

export default class ContentHeader extends Base {
  <template>
    {{! template-lint-disable no-html-comments }}
    <tr class="au-c-data-table__header">
      {{#if this.enableSelection}}
        <th
          class="au-c-data-table__header-title is-selectable"
        ><!-- Checkbox --></th>
      {{/if}}
      {{#if this.enableLineNumbers}}
        <th class="au-c-data-table__header-title"><!-- Linenumbers --></th>
      {{/if}}
      {{#if (has-block)}}
        {{yield}}
      {{else}}
        {{#each this.fields as |field|}}
          <ThSortable
            @field={{field}}
            @label={{field}}
            @currentSorting={{this.sort}}
          />
        {{/each}}
      {{/if}}
    </tr>
  </template>
}
