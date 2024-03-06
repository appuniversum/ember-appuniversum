import AuMainHeader from '@appuniversum/ember-appuniversum/components/au-main-header';
import { getRootElement } from '@ember/test-helpers';
import { click } from '@ember/test-helpers';
import { render } from '@ember/test-helpers';
import { queryByText } from '@testing-library/dom';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | au-main-header', function (hooks) {
  setupRenderingTest(hooks);

  test('it requires an `@appTitle`', async function (assert) {
    await render(
      <template><AuMainHeader @appTitle="Appuniversum" /></template>,
    );

    const testContainer = getRootElement() as HTMLElement;
    const title = queryByText(testContainer, 'Appuniversum');
    assert.dom(title).exists();
  });

  test('it can display the title as a link by setting the `@homeRoute` argument', async function (assert) {
    await render(
      <template>
        <AuMainHeader @appTitle="Appuniversum" @homeRoute="application" />
      </template>,
    );

    const testContainer = getRootElement() as HTMLElement;
    const title = queryByText(testContainer, 'Appuniversum');
    assert
      .dom(title)
      .hasTagName('a', 'The title element is a link if `@homeRoute` is set');
  });

  test('it focuses the #main element after clicking the title link', async function (assert) {
    await render(
      <template>
        <AuMainHeader @appTitle="Appuniversum" @homeRoute="application" />
        <main id="main" tabindex="-1">Main content</main>
      </template>,
    );

    const testContainer = getRootElement() as HTMLElement;
    const title = queryByText(testContainer, 'Appuniversum') as HTMLElement;

    assert.dom('#main').isNotFocused();
    await click(title);
    assert.dom('#main').isFocused();
  });

  test('it supports showing a link to the contact route', async function (assert) {
    await render(
      <template><AuMainHeader @appTitle="Appuniversum" /></template>,
    );

    const testContainer = getRootElement() as HTMLElement;
    let contactLink = queryByText(testContainer, 'Contacteer ons');
    assert.notOk(
      contactLink,
      "The contact link isn't displayed without the `@contactRoute` argument",
    );

    await render(
      <template>
        <AuMainHeader @appTitle="Appuniversum" @contactRoute="application" />
      </template>,
    );

    contactLink = queryByText(testContainer, 'Contacteer ons');

    assert.dom(contactLink).hasTagName('a');
  });

  test('it accepts extra block contents', async function (assert) {
    await render(
      <template>
        <AuMainHeader @appTitle="Appuniversum" data-test-main-header>
          extra header content
        </AuMainHeader>
      </template>,
    );

    const testContainer = getRootElement() as HTMLElement;
    const extraHeaderContent = queryByText(
      testContainer,
      'extra header content',
    );
    assert.ok(extraHeaderContent);
  });
});
