import AuModalContainer from '@appuniversum/ember-appuniversum/components/au-modal-container';
import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { module, test } from 'qunit';

module('Integration | Component | au-modal-container', function (hooks) {
  setupRenderingTest(hooks);

  test('it passes through attributes', async function (assert) {
    await render(<template><AuModalContainer data-foo="bar" /></template>);

    assert.dom('[data-foo]').hasAttribute('data-foo', 'bar');
  });
});
