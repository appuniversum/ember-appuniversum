import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import AuLoader from '@appuniversum/ember-appuniversum/components/au-loader';

module('Integration | Component | au-loader', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a hidden loading text for screen readers', async function (assert) {
    await render(<template><AuLoader /></template>);

    assert.dom().hasText('Aan het laden');
  });

  test('it supports rendering a custom hidden loading text', async function (assert) {
    await render(<template><AuLoader @message="Loading" /></template>);

    assert.dom().hasText('Loading');
  });

  test('it supports disabling the hidden message', async function (assert) {
    await render(<template><AuLoader @disableMessage={{true}} /></template>);

    assert.dom().hasNoText();
  });
});
