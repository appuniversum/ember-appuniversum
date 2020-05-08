# Pill

---

{{#docs-demo as |demo|}}
  {{#demo.example name='au-ill.hbs'}}
    <AuPill>
      Pill
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
  {{/demo.example}}
  {{demo.snippet 'au-pill.hbs'}}
{{/docs-demo}}

## Properties

- `@skin`: [ success | warning | error ] - default is gray
