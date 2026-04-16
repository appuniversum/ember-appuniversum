import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import AuBodyContainer from '#src/components/au-body-container.gts';

module('Integration | Component | au-body-container', function (hooks) {
  setupRenderingTest(hooks);

  test('it accepts block content and extra attributes', async function (assert) {
    await render(
      <template>
        <AuBodyContainer data-test-body-container>
          template block text
        </AuBodyContainer>
      </template>,
    );

    assert.dom('[data-test-body-container]').hasText('template block text');
  });
});
