# Link

---

## Primary link

{{#docs-demo as |demo|}}
  {{#demo.example name='au-link.hbs'}}
    <AuLink @linkRoute="docs.atoms.au-link">
      Primary link
    </AuLink>

    <hr>

    <AuLink @linkRoute="docs.atoms.au-link" @icon="login" @iconAlignment="left">
      Primary link + icon
    </AuLink>

    <hr>

    <AuLink @linkRoute="docs.atoms.au-link" @active="true">
      Primary link - active
    </AuLink>
  {{/demo.example}}
  {{demo.snippet 'au-link.hbs'}}
{{/docs-demo}}

## Secondary link

{{#docs-demo as |demo|}}
  {{#demo.example name='au-link-secondary.hbs'}}
    <AuLink @skin="secondary" @linkRoute="docs.atoms.au-link">
      Secondary link
    </AuLink>

    <hr>

    <AuLink @skin="secondary" @linkRoute="docs.atoms.au-link" @icon="logout" @iconAlignment="left">
      Secondary link + icon
    </AuLink>

    <hr>

    <AuLink @skin="secondary" @linkRoute="docs.atoms.au-link" @active="true">
      Secondary link - active
    </AuLink>
  {{/demo.example}}
  {{demo.snippet 'au-link-secondary.hbs'}}
{{/docs-demo}}

## Properties

- `@skin`: [ secondary ] - default is primary
- `@active`: [ true ] - adds an active state and disables pointer events
- `@linkRoute`: the route that is passed to the link
- `@icon`: [ icon name ] - adds an icon
- `@iconAlignment`: [ left | right ] - adds margin left or right of the icon
- `@hideText`: [ true ] - hides the button text visually
