import AuDropdown from '@appuniversum/ember-appuniversum/components/au-dropdown';
import { click, render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | au-dropdown', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(
      <template>
        <AuDropdown @title="foo">
          <button type="button" data-test-button>baz</button>
        </AuDropdown>
      </template>,
    );

    assert.dom('[data-test-dropdown-title]').hasText('foo');
  });

  test('it toggles the visibility of its content when clicking the dropdown button', async function (assert) {
    await render(
      <template>
        <AuDropdown @title="foo">
          <button type="button" data-test-button>baz</button>
        </AuDropdown>
      </template>,
    );

    assert.dom('[data-test-button]').isNotVisible('it is closed by default');

    await click('[data-test-dropdown-button]');
    assert
      .dom('[data-test-button]')
      .isVisible('it opens after clicking the button');

    await click('[data-test-dropdown-button]');
    assert
      .dom('[data-test-button]')
      .isNotVisible(
        'it closes when clicking the button while the dropdown is open',
      );
  });

  test('it toggles the visibility of its content when clicking children of the dropdown button', async function (assert) {
    await render(
      <template>
        <AuDropdown @title="foo">
          <button type="button" data-test-button>baz</button>
        </AuDropdown>
      </template>,
    );

    assert.dom('[data-test-button]').isNotVisible('it is closed by default');

    await click('[data-test-dropdown-button] *');
    assert
      .dom('[data-test-button]')
      .isVisible('it opens after clicking a child of the button');

    await click('[data-test-dropdown-button] *');
    assert
      .dom('[data-test-button]')
      .isNotVisible(
        'it closes when clicking a child of the button button while the dropdown is open',
      );
  });

  test('it calls the @onClose function when the dropdown is closed', async function (assert) {
    const onClose = () => {
      assert.step('@onClose');
    };

    await render(
      <template>
        <AuDropdown @title="foo" @onClose={{onClose}}>
          <button type="button" data-test-button>baz</button>
        </AuDropdown>
      </template>,
    );

    await click('[data-test-dropdown-button]'); // open
    await click('[data-test-dropdown-button]'); // close

    assert.verifySteps(['@onClose']);
  });
});
