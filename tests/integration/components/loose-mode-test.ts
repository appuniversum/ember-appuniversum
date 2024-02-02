import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

// We can use this test to verify that all components still resolve as expected in loose mode templates
// That allows us to convert the other tests to strict mode, so we can test both versions.
module('Integration | Component | Loose mode', function (hooks) {
  setupRenderingTest(hooks);

  test('`<AuAlert>` resolves in loose mode', async function (assert) {
    await render(hbs`<AuAlert data-test-alert />`);

    assert.dom('[data-test-alert]').exists();
  });

  test('`<AuApp>` resolves in loose mode', async function (assert) {
    await render(hbs`<AuApp data-test-app />`);

    assert.dom('[data-test-app]').exists();
  });

  test('`<AuBadge>` resolves in loose mode', async function (assert) {
    await render(hbs`<AuBadge data-test-badge />`);

    assert.dom('[data-test-badge]').exists();
  });

  test('<AuBodyContainer> resolves in loose mode', async function (assert) {
    await render(hbs`
      <AuBodyContainer data-test-body-container>
        template block text
      </AuBodyContainer>
    `);

    assert.dom('[data-test-body-container]').hasText('template block text');
  });

  test('`<AuBrand>` resolves in loose mode', async function (assert) {
    await render(hbs`<AuBrand data-test-brand />`);

    assert.dom('[data-test-brand]').exists();
  });

  test('`<AuButtonGroup>` resolves in loose mode', async function (assert) {
    await render(hbs`<AuButtonGroup data-test-button-group />`);

    assert.dom('[data-test-button-group]').exists();
  });

  test('`<AuButton>` resolves in loose mode', async function (assert) {
    await render(hbs`
      <AuButton data-test-button>
        template block text
      </AuButton>
    `);
    assert.dom('[data-test-button]').exists();
  });

  test('`<AuCard>` resolves in loose mode', async function (assert) {
    await render(hbs`<AuCard data-test-card />`);

    assert.dom('[data-test-card]').exists();
  });

  test('`<AuCheckbox>` resolves in loose mode', async function (assert) {
    await render(hbs`<AuCheckbox data-test-checkbox />`);

    assert.dom('[data-test-checkbox]').exists();
  });

  test('`<AuCheckboxGroup>` resolves in loose mode', async function (assert) {
    await render(hbs`
      <AuCheckboxGroup foo="bar" data-test-checkbox-group as |Group|>
        <Group.Checkbox>Foo</Group.Checkbox>
      </AuCheckboxGroup>
    `);
    assert.dom('[data-test-checkbox-group]').hasAttribute('foo', 'bar');
  });

  test('`<AuContentHeader>` resolves in loose mode', async function (assert) {
    await render(hbs`
      <AuContentHeader data-test-content-header></AuContentHeader>
    `);
    assert.dom('[data-test-content-header]').exists();
  });

  test('`<AuContent>` resolves in loose mode', async function (assert) {
    await render(hbs`
      <AuContent data-test-content></AuContent>
    `);
    assert.dom('[data-test-content]').exists();
  });

  test('`<AuDateInput>` resolves in loose mode', async function (assert) {
    await render(hbs`
      <AuDateInput data-test-date-input />
    `);
    assert.dom('[data-test-date-input]').exists();
  });

  test('`<AuIcon>` resolves in loose mode', async function (assert) {
    await render(hbs`<AuIcon data-test-icon @icon="test" />`);

    assert.dom('[data-test-icon]').exists();
  });

  test('`<AuInput>` resolves in loose mode', async function (assert) {
    await render(hbs`
      <AuInput data-test-input />
    `);
    assert.dom('[data-test-input]').exists();
  });

  test('`<AuLinkExternal>` resolves in loose mode', async function (assert) {
    await render(hbs`
      <AuLinkExternal data-test-link-external>Foo</AuLinkExternal>
    `);
    assert.dom('[data-test-link-external]').exists();
  });

  test('`<AuLink>` resolves in loose mode', async function (assert) {
    await render(hbs`
      <AuLink @route="index" data-test-link>Foo</AuLink>
    `);
    assert.dom('[data-test-link]').exists();
  });

  test('`<AuList>` resolves in loose mode', async function (assert) {
    await render(hbs`
      <AuList data-test-list></AuList>
    `);
    assert.dom('[data-test-list]').exists();
  });

  test('`<AuLoader>` resolves in loose mode', async function (assert) {
    await render(hbs`
      <AuLoader data-test-loader />
    `);
    assert.dom('[data-test-loader]').exists();
  });
});

module('Integration | Modifier | Loose mode', function (hooks) {
  setupRenderingTest(hooks);

  test('`{{au-date-input}}` resolves in loose mode', async function (assert) {
    await render(hbs`
    <AuInput data-test-date-input {{au-date-input value="2023-02-02"}} />
  `);

    assert.dom('[data-test-date-input]').hasValue('02-02-2023');
  });
});
