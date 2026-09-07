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

    test('it conditionally disables buttons to change the page', async function (assert) {
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
            @showBoundaryLinks={{true}}
          />
        </template>,
      );

      const root = getRootElement();
      const firstButton = queryByText(root, 'Eerste');
      const prevButton = queryByText(root, 'Vorige');
      const nextButton = queryByText(root, 'Volgende');
      const lastButton = queryByText(root, 'Laatste');

      assert.ok(
        prevButton,
        "It shows a button to go to the previous page when we aren't on the first page",
      );
      assert.ok(
        firstButton,
        "It shows a button to go to the first page when we aren't on the first page",
      );
      assert.ok(
        nextButton,
        "It shows a button to go to the next page when we aren't on the last page",
      );
      assert.ok(
        lastButton,
        "It shows a button to go to the last page when we aren't on the first page",
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

      assert
        .dom(firstButton)
        .isDisabled(
          'It disables the button to go to the first page when we are on the first page',
        );
      assert
        .dom(prevButton)
        .isDisabled(
          'It disables the button to go to the previous page when we are on the first page',
        );

      assert.dom(nextButton).isNotDisabled();
      assert.dom(lastButton).isNotDisabled();

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

      assert.dom(firstButton).isNotDisabled();
      assert.dom(prevButton).isNotDisabled();

      state.page = 9;
      state.links = {
        ...baseLinks,
        prev: {
          number: 8,
        },
      };

      await settled();

      assert
        .dom(nextButton)
        .isDisabled(
          'It disables the button to go to the next page when we are on the last page',
        );

      assert
        .dom(lastButton)
        .isDisabled(
          'It disables the button to go to the last page when we are on the last page',
        );

      assert.dom(firstButton).isNotDisabled();
      assert.dom(prevButton).isNotDisabled();
    });
  },
);
