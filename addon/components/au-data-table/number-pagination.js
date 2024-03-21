import NumberPagination from 'ember-data-table/components/number-pagination';
import { computed } from '@ember/object';
import { NavLeftIcon } from '../icons/nav-left';
import { NavRightIcon } from '../icons/nav-right';

export default NumberPagination.extend({
  tagName: '',

  NavLeftIcon,
  NavRightIcon,

  totalItems: computed('total', 'nbOfItems', function () {
    return this.total ? this.total : this.nbOfItems;
  }),
});
