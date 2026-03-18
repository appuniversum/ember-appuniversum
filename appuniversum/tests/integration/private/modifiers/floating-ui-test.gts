import floatingUi from '@appuniversum/ember-appuniversum/private/modifiers/floating-ui';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';

module('Integration | Private Modifier | floating-ui', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(
      <template>
        <button type="button" id="reference">Reference</button>
        <div data-floater {{floatingUi "#reference"}}>Floater</div>
      </template>,
    );

    assert.dom('[data-floater]').hasStyle({
      position: 'fixed',
      top: '0px',
      left: '0px',
    });
  });
});
