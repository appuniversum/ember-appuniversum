# Select

---

## Single select

{{#docs-demo as |demo|}}
  {{#demo.example name='au-form-select.hbs'}}
    <AuLabel for="au-select-province">Provincie</AuLabel>
    <AuSelect
      @placeholder="Kies een provincie"
      @options={{this.provinces}}
      @selected={{this.selectedProvince}}
      @onChange={{fn (mut this.selectedProvince)}} 
      id="au-select-province"
      as |province|
    >
      {{province.label}}
    </AuSelect>
    <br>
    Selected province: {{this.selectedProvince.label}}
  {{/demo.example}}
  {{demo.snippet 'au-form-select.hbs'}}
{{/docs-demo}}

## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@selected` | The selected option | `string` | - |
| `@options`| List of options that can be selected | 'integer' | 0 |
| `@onChange`| Gets called when the user selects an option with that option as the argument | any | - |
| `@placeholder` | The text that will be shown in the empty option  | `string` | - |


