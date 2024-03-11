import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import AuFieldset from '@appuniversum/ember-appuniversum/components/au-fieldset';

module('Integration | Component | au-fieldset', function (hooks) {
  setupRenderingTest(hooks);

  test('it yields a legend and content component', async function (assert) {
    await render(
      <template>
        <AuFieldset data-test-fieldset as |f|>
          <f.legend data-test-legend>Legend</f.legend>
          <f.content data-test-content>Content</f.content>
        </AuFieldset>
      </template>,
    );

    assert.dom('[data-test-fieldset]').exists();
    assert.dom('[data-test-legend]').hasText('Legend');
    assert.dom('[data-test-content]').hasText('Content');
  });
});
