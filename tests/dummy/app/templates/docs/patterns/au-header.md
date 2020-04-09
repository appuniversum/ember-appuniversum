# Header

---

{{#docs-demo as |demo|}}
  {{#demo.example name='au-header.hbs'}}
    <AuHeader @brandLink="https://www.vlaanderen.be/nl" @homeRoute="index" @appTitle="App title" @contactRoute="docs.patterns.au-header">
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
- `@brandLink`: pass a link to the logo (the logo has no link if this property is not present)
- `@homeRoute`: pass a route for the appTitle link (expected behaviour is to link to the dashboard or homepage of the application)
- `@appTitle`: pass the header title to select the icon
- `@contactRoute`: pass a route for the contact route (no contact route is shown when this property is not present)
