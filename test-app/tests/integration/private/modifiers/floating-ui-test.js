import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

import FloatingUiModifier from '@appuniversum/ember-appuniversum/private/modifiers/floating-ui';

module('Integration | Private Modifier | floating-ui', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('floatingUi', FloatingUiModifier);

    await render(hbs`
      <button type="button" id="reference">Reference</button>
      <div data-floater {{this.floatingUi "#reference"}}>Floater</div>
    `);

    assert.dom('[data-floater]').hasStyle({
      position: 'fixed',
      top: '0px',
      left: '0px',
    });
  });
});
