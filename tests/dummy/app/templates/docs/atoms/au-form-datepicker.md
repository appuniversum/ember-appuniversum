# Form: Date Picker

---


## Default 

{{#docs-demo as |demo|}}
  {{#demo.example name='au-date-picker.hbs'}}
    <AuDatePicker @label="Choose a date" />
  {{/demo.example}}
  {{demo.snippet 'au-date-picker.hbs'}}
{{/docs-demo}}

## Preselected date

{{#docs-demo as |demo|}}
  {{#demo.example name='au-date-picker-value.hbs'}}
    <AuDatePicker @label="Choose a date" @value={{this.today}} />
    <br>
    <AuDatePicker @label="Choose a date" @value="2020-01-01" />
  {{/demo.example}}
  {{demo.snippet 'au-date-picker-value.hbs'}}
{{/docs-demo}}

## Minimum and maximum date

{{#docs-demo as |demo|}}
  {{#demo.example name='au-date-picker-range.hbs'}}
    <AuDatePicker  @label="Choose a date" @min="2020-01-15" @max="2020-01-23" />
  {{/demo.example}}
  {{demo.snippet 'au-date-picker-range.hbs'}}
{{/docs-demo}}

## Disabled

{{#docs-demo as |demo|}}
  {{#demo.example name='au-date-picker-disabled.hbs'}}
    <AuDatePicker @label="Choose a date" @disabled={{true}} />
  {{/demo.example}}
  {{demo.snippet 'au-date-picker-disabled.hbs'}}
{{/docs-demo}}

## Localization

You can customize all button labels, names, placeholders... by passing in a localization object.

{{docs-snippet name="au-date-picker.js" unindent=false language=js showCopy=false}}

__Note:__ It is not required to pass in all object properties. If you are only interested in changing the `buttonLabel` property value, it suffices to pass in a localization object with only `buttonLabel` as property.

## Adapter

Customize how the dates are formatted and/or parsed. The adapter argument expects an object with 2 properties (parse & format). The property values have to be functions containing a return statement.

__Important__: Make sure the adapter is consistent with the `placeholder` label. Users will match the formatting of the placeholder which means the adapter wouldn't register a date change.

### Custom placeholder example
This example shows how you can change the adapter to make sure it matches the placeholder.
{{#docs-demo as |demo|}}
  {{#demo.example name='au-date-picker-custom-placeholder.hbs'}}
    <AuDatePicker  @localization={{this.localization}} @adapter={{this.adapter}} />
  {{/demo.example}}
  {{docs-snippet name="au-date-picker-custom-placeholder.hbs"}}
  {{docs-snippet name="au-date-picker-custom-placeholder.js" language="js"}}
{{/docs-demo}}

## @onChange

Triggered everytime the date gets changed by the user or when the input field is cleared. Expects a function to which it returns both a formatted date (IS0-8601 format: YYYY-MM-DD) and the `Date` instance as parameters. When the input field is cleared the function will receive `null` for both parameters instead.

{{#docs-demo as |demo|}}
  {{#demo.example name='au-date-picker-on-change.hbs'}}
    <AuDatePicker  @onChange={{this.handleDateChange}} />
  {{/demo.example}}
  {{docs-snippet name="au-date-picker-on-change.hbs"}}
  {{docs-snippet name="au-date-picker-on-change.js" language="js"}}
{{/docs-demo}}


## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@id` | Set id of component  | `String` | a generated id |
| `@label` | Set label text  | `String` | - |
| `@value` | Set the selected date | `Date` or `String` | - |
| `@min` | Set starting date | `Date` or `String` | - |
| `@max` | set ending date | `Date` or `String` | - |
| `@first-day` | Choose first day of the week (range: 1 - 7) | `Integer` | 1 |
| `@disabled` | Makes the date picker input component disabled | `Boolean` | false |
| `@localization` | Object for localizing Button labels, names... | `Object` | [See above](#localization) |
| `@adapter` | Object for parsing and formatting | `Object` | [See above](#adapter) |
| `@onChange`| Gets called when the date changes. Returns the date as both an ISO 8601 string and `Date` instance or `null` when the input field is cleared. | `Function` | - |
