import { module, test } from 'qunit';
import { setupRenderingTest } from 'test-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | au-modal-container', function (hooks) {
  setupRenderingTest(hooks);

  test('it passes through attributes', async function (assert) {
    await render(hbs`<AuModalContainer foo="bar" />`);

    assert.dom('[foo]').hasAttribute('foo', 'bar');
  });

  test("it doesn't render default block contents", async function (assert) {
    await render(hbs`<AuModalContainer>Foo</AuModalContainer>`);

    assert.dom(this.element).doesNotContainText('Foo');
  });
});
