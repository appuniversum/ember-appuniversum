import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { hasDeprecationStartingWith } from '../../helpers/deprecations';

module('Integration | Component | au-button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <AuButton>
        template block text
      </AuButton>
    `);

    assert.dom(this.element).hasText('template block text');
  });

  test('it disables the button when `@disabled` is true', async function (assert) {
    this.isDisabled = false;

    await render(hbs`
      <AuButton @loading={{this.isDisabled}} data-test-button>
        Foo
      </AuButton>
    `);

    assert.dom('[data-test-button]').isNotDisabled();

    this.set('isDisabled', true);
    assert.dom('[data-test-button]').isDisabled();
  });

  test('it disables the button when `@loading` is true', async function (assert) {
    this.isLoading = false;

    await render(hbs`
      <AuButton @loading={{this.isLoading}} @disabled={{false}} data-test-button>
        Foo
      </AuButton>
    `);

    assert.dom('[data-test-button]').isNotDisabled();

    this.set('isLoading', true);
    assert.dom('[data-test-button]').isDisabled();
  });

  test('it shows a deprecation warning when the tertiary skin is used', async function (assert) {
    await render(hbs`
      <AuButton @skin="tertiary">
        template block text
      </AuButton>
    `);

    assert.true(
      hasDeprecationStartingWith(
        '[AuButton] The `tertiary` skin is deprecated. Use the `link` skin instead.',
      ),
    );
  });
});
