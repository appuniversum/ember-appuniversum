import AuHelpText from '@appuniversum/ember-appuniversum/components/au-help-text';
import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | au-help-text', function (hooks) {
  setupRenderingTest(hooks);

  test('it accepts block content and extra attributes', async function (assert) {
    await render(
      <template>
        <AuHelpText data-test-help-text>
          Some help text
        </AuHelpText>
      </template>,
    );

    assert.dom('[data-test-help-text]').hasText('Some help text');
  });
});
