import AuDropdown from '#src/components/au-dropdown.gts';
import { click, render, settled } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import { tracked } from '@glimmer/tracking';

class TestState {
  @tracked isDisabled?: boolean;
  @tracked isLoading?: boolean;
}

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

  test('it disables the dropdown when `@disabled` is true', async function (assert) {
    const state = new TestState();
    state.isDisabled = false;

    await render(
      <template>
        <AuDropdown @title="foo" @disabled={{state.isDisabled}}>
          <button type="button" data-test-button>baz</button>
        </AuDropdown>
      </template>,
    );

    assert.dom('[data-test-dropdown-button]').isNotDisabled();

    state.isDisabled = true;
    await settled();
    assert.dom('[data-test-dropdown-button]').isDisabled();
  });
});
