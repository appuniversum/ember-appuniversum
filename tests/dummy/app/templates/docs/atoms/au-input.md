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
        <AuLabel for="input-regular">Block input</AuLabel>
        <AuInput id="input-regular" @width="block"/>
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
        <AuLabel for="input-required">
          Input required
          <AuPill>Verplicht</AuPill>
        </AuLabel>
        <AuInput id="input-required" @width="block"/>
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

## Input Properties

- `@error`: [ true ] - add an error state
- `@width`: [ block ] - display the input as a block element

## Label Properties

- `@error`: [ true ] - add an error state

## Helptext Properties

- `@error`: [ true ] - add an error state
