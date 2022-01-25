import NumberPagination from 'ember-data-table/components/number-pagination';
import { computed } from '@ember/object';

export default NumberPagination.extend({
  tagName: '',

  totalItems: computed('total', 'nbOfItems', function () {
    return this.total ? this.total : this.nbOfItems;
  }),
});
