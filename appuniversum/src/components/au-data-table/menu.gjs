/* eslint-disable ember/no-classic-classes, ember/no-classic-components, ember/require-tagless-components */
import Component from '@ember/component';
import { hash } from '@ember/helper';
import MenuGeneral from './menu-general.gjs';
import MenuSelected from './menu-selected.gjs';

// Source: https://github.com/mu-semtech/ember-data-table/blob/c690a3948b2d9d5f91d69f0a935c6b5cdb4862ca/addon/components/data-table-menu.js
export default class Menu extends Component.extend({
  classNames: ['data-table-menu'],
}) {
  <template>
    {{yield
      (hash
        general=(component MenuGeneral data-table=this.data-table)
        selected=(component MenuSelected data-table=this.data-table)
      )
    }}
  </template>
}
