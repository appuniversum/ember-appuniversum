# Pill

---

{{#docs-demo as |demo|}}
  {{#demo.example name='au-pill.hbs'}}
    <AuPill>
      Pill
    </AuPill>

    <hr>

    <AuPill @skin="border">
      Pill - border
    </AuPill>

    <hr>

    <AuPill @skin="success">
      Pill - success
    </AuPill>

    <hr>

    <AuPill @skin="warning">
      Pill - warning
    </AuPill>

    <hr>

    <AuPill @skin="error">
      Pill - error
    </AuPill>

    <hr>

    <AuPill @skin="error">
      <AuIcon @icon="alert-triangle" @alignment="left" />
      Pill - error + icon
    </AuPill>

    <hr>

    <AuPill @skin="action">
      Pill - action
    </AuPill>
  {{/demo.example}}
  {{demo.snippet 'au-pill.hbs'}}
{{/docs-demo}}

## Properties
- `@skin`: [ none | border | success | warning | error | action ] - default is grey
