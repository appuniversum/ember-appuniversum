import AuLoader from '@appuniversum/ember-appuniversum/components/au-loader';
import { getRootElement, render } from '@ember/test-helpers';
import { queryByText } from '@testing-library/dom';
import { hasDeprecationStartingWith } from 'dummy/tests/helpers/deprecations';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | au-loader', function (hooks) {
  setupRenderingTest(hooks);

  test('it uses the block contents as the loading message', async function (assert) {
    await render(
      <template>
        <AuLoader>
          Pagina is aan het laden
        </AuLoader>
      </template>,
    );

    assert.dom().hasText('Pagina is aan het laden');
    assert.false(hasDeprecationStartingWith('[AuLoader]'));
  });

  test('it supports visually hiding the loading text', async function (assert) {
    await render(
      <template>
        <AuLoader @hideMessage={{true}}>
          Pagina is aan het laden
        </AuLoader>
      </template>,
    );

    const root = getRootElement() as HTMLElement;
    const text = queryByText(root, 'Pagina is aan het laden') as HTMLElement;

    // Hacky way to test if the text is visible.
    // `assert.dom(text).isNotVisible()` doesn't work here because of the styles we use for the au-u-hidden-visually class.
    assert.true(text.offsetHeight <= 1);
    assert.true(text.offsetWidth <= 1);
    assert.false(hasDeprecationStartingWith('[AuLoader]'));
  });

  test('it renders a hidden loading text for screen readers', async function (assert) {
    await render(<template><AuLoader /></template>);

    assert.dom().hasText('Aan het laden');
    assert.true(showsDeprecationMessage());
  });

  test('it supports rendering a custom hidden loading text', async function (assert) {
    await render(<template><AuLoader @message="Loading" /></template>);

    assert.dom().hasText('Loading');
    assert.true(showsDeprecationMessage());
  });

  test('it supports disabling the hidden message', async function (assert) {
    await render(<template><AuLoader @disableMessage={{true}} /></template>);

    assert.dom().hasNoText();
    assert.true(showsDeprecationMessage());
  });

  test('@padding shows a deprecation', async function (assert) {
    await render(<template><AuLoader @padding="small" /></template>);

    assert.true(showsDeprecationMessage());
  });
});

function showsDeprecationMessage() {
  return hasDeprecationStartingWith(
    '[AuLoader] This version of the `AuLoader` component is deprecated',
  );
}
