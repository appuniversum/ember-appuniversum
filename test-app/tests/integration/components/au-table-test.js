import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const TABLE = {
  TABLE: '[data-test-table]',
  TITLE: '[data-test-table-title]',
  HEADER: '[data-test-table-header]',
  BODY: '[data-test-table-body]',
  FOOTER: '[data-test-table-footer]',
};

module('Integration | Component | au-table', function (hooks) {
  setupRenderingTest(hooks);

  test('it has optional named blocks', async function (assert) {
    await render(hbs`
      <AuTable>
        default block content
      </AuTable>
    `);

    assert.dom(TABLE.TABLE).hasNoText();
    assert.dom(TABLE.TITLE).doesNotExist();
    assert.dom(TABLE.HEADER).doesNotExist();
    assert.dom(TABLE.BODY).doesNotExist();
    assert.dom(TABLE.FOOTER).doesNotExist();

    await render(hbs`
      <AuTable>
        <:title>Title</:title>
        <:header>Header</:header>
        <:body>Body</:body>
        <:footer>Footer</:footer>
      </AuTable>
    `);

    assert.dom(TABLE.TITLE).hasText('Title');
    assert.dom(TABLE.HEADER).hasText('Header');
    assert.dom(TABLE.BODY).hasText('Body');
    assert.dom(TABLE.FOOTER).hasText('Footer');
  });

  test('it accepts extra html attributes', async function (assert) {
    await render(hbs`
      <AuTable class="test">
        default block content
      </AuTable>
    `);

    assert.dom(TABLE.TABLE).hasClass('test');
  });
});
