# Button

---

## Skin

{{#docs-demo as |demo|}}
  {{#demo.example name='au-button-skin.hbs'}}
    <AuButton>
      Primary button
    </AuButton>

    <hr>

    <AuButton @skin="secondary">
      Secondary button
    </AuButton>

    <hr>

    <AuButton @skin="tertiary">
      Tertiary button
    </AuButton>
  {{/demo.example}}
  {{demo.snippet 'au-button-skin.hbs'}}
{{/docs-demo}}

## Size

{{#docs-demo as |demo|}}
  {{#demo.example name='au-button-size.hbs'}}
    <AuButton>
      Primary button
    </AuButton>

    <hr>

    <AuButton @size="large">
      Primary button
    </AuButton>

  {{/demo.example}}
  {{demo.snippet 'au-button-size.hbs'}}
{{/docs-demo}}

## Icon, icon alignment and hideText

{{#docs-demo as |demo|}}
  {{#demo.example name='au-button-icon.hbs'}}
    <AuButton @icon="pencil" @iconAlignment="left">
      Primary button
    </AuButton>

    <hr>

    <AuButton @icon="pencil" @iconAlignment="right">
      Primary button
    </AuButton>

    <hr>

    <AuButton @icon="pencil" @hideText={{true}}>
      Primary button
    </AuButton>

  {{/demo.example}}
  {{demo.snippet 'au-button-icon.hbs'}}
{{/docs-demo}}

## Width

{{#docs-demo as |demo|}}
  {{#demo.example name='au-button-width.hbs'}}
    <AuButton @width="block">
      Primary button
    </AuButton>
  {{/demo.example}}
  {{demo.snippet 'au-button-width.hbs'}}
{{/docs-demo}}

## States: alert / disabled / loading

{{#docs-demo as |demo|}}
  {{#demo.example name='au-button-states.hbs'}}
    <AuButton @alert={{true}}>
      Primary button (alert)
    </AuButton>

    <hr>

    <AuButton @disabled={{true}}>
      Primary button (disabled)
    </AuButton>

    <hr>

    <AuButton @loading={{true}}>
      Primary button (loading)
    </AuButton>
  {{/demo.example}}
  {{demo.snippet 'au-button-states.hbs'}}
{{/docs-demo}}

## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@skin` | Defines the style of the button  | `value`: `primary` / `secondary` / `tertiary` | `primary` |
| `@size` | Set the size of the button  | `value`: `large` | - |
| `@icon` | Adds an icon  | `value`: <AuLink @linkRoute="docs.atoms.au-icon">Find the options here</AuLink> | - |
| `@iconAlignment` | Choose the position of the icon, adds correct margin next to the icon | `value`: `left` / `right` | - |
| `@hideText` | Hides the button text visually | `Boolean` | `false` |
| `@width` | Defines the width of a button | `value`: `block` | - |
| `@alert` | Adds an alert state to the button | `Boolean` | `false` |
| `@disabled` | Adds a disabled state to the button | `Boolean` | `false` |
| `@loading` | Adds a loading state to the button | `Boolean` | `false` |
