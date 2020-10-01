# Input

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
  {{demo.snippet 'au-input.hbs'}}
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

## Input arguments

- `@error`: [ true ] - add an error state
- `@width`: [ block ] - display the input as a block element
- `@icon`: [ icon name ] - adds an icon (using an icon implies the use @width="block")
- `@iconAlignment`: [ left | right ] - adds margin left or right of the icon (default is left)

## Label arguments

- `@error`: [ true ] - add an error state

## Helptext arguments

- `@error`: [ true ] - add an error state
