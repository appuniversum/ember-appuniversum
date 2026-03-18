import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { getRootElement, click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { queryByText } from '@testing-library/dom';

module('Integration | Component | au-data-table-th-sortable', function (hooks) {
  setupRenderingTest(hooks);

  test('it switches between the different sorting states when the button is clicked', async function (assert) {
    this.set('sort', '');

    await render(
      hbs`
          <AuDataTableThSortable
            @field="foo"
            @label="Foo"
            @currentSorting={{this.sort}}
          />
        `,
    );

    const root = getRootElement();
    let sortButton = queryByText(root, 'Sorteren');

    assert.ok(
      sortButton,
      "It shows a sort button if we aren't currently sorting on the field that matches the component",
    );

    await click(sortButton);
    assert.equal(
      this.sort,
      'foo',
      'It updates the sort value with 2-way-binding. It initially sorts ascending.',
    );

    sortButton = queryByText(root, 'Sorteren');
    assert.notOk(
      sortButton,
      'It hides the default sort button when we are sorting on the field that matches the component',
    );

    sortButton = queryByText(root, 'Aflopend sorteren');
    assert.ok(
      sortButton,
      'It shows the sort descending button when we are currently sorting ascending on the field that matches the component',
    );

    await click(sortButton);
    assert.equal(
      this.sort,
      '-foo',
      'It switches to a descending sort for the provided field',
    );

    sortButton = queryByText(root, 'Aflopend sorteren');
    assert.notOk(sortButton);

    // TODO: this logic isn't correct I think since we stop sorting when we click again?
    sortButton = queryByText(root, 'Oplopend sorteren');
    assert.ok(sortButton);

    await click(sortButton);
    assert.equal(this.sort, '', 'It stops sorting on the provided field');
  });
});
