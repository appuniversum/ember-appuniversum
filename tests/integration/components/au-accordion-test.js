import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ACCORDION = {
  TOGGLE: '[data-test-accordion-toggle]',
  CONTENT: '[data-test-accordion-content]',
  BUTTON: '[data-test-accordion-button]',
  SUBTITLE: '[data-test-accordion-subtitle]',
  ICON_OPEN: '[data-test-accordion-icon-open]',
  ICON_CLOSED: '[data-test-accordion-icon-closed]',
  LOADER: '[data-test-accordion-loader]',
};

module('Integration | Component | au-accordion', function (hooks) {
  setupRenderingTest(hooks);

  test("it doesn't render any content when initially rendered", async function (assert) {
    await render(hbs`
      <AuAccordion>
        Content
      </AuAccordion>
    `);

    assert.dom(ACCORDION.CONTENT).doesNotExist();
  });

  test('it toggles its content rendering when clicking it', async function (assert) {
    await render(hbs`
      <AuAccordion>
        Some content
      </AuAccordion>
    `);

    await toggleAccordion();
    assert.dom(ACCORDION.CONTENT).exists().hasText('Some content');

    await toggleAccordion();
    assert.dom(ACCORDION.CONTENT).doesNotExist();
  });

  test('it can display a subtitle', async function (assert) {
    await render(hbs`
      <AuAccordion @subtitle="Foo">
        Some content
      </AuAccordion>
    `);

    assert.dom(ACCORDION.SUBTITLE).exists().hasText('Foo');
  });

  test('it supports changing the label of the toggle button', async function (assert) {
    await render(hbs`
      <AuAccordion @buttonLabel="Foo button">
        Some content
      </AuAccordion>
    `);

    assert.dom(ACCORDION.BUTTON).exists().hasText('Foo button');
  });

  test('it shows a different icon depending on the open state', async function (assert) {
    await render(hbs`
      <AuAccordion>
        Some content
      </AuAccordion>
    `);

    assert.dom(ACCORDION.ICON_OPEN).doesNotExist();
    assert.dom(ACCORDION.ICON_CLOSED).exists();

    await toggleAccordion();
    assert.dom(ACCORDION.ICON_OPEN).exists();
    assert.dom(ACCORDION.ICON_CLOSED).doesNotExist();
  });

  test('it supports choosing different icons', async function (assert) {
    await render(hbs`
      <AuAccordion @iconOpen={{this.iconOpen}} @iconClosed={{this.iconClosed}}>
        Some content
      </AuAccordion>
    `);

    assert
      .dom(ACCORDION.ICON_CLOSED)
      .hasAttribute('data-test-accordion-icon-closed', 'nav-right');

    this.set('iconClosed', 'other-closed-icon');

    assert
      .dom(ACCORDION.ICON_CLOSED)
      .hasAttribute('data-test-accordion-icon-closed', 'other-closed-icon');

    await toggleAccordion();
    assert
      .dom(ACCORDION.ICON_OPEN)
      .hasAttribute('data-test-accordion-icon-open', 'nav-down');

    this.set('iconOpen', 'other-open-icon');

    assert
      .dom(ACCORDION.ICON_OPEN)
      .hasAttribute('data-test-accordion-icon-open', 'other-open-icon');
  });

  test('it can show a loading indicator instead of content', async function (assert) {
    this.isLoading = true;

    await render(hbs`
      <AuAccordion @loading={{this.isLoading}}>Some content</AuAccordion>
    `);

    assert.dom(ACCORDION.LOADER).doesNotExist();

    await toggleAccordion();
    assert.dom(ACCORDION.LOADER).exists();
    assert.dom(ACCORDION.CONTENT).doesNotContainText('Some content');

    this.set('isLoading', false);
    assert.dom(ACCORDION.LOADER).doesNotExist();
    assert.dom(ACCORDION.CONTENT).containsText('Some content');
  });

  test("it's possible to add extra html attributes", async function (assert) {
    await render(hbs`
      <AuAccordion class="test" data-test-accordion-external></AuAccordion>
    `);

    assert.dom('[data-test-accordion-external]').exists().hasClass('test');
  });
});

function toggleAccordion() {
  return click(ACCORDION.TOGGLE);
}
