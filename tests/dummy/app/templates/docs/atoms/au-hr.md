# Horizontal Ruler

---

## Horizontal Ruler

{{#docs-demo as |demo|}}
  {{#demo.example name='au-hr.hbs'}}
    Ruler with normal margins
    <AuHr/>

    Ruler with large margins
    <AuHr @size="large"/>

    Ruler with huge margins
    <AuHr @size="huge"/>
  {{/demo.example}}
  {{demo.snippet 'au-hr.hbs'}}
{{/docs-demo}}

## Horizontal Ruler Properties

- `@size`: [ large | huge ]
