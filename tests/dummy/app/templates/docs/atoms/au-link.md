# Link

---

## Skin

{{#docs-demo as |demo|}}
  {{#demo.example name='au-link-skin.hbs'}}
    <AuLink @route="docs.atoms.au-link">
      Primary link
    </AuLink>

    <hr>

    <AuLink @route="docs.atoms.au-link" @skin="secondary">
      Secondary link
    </AuLink>

    <hr>

    <AuLink @linkRoute="docs.atoms.au-link" @skin="button">
      Link styled as a button
    </AuLink>

    <hr>

    <AuLink @linkRoute="docs.atoms.au-link" @skin="button-secondary">
      Link styled as a secondary button
    </AuLink>
  {{/demo.example}}
  {{demo.snippet 'au-link-skin.hbs'}}
{{/docs-demo}}

## Icon

{{#docs-demo as |demo|}}
  {{#demo.example name='au-link-icon.hbs'}}
    <AuLink @route="docs.atoms.au-link" @icon="login" @iconAlignment="left">
      Primary link + icon (left)
    </AuLink>

    <hr>

    <AuLink @route="docs.atoms.au-link" @icon="login" @iconAlignment="right">
      Primary link + icon (right)
    </AuLink>

    <hr>

    <AuLink @route="docs.atoms.au-link" @icon="login" @hideText={{true}}>
      Primary link + icon
    </AuLink>
  {{/demo.example}}
  {{demo.snippet 'au-link-icon.hbs'}}
{{/docs-demo}}

## Active

{{#docs-demo as |demo|}}
  {{#demo.example name='au-link-active.hbs'}}
    <AuLink @route="docs.atoms.au-link" @active={{true}}>
      Primary link - active
    </AuLink>
  {{/demo.example}}
  {{demo.snippet 'au-link-active.hbs'}}
{{/docs-demo}}

## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@route` | The route that is passed to the link  | `route name` | - |
| `@skin` | Defines the style of the link  | Valid skin options: <br> `primary` / `secondary` / `button` / `button-secondary` | `primary` |
| `@icon` | Adds an icon  | `value`: <AuLink @route="docs.atoms.au-icon">Find the options here</AuLink> | - |
| `@iconAlignment` | Choose the position of the icon, adds correct margin next to the icon | `value`: `left` / `right` | - |
| `@hideText` | Hides the link text visually | `Boolean` | `false` |
| `@active` | Adds an active state and disables pointer events | `Boolean` | `false` |
| `@model` / `@models` | [Supply a model to the route](https://api.emberjs.com/ember/release/classes/Ember.Templates.components/methods/input?anchor=LinkTo#supplying-a-model) | `route model(s)` | - |
| `@query` | [Supply query parameters to the route](https://api.emberjs.com/ember/release/classes/Ember.Templates.components/methods/input?anchor=LinkTo#supplying-query-parameters) | `query params as key value pairs` | - |
