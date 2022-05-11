import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | format-time-digit', function (hooks) {
  setupRenderingTest(hooks);

  test('it deals with empty strings', async function (assert) {
    this.set('inputValue', '');
    await render(hbs`{{format-time-digit this.inputValue}}`);
    assert.dom(this.element).hasText('00');
  });

  test('it deals with small numbers', async function (assert) {
    this.set('inputValue', '0');
    await render(hbs`{{format-time-digit this.inputValue}}`);
    assert.dom(this.element).hasText('00');
    this.set('inputValue', '5');
    await render(hbs`{{format-time-digit this.inputValue}}`);
    assert.dom(this.element).hasText('05');
  });

  test('it deals with larger numbers', async function (assert) {
    this.set('inputValue', '12');
    await render(hbs`{{format-time-digit this.inputValue}}`);
    assert.dom(this.element).hasText('12');
    this.set('inputValue', '54');
    await render(hbs`{{format-time-digit this.inputValue}}`);
    assert.dom(this.element).hasText('54');
  });
});
