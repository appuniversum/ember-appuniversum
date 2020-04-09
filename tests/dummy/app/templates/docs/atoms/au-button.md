# Button

---

## Primary button

{{#docs-demo as |demo|}}
  {{#demo.example name='au-button.hbs'}}
    <AuButton>
      Primary button
    </AuButton>

    <AuButton @error="true">
      Primary button - error
    </AuButton>

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

    <AuButton @skin="ghost" @error="true">
      Ghost button - error
    </AuButton>

    <AuButton @skin="ghost" @disabled="true">
      Ghost button - disabled
    </AuButton>
  {{/demo.example}}
  {{demo.snippet 'au-button-ghost.hbs'}}
{{/docs-demo}}
