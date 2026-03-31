/* eslint-disable ember/no-classic-classes, ember/no-classic-components, ember/no-get, ember/no-computed-properties-in-native-classes */
import Component from '@ember/component';
import { action, computed } from '@ember/object';
import { gt } from '@ember/object/computed';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import AuButton from '../au-button.gts';
import { NavLeftIcon } from '../icons/nav-left.gts';
import { NavRightIcon } from '../icons/nav-right.gts';

// Source: https://github.com/mu-semtech/ember-data-table/blob/c690a3948b2d9d5f91d69f0a935c6b5cdb4862ca/addon/components/number-pagination.js
const Base = Component.extend({
  tagName: '',
  classNames: ['data-table-pagination'],
  currentPage: computed('page', {
    get() {
      return this.page ? parseInt(this.page) + 1 : 1;
    },
    set(key, value) {
      this.set('page', value - 1);
      return value;
    },
  }),
  firstPage: computed('links.first.number', function () {
    return this.get('links.first.number') || 1;
  }),
  lastPage: computed('links.last.number', function () {
    const max = this.get('links.last.number') || -1;
    return max ? max + 1 : max;
  }),
  isFirstPage: computed('firstPage', 'currentPage', function () {
    return this.firstPage == this.currentPage;
  }),
  isLastPage: computed('lastPage', 'currentPage', function () {
    return this.lastPage == this.currentPage;
  }),
  hasMultiplePages: gt('lastPage', 0),
  startItem: computed('size', 'currentPage', function () {
    return this.size * (this.currentPage - 1) + 1;
  }),
  endItem: computed('startItem', 'nbOfItems', function () {
    return this.startItem + this.nbOfItems - 1;
  }),
  pageOptions: computed('firstPage', 'lastPage', function () {
    const nbOfPages = this.lastPage - this.firstPage + 1;
    return Array.from(
      new Array(nbOfPages),
      (val, index) => this.firstPage + index,
    );
  }),
  changePage: action(function (link) {
    this.set('page', link['number'] || 0);
  }),
  totalItems: computed('total', 'nbOfItems', function () {
    return this.total ? this.total : this.nbOfItems;
  }),
});

export default class NumberPagination extends Base {
  <template>
    <div class="au-c-pagination">
      <p>
        <span class="au-u-hidden-visually">Rij </span><strong>{{this.startItem}}
          -
          {{this.endItem}}</strong>
        van
        {{this.totalItems}}
      </p>
      <ul class="au-c-pagination__list">
        {{#if this.hasMultiplePages}}
          {{#unless this.isFirstPage}}
            <li class="au-c-pagination__list-item">
              <AuButton
                @skin="link"
                @icon={{NavLeftIcon}}
                {{on "click" (fn this.changePage this.links.prev)}}
              >
                vorige
                <span class="au-u-hidden-visually">
                  {{this.pageSize}}
                  rijen</span>
              </AuButton>
            </li>
          {{/unless}}
          {{#unless this.isLastPage}}
            <li class="au-c-pagination__list-item">
              <AuButton
                @skin="link"
                @icon={{NavRightIcon}}
                @iconAlignment="right"
                {{on "click" (fn this.changePage this.links.next)}}
              >
                volgende
                <span class="au-u-hidden-visually">
                  {{this.pageSize}}
                  rijen</span>
              </AuButton>
            </li>
          {{/unless}}
        {{/if}}
      </ul>
    </div>
  </template>
}
