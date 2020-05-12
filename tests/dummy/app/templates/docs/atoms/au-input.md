# Input

---

## Normal input

{{#docs-demo as |demo|}}
  {{#demo.example name='au-input.hbs'}}
    <div class="au-o-grid">
      <div class="au-o-grid__item au-u-1-1">
        <AuLabel for="input-regular">Normal input</AuLabel>
        <AuInput id="input-regular" />
      </div>

      <div class="au-o-grid__item au-u-1-1">
        <div class="au-o-grid au-o-grid--flush au-u-margin-bottom-tiny">
          <div class="au-o-grid__item au-u-1-2">
            <AuLabel for="input-regular">Block input</AuLabel>
          </div>
        </div>
        <AuInput id="input-regular" @width="block"/>
      </div>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-input.hbs'}}
{{/docs-demo}}


## Input Required

{{#docs-demo as |demo|}}
  {{#demo.example name='au-input-required.hbs'}}
    <div class="au-o-grid">
      <div class="au-o-grid__item au-u-1-1">
        <div class="au-o-grid au-o-grid--flush au-u-margin-bottom-tiny">
          <div class="au-o-grid__item au-u-1-2">
            <AuLabel for="input-required">Input required</AuLabel>
          </div>
          <div class="au-o-grid__item au-u-1-2 au-u-text-right">
            <AuPill>Verplicht</AuPill>
          </div>
        </div>
        <AuInput id="input-required" @width="block"/>
      </div>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-input-required.hbs'}}
{{/docs-demo}}


## Error Input

{{#docs-demo as |demo|}}
  {{#demo.example name='au-input-error.hbs'}}
    <div class="au-u-margin-left">
      <AuLabel @error="true" for="input-error">Normal input</AuLabel>
      <AuInput id="input-error" @error="error" @width="block"/>
      <AuHelpText @error="true">Something is wrong.</AuHelpText>
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
