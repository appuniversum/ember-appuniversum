import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const MAIN_CONTAINER = {
  CONTAINER: '[data-test-main-container]',
  SIDEBAR: '[data-test-main-container-sidebar]',
  CONTENT: '[data-test-main-container-content]',
};

module('Integration | Component | au-main-container', function (hooks) {
  setupRenderingTest(hooks);

  test("it's possible to pass extra html attributes", async function (assert) {
    await render(hbs`
      <AuMainContainer class="test"></AuMainContainer>
    `);

    assert.dom(MAIN_CONTAINER.CONTAINER).exists().hasClass('test');
  });

  test('it yields a sidebar component that is only visible when it has block contents', async function (assert) {
    await render(hbs`
      <AuMainContainer as |main|>
        <main.sidebar>Sidebar contents</main.sidebar>
      </AuMainContainer>
    `);

    assert.dom(MAIN_CONTAINER.SIDEBAR).exists().hasText('Sidebar contents');

    await render(hbs`
      <AuMainContainer as |main|>
        <main.sidebar/>
      </AuMainContainer>
    `);

    assert.dom(MAIN_CONTAINER.SIDEBAR).doesNotExist();

    await render(hbs`
      <AuMainContainer></AuMainContainer>
    `);

    assert.dom(MAIN_CONTAINER.SIDEBAR).doesNotExist();
  });

  test('it yields a content component that is only visible when it has block contents', async function (assert) {
    await render(hbs`
      <AuMainContainer as |main|>
        <main.content>Main contents</main.content>
      </AuMainContainer>
    `);

    assert.dom(MAIN_CONTAINER.CONTENT).exists().hasText('Main contents');

    await render(hbs`
      <AuMainContainer as |main|>
        <main.content/>
      </AuMainContainer>
    `);

    assert.dom(MAIN_CONTAINER.CONTENT).doesNotExist();

    await render(hbs`
      <AuMainContainer></AuMainContainer>
    `);

    assert.dom(MAIN_CONTAINER.CONTENT).doesNotExist();
  });

  test("it's possible to force the content to scroll if its larger than its parent", async function (assert) {
    this.shouldScroll = false;

    await render(hbs`
      <AuMainContainer as |main|>
        <main.content @scroll={{this.shouldScroll}}>Main contents</main.content>
      </AuMainContainer>
    `);

    let containerElement = document.querySelector(MAIN_CONTAINER.CONTENT);
    assert.notStrictEqual(
      getComputedStyle(containerElement).getPropertyValue('overflow-y'),
      'auto'
    );

    this.set('shouldScroll', true);
    assert.strictEqual(
      getComputedStyle(containerElement).getPropertyValue('overflow-y'),
      'auto'
    );
  });
});
