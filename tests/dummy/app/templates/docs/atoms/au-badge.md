# Badge

---

{{#docs-demo as |demo|}}
  {{#demo.example name='au-badge.hbs'}}
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
  {{demo.snippet 'au-badge.hbs'}}
{{/docs-demo}}

## Properties
- `@skin`: [ none | border | success | warning | error | action ] - default is grey
