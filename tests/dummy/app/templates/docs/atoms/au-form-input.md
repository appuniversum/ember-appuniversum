# Form: Input

---

## Normal input

{{#docs-demo as |demo|}}
  {{#demo.example name='au-input.hbs'}}
    <div class="au-c-form">
      <p>
        <AuLabel for="input-regular">Normal input</AuLabel>
        <AuInput id="input-regular" />
      </p>

      <p>
        <AuLabel for="input-block">Block input</AuLabel>
        <AuInput id="input-block" @width="block"/>
      </p>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-input.hbs'}}
{{/docs-demo}}

## Width

{{#docs-demo as |demo|}}
  {{#demo.example name='au-input-block.hbs'}}
    <div class="au-c-form">
      <p>
        <AuLabel for="input-block">Block input</AuLabel>
        <AuInput id="input-block" @width="block"/>
      </p>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-input-block.hbs'}}
{{/docs-demo}}

## Input with icon

{{#docs-demo as |demo|}}
  {{#demo.example name='au-input-icon.hbs'}}
    <div class="au-c-form">
      <p>
        <AuLabel for="input-block">Block input with icon (default | left aligned)</AuLabel>
        <AuInput id="input-block" @width="block" @icon="search"/>
      </p>

      <p>
        <AuLabel for="input-block">Block input with icon (right aligned)</AuLabel>
        <AuInput id="input-block" @width="block" @icon="search" @iconAlignment="right"/>
      </p>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-input-icon.hbs'}}
{{/docs-demo}}

## Input Required

{{#docs-demo as |demo|}}
  {{#demo.example name='au-input-required.hbs'}}
    <div class="au-c-form">
      <p>
        <AuLabel for="input-required-block">
          Input required
          <AuPill>Verplicht</AuPill>
        </AuLabel>
        <AuInput id="input-required-block" @width="block"/>
      </p>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-input-required.hbs'}}
{{/docs-demo}}


## Error Input

{{#docs-demo as |demo|}}
  {{#demo.example name='au-input-error.hbs'}}
    <div class="au-c-form">
      <p>
        <AuLabel @error="true" for="input-error">Normal input</AuLabel>
        <AuInput id="input-error" @error="error" @width="block"/>
        <AuHelpText @error="true">Something is wrong.</AuHelpText>
      </p>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-input-error.hbs'}}
{{/docs-demo}}

## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@error` | Add an error state  | `boolean` | `false` |
| `@width` | Display the input as a block element  | `block` | - |
| `@icon` | Adds an icon (using an icon implies the use @width="block") | <AuLink @linkRoute="docs.atoms.au-icon">Find the options here</AuLink> | - |
| `@iconAlignment` | Choose the position of the icon | `left` / `right`  | `left` |
