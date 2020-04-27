# Brand

---

## Logo

{{#docs-demo as |demo|}}
  {{#demo.example name='au-brand.hbs'}}
    <AuBrand />
  {{/demo.example}}
  {{demo.snippet 'au-brand.hbs'}}
{{/docs-demo}}

## Logo with link

{{#docs-demo as |demo|}}
  {{#demo.example name='au-brand.hbs'}}
    <AuBrand @brandLink="https://www.vlaanderen.be/" />
  {{/demo.example}}
  {{demo.snippet 'au-brand.hbs'}}
{{/docs-demo}}

## Logo with tagline

{{#docs-demo as |demo|}}
  {{#demo.example name='au-brand-tagline.hbs'}}
    <AuBrand @tagline="verbeelding werkt" />
  {{/demo.example}}
  {{demo.snippet 'au-brand-tagline.hbs'}}
{{/docs-demo}}

## Properties
- `@tagline`: [ string ] - adds a tagline underneath the logotype
- `@brandLink`: [ url ] - adds a link.
