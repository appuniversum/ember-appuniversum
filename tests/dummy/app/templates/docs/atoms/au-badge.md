# Badge

---

## Icon or number

{{#docs-demo as |demo|}}
  {{#demo.example name='au-badge-options.hbs'}}
    <AuBadge @icon="info-circle" />
    <hr>
    <AuBadge @number="100" />
  {{/demo.example}}
  {{demo.snippet 'au-badge-options.hbs'}}
{{/docs-demo}}

## Skins

{{#docs-demo as |demo|}}
  {{#demo.example name='au-badge-skin.hbs'}}
    <AuBadge @icon="info-circle" />
    <hr>
    <AuBadge @icon="info-circle" @skin="border" />
    <hr>
    <AuBadge @icon="info-circle" @skin="brand" />
    <hr>
    <AuBadge @icon="info-circle" @skin="success" />
    <hr>
    <AuBadge @icon="info-circle" @skin="warning" />
    <hr>
    <AuBadge @icon="info-circle" @skin="error" />
    <hr>
    <AuBadge @icon="info-circle" @skin="action" />
  {{/demo.example}}
  {{demo.snippet 'au-badge-skin.hbs'}}
{{/docs-demo}}

## Sizes

{{#docs-demo as |demo|}}
  {{#demo.example name='au-badge-size.hbs'}}
    <AuBadge @icon="info-circle" />
    <hr>
    <AuBadge @icon="info-circle" @size="small" />
  {{/demo.example}}
  {{demo.snippet 'au-badge-size.hbs'}}
{{/docs-demo}}

## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@skin` | Sets the color and background color | `value`: `none` / `border` / `brand` / `success` / `warning` / `error` / `action` | `gray` |
| `@size` | Change the size of the badge | `value`: `small` | - |
| `@icon` | Adds an icon to the badge | `value`: <AuLink @linkRoute="docs.atoms.au-icon">Find the options here</AuLink> | - |
| `@number` | Adds a number to the badge | `value`: 1 - 100 | - |
