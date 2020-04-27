# Main header

---

{{#docs-demo as |demo|}}
  {{#demo.example name='au-main-header.hbs'}}
    <AuMainHeader @brandLink="https://www.vlaanderen.be/nl" @homeRoute="index" @appTitle="App title" @contactRoute="docs.patterns.au-header">
      <AuDropdown @dropdownTitle="Demo dropdown" @dropdownButtonLabel="Account settings" @alignment="right">
        <AuButton @skin="tertiary" role="menuitem">
          <AuIcon @icon="logout" @alignment="left" />Afmelden
        </AuButton>
      </AuDropdown>
    </AuMainHeader>
  {{/demo.example}}
  {{demo.snippet 'au-main-header.hbs'}}
{{/docs-demo}}

## Properties
- `@brandLink`: pass a link to the logo (the logo has no link if this property is not present)
- `@appTitle`: pass the header title
- `@homeRoute`: pass a route for the appTitle link (expected behaviour is to link to the dashboard or homepage of the application)
- `@contactRoute`: pass a route for the contact route (no contact route is shown when this property is not present)
