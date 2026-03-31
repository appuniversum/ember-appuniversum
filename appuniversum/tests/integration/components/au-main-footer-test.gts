import AuMainFooter from '#src/components/au-main-footer.gts';
import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | au-main-footer', function (hooks) {
  setupRenderingTest(hooks);

  test('it accepts block content and extra attributes', async function (assert) {
    await render(
      <template>
        <AuMainFooter data-test-main-footer>
          Footer content
        </AuMainFooter>
      </template>,
    );

    assert.dom('[data-test-main-footer]').containsText('Footer content');
  });
});
