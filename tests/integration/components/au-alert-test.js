import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ALERT = {
  CONTAINER: '[data-test-alert]',
  MESSAGE: '[data-test-alert-message]',
  ICON: '[data-test-alert-icon]',
  TITLE: '[data-test-alert-title]',
  CLOSE: '[data-test-alert-close]',
};

module('Integration | Component | au-alert', function (hooks) {
  setupRenderingTest(hooks);

  test('it uses the block content as the alert message', async function (assert) {
    await render(hbs`
      <AuAlert>
        message
      </AuAlert>
    `);

    assert.dom(ALERT.MESSAGE).hasText('message');
  });

  test('it can render an icon', async function (assert) {
    await render(hbs`
      <AuAlert @icon={{this.icon}}>
        message
      </AuAlert>
    `);

    assert.dom(ALERT.ICON).doesNotExist();

    this.set('icon', 'circle-info');
    assert.dom(ALERT.ICON).exists();
  });

  test('it can render a title', async function (assert) {
    await render(hbs`
      <AuAlert @title={{this.title}}>
        message
      </AuAlert>
    `);

    assert.dom(ALERT.TITLE).doesNotExist();

    this.set('title', 'some title');
    assert.dom(ALERT.TITLE).hasText('some title');
  });

  test('it can be closed', async function (assert) {
    await render(hbs`
      <AuAlert @closable={{this.closable}}>
        message
      </AuAlert>
    `);

    assert.dom(ALERT.CLOSE).doesNotExist();

    this.set('closable', true);
    assert.dom(ALERT.CLOSE).exists();

    assert
      .dom(ALERT.CONTAINER)
      .isVisible('the alert is visible before clicking the close button');

    await click(ALERT.CLOSE);
    assert
      .dom(ALERT.CONTAINER)
      .isNotVisible('it hides the alert after clicking the close button');
  });
});
