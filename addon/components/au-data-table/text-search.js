/* eslint-disable ember/no-classic-classes, ember/no-classic-components, ember/no-observers, ember/require-tagless-components */
import { isEqual } from '@ember/utils';
import { cancel, debounce } from '@ember/runloop';
import { observer } from '@ember/object';
import { oneWay } from '@ember/object/computed';
import Component from '@ember/component';
import { SearchIcon } from '../icons/search';

// Source: https://github.com/mu-semtech/ember-data-table/blob/c690a3948b2d9d5f91d69f0a935c6b5cdb4862ca/addon/components/text-search.js
const TextSearch = Component.extend({
  filter: '',
  classNames: ['data-table-search'],
  internalValue: oneWay('filter'),
  auto: true,
  placeholder: 'Search',
  init() {
    this._super(...arguments);
    this.set('value', this.filter);
  },
  onValueChange: observer('value', function () {
    this._valuePid = debounce(this, this._setFilter, this.wait);
  }),
  onFilterChange: observer('filter', function () {
    // update value if filter is update manually outsite this component
    if (
      !this.isDestroying &&
      !this.isDestroyed &&
      !isEqual(this.filter, this.value)
    ) {
      this.set('value', this.filter);
    }
  }),
  _setFilter() {
    if (!this.isDestroying && !this.isDestroyed) {
      this.set('filter', this.value);
    }
  },
  willDestroy() {
    this._super(...arguments);
    cancel(this._valuePid);
  },
});

export default TextSearch.extend({
  SearchIcon,
});
