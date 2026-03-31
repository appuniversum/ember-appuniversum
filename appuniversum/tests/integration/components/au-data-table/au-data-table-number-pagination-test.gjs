import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { getRootElement, click, render, settled } from '@ember/test-helpers';
import { queryByText } from '@testing-library/dom';
import AuDataTableNumberPagination from '#src/components/au-data-table/number-pagination.gjs';
import { tracked } from '@glimmer/tracking';

class TestState {
  @tracked page;
  @tracked links;
}

module(
  'Integration | Component | au-data-table-number-pagination',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it conditionally shows buttons to change the page', async function (assert) {
      const baseLinks = {
        first: {
          number: 0,
        },
        last: {
          number: 9,
        },
      };

      const state = new TestState();
      state.page = 1;
      state.links = {
        ...baseLinks,
        prev: {
          number: 0,
        },
        next: {
          number: 2,
        },
      };

      await render(
        <template>
          <AuDataTableNumberPagination
            @page={{state.page}}
            @links={{state.links}}
            @size={{10}}
            @nbOfItems={{10}}
            @total={{100}}
          />
        </template>,
      );

      const root = getRootElement();
      let prevButton = queryByText(root, 'vorige');
      let nextButton = queryByText(root, 'volgende');

      assert.ok(
        prevButton,
        "It shows a button to go to the previous page when we aren't on the first page",
      );
      assert.ok(
        nextButton,
        "It shows a button to go to the next page when we aren't on the last page",
      );

      await click(prevButton);
      assert.equal(
        state.page,
        0,
        'It updates the @page value with 2-way-binding',
      );

      state.links = {
        ...baseLinks,
        next: {
          number: 1,
        },
      };

      await settled();

      prevButton = queryByText(root, 'vorige');
      assert.notOk(
        prevButton,
        'It hides the button to go to the previous page when we are on the first page',
      );

      nextButton = queryByText(root, 'volgende');
      assert.ok(nextButton);

      await click(nextButton);
      assert.equal(
        state.page,
        1,
        'It updates the @page value with 2-way-binding',
      );

      state.links = {
        ...baseLinks,
        prev: {
          number: 0,
        },
        next: {
          number: 2,
        },
      };

      await settled();

      prevButton = queryByText(root, 'vorige');
      assert.ok(prevButton);

      state.page = 9;
      state.links = {
        ...baseLinks,
        prev: {
          number: 8,
        },
      };

      await settled();

      nextButton = queryByText(root, 'volgende');
      assert.notOk(
        nextButton,
        'It hides the button to go to the next page when we are on the last page',
      );
    });
  },
);
