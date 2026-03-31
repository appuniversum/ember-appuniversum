import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import AuDataTableMenuGeneral from '#src/components/au-data-table/menu-general.gjs';

module(
  'Integration | Component | au-data-table-menu-general',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders block only if data table selection is empty', async function (assert) {
      const dataTable = {
        selectionIsEmpty: true,
      };

      await render(
        <template>
          <AuDataTableMenuGeneral @data-table={{dataTable}}>
            template block text
          </AuDataTableMenuGeneral>
        </template>,
      );
      assert.dom('*').hasText('template block text');

      dataTable.selectionIsEmpty = false;
      await render(
        <template>
          <AuDataTableMenuGeneral @data-table={{dataTable}}>
            template block text
          </AuDataTableMenuGeneral>
        </template>,
      );

      assert.dom('*').hasText('');
    });
  },
);
