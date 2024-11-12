import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { getRootElement, click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { queryByText } from '@testing-library/dom';

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

      this.set('page', 1);
      this.set('links', {
        ...baseLinks,
        prev: {
          number: 0,
        },
        next: {
          number: 2,
        },
      });

      await render(
        hbs`
          <AuDataTableNumberPagination
            @page={{this.page}}
            @links={{this.links}}
            @size={{10}}
            @nbOfItems={{10}}
            @total={{100}}
          />
        `,
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
        this.page,
        0,
        'It updates the @page value with 2-way-binding',
      );

      this.set('links', {
        ...baseLinks,
        next: {
          number: 1,
        },
      });

      prevButton = queryByText(root, 'vorige');
      assert.notOk(
        prevButton,
        'It hides the button to go to the previous page when we are on the first page',
      );

      nextButton = queryByText(root, 'volgende');
      assert.ok(nextButton);

      await click(nextButton);
      assert.equal(
        this.page,
        1,
        'It updates the @page value with 2-way-binding',
      );
      this.set('links', {
        ...baseLinks,
        prev: {
          number: 0,
        },
        next: {
          number: 2,
        },
      });

      prevButton = queryByText(root, 'vorige');
      assert.ok(prevButton);

      this.set('page', 9);
      this.set('links', {
        ...baseLinks,
        prev: {
          number: 8,
        },
      });

      nextButton = queryByText(root, 'volgende');
      assert.notOk(
        nextButton,
        'It hides the button to go to the next page when we are on the last page',
      );
    });
  },
);
