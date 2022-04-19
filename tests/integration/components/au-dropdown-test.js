import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | au-dropdown', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <AuDropdown @title="foo" @buttonLabel="bar">
        <button type="button" data-test-button>baz</button>
      </AuDropdown>
    `);

    assert.dom('[data-test-dropdown-title]').hasText('foo');
    assert.dom('[data-test-dropdown-button-label]').hasText('bar');
  });

  test('it toggles the visibility of its content when clicking the dropdown button', async function (assert) {
    await render(hbs`
      <AuDropdown @title="foo" @buttonLabel="bar">
        <button type="button" data-test-button>baz</button>
      </AuDropdown>
    `);

    assert.dom('[data-test-button]').isNotVisible('it is closed by default');

    await click('[data-test-dropdown-button]');
    assert
      .dom('[data-test-button]')
      .isVisible('it opens after clicking the button');

    await click('[data-test-dropdown-button]');
    assert
      .dom('[data-test-button]')
      .isNotVisible(
        'it closes when clicking the button while the dropdown is open'
      );
  });
});
