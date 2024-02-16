import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import AuHr from '@appuniversum/ember-appuniversum/components/au-hr';

module('Integration | Component | au-hr', function (hooks) {
  setupRenderingTest(hooks);

  test('it passes through extra attributes', async function (assert) {
    await render(<template><AuHr data-test-hr /></template>);

    assert.dom('[data-test-hr]').exists();
  });
});
