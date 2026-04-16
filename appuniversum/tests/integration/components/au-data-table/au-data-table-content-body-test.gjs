import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import AuDataTableContentBody from '#src/components/au-data-table/content-body.gjs';
import { tracked } from '@glimmer/tracking';

class TestState {
  @tracked content;
  @tracked dataTable = new DataTableMock();
}

class DataTableMock {
  @tracked parsedFields;
  @tracked selection;
  @tracked page;
  @tracked size;
}

module(
  'Integration | Component | au-data-table-content-body',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      await render(<template><AuDataTableContentBody /></template>);
      assert.dom('tbody').exists({ count: 1 });
    });

    test('display rows', async function (assert) {
      const state = new TestState();
      state.content = [
        { firstName: 'John', lastName: 'Doe', age: 20 },
        { firstName: 'Jane', lastName: 'Doe', age: 21 },
      ];

      state.dataTable.parsedFields = ['firstName', 'lastName', 'age'];
      state.dataTable.selection = [];

      await render(
        <template>
          <AuDataTableContentBody
            @content={{state.content}}
            @data-table={{state.dataTable}}
          />
        </template>,
      );

      assert.dom('tr').exists({ count: 2 }, 'displays 2 rows');
      assert
        .dom('tr:first-child td')
        .exists({ count: 3 }, 'displays 3 columns');
      assert
        .dom('tr:first-child td:first-child')
        .hasText('John', 'displays firstName in first column');
      assert
        .dom('tr:first-child td:nth-child(2)')
        .hasText('Doe', 'displays lastName in second column');
      assert
        .dom('tr:first-child td:nth-child(3)')
        .hasText('20', 'displays age in third column');
    });

    test('add checkboxes for selection if enabled', async function (assert) {
      const john = { firstName: 'John', lastName: 'Doe', age: 20 };
      const jane = { firstName: 'Jane', lastName: 'Doe', age: 21 };
      const jeff = { firstName: 'Jeff', lastName: 'Doe', age: 22 };

      const state = new TestState();
      state.content = [john, jane, jeff];
      state.dataTable.parsedFields = ['firstName', 'lastName', 'age'];
      state.dataTable.selection = [jane];

      await render(
        <template>
          <AuDataTableContentBody
            @content={{state.content}}
            @data-table={{state.dataTable}}
            @enableSelection={{true}}
          />
        </template>,
      );

      assert
        .dom('tr:first-child td')
        .exists({ count: 4 }, 'displays 4 columns');
      assert.dom('tr.selected').exists({ count: 1 }, 'displays 1 selected row');
      assert
        .dom('tr input[type="checkbox"]')
        .exists({ count: 3 }, 'displays a checkbox on each row');
      assert
        .dom('tr input[type="checkbox"]:checked')
        .isChecked('displays 1 checked checkbox');
    });

    test('toggles selection if checkbox is clicked', async function (assert) {
      const john = { firstName: 'John', lastName: 'Doe', age: 20 };
      const jane = { firstName: 'Jane', lastName: 'Doe', age: 21 };
      const jeff = { firstName: 'Jeff', lastName: 'Doe', age: 22 };

      const state = new TestState();
      state.content = [john, jane, jeff];
      state.dataTable.parsedFields = ['firstName', 'lastName', 'age'];
      state.dataTable.selection = [jane];

      // mock functions
      state.dataTable.addItemToSelection = () => {
        state.dataTable.selection = [john, jane];
      };
      state.dataTable.removeItemFromSelection = () => {};

      await render(
        <template>
          <AuDataTableContentBody
            @content={{state.content}}
            @data-table={{state.dataTable}}
            @enableSelection={{true}}
          />
        </template>,
      );

      assert
        .dom('tr input[type="checkbox"]:checked')
        .isChecked('displays 1 checked checkbox before selecting a row');

      await click('tr:first-child input[type="checkbox"]');

      assert
        .dom('tr input[type="checkbox"]:checked')
        .isChecked('displays 2 checked checkboxes after selecting a row');
    });

    test('add line numbers if enabled', async function (assert) {
      const john = { firstName: 'John', lastName: 'Doe', age: 20 };
      const jane = { firstName: 'Jane', lastName: 'Doe', age: 21 };
      const jeff = { firstName: 'Jeff', lastName: 'Doe', age: 22 };

      const state = new TestState();
      state.content = [john, jane, jeff];
      state.dataTable.parsedFields = ['firstName', 'lastName', 'age'];
      state.dataTable.selection = [];

      await render(
        <template>
          <AuDataTableContentBody
            @content={{state.content}}
            @data-table={{state.dataTable}}
            @enableLineNumbers={{true}}
          />
        </template>,
      );

      assert
        .dom('tr:first-child td')
        .exists({ count: 4 }, 'displays 4 columns');
      assert
        .dom('tr:first-child td:first-child')
        .hasText('1', 'displays offset 1 on the first row');
      assert
        .dom('tr:nth-child(2) td:first-child')
        .hasText('2', 'displays offset 2 on the second row');
      assert
        .dom('tr:nth-child(3) td:first-child')
        .hasText('3', 'displays offset 3 on the third row');

      state.dataTable.page = 2;
      state.dataTable.size = 5;
      await render(
        <template>
          <AuDataTableContentBody
            @content={{state.content}}
            @data-table={{state.dataTable}}
            @enableLineNumbers={{true}}
          />
        </template>,
      );

      assert
        .dom('tr:first-child td')
        .exists({ count: 4 }, 'displays 4 columns on page 3');
      assert
        .dom('tr:first-child td:first-child')
        .hasText('11', 'displays offset 11 on the first row on page 3');
      assert
        .dom('tr:nth-child(2) td:first-child')
        .hasText('12', 'displays offset 12 on the second row on page 3');
      assert
        .dom('tr:nth-child(3) td:first-child')
        .hasText('13', 'displays offset 13 on the third row of page 3');
    });

    test('displays no data message if there is no data', async function (assert) {
      const state = new TestState();
      state.noDataMessage = 'No data';
      state.dataTable.parsedFields = ['firstName', 'lastName', 'age'];
      state.dataTable.selection = [];

      await render(
        <template>
          <AuDataTableContentBody
            @noDataMessage={{state.noDataMessage}}
            @data-table={{state.dataTable}}
          />
        </template>,
      );
      assert
        .dom('td.au-c-data-table__message')
        .exists({ count: 1 }, 'displays a no data message if no content')
        .hasText('No data', 'displays message "No data" if no content');

      state.content = [];
      await render(
        <template>
          <AuDataTableContentBody
            @content={{state.content}}
            @noDataMessage={{state.noDataMessage}}
            @data-table={{state.dataTable}}
          />
        </template>,
      );
      assert
        .dom('td.au-c-data-table__message')
        .exists({ count: 1 }, 'displays a no data message if empty content');
      assert
        .dom('td.au-c-data-table__message')
        .hasText('No data', 'displays message "No data" if empty content');

      state.content = ['foo', 'bar'];
      await render(
        <template>
          <AuDataTableContentBody
            @content={{state.content}}
            @noDataMessage={{state.noDataMessage}}
            @data-table={{state.dataTable}}
          />
        </template>,
      );
      assert
        .dom('td.au-c-data-table__message')
        .doesNotExist('displays no message when there is content');
    });
  },
);
