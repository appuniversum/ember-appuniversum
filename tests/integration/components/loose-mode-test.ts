import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

// We can use this test to verify that all components still resolve as expected in loose mode templates
// That allows us to convert the other tests to strict mode, so we can test both versions.
module('Integration | Component | Loose mode', function (hooks) {
  setupRenderingTest(hooks);

  test('`<AuAccordion>` resolves in loose mode', async function (assert) {
    await render(hbs`
      <AuAccordion data-test-accordion-external></AuAccordion>
    `);

    assert.dom('[data-test-accordion-external]').exists();
  });

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

  test('`<AuFieldset>` resolves in loose mode', async function (assert) {
    await render(hbs`<AuFieldset data-test-fieldset />`);

    assert.dom('[data-test-fieldset]').exists();
  });

  test('`<AuFileCard>` resolves in loose mode', async function (assert) {
    await render(hbs`<AuFileCard @filename="test.txt" data-test-file-card />`);

    assert.dom('[data-test-file-card]').exists();
  });

  test('`<AuFileUpload>` resolves in loose mode', async function (assert) {
    await render(hbs`<AuFileUpload data-test-file-upload />`);

    assert.dom('[data-test-file-upload]').exists();
  });

  test('`<AuFormRow>` resolves in loose mode', async function (assert) {
    await render(hbs`<AuFormRow data-test-form-row />`);

    assert.dom('[data-test-form-row]').exists();
  });

  test('`<AuHeading>` resolves in loose mode', async function (assert) {
    await render(hbs`<AuHeading data-test-heading>Some title</AuHeading>`);

    assert.dom('[data-test-heading]').exists();
  });

  test('`<AuHelpText>` resolves in loose mode', async function (assert) {
    await render(
      hbs`<AuHelpText data-test-help-text>Some help text</AuHelpText>`,
    );

    assert.dom('[data-test-help-text]').exists();
  });

  test('`<AuHr>` resolves in loose mode', async function (assert) {
    await render(hbs`<AuHr data-test-hr />`);

    assert.dom('[data-test-hr]').exists();
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

  test('`<AuLabel>` resolves in loose mode', async function (assert) {
    await render(hbs`
      <AuLabel data-test-label>Some label</AuLabel>
    `);
    assert.dom('[data-test-label]').exists();
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
      <AuLoader data-test-loader></AuLoader>
    `);
    assert.dom('[data-test-loader]').exists();
  });

  test('`<AuMainContainer>` resolves in loose mode', async function (assert) {
    await render(hbs`
      <AuMainContainer data-test-main-container />
    `);
    assert.dom('[data-test-main-container]').exists();
  });

  test('`<AuMainFooter>` resolves in loose mode', async function (assert) {
    await render(hbs`
      <AuMainFooter data-test-main-footer />
    `);
    assert.dom('[data-test-main-footer]').exists();
  });

  test('`<AuMainHeader>` resolves in loose mode', async function (assert) {
    await render(hbs`
      <AuMainHeader @appTitle="Appuniversum" data-test-main-header />
    `);
    assert.dom('[data-test-main-header]').exists();
  });

  test('`<AuModalContainer>` resolves in loose mode', async function (assert) {
    await render(hbs`
      <AuModalContainer data-test-modal-container />
    `);
    assert.dom('[data-test-modal-container]').exists();
  });

  test('`<AuModal>` resolves in loose mode', async function (assert) {
    await render(
      hbs`<AuModalContainer /><AuModal @modalOpen={{true}} data-test-modal />`,
    );
    assert.dom('[data-test-modal]').exists();
  });

  test('`<AuNavigationLink>` resolves in loose mode', async function (assert) {
    await render(hbs`
      <AuNavigationLink @route="index" data-test-navigation-link>Foo</AuNavigationLink>
    `);
    assert.dom('[data-test-navigation-link]').exists();
  });

  test('`<AuPanel>` resolves in loose mode', async function (assert) {
    await render(hbs`
      <AuPanel data-test-panel />
    `);
    assert.dom('[data-test-panel]').exists();
  });

  test('`<AuPill>` resolves in loose mode', async function (assert) {
    await render(hbs`
      <AuPill data-test-pill />
    `);
    assert.dom('[data-test-pill]').exists();
  });

  test('`<AuRadioGroup>` resolves in loose mode', async function (assert) {
    await render(hbs`
      <AuRadioGroup data-test-radio-group />
    `);
    assert.dom('[data-test-radio-group]').exists();
  });

  test('`<AuRadio>` resolves in loose mode', async function (assert) {
    await render(hbs`
      <AuRadio data-test-radio />
    `);
    assert.dom('[data-test-radio]').exists();
  });

  test('`<AuTable>` resolves in loose mode', async function (assert) {
    await render(hbs`
      <AuTable data-test-table />
    `);
    assert.dom('[data-test-table]').exists();
  });

  test('`<AuTabs>` resolves in loose mode', async function (assert) {
    await render(hbs`
      <AuTabs data-test-tabs />
    `);
    assert.dom('[data-test-tabs]').exists();
  });

  test('`<AuTextarea>` resolves in loose mode', async function (assert) {
    await render(hbs`
      <AuTextarea data-test-textarea />
    `);
    assert.dom('[data-test-textarea]').exists();
  });

  test('`<AuToolbar>` resolves in loose mode', async function (assert) {
    await render(hbs`
      <AuToolbar data-test-toolbar></AuToolbar>
    `);
    assert.dom('[data-test-toolbar]').exists();
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
