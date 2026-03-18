import AuNavigationLink from '@appuniversum/ember-appuniversum/components/au-navigation-link';
import { click, getRootElement, render } from '@ember/test-helpers';
import { queryByText } from '@testing-library/dom';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | au-navigation-link', function (hooks) {
  setupRenderingTest(hooks);

  test('it accepts block contents and extra attributes', async function (assert) {
    await render(
      <template>
        <AuNavigationLink @route="application" data-test-navigation-link>
          Navigation link
        </AuNavigationLink>
      </template>,
    );

    assert.dom('[data-test-navigation-link]').hasText('Navigation link');
  });

  test('it focuses the element with the `#content` id after being clicked', async function (assert) {
    await render(
      <template>
        <AuNavigationLink @route="application">
          Navigation link
        </AuNavigationLink>
        <div id="content" tabindex="-1">Content</div>
      </template>,
    );

    const testContainer = getRootElement() as HTMLElement;
    const link = queryByText(testContainer, 'Navigation link') as HTMLElement;

    assert.dom('#content').isNotFocused();
    await click(link);
    assert.dom('#content').isFocused();
  });
});
