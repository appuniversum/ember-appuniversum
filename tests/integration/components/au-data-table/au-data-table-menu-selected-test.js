import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module(
  'Integration | Component | au-data-table-menu-selected',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders block only if data table selection is not empty', async function (assert) {
      this.set('data-table', { selectionIsEmpty: true });
      // Template block usage:
      await render(hbs`
      {{#au-data-table-menu-selected data-table=this.data-table}}
        template block text
      {{/au-data-table-menu-selected}}
    `);
      assert.dom('*').hasText('');
    });
  },
);
