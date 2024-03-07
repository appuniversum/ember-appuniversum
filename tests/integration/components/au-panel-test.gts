import AuPanel from '@appuniversum/ember-appuniversum/components/au-panel';
import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | au-panel', function (hooks) {
  setupRenderingTest(hooks);

  test('it yields a `Section` component', async function (assert) {
    await render(
      <template>
        <AuPanel data-test-panel as |Section|>
          <Section data-test-panel-section="foo">Foo</Section>
          <Section data-test-panel-section="bar">Bar</Section>
        </AuPanel>
      </template>,
    );

    assert
      .dom('[data-test-panel] [data-test-panel-section]')
      .exists({ count: 2 });
    assert.dom('[data-test-panel-section="foo"]').hasText('Foo');
    assert.dom('[data-test-panel-section="bar"]').hasText('Bar');
  });
});
