import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | au-tabs', function (hooks) {
  setupRenderingTest(hooks);

  test('it yields a `Tab` component', async function (assert) {
    await render(hbs`
      <AuTabs data-test-tabs as |Tab|>
        <Tab data-test-tab="foo">Foo</Tab>
        <Tab data-test-tab="bar">Bar</Tab>
      </AuTabs>
    `);

    assert.dom('[data-test-tabs] [data-test-tab]').exists({ count: 2 });
    assert.dom('[data-test-tab="foo"]').hasText('Foo');
    assert.dom('[data-test-tab="bar"]').hasText('Bar');
  });
});
