/* eslint-disable ember/no-classic-classes, ember/no-classic-components, ember/no-computed-properties-in-native-classes */
import Component from '@ember/component';
import { alias } from '@ember/object/computed';
import { hash } from '@ember/helper';
import ContentBody from './content-body.gjs';
import ContentHeader from './content-header.gjs';

// Source: https://github.com/mu-semtech/ember-data-table/blob/c690a3948b2d9d5f91d69f0a935c6b5cdb4862ca/addon/components/data-table-content.js
const Base = Component.extend({
  tagName: '',
  classNames: ['data-table-content'],
  tableClass: alias('data-table.tableClass'),
});

export default class Content extends Base {
  <template>
    {{! template-lint-disable table-groups }}
    <div class="au-c-data-table__wrapper">
      <table class="au-c-data-table__table {{this.tableClass}}" ...attributes>
        {{#if (has-block)}}
          {{yield
            (hash
              header=(component
                ContentHeader
                enableSelection=this.enableSelection
                enableLineNumbers=this.enableLineNumbers
                data-table=this.data-table
              )
              body=(component
                ContentBody
                content=this.content
                enableSelection=this.enableSelection
                enableLineNumbers=this.enableLineNumbers
                noDataMessage=this.noDataMessage
                onClickRow=this.onClickRow
                data-table=this.data-table
              )
            )
          }}
        {{else}}
          <ContentHeader
            @enableSelection={{this.enableSelection}}
            @enableLineNumbers={{this.enableLineNumbers}}
            @data-table={{this.data-table}}
          />
          <ContentBody
            @content={{this.content}}
            @enableSelection={{this.enableSelection}}
            @enableLineNumbers={{this.enableLineNumbers}}
            @noDataMessage={{this.noDataMessage}}
            @onClickRow={{this.onClickRow}}
            @data-table={{this.data-table}}
          />
        {{/if}}
      </table>
    </div>
  </template>
}
