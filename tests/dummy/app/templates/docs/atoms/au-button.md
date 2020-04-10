# Button

---

## Primary button

Indicates the main action of the view (only one should be used per view).

{{#docs-demo as |demo|}}
  {{#demo.example name='au-button.hbs'}}
    <AuButton>
      Primary button
    </AuButton>

    <hr>

    <AuButton>
      <AuIcon @icon="pencil" @alignment="left" />
      Primary button - icon
    </AuButton>

    <hr>

    <AuButton @width="block">
      Primary button - block
    </AuButton>

    <hr>

    <AuButton @error="true">
      Primary button - error
    </AuButton>

    <hr>

    <AuButton @loading="true">
      Primary button - loading
    </AuButton>

    <hr>

    <AuButton @disabled="true">
      Primary button - disabled
    </AuButton>
  {{/demo.example}}
  {{demo.snippet 'au-button.hbs'}}
{{/docs-demo}}

## Secondary button

Addon to a primary action (should not be used without the presence of a primary button).

{{#docs-demo as |demo|}}
  {{#demo.example name='au-button-secondary.hbs'}}
    <AuButton @skin="secondary">
      Secondary button
    </AuButton>

    <hr>

    <AuButton @skin="secondary">
      <AuIcon @icon="pencil" @alignment="left" />
      secondary button - icon
    </AuButton>

    <hr>

    <AuButton @skin="secondary" @width="block">
      secondary button - block
    </AuButton>

    <hr>

    <AuButton @skin="secondary" @error="true">
      Secondary button - error
    </AuButton>

    <hr>

    <AuButton @skin="secondary" @loading="true">
      Secondary button - loading
    </AuButton>

    <hr>

    <AuButton @skin="secondary" @disabled="true">
      Secondary button - disabled
    </AuButton>
  {{/demo.example}}
  {{demo.snippet 'au-button-secondary.hbs'}}
{{/docs-demo}}

## Link button

Can be used as a standalone secondary action.

{{#docs-demo as |demo|}}
  {{#demo.example name='au-button-link.hbs'}}
    <AuButton @skin="link">
      <AuIcon @icon="pencil" @alignment="left" />
      Link button
    </AuButton>

    <hr>

    <AuButton @skin="link" @width="block">
      <AuIcon @icon="pencil" @alignment="left" />
      Link button - block
    </AuButton>

    <hr>

    <AuButton @skin="link" @error="true">
      <AuIcon @icon="pencil" @alignment="left" />
      Link button - error
    </AuButton>

    <hr>

    <AuButton @skin="link" @loading="true" >
      <AuIcon @icon="pencil" @alignment="left" />
      Link button - loading
    </AuButton>

    <hr>

    <AuButton @skin="link" @disabled="true">
      <AuIcon @icon="pencil" @alignment="left" />
      Link button - disabled
    </AuButton>
  {{/demo.example}}
  {{demo.snippet 'au-button-link.hbs'}}
{{/docs-demo}}

## Properties
- `@skin`: [ secondary | link ] - default is primary
- `@width`: [ block ] - makes a button behave like a block element
- `@error`: [ true ] - adds an error state to the button
- `@disabled`: [ true ] - adds a disabled state to the button
- `@loading`: [ true ] - adds a loading state to the button
