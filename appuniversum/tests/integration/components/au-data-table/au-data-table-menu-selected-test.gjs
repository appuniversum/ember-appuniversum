import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import AuDataTableMenuSelected from '#src/components/au-data-table/menu-selected.gjs';

module(
  'Integration | Component | au-data-table-menu-selected',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders block only if data table selection is not empty', async function (assert) {
      this.set('data-table', { selectionIsEmpty: true });
      const dataTable = {
        selectionIsEmpty: true,
      };
      await render(
        <template>
          <AuDataTableMenuSelected @data-table={{dataTable}}>
            template block text
          </AuDataTableMenuSelected>
        </template>,
      );
      assert.dom('*').hasText('');
    });
  },
);
