import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | au-floating-ui', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <button id="reference">Reference</button>
      <div data-floater {{au-floating-ui "#reference"}}>Floater</div>
    `);

    assert.dom('[data-floater]').hasStyle({
      position: 'fixed',
      top: '0px',
      left: '0px',
    });
  });
});
