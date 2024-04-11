import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { fillIn, find, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import auInputmask from '@appuniversum/ember-appuniversum/modifiers/au-inputmask';
import { hash } from '@ember/helper';
import { on } from '@ember/modifier';

module('Integration | Modifier | au-inputmask', function (hooks) {
  setupRenderingTest(hooks);

  test('it works', async function (assert) {
    await render(
      hbs`<label>Foo<input value="123" {{au-inputmask options=(hash mask="9.9.9")}} /></label>`,
    );

    const input = find('input') as HTMLInputElement;
    assert.ok(
      input.inputmask,
      'the inputmask property is added to the element after initialising',
    );

    assert.strictEqual(input.value, '1.2.3', '.value returns the masked value');
    assert.strictEqual(
      input.inputmask!.unmaskedvalue(),
      '123',
      '.unmaskedvalue() returns the unmasked value',
    );
  });

  test('it supports regular input events', async function (assert) {
    const handleChange = (event: Event) => {
      const input = event.target as HTMLInputElement;
      assert.step(input.value);
      assert.step(input.inputmask!.unmaskedvalue());
    };

    await render(
      <template>
        <label>Foo<input
            {{auInputmask options=(hash mask="9.9.9")}}
            {{on "change" handleChange}}
          /></label>
      </template>,
    );

    const input = find('input') as HTMLInputElement;
    await fillIn(input, '123');

    assert.verifySteps(['1.2.3', '123']);
  });
});
