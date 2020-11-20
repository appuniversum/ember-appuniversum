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
  {{#demo.example name='au-brand-link.hbs'}}
    <AuBrand @brandLink="https://www.vlaanderen.be/" />
  {{/demo.example}}
  {{demo.snippet 'au-brand-link.hbs'}}
{{/docs-demo}}

## Logo with tagline

{{#docs-demo as |demo|}}
  {{#demo.example name='au-brand-tagline.hbs'}}
    <AuBrand @tagline="verbeelding werkt" />
  {{/demo.example}}
  {{demo.snippet 'au-brand-tagline.hbs'}}
{{/docs-demo}}

## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@brandLink` | Adds a link on the logotype | `url` | - |
| `@tagline` | Adds a tagline underneath the logotype | `String` | - |
