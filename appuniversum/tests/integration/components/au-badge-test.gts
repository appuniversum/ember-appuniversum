import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import AuBadge from '#src/components/au-badge.gts';

module('Integration | Component | au-badge', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><AuBadge @number={{2}} /></template>);

    assert.dom().hasText('2');
  });
});
