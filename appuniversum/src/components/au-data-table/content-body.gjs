/* eslint-disable ember/no-classic-classes, ember/no-classic-components, ember/no-get, ember/require-tagless-components, ember/no-computed-properties-in-native-classes */
import { set } from '@ember/object';
import { action, computed } from '@ember/object';
import Component from '@ember/component';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import DefaultContentBody from './default-data-table-content-body.gjs';

// Source: https://github.com/mu-semtech/ember-data-table/blob/c690a3948b2d9d5f91d69f0a935c6b5cdb4862ca/addon/components/data-table-content-body.js
const Base = Component.extend({
  tagName: 'tbody',
  init() {
    this._super(...arguments);
    if (!this['data-table']) this.set('data-table', {});
    if (!this['content']) this.set('content', []);
  },
  offset: computed('data-table.{page,size}', function () {
    var offset = 1; //to avoid having 0. row
    var page = this.get('data-table.page');
    var size = this.get('data-table.size');
    if (page && size) {
      offset += page * size;
    }
    return offset;
  }),
  wrappedItems: computed(
    'content',
    'content.[]',
    'data-table.selection.[]',
    function () {
      const selection = this.get('data-table.selection') || [];
      const content = this.content || [];
      return content.map(function (item) {
        return { item: item, isSelected: selection.includes(item) };
      });
    },
  ),
  updateSelection: action(function (selectedWrapper, event) {
    set(selectedWrapper, 'isSelected', event.target.checked);
    this.wrappedItems.forEach((wrapper) => {
      if (wrapper.isSelected) {
        this.get('data-table').addItemToSelection(wrapper.item);
      } else {
        this.get('data-table').removeItemFromSelection(wrapper.item);
      }
    });
  }),
});

export default class ContentBody extends Base {
  <template>
    {{#if this.data-table.isLoading}}
      <tr><td colspan="100%" class="is-loading-data">Aan het laden...</td></tr>
    {{else}}
      {{#if this.content}}
        {{#each this.wrappedItems as |wrapper index|}}
          <tr
            class={{if
              (includes this.data-table.selection wrapper.item)
              "selected"
            }}
            {{on "click" (fn (optional this.onClickRow) wrapper.item)}}
            {{!template-lint-disable no-invalid-interactive}}
          >
            {{#if this.enableSelection}}
              <td class="is-selectable">
                <input
                  type="checkbox"
                  checked={{wrapper.isSelected}}
                  {{on "click" (fn this.updateSelection wrapper)}}
                  {{!TODO: add a label}}
                  {{!template-lint-disable require-input-label}}
                />
              </td>
            {{/if}}
            {{#if this.enableLineNumbers}}
              <td>{{add index this.offset}}</td>
            {{/if}}
            {{#if (has-block)}}
              {{yield wrapper.item}}
            {{else}}
              <DefaultContentBody
                @item={{wrapper.item}}
                @data-table={{this.data-table}}
              />
            {{/if}}
          </tr>
        {{/each}}
      {{else}}
        <tr><td colspan="100%" class="au-c-data-table__message"><p
            >{{this.noDataMessage}}</p></td></tr>
      {{/if}}
    {{/if}}
  </template>
}

function add(a, b) {
  return a + b;
}
function includes(array, item) {
  return array.includes(item);
}
function optional(maybeFunction) {
  return typeof maybeFunction === 'function' ? maybeFunction : () => {};
}
