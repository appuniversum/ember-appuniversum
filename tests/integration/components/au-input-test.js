import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | au-input', function (hooks) {
  setupRenderingTest(hooks);

  test("it's possible to set the type", async function (assert) {
    await render(hbs`<AuInput @type={{this.type}} />`);
    assert
      .dom('input')
      .hasAttribute('type', 'text', 'it defaults to type="text"');

    this.set('type', 'number');
    assert.dom('input').hasAttribute('type', 'number');
  });
});
