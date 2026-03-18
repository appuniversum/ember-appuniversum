import inputmask from '@appuniversum/ember-appuniversum/modifiers/au-inputmask';
import { hash } from '@ember/helper';
import { on } from '@ember/modifier';
import { fillIn, find, render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Modifier | au-inputmask', function (hooks) {
  setupRenderingTest(hooks);

  test('it works', async function (assert) {
    await render(
      <template>
        <label>Foo<input
            value="123"
            {{inputmask options=(hash mask="9.9.9")}}
          /></label>
      </template>,
    );

    const inputElement = find('input')!;
    assert.ok(
      inputElement.inputmask,
      'the inputmask property is added to the element after initialising',
    );

    assert.strictEqual(
      inputElement.value,
      '1.2.3',
      '.value returns the masked value',
    );
    assert.strictEqual(
      inputElement.inputmask?.unmaskedvalue(),
      '123',
      '.unmaskedvalue() returns the unmasked value',
    );
  });

  test('it supports regular input events', async function (assert) {
    const handleChange = (event: Event) => {
      const inputElement = event.target as HTMLInputElement;
      assert.step(inputElement.value);

      if (inputElement.inputmask) {
        assert.step(inputElement.inputmask.unmaskedvalue());
      }
    };
    await render(
      <template>
        <label>Foo
          <input
            {{inputmask options=(hash mask="9.9.9")}}
            {{on "change" handleChange}}
          />
        </label>
      </template>,
    );

    const inputElement = find('input')!;
    await fillIn(inputElement, '123');

    assert.verifySteps(['1.2.3', '123']);
  });
});
