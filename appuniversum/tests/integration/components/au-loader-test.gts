import AuLoader from '#src/components/au-loader.gts';
import { getRootElement, render } from '@ember/test-helpers';
import { queryByText } from '@testing-library/dom';
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
  });
});
