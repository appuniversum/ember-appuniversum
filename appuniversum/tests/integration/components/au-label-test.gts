import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import AuLabel from '#src/components/au-label.gts';

module('Integration | Component | au-label', function (hooks) {
  setupRenderingTest(hooks);

  test('it displays block contents and accepts extra attributes', async function (assert) {
    await render(
      <template>
        <AuLabel data-test-label>
          Some label
        </AuLabel>
      </template>,
    );

    assert.dom('[data-test-label]').hasText('Some label');
  });
});
