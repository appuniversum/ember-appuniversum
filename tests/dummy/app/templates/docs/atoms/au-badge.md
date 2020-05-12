# Badge

---

{{#docs-demo as |demo|}}
  {{#demo.example name='au-Badge.hbs'}}
    <AuBadge @icon="info-circle" />
    <hr>
    <AuBadge @icon="info-circle" @skin="border" />
    <hr>
    <AuBadge @icon="info-circle" @skin="success" />
    <hr>
    <AuBadge @icon="info-circle" @skin="warning" />
    <hr>
    <AuBadge @icon="info-circle" @skin="error" />
    <hr>
    <AuBadge @icon="info-circle" @skin="action" />
  {{/demo.example}}
  {{demo.snippet 'au-Badge.hbs'}}
{{/docs-demo}}

## Properties
- `@skin`: [ none | info | success | warning | error | action ] - default is primary
