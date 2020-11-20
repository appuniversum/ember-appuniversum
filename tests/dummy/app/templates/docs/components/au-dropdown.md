# Dropdown

---

## Default 

{{#docs-demo as |demo|}}
  {{#demo.example name='au-dropdown.hbs'}}
    <AuDropdown @dropdownTitle="Demo dropdown" @dropdownButtonLabel="Account settings">
      <AuButton @skin="tertiary" role="menuitem">
        <AuIcon @icon="switch" @alignment="left" />Switch profile
      </AuButton>
      <AuButton @skin="tertiary" role="menuitem">
        <AuIcon @icon="logout" @alignment="left" />Logout
      </AuButton>
    </AuDropdown>
  {{/demo.example}}
  {{demo.snippet 'au-dropdown.hbs'}}
{{/docs-demo}}

## Left alignment 

{{#docs-demo as |demo|}}
  {{#demo.example name='au-dropdown-left.hbs'}}
    <AuDropdown @dropdownTitle="Demo dropdown | left alignment" @dropdownButtonLabel="Account settings" @alignment="left">
      <AuButton @skin="tertiary" role="menuitem">
        <AuIcon @icon="switch" @alignment="left" />Switch profile
      </AuButton>
      <AuButton @skin="tertiary" role="menuitem">
        <AuIcon @icon="logout" @alignment="left" />Afmelden
      </AuButton>
    </AuDropdown>
  {{/demo.example}}
  {{demo.snippet 'au-dropdown-left.hbs'}}
{{/docs-demo}}

## Right alignment 

{{#docs-demo as |demo|}}
  {{#demo.example name='au-dropdown-right.hbs'}}
    <AuDropdown @dropdownTitle="Demo dropdown | right alignment" @dropdownButtonLabel="Account settings" @alignment="right">
      <AuButton @skin="tertiary" role="menuitem">
        <AuIcon @icon="switch" @alignment="left" />Switch profile
      </AuButton>
      <AuButton @skin="tertiary" role="menuitem">
        <AuIcon @icon="logout" @alignment="left" />Afmelden
      </AuButton>
    </AuDropdown>
  {{/demo.example}}
  {{demo.snippet 'au-dropdown-right.hbs'}}
{{/docs-demo}}



## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@dropdownTitle` | Pass the title of the dropdown | `String` | - |
| `@dropdownButtonLabel` | Pass name of the dropdown button | `String` | - |
| `@alignment` | Position the icon and menu | `value`: `left` / `center` / `right` | `center` |
