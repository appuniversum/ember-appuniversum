import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | au-input', function (hooks) {
  setupRenderingTest(hooks);

  test("it's possible to pass attributes to the input element", async function (assert) {
    await render(hbs`<AuInput data-test-hello />`);
    assert.dom('input[data-test-hello]').exists();
  });
});
