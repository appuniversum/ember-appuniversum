# Link

---

## Skin

{{#docs-demo as |demo|}}
  {{#demo.example name='au-link-external-skin.hbs'}}
    <AuLinkExternal href="https://www.vlaanderen.be/">
      Primary external link
    </AuLinkExternal>

    <hr>

    <AuLinkExternal href="https://www.vlaanderen.be/" @skin="secondary">
      Secondary external link
    </AuLinkExternal>
  {{/demo.example}}
  {{demo.snippet 'au-link-external-skin.hbs'}}
{{/docs-demo}}

## Icon

{{#docs-demo as |demo|}}
  {{#demo.example name='au-link-external-icon.hbs'}}
    <AuLinkExternal href="https://www.vlaanderen.be/" @skin="secondary" @icon="manual" @iconAlignment="left">
      External link + icon (left)
    </AuLinkExternal>

    <hr>

    <AuLinkExternal href="https://www.vlaanderen.be/" @skin="secondary" @icon="external" @iconAlignment="right">
      External link + icon (right)
    </AuLinkExternal>

    <hr>

    <AuLinkExternal href="https://www.vlaanderen.be/" @skin="secondary" @icon="external" @hideText={{true}}>
      External link + icon
    </AuLinkExternal>
  {{/demo.example}}
  {{demo.snippet 'au-link-external-icon.hbs'}}
{{/docs-demo}}

## Width

{{#docs-demo as |demo|}}
  {{#demo.example name='au-link-external-width.hbs'}}
    <AuLinkExternal href="https://www.vlaanderen.be/" @width="block" @skin="secondary" @icon="manual" @iconAlignment="left">
      External link
    </AuLinkExternal>
  {{/demo.example}}
  {{demo.snippet 'au-link-external-width.hbs'}}
{{/docs-demo}}

## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@skin` | Defines the style of the link  | Valid skin options: <br> `primary` / `secondary` / `button` / `button-secondary` | `primary` |
| `@icon` | Adds an icon  | `value`: <AuLink @route="docs.atoms.au-icon">Find the options here</AuLink> | - |
| `@iconAlignment` | Choose the position of the icon, adds correct margin next to the icon | `value`: `left` / `right` | - |
| `@hideText` | Hides the link text visually | `Boolean` | `false` |
| `@width` | Defines the width of the link | `value`: `block` | - |
