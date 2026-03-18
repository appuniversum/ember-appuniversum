import AuBrand from '@appuniversum/ember-appuniversum/components/au-brand';
import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | au-brand', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><AuBrand /></template>);

    assert.dom().hasText('Logo Vlaanderen Vlaanderen');
  });

  test('it accepts extra attributes', async function (assert) {
    await render(<template><AuBrand data-test-brand /></template>);

    assert.dom('[data-test-brand]').exists();
  });

  test('it can display a tagline', async function (assert) {
    await render(<template><AuBrand @tagline="foo" /></template>);

    assert.dom().containsText('foo');
  });
});
