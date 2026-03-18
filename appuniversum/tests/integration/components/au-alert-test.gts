import AuAlert from '@appuniversum/ember-appuniversum/components/au-alert';
import { click, render, settled } from '@ember/test-helpers';
import { tracked } from '@glimmer/tracking';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

const ALERT = {
  CONTAINER: '[data-test-alert]',
  MESSAGE: '[data-test-alert-message]',
  ICON: '[data-test-alert-icon]',
  TITLE: '[data-test-alert-title]',
  CLOSE: '[data-test-alert-close]',
};

module('Integration | Component | au-alert', function (hooks) {
  setupRenderingTest(hooks);

  test('it accepts extra attributes', async function (assert) {
    await render(<template><AuAlert data-test-alert /></template>);

    assert.dom('[data-test-alert]').exists();
  });

  test('it uses the block content as the alert message', async function (assert) {
    await render(
      <template>
        <AuAlert>
          message
        </AuAlert>
      </template>,
    );

    assert.dom(ALERT.MESSAGE).hasText('message');
  });

  test('it can render an icon', async function (assert) {
    const state = new TestState();
    await render(
      <template>
        <AuAlert @icon={{state.icon}}>
          message
        </AuAlert>
      </template>,
    );

    assert.dom(ALERT.ICON).doesNotExist();

    state.icon = 'circle-info';
    await settled();
    assert.dom(ALERT.ICON).exists();
  });

  test('it can render a title', async function (assert) {
    const state = new TestState();
    await render(
      <template>
        <AuAlert @title={{state.title}}>
          message
        </AuAlert>
      </template>,
    );

    assert.dom(ALERT.TITLE).doesNotExist();

    state.title = 'some title';
    await settled();
    assert.dom(ALERT.TITLE).hasText('some title');
  });

  test('it can be closed', async function (assert) {
    const state = new TestState();
    await render(
      <template>
        <AuAlert @closable={{state.closable}} data-test-alert>
          message
        </AuAlert>
      </template>,
    );

    assert.dom(ALERT.CLOSE).doesNotExist();

    state.closable = true;
    await settled();
    assert.dom(ALERT.CLOSE).exists();

    assert
      .dom(ALERT.CONTAINER)
      .isVisible('the alert is visible before clicking the close button');

    await click(ALERT.CLOSE);
    assert
      .dom(ALERT.CONTAINER)
      .isNotVisible('it hides the alert after clicking the close button');
  });

  test('it calls the @onClose function when closed', async function (assert) {
    const state = new TestState();
    state.onClose = () => {
      assert.step('@onClose was called');
    };

    await render(
      <template>
        <AuAlert @closable={{true}} @onClose={{state.onClose}}>
          message
        </AuAlert>
      </template>,
    );

    await click(ALERT.CLOSE);
    assert.verifySteps(['@onClose was called']);
  });
});

class TestState {
  @tracked title?: string;
  @tracked closable?: boolean;
  @tracked icon?: string;
  @tracked onClose?: () => void;
}
