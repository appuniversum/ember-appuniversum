# Main header

---

{{#docs-demo as |demo|}}
  {{#demo.example name='au-main-header.hbs'}}
    <AuMainHeader @brandLink="https://www.vlaanderen.be/nl" @homeRoute="index" @appTitle="App title" @contactRoute="docs.patterns.au-main-header">
      <AuDropdown @dropdownTitle="Demo dropdown" @dropdownButtonLabel="Account settings" @alignment="right">
        <AuButton @skin="tertiary" role="menuitem">
          <AuIcon @icon="logout" @alignment="left" />Afmelden
        </AuButton>
      </AuDropdown>
    </AuMainHeader>
  {{/demo.example}}
  {{demo.snippet 'au-main-header.hbs'}}
{{/docs-demo}}

## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@brandLink` | Pass a link to the logo | `URL` | - |
| `@appTitle` | Pass the header title | `string` | - |
| `@homeRoute` | Pass a route for the appTitle link | `route` | - |
| `@contactRoute` | Pass a route for the contact link | `route` | - |
