import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { AddIcon } from '@appuniversum/ember-appuniversum/components/icons/add';

module('Integration | Icon components', function (hooks) {
  setupRenderingTest(hooks);

  test('the icon components accept attributes', async function (assert) {
    await render(<template><AddIcon data-test-icon /></template>);

    assert.dom('[data-test-icon]').exists();
  });
});
