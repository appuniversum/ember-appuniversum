/* eslint-disable ember/no-actions-hash, ember/no-classic-classes, ember/no-classic-components, ember/require-tagless-components */
import Component from '@ember/component';
import { computed } from '@ember/object';
import { NavDownIcon } from '../icons/nav-down';
import { NavUpIcon } from '../icons/nav-up';
import { NavUpDownIcon } from '../icons/nav-up-down';

// Source: https://github.com/mu-semtech/ember-data-table/blob/c690a3948b2d9d5f91d69f0a935c6b5cdb4862ca/addon/components/th-sortable.js
const ThSortable = Component.extend({
  tagName: 'th',
  classNames: ['sortable'],
  classNameBindings: ['isSorted:sorted'],
  dasherizedField: computed('field', function () {
    return this.field.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }),
  /**
      Inverses the sorting parameter
      E.g. inverseSorting('title') returns '-title'
           inverseSorting('-title') returns 'title'
  */
  _inverseSorting(sorting) {
    if (sorting.substring(0, 1) === '-') {
      return sorting.substring(1);
    } else {
      return '-' + sorting;
    }
  },
  isSorted: computed('dasherizedField', 'currentSorting', function () {
    return (
      this.currentSorting === this.dasherizedField ||
      this.currentSorting === this._inverseSorting(this.dasherizedField)
    );
  }),
  order: computed('dasherizedField', 'currentSorting', function () {
    if (this.currentSorting === this.dasherizedField) {
      return 'asc';
    } else if (this.currentSorting === `-${this.dasherizedField}`) {
      return 'desc';
    } else {
      return '';
    }
  }),

  actions: {
    /**
       Sets the current sorting parameter.
       Note: the current sorting parameter may contain another field than the given field.
       In case the given field is currently sorted ascending, change to descending.
       In case the given field is currently sorted descending, clean the sorting.
       Else, set the sorting to ascending on the given field.
     */
    inverseSorting() {
      if (this.order === 'asc') {
        this.set('currentSorting', this._inverseSorting(this.currentSorting));
      } else if (this.order === 'desc') {
        this.set('currentSorting', '');
      } else {
        // if currentSorting is not set to this field
        this.set('currentSorting', this.dasherizedField);
      }
    },
  },
});

export default ThSortable.extend({
  NavDownIcon,
  NavUpIcon,
  NavUpDownIcon,
});
