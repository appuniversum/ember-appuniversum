import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | au-loader', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a hidden loading text for screen readers', async function (assert) {
    await render(hbs`<AuLoader />`);

    assert.dom().hasText('Aan het laden');
  });

  test('it supports rendering a custom hidden loading text', async function (assert) {
    await render(hbs`<AuLoader @message="Loading" />`);

    assert.dom().hasText('Loading');
  });

  test('it supports disabling the hidden message', async function (assert) {
    await render(hbs`<AuLoader @disableMessage={{true}} />`);

    assert.dom().hasNoText();
  });
});
