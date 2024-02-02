import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import AuInput from '@appuniversum/ember-appuniversum/components/au-input';

module('Integration | Component | au-input', function (hooks) {
  setupRenderingTest(hooks);

  test("it's possible to pass attributes to the input element", async function (assert) {
    await render(<template><AuInput data-test-hello /></template>);
    assert.dom('input[data-test-hello]').exists();
  });
});
