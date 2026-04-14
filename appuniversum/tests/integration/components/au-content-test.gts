import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import AuContent from '#src/components/au-content.gts';

module('Integration | Component | au-content', function (hooks) {
  setupRenderingTest(hooks);

  test('it accepts block content and extra attributes', async function (assert) {
    await render(
      <template>
        <AuContent data-test-content>
          template block text
        </AuContent>
      </template>,
    );

    assert.dom('[data-test-content]').hasText('template block text');
  });
});
