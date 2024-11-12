import AuDataTable from '@appuniversum/ember-appuniversum/components/au-data-table';
import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | au-data-table', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    const content = [];
    content.meta = {
      pagination: {
        first: { number: 1 },
        last: { number: 10 },
      },
    };

    await render(
      <template>
        <AuDataTable @content={{content}} @enableSizes="false" />
      </template>,
    );

    assert.dom('.au-c-data-table').exists({ count: 1 });
  });

  test('it conditionally shows a pagination bar', async function (assert) {
    const content = [{ name: 'foo' }, { name: 'bar' }];
    content.meta = {
      pagination: {
        first: { number: 1 },
        last: { number: 10 },
      },
    };

    await render(
      <template>
        <AuDataTable @fields="name" @content={{content}} @enableSizes="false" />
      </template>,
    );

    assert
      .dom('.au-c-pagination')
      .exists({ count: 1 }, 'the pagination bar is shown by default');

    await render(
      <template>
        <AuDataTable
          @fields="name"
          @content={{content}}
          @hidePagination={{true}}
        />
      </template>,
    );

    assert
      .dom('.au-c-pagination')
      .doesNotExist(
        'the pagination bar is hidden when `@hidePagination` is true',
      );
  });
});
