import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import AuButtonGroup from '@appuniversum/ember-appuniversum/components/au-button-group';

module('Integration | Component | au-button-group', function (hooks) {
  setupRenderingTest(hooks);

  test('it accepts block content and extra attributes', async function (assert) {
    await render(
      <template>
        <AuButtonGroup data-test-button-group>
          template block text
        </AuButtonGroup>
      </template>,
    );

    assert.dom('[data-test-button-group]').hasText('template block text');
  });
});
