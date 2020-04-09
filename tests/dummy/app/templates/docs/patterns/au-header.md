# Header

---

{{#docs-demo as |demo|}}
  {{#demo.example name='au-header.hbs'}}
    <AuHeader @appTitle="App title" @contactLink="#!">
      <AuPopover @popoverTitle="Demo popover" @popoverButtonLabel="Account settings">
        <button class="au-c-popover__item">
          Afmelden
        </button>
      </AuPopover>
    </AuHeader>
  {{/demo.example}}
  {{demo.snippet 'au-header.hbs'}}
{{/docs-demo}}

## Properties
- `@appTitle`: pass the header title to select the icon
- `@contactLink`: pass the href for the contact link (no contact link is shown when this property is not present)
