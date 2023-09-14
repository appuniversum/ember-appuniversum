import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { fillIn, find, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { hasDeprecationStartingWith } from '../../helpers/deprecations';

module('Integration | Component | au-input', function (hooks) {
  setupRenderingTest(hooks);

  test("it's possible to set the type", async function (assert) {
    await render(hbs`<AuInput @type={{this.type}} />`);
    assert
      .dom('input')
      .hasAttribute('type', 'text', 'it defaults to type="text"');

    this.set('type', 'number');
    assert.dom('input').hasAttribute('type', 'number');

    assert.true(
      hasDeprecationStartingWith(
        '[AuInput] The `@type` argument is deprecated. Use the `type` attribute instead.',
      ),
      '@type throws a deprecation warning',
    );
  });

  test("it's possible to set the value", async function (assert) {
    this.value = 'hello';
    await render(hbs`<AuInput @value={{this.value}} />`);
    assert.dom('input').hasValue('hello');

    await fillIn('input', 'hello world');
    assert.strictEqual(
      this.value,
      'hello world',
      'the value is updated through 2-way-binding',
    );

    assert.true(
      hasDeprecationStartingWith(
        '[AuInput] The `@value` argument is deprecated. Use the `value` attribute and the `{{on}}` modifier instead.',
      ),
      '@value throws a deprecation warning',
    );
  });

  test('it shows deprecation warnings even if the values are undefined', async function (assert) {
    await render(hbs`<AuInput @value={{this.value}} @type={{this.type}} />`);

    assert.true(
      hasDeprecationStartingWith(
        '[AuInput] The `@value` argument is deprecated. Use the `value` attribute and the `{{on}}` modifier instead.',
      ),
      '@value throws a deprecation warning',
    );

    assert.true(
      hasDeprecationStartingWith(
        '[AuInput] The `@type` argument is deprecated. Use the `type` attribute instead.',
      ),
      '@type throws a deprecation warning',
    );
  });

  test("it's possible to pass attributes to the input element", async function (assert) {
    await render(hbs`<AuInput data-test-hello />`);
    assert.dom('input[data-test-hello]').exists();
  });

  test("it's possible to mask the input", async function (assert) {
    this.value = '12';
    await render(
      hbs`<AuInput @value={{this.value}} @mask="9.9.9" @maskPlaceholder="_"/>`,
    );

    const input = find('input');
    assert.ok(
      input.inputmask,
      'an inputmask instance is attached to the `inputmask` property on the element',
    );
    assert.strictEqual(
      input.value,
      '1.2._',
      '.value returns the mask and placeholder',
    );

    this.set('value', '321');
    assert.strictEqual(
      input.value,
      '3.2.1',
      '.value returns the mask and placeholder',
    );

    assert.true(
      hasDeprecationStartingWith(
        '[AuInput] The masking feature is deprecated. Use the `{{au-inputmask}}` modifier instead.',
      ),
      '@mask throws a deprecation warning',
    );
  });
});
