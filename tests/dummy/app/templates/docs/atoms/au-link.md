# Link

---

## Skin

{{#docs-demo as |demo|}}
  {{#demo.example name='au-link-skin.hbs'}}
    <AuLink @linkRoute="docs.atoms.au-link">
      Primary link
    </AuLink>

    <hr>

    <AuLink @linkRoute="docs.atoms.au-link" @skin="secondary">
      Secondary link
    </AuLink>
  {{/demo.example}}
  {{demo.snippet 'au-link-skin.hbs'}}
{{/docs-demo}}

## Icon

{{#docs-demo as |demo|}}
  {{#demo.example name='au-link-icon.hbs'}}
    <AuLink @linkRoute="docs.atoms.au-link" @icon="login" @iconAlignment="left">
      Primary link + icon (left)
    </AuLink>

    <hr>

    <AuLink @linkRoute="docs.atoms.au-link" @icon="login" @iconAlignment="right">
      Primary link + icon (right)
    </AuLink>

    <hr>

    <AuLink @linkRoute="docs.atoms.au-link" @icon="login" @hideText={{true}}>
      Primary link + icon
    </AuLink>
  {{/demo.example}}
  {{demo.snippet 'au-link-icon.hbs'}}
{{/docs-demo}}

## Active

{{#docs-demo as |demo|}}
  {{#demo.example name='au-link-active.hbs'}}
    <AuLink @linkRoute="docs.atoms.au-link" @active={{true}}>
      Primary link - active
    </AuLink>
  {{/demo.example}}
  {{demo.snippet 'au-link-active.hbs'}}
{{/docs-demo}}

## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@linkRoute` | The route that is passed to the link  | `route name` | - |
| `@skin` | Defines the style of the link  | `value`: `primary` / `secondary` | `primary` |
| `@icon` | Adds an icon  | `value`: <AuLink @linkRoute="docs.atoms.au-icon">Find the options here</AuLink> | - |
| `@iconAlignment` | Choose the position of the icon, adds correct margin next to the icon | `value`: `left` / `right` | - |
| `@hideText` | Hides the link text visually | `Boolean` | `false` |
| `@active` | Adds an active state and disables pointer events | `Boolean` | `false` |
