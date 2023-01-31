import { linkToModels } from '@appuniversum/ember-appuniversum/private/helpers/link-to-models';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Helper | Private | link-to-models', function (hooks) {
  setupTest(hooks);

  test('it supports passing in a model as the first positional argument', function (assert) {
    let modelId = 1;
    let result = linkToModels([modelId]);

    assert.ok(Array.isArray(result));
    assert.strictEqual(result[0], 1);
  });

  test('it supports passing in a models array as the second positional argument', function (assert) {
    let models = [1, 2, 3];
    let result = linkToModels([undefined, models]);

    assert.ok(Array.isArray(result));
    assert.strictEqual(result[0], 1);
    assert.strictEqual(result[1], 2);
    assert.strictEqual(result[2], 3);
  });

  test('it passes through models as provided so the `<LinkTo>` component validation can be reused', function (assert) {
    let models = 1;
    let result = linkToModels([undefined, models]);

    assert.notOk(Array.isArray(result));
    assert.strictEqual(result, 1);
  });

  test('it returns an empty array if no model or models are provided', function (assert) {
    let result = linkToModels([]);

    assert.ok(Array.isArray(result));
    assert.strictEqual(result.length, 0);
  });

  test('it throws an assertion if both model and models is provided', function (assert) {
    let result;

    assert.throws(() => {
      result = linkToModels([1, [1, 2]]);
    });

    assert.notOk(result);
  });
});
