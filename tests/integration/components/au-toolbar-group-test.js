import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { hasDeprecation, hasNoDeprecations } from '../../helpers/deprecations';

module('Integration | Component | au-toolbar-group', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the block contents', async function (assert) {
    await render(hbs`
      <AuToolbarGroup>
        template block text
      </AuToolbarGroup>
    `);

    assert.dom(this.element).hasText('template block text');
  });

  test('it shows a deprecation warning when it is invoked directly', async function (assert) {
    await render(hbs`
      <AuToolbarGroup>
        template block text
      </AuToolbarGroup>
    `);

    assert.dom(this.element).hasText('template block text');
    assert.true(
      hasDeprecation(
        'Invoking `AuToolbarGroup` directly is deprecated. You should use the component that is yielded from the `AuToolbar` component instead.'
      )
    );
  });

  test("it doesn't show a deprecation warning if the `@wasYielded` arg is set to true", async function (assert) {
    await render(hbs`
      <AuToolbarGroup @wasYielded={{true}}>
        template block text
      </AuToolbarGroup>
    `);

    assert.true(hasNoDeprecations());
  });
});
