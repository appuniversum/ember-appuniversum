import AuMainContainer from '@appuniversum/ember-appuniversum/components/au-main-container';
import { render, settled } from '@ember/test-helpers';
import { tracked } from '@glimmer/tracking';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

const MAIN_CONTAINER = {
  CONTAINER: '[data-test-main-container]',
  SIDEBAR: '[data-test-main-container-sidebar]',
  CONTENT: '[data-test-main-container-content]',
};

module('Integration | Component | au-main-container', function (hooks) {
  setupRenderingTest(hooks);

  test("it's possible to pass extra html attributes", async function (assert) {
    await render(
      <template>
        <AuMainContainer data-test-main-container class="test" />
      </template>,
    );

    assert.dom(MAIN_CONTAINER.CONTAINER).exists().hasClass('test');
  });

  test('it yields a sidebar component that is only visible when it has block contents', async function (assert) {
    await render(
      <template>
        <AuMainContainer as |main|>
          <main.sidebar data-test-main-container-sidebar>Sidebar contents</main.sidebar>
        </AuMainContainer>
      </template>,
    );

    assert.dom(MAIN_CONTAINER.SIDEBAR).exists().hasText('Sidebar contents');

    await render(
      <template>
        <AuMainContainer as |main|>
          <main.sidebar data-test-main-container-sidebar />
        </AuMainContainer>
      </template>,
    );

    assert.dom(MAIN_CONTAINER.SIDEBAR).doesNotExist();

    await render(<template><AuMainContainer /></template>);

    assert.dom(MAIN_CONTAINER.SIDEBAR).doesNotExist();
  });

  test('it yields a content component that is only visible when it has block contents', async function (assert) {
    await render(
      <template>
        <AuMainContainer as |main|>
          <main.content data-test-main-container-content>Main contents</main.content>
        </AuMainContainer>
      </template>,
    );

    assert.dom(MAIN_CONTAINER.CONTENT).exists().hasText('Main contents');

    await render(
      <template>
        <AuMainContainer as |main|>
          <main.content data-test-main-container-content />
        </AuMainContainer>
      </template>,
    );

    assert.dom(MAIN_CONTAINER.CONTENT).doesNotExist();
  });

  test("it's possible to force the content to scroll if its larger than its parent", async function (assert) {
    class TestState {
      @tracked shouldScroll: boolean = false;
    }

    const state = new TestState();

    await render(
      <template>
        <AuMainContainer as |main|>
          <main.content
            @scroll={{state.shouldScroll}}
            data-test-main-container-content
          >Main contents</main.content>
        </AuMainContainer>
      </template>,
    );

    let containerElement = document.querySelector(
      MAIN_CONTAINER.CONTENT,
    ) as HTMLElement;
    assert.notStrictEqual(
      getComputedStyle(containerElement).getPropertyValue('overflow-y'),
      'auto',
    );

    state.shouldScroll = true;
    await settled();

    assert.strictEqual(
      getComputedStyle(containerElement).getPropertyValue('overflow-y'),
      'auto',
    );
  });
});
