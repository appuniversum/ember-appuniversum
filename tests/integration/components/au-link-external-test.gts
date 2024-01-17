import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import AuLinkExternal from '@appuniversum/ember-appuniversum/components/au-link-external';

module('Integration | Component | au-link-external', function (hooks) {
  setupRenderingTest(hooks);

  test('it accepts block content and extra attributes', async function (assert) {
    await render(
      <template>
        <AuLinkExternal data-test-link-external>
          template block text
        </AuLinkExternal>
      </template>,
    );

    assert.dom('[data-test-link-external]').hasText('template block text');
  });
});
