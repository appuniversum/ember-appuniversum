import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { hasDeprecationStartingWith } from '../../helpers/deprecations';

module('Integration | Component | au-textarea', function (hooks) {
  setupRenderingTest(hooks);

  test('it can be disabled', async function (assert) {
    this.isDisabled = true;
    await render(hbs`<AuTextarea @disabled={{this.isDisabled}} />`);

    assert.dom('textarea').isDisabled();

    this.set('isDisabled', false);
    assert.dom('textarea').isNotDisabled();
  });

  test('it updates the `@value` through 2-way-binding', async function (assert) {
    this.value = '';

    await render(hbs`<AuTextarea @value={{this.value}} />`);

    await fillIn('textarea', 'foo');
    assert.dom('textarea').hasValue('foo');
    assert.strictEqual(this.value, 'foo');

    assert.true(
      hasDeprecationStartingWith(
        '[AuTextarea] The `@value` argument is deprecated. Use the `value` attribute and the `{{on}}` modifier instead.',
      ),
    );
  });

  test('it supports the `value` attribute', async function (assert) {
    this.value = '';
    this.handleChange = (event) => {
      this.set('value', event.target.value);
    };

    await render(
      hbs`<AuTextarea value={{this.value}} {{on "change" this.handleChange}} />`,
    );
    assert.dom('textarea').hasNoValue();

    this.set('value', 'foo');
    assert.dom('textarea').hasValue('foo');

    await fillIn('textarea', 'bar');
    assert.strictEqual(this.value, 'bar');
    assert.false(
      hasDeprecationStartingWith(
        '[AuTextarea] The `@value` argument is deprecated. Use the `value` attribute and the `{{on}}` modifier instead.',
      ),
    );
  });

  test('it supports updating the value through the block contents', async function (assert) {
    this.value = '';
    this.handleChange = (event) => {
      this.value = event.target.value;
    };

    await render(
      hbs`<AuTextarea {{on "change" this.handleChange}}>{{this.value}}</AuTextarea>`,
    );
    assert.dom('textarea').hasNoValue();

    this.set('value', 'foo');
    assert.dom('textarea').hasValue('foo');

    await fillIn('textarea', 'bar');
    assert.dom('textarea').hasValue('bar');
    assert.strictEqual(this.value, 'bar');
    assert.false(
      hasDeprecationStartingWith(
        '[AuTextarea] The `@value` argument is deprecated. Use the `value` attribute and the `{{on}}` modifier instead.',
      ),
    );
  });
});
