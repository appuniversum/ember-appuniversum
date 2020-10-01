# Textarea

---

## Normal Textarea

{{#docs-demo as |demo|}}
  {{#demo.example name='au-textarea.hbs'}}
    <div class="au-o-grid">
      <div class="au-o-grid__item au-u-1-1">
        <AuLabel for="textarea-regular">Normal textarea</AuLabel>
        <AuTextarea id="textarea-regular"></AuTextarea>
      </div>

      <div class="au-o-grid__item au-u-1-1">
        <AuLabel for="textarea-regular">Block textarea</AuLabel>
        <AuTextarea id="textarea-regular" @width="block"></AuTextarea>
      </div>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-textarea.hbs'}}
{{/docs-demo}}


## Textarea Required

{{#docs-demo as |demo|}}
  {{#demo.example name='au-textarea-required.hbs'}}
    <div class="au-o-grid">
      <div class="au-o-grid__item au-u-1-1">
        <div class="au-o-grid au-o-grid--flush au-u-margin-bottom-tiny">
          <div class="au-o-grid__item au-u-1-2">
            <AuLabel for="textarea-required">Textarea required</AuLabel>
          </div>
          <div class="au-o-grid__item au-u-1-2 au-u-text-right">
            <AuPill>Verplicht</AuPill>
          </div>
        </div>
        <AuTextarea id="textarea-required" @width="block"></AuTextarea>
      </div>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-textarea-required.hbs'}}
{{/docs-demo}}


## Error Textarea

{{#docs-demo as |demo|}}
  {{#demo.example name='au-textarea-error.hbs'}}
    <div class="au-u-margin-left">
      <AuLabel @error="true" for="textarea-error">Normal textarea</AuLabel>
      <AuTextarea id="textarea-error" @error="true" @width="block"></AuTextarea>
      <AuHelpText @error="true">Something is wrong.</AuHelpText>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-textarea-error.hbs'}}
{{/docs-demo}}

## Arguments

- `@error`: [ true ] - add an error state
- `@width`: [ block ] - display the input as a block element
