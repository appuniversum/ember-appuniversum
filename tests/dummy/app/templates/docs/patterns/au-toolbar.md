# Toolbar

---

## Default

{{#docs-demo as |demo|}}
  {{#demo.example name='au-toolbar.hbs'}}
    <AuToolbar>
      <AuToolbarGroup>
        <AuButtonGroup>
          <AuButton>
            Primary button
          </AuButton>
          <AuButton @skin="secondary">
            Secondary button
          </AuButton>
        </AuButtonGroup>
      </AuToolbarGroup>
      <AuToolbarGroup>
        <AuLink @linkRoute="docs.patterns.au-toolbar" @skin="secondary">
          Secondary link
        </AuLink>
      </AuToolbarGroup>
    </AuToolbar>
  {{/demo.example}}
  {{demo.snippet 'au-toolbar.hbs'}}
{{/docs-demo}}

## Reverse

{{#docs-demo as |demo|}}
  {{#demo.example name='au-toolbar-reverse.hbs'}}
    <AuToolbar @reverse="true">
      <AuToolbarGroup>
        <AuButtonGroup>
          <AuButton>
            Primary button
          </AuButton>
          <AuButton @skin="secondary">
            Secondary button
          </AuButton>
        </AuButtonGroup>
      </AuToolbarGroup>
    </AuToolbar>
  {{/demo.example}}
  {{demo.snippet 'au-toolbar-reverse.hbs'}}
{{/docs-demo}}

## Border: top

{{#docs-demo as |demo|}}
  {{#demo.example name='au-toolbar-border-top.hbs'}}
    <AuToolbar @border="top">
      <AuToolbarGroup>
        <AuButtonGroup>
          <AuButton>
            Primary button
          </AuButton>
          <AuButton @skin="secondary">
            Secondary button
          </AuButton>
        </AuButtonGroup>
      </AuToolbarGroup>
      <AuToolbarGroup>
        <AuLink @linkRoute="docs.patterns.au-toolbar" @skin="secondary">
          Secondary link
        </AuLink>
      </AuToolbarGroup>
    </AuToolbar>
  {{/demo.example}}
  {{demo.snippet 'au-toolbar-border-top.hbs'}}
{{/docs-demo}}

## Border: bottom

{{#docs-demo as |demo|}}
  {{#demo.example name='au-toolbar-border-bottom.hbs'}}
    <AuToolbar @border="bottom">
      <AuToolbarGroup>
        <AuButtonGroup>
        <AuButton>
          Primary button
        </AuButton>
        <AuButton @skin="secondary">
          Secondary button
        </AuButton>
        </AuButtonGroup>
      </AuToolbarGroup>
      <AuToolbarGroup>
        <AuLink @linkRoute="docs.patterns.au-toolbar" @skin="secondary">
          Secondary link
        </AuLink>
      </AuToolbarGroup>
    </AuToolbar>
  {{/demo.example}}
  {{demo.snippet 'au-toolbar-border-bottom.hbs'}}
{{/docs-demo}}

## Skin: tint

{{#docs-demo as |demo|}}
  {{#demo.example name='au-toolbar-skin.hbs'}}
    <AuToolbar @border="bottom" @skin="tint">
      <AuToolbarGroup>
        <AuButtonGroup>
          <AuButton>
            Primary button
          </AuButton>
          <AuButton @skin="secondary">
            Secondary button
          </AuButton>
        </AuButtonGroup>
      </AuToolbarGroup>
      <AuToolbarGroup>
        <AuLink @linkRoute="docs.patterns.au-toolbar" @skin="secondary">
          Secondary link
        </AuLink>
      </AuToolbarGroup>
    </AuToolbar>
  {{/demo.example}}
  {{demo.snippet 'au-toolbar-skin.hbs'}}
{{/docs-demo}}

## Sizes

{{#docs-demo as |demo|}}
  {{#demo.example name='au-toolbar-size.hbs'}}
    <AuToolbar @border="bottom" @skin="tint" @size="small">
      <AuToolbarGroup>
        <AuButtonGroup>
          <AuButton>
            Primary button
          </AuButton>
          <AuButton @skin="secondary">
            Secondary button
          </AuButton>
        </AuButtonGroup>
      </AuToolbarGroup>
      <AuToolbarGroup>
        <AuLink @linkRoute="docs.patterns.au-toolbar" @skin="secondary">
          Secondary link
        </AuLink>
      </AuToolbarGroup>
    </AuToolbar>
    <AuToolbar @border="bottom" @skin="tint" @size="medium">
      <AuToolbarGroup>
        <AuButtonGroup>
          <AuButton>
            Primary button
          </AuButton>
          <AuButton @skin="secondary">
            Secondary button
          </AuButton>
        </AuButtonGroup>
      </AuToolbarGroup>
      <AuToolbarGroup>
        <AuLink @linkRoute="docs.patterns.au-toolbar" @skin="secondary">
          Secondary link
        </AuLink>
      </AuToolbarGroup>
    </AuToolbar>
    <AuToolbar @border="bottom" @skin="tint" @size="large">
      <AuToolbarGroup>
        <AuButtonGroup>
          <AuButton>
            Primary button
          </AuButton>
          <AuButton @skin="secondary">
            Secondary button
          </AuButton>
        </AuButtonGroup>
      </AuToolbarGroup>
      <AuToolbarGroup>
        <AuLink @linkRoute="docs.patterns.au-toolbar" @skin="secondary">
          Secondary link
        </AuLink>
      </AuToolbarGroup>
    </AuToolbar>
  {{/demo.example}}
  {{demo.snippet 'au-toolbar-size.hbs'}}
{{/docs-demo}}

## Properties
- `@reverse`: [ true ] - reverse the direction of the child components
- `@border`: [ top | bottom ] - adds a border a padding to the top|bottom
- `@skin`: [ tint ] - adds a background color
- `@size`: [ small | medium | large ] - adds more padding
