import AuLink from '@appuniversum/ember-appuniversum/components/au-link';
import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | au-link', function (hooks) {
  setupRenderingTest(hooks);

  test('it accepts block content and extra attributes', async function (assert) {
    await render(
      <template>
        <AuLink @route="index" data-test-link>
          template block text
        </AuLink>
      </template>,
    );

    assert.dom('[data-test-link]').hasText('template block text');
  });
});
