# Badge

---

{{#docs-demo as |demo|}}
  {{#demo.example name='au-Badge.hbs'}}
    <AuBadge @icon="info-circle"></AuBadge>
    <hr>
    <AuBadge @icon="info-circle" @skin="info"></AuBadge>
    <hr>
    <AuBadge @icon="info-circle" @skin="success"></AuBadge>
    <hr>
    <AuBadge @icon="info-circle" @skin="warning"></AuBadge>
    <hr>
    <AuBadge @icon="info-circle" @skin="error"></AuBadge>
    <hr>
    <AuBadge @icon="info-circle" @skin="action"></AuBadge>
  {{/demo.example}}
  {{demo.snippet 'au-Badge.hbs'}}
{{/docs-demo}}

## Properties
- `@skin`: [ none | info | success | warning | error | action ] - default is primary
