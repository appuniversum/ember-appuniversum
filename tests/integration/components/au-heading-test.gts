import AuHeading, {
  type AuHeadingSignature,
} from '@appuniversum/ember-appuniversum/components/au-heading';
import { settled } from '@ember/test-helpers';
import { render } from '@ember/test-helpers';
import { tracked } from '@glimmer/tracking';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | au-heading', function (hooks) {
  setupRenderingTest(hooks);

  test('it accepts block content and extra attributes', async function (assert) {
    await render(
      <template>
        <AuHeading data-test-heading>
          Some title
        </AuHeading>
      </template>,
    );

    assert.dom('[data-test-heading]').hasText('Some title');
  });

  test('it defaults to a h1 element', async function (assert) {
    await render(
      <template>
        <AuHeading>
          Some title
        </AuHeading>
      </template>,
    );

    assert.dom('h1').exists('it defaults to h1');
  });

  test('it has a `@level` argument that can be used to set the h* element', async function (assert) {
    class TestState {
      @tracked level?: AuHeadingSignature['Args']['level'];
    }

    const state = new TestState();
    state.level = '1';

    await render(
      <template>
        <AuHeading @level={{state.level}}>
          Some title
        </AuHeading>
      </template>,
    );

    assert.dom('h1').exists();

    state.level = '2';
    await settled();
    assert.dom('h2').exists();

    state.level = '3';
    await settled();
    assert.dom('h3').exists();

    state.level = '4';
    await settled();
    assert.dom('h4').exists();

    state.level = '5';
    await settled();
    assert.dom('h5').exists();

    state.level = '6';
    await settled();
    assert.dom('h6').exists();

    // @ts-expect-error: invalid level values are possible in projects that don't use Glint
    state.level = 'invalid level';
    await settled();
    assert
      .dom('h1')
      .exists('it falls back to h1 if the level value is invalid');
  });
});
