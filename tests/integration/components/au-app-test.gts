import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import AuApp from '@appuniversum/ember-appuniversum/components/au-app';

module('Integration | Component | au-app', function (hooks) {
  setupRenderingTest(hooks);

  test('it accepts block content and accepts attributes', async function (assert) {
    await render(
      <template>
        <AuApp data-test-app>
          content
        </AuApp>
      </template>,
    );

    assert.dom('[data-test-app]').hasText('content');
  });
});
