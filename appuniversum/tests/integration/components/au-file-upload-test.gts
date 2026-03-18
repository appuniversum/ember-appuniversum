import AuFileUpload from '@appuniversum/ember-appuniversum/components/au-file-upload';
import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | au-file-upload', function (hooks) {
  setupRenderingTest(hooks);

  test('it accepts extra attributes', async function (assert) {
    await render(<template><AuFileUpload data-test-file-upload /></template>);

    assert.dom('[data-test-file-upload]').exists();
  });
});
