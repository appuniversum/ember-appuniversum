import AuList from '@appuniversum/ember-appuniversum/components/au-list';
import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | au-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it yields a `ListItem` component', async function (assert) {
    await render(
      <template>
        <AuList data-test-list as |Item|>
          <Item data-test-list-item="foo">Foo</Item>
          <Item data-test-list-item="bar">Bar</Item>
        </AuList>
      </template>,
    );

    assert.dom('[data-test-list] [data-test-list-item]').exists({ count: 2 });
    assert.dom('[data-test-list-item="foo"]').hasText('Foo');
    assert.dom('[data-test-list-item="bar"]').hasText('Bar');
  });
});
