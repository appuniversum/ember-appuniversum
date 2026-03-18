/* eslint-disable ember/no-classic-classes, ember/no-classic-components, ember/no-get, ember/require-tagless-components */
import { set } from '@ember/object';
import { action, computed } from '@ember/object';
import Component from '@ember/component';

// Source: https://github.com/mu-semtech/ember-data-table/blob/c690a3948b2d9d5f91d69f0a935c6b5cdb4862ca/addon/components/data-table-content-body.js
const ContentBody = Component.extend({
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

export default ContentBody.extend({
  add(a, b) {
    return a + b;
  },
  includes(array, item) {
    return array.includes(item);
  },
  optional(maybeFunction) {
    return typeof maybeFunction === 'function' ? maybeFunction : () => {};
  },
});
