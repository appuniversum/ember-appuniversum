import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | au-toolbar', function (hooks) {
  setupRenderingTest(hooks);

  test('it yields a group component', async function (assert) {
    await render(hbs`
      <AuToolbar as |Group|>
        <Group data-test-foo>Foo</Group>
        <Group data-test-bar>Bar</Group>
      </AuToolbar>
    `);

    assert.dom('[data-test-foo]').hasText('Foo');
    assert.dom('[data-test-bar]').hasText('Bar');
  });

  test('it passes through extra html attributes', async function (assert) {
    await render(hbs`
      <AuToolbar data-test-foo="bar"></AuToolbar>
    `);

    assert.dom('[data-test-foo]').exists();
  });
});
