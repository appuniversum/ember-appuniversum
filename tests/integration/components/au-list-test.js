import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | au-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it yields a `ListItem` component', async function (assert) {
    await render(hbs`
      <AuList data-test-list as |Item|>
        <Item data-test-list-item="foo">Foo</Item>
        <Item data-test-list-item="bar">Bar</Item>
      </AuList>
    `);

    assert.dom('[data-test-list] [data-test-list-item]').exists({ count: 2 });
    assert.dom('[data-test-list-item="foo"]').hasText('Foo');
    assert.dom('[data-test-list-item="bar"]').hasText('Bar');
  });
});
