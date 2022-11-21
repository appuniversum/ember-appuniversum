import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | au-floating-ui', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <AuFloatingUi as |floatingUI|>
        <button {{floatingUI.reference}}>Reference</button>
        <div data-floater {{floatingUI.floater}}>
          <div {{floatingUI.arrow}}></div>
          Floater
        </div>
      </AuFloatingUi>
    `);

    assert.dom('[data-floater]').hasStyle({
      position: 'fixed',
      top: '0px',
      left: '0px',
    });
  });
});
