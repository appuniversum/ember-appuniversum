import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import AuLinkExternal from '@appuniversum/ember-appuniversum/components/au-link-external';
import { tracked } from '@glimmer/tracking';
import { settled } from '@ember/test-helpers';

module('Integration | Component | au-link-external', function (hooks) {
  setupRenderingTest(hooks);

  test('it accepts block content and extra attributes', async function (assert) {
    await render(
      <template>
        <AuLinkExternal data-test-link-external>
          template block text
        </AuLinkExternal>
      </template>,
    );

    assert.dom('[data-test-link-external]').hasText('template block text');
  });

  test('it accepts a `@newTab` argument', async function (assert) {
    await render(
      <template>
        <AuLinkExternal data-test-link-external>
          template block text
        </AuLinkExternal>
      </template>,
    );

    assert
      .dom('[data-test-link-external]')
      .hasAttribute('target')
      .hasAttribute('rel');

    const state = new TestState();

    await render(
      <template>
        <AuLinkExternal @newTab={{state.newTab}} data-test-link-external>
          template block text
        </AuLinkExternal>
      </template>,
    );

    assert
      .dom('[data-test-link-external]')
      .hasNoAttribute('target')
      .hasNoAttribute('rel');

    state.newTab = true;
    await settled();

    assert
      .dom('[data-test-link-external]')
      .hasAttribute('target')
      .hasAttribute('rel');
  });
});

class TestState {
  @tracked newTab = false;
}
