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

    <AuPill @skin="action">
      Pill - action
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
  {{/demo.example}}
  {{demo.snippet 'au-pill.hbs'}}
{{/docs-demo}}

## Icons

{{#docs-demo as |demo|}}
  {{#demo.example name='au-pill-icon.hbs'}}
    <AuPill @skin="error" @icon="alert-triangle" @iconAlignment="left">
      Pill - error + icon (left)
    </AuPill>

    <hr>

    <AuPill @skin="error" @icon="alert-triangle" @iconAlignment="right">
      Pill - error + icon (right)
    </AuPill>
  {{/demo.example}}
  {{demo.snippet 'au-pill-icon.hbs'}}
{{/docs-demo}}

## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@skin` | Sets the style of the badge  | `default` / `border` / `action` / `success` / `warning` / `error` | `default` |
| `@icon` | Adds an icon  | <AuLink @linkRoute="docs.atoms.au-icon">Find the options here</AuLink> | - |
| `@iconAlignment` | Choose the position of the icon, adds correct margin next to the icon | `left` / `right` | - |
