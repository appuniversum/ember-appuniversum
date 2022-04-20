import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, getDeprecations, render } from '@ember/test-helpers';
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

  test('it can render an icon with the deprecated argument name', async function (assert) {
    await render(hbs`
      <AuAlert @alertIcon={{this.icon}}>
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

  test('it can render a title with the deprecated argument name', async function (assert) {
    await render(hbs`
      <AuAlert @alertTitle={{this.title}}>
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

  test('it throws a deprecation warning when `@alertSkin` is used', async function (assert) {
    await render(hbs`<AuAlert
      @skin="info"
    >bar</AuAlert>`);

    assert.true(hasNoDeprecations());

    await render(hbs`<AuAlert
      @alertSkin="info"
    >bar</AuAlert>`);

    assert.true(hasDeprecation('@alertSkin is deprecated, use @skin instead'));
  });

  test('it throws a deprecation warning when `@alertSize` is used', async function (assert) {
    await render(hbs`<AuAlert
      @size="tiny"
    >bar</AuAlert>`);

    assert.true(hasNoDeprecations());

    await render(hbs`<AuAlert
      @alertSize="tiny"
    >bar</AuAlert>`);

    assert.true(hasDeprecation('@alertSize is deprecated, use @size instead'));
  });

  test('it throws a deprecation warning when `@alertIcon` is used', async function (assert) {
    await render(hbs`<AuAlert
      @icon="tiny"
    >bar</AuAlert>`);

    assert.true(hasNoDeprecations());

    await render(hbs`<AuAlert
      @alertIcon="info"
    >bar</AuAlert>`);

    assert.true(hasDeprecation('@alertIcon is deprecated, use @icon instead'));
  });

  test('it throws a deprecation warning when `@alertTitle` is used', async function (assert) {
    await render(hbs`<AuAlert
      @title="foo"
    >bar</AuAlert>`);

    assert.true(hasNoDeprecations());

    await render(hbs`<AuAlert
      @alertTitle="foo"
    >bar</AuAlert>`);

    assert.true(
      hasDeprecation('@alertTitle is deprecated, use @title instead')
    );
  });
});

function hasNoDeprecations() {
  return getDeprecations().length === 0;
}

function hasDeprecation(deprecationMessage) {
  return getDeprecations().some(
    (deprecation) => deprecation.message === deprecationMessage
  );
}
