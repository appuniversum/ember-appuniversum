import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import AuFormRow from '@appuniversum/ember-appuniversum/components/au-form-row';

module('Integration | Component | au-form-row', function (hooks) {
  setupRenderingTest(hooks);

  test('it accepts block content', async function (assert) {
    await render(
      <template>
        <AuFormRow data-test-form-row>Form row</AuFormRow>
      </template>,
    );

    assert.dom('[data-test-form-row]').hasText('Form row');
  });
});
