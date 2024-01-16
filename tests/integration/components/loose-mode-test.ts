import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

// We can use this test to verify that all components still resolve as expected in loose mode templates
// That allows us to convert the other tests to strict mode, so we can test both versions.
module('Integration | Component | Loose mode', function (hooks) {
  setupRenderingTest(hooks);

  test('`<AuAlert>` resolves in loose mode', async function (assert) {
    await render(hbs`<AuAlert data-test-alert />`);

    assert.dom('[data-test-alert]').exists();
  });

  test('`<AuIcon>` resolves in loose mode', async function (assert) {
    await render(hbs`<AuIcon data-test-icon @icon="test" />`);

    assert.dom('[data-test-icon]').exists();
  });
});
