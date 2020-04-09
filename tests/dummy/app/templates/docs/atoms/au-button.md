# Button

---

## Primary button

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

## Ghost button

{{#docs-demo as |demo|}}
  {{#demo.example name='au-button-ghost.hbs'}}
    <AuButton @skin="ghost">
      Ghost button
    </AuButton>

    <hr>

    <AuButton @skin="ghost">
      <AuIcon @icon="pencil" @alignment="left" />
      Ghost button - icon
    </AuButton>

    <hr>

    <AuButton @skin="ghost" @width="block">
      Ghost button - block
    </AuButton>

    <hr>

    <AuButton @skin="ghost" @error="true">
      Ghost button - error
    </AuButton>

    <hr>

    <AuButton @skin="ghost" @loading="true">
      Ghost button - loading
    </AuButton>

    <hr>

    <AuButton @skin="ghost" @disabled="true">
      Ghost button - disabled
    </AuButton>
  {{/demo.example}}
  {{demo.snippet 'au-button-ghost.hbs'}}
{{/docs-demo}}

## Link button

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

## Usage
Button usage should follow the following rules:

- **Primary button**: indicates the main action of the view (only one should be used per view)
- **Ghost button**: addon to a primary action (should not be used on it's own)
- **Link button**: can be used as a standalone secondary action

## Properties
- `@skin`: [ ghost | link ] - default is primary
- `@width`: [ block ] - makes a button behave like a block element
- `@error`: [ true ] - adds an error state to the button
- `@disabled`: [ true ] - adds a disabled state to the button
- `@loading`: [ true ] - adds a loading state to the button
