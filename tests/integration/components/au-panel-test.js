import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | au-panel', function (hooks) {
  setupRenderingTest(hooks);

  test('it yields a `Section` component', async function (assert) {
    await render(hbs`
      <AuPanel data-test-panel as |Section|>
        <Section data-test-panel-section="foo">Foo</Section>
        <Section data-test-panel-section="bar">Bar</Section>
      </AuPanel>
    `);

    assert
      .dom('[data-test-panel] [data-test-panel-section]')
      .exists({ count: 2 });
    assert.dom('[data-test-panel-section="foo"]').hasText('Foo');
    assert.dom('[data-test-panel-section="bar"]').hasText('Bar');
  });
});
