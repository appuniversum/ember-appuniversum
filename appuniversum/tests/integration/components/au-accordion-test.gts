import AuAccordion from '@appuniversum/ember-appuniversum/components/au-accordion';
import { click, settled, render } from '@ember/test-helpers';
import { tracked } from '@glimmer/tracking';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

const ACCORDION = {
  TOGGLE: '[data-test-accordion-toggle]',
  CONTENT: '[data-test-accordion-content]',
  BUTTON: '[data-test-accordion-button]',
  SUBTITLE: '[data-test-accordion-subtitle]',
  LOADER: '[data-test-accordion-loader]',
};

class TestState {
  @tracked iconClosed?: string;
  @tracked iconOpen?: string;
  @tracked isLoading?: boolean;
}

module('Integration | Component | au-accordion', function (hooks) {
  setupRenderingTest(hooks);

  test("it doesn't render any content when initially rendered", async function (assert) {
    await render(
      <template>
        <AuAccordion>
          Content
        </AuAccordion>
      </template>,
    );

    assert.dom(ACCORDION.CONTENT).doesNotExist();
  });

  test('it renders the content by default if `isOpenInitially` is set to `true`', async function (assert) {
    await render(
      <template>
        <AuAccordion @isOpenInitially={{true}}>
          Content
        </AuAccordion>
      </template>,
    );

    assert.dom(ACCORDION.CONTENT).exists().hasText('Content');
  });

  test('it toggles its content rendering when clicking it', async function (assert) {
    await render(
      <template>
        <AuAccordion>
          Some content
        </AuAccordion>
      </template>,
    );

    await toggleAccordion();
    assert.dom(ACCORDION.CONTENT).exists().hasText('Some content');

    await toggleAccordion();
    assert.dom(ACCORDION.CONTENT).doesNotExist();
  });

  test('it can display a subtitle', async function (assert) {
    await render(
      <template>
        <AuAccordion @subtitle="Foo">
          Some content
        </AuAccordion>
      </template>,
    );

    assert.dom(ACCORDION.SUBTITLE).exists().hasText('Foo');
  });

  test('it supports changing the label of the toggle button', async function (assert) {
    await render(
      <template>
        <AuAccordion @buttonLabel="Foo button">
          Some content
        </AuAccordion>
      </template>,
    );

    assert.dom(ACCORDION.BUTTON).exists().hasText('Foo button');
  });

  test('it can show a loading indicator instead of content', async function (assert) {
    const state = new TestState();
    state.isLoading = true;

    await render(
      <template>
        <AuAccordion @loading={{state.isLoading}}>Some content</AuAccordion>
      </template>,
    );

    assert.dom(ACCORDION.LOADER).doesNotExist();

    await toggleAccordion();
    assert.dom(ACCORDION.LOADER).exists();
    assert.dom(ACCORDION.CONTENT).doesNotContainText('Some content');

    state.isLoading = false;
    await settled();
    assert.dom(ACCORDION.LOADER).doesNotExist();
    assert.dom(ACCORDION.CONTENT).containsText('Some content');
  });

  test("it's possible to add extra html attributes", async function (assert) {
    await render(
      <template>
        <AuAccordion class="test" data-test-accordion-external />
      </template>,
    );

    assert.dom('[data-test-accordion-external]').exists().hasClass('test');
  });
});

function toggleAccordion() {
  return click(ACCORDION.TOGGLE);
}
