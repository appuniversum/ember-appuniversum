# Badge

---

{{#docs-demo as |demo|}}
  {{#demo.example name='au-Badge.hbs'}}
    <AuBadge @icon="search-folder"></AuBadge>
    <hr>
    <AuBadge @icon="search-folder" @skin="info"></AuBadge>
    <hr>
    <AuBadge @icon="search-folder" @skin="success"></AuBadge>
    <hr>
    <AuBadge @icon="search-folder" @skin="warning"></AuBadge>
    <hr>
    <AuBadge @icon="search-folder" @skin="error"></AuBadge>
    <hr>
    <AuBadge @icon="search-folder" @skin="action"></AuBadge>
  {{/demo.example}}
  {{demo.snippet 'au-Badge.hbs'}}
{{/docs-demo}}

## Properties
- `@skin`: [ none | info | success | warning | error | action ] - default is primary
