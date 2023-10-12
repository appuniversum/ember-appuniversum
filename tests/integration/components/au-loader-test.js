import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { hasDeprecationStartingWith } from '../../helpers/deprecations';

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

  test('it triggers a deprecation when the `@size` argument is used', async function (assert) {
    await render(hbs`<AuLoader @padding="small" />`);

    assert.false(
      hasDeprecationStartingWith(
        '[AuLoader] The `@size` argument is deprecated. Use `@padding` instead.',
      ),
    );

    await render(hbs`<AuLoader @size="small" />`);
    assert.true(
      hasDeprecationStartingWith(
        '[AuLoader] The `@size` argument is deprecated. Use `@padding` instead.',
      ),
    );
  });
});
