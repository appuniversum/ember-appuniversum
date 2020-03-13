# Button

---

## Primary button

{{#docs-demo as |demo|}}
  {{#demo.example name='au-button.hbs'}}
    <AuButton>
      Primary button
    </AuButton>

    <AuButton class="au-c-button--error">
      Primary button - error
    </AuButton>

    <AuButton class="au-c-button--disabled" disabled="disabled">
      Primary button - disabled
    </AuButton>
  {{/demo.example}}
  {{demo.snippet 'au-button.hbs'}}
{{/docs-demo}}

## Ghost button

{{#docs-demo as |demo|}}
  {{#demo.example name='au-button-ghost.hbs'}}
    <AuButton class="au-c-button--ghost">
      Ghost button
    </AuButton>

    <AuButton class="au-c-button--ghost au-c-button--error">
      Ghost button - error
    </AuButton>

    <AuButton class="au-c-button--ghost au-c-button--disabled" disabled="disabled">
      Ghost button - disabled
    </AuButton>
  {{/demo.example}}
  {{demo.snippet 'au-button-ghost.hbs'}}
{{/docs-demo}}
