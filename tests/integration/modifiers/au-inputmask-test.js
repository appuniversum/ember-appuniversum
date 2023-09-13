import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { fillIn, find, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | au-inputmask', function (hooks) {
  setupRenderingTest(hooks);

  test('it works', async function (assert) {
    await render(
      hbs`<label>Foo<input value="123" {{au-inputmask options=(hash mask="9.9.9")}} /></label>`,
    );

    const input = find('input');
    assert.ok(
      input.inputmask,
      'the inputmask property is added to the element after initialising',
    );

    assert.strictEqual(input.value, '1.2.3', '.value returns the masked value');
    assert.strictEqual(
      input.inputmask.unmaskedvalue(),
      '123',
      '.unmaskedvalue() returns the unmasked value',
    );
  });

  test('it supports regular input events', async function (assert) {
    this.handleChange = (event) => {
      assert.step(event.target.value);
      assert.step(event.target.inputmask.unmaskedvalue());
    };
    await render(
      hbs`<label>Foo<input {{au-inputmask options=(hash mask="9.9.9")}} {{on "change" this.handleChange}} /></label>`,
    );

    const input = find('input');
    await fillIn(input, '123');

    assert.verifySteps(['1.2.3', '123']);
  });
});
