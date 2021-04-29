# Time Picker

---

## Default

{{#docs-demo as |demo|}}
  {{#demo.example name='au-dateTime-picker-default.hbs'}}
    <AuTimePicker @hoursLabel="Hours" @minutesLabel="Minutes" @secondsLabel="Seconds" @nowLabel="Now" />
  {{/demo.example}}
  {{demo.snippet 'au-dateTime-picker-default.hbs'}}
{{/docs-demo}}

## Values

{{#docs-demo as |demo|}}
  {{#demo.example name='au-dateTime-picker-value.hbs'}}
    <AuTimePicker @hours="10" @minutes="33" @seconds="05" @nowLabel="Now" />
  {{/demo.example}}
  {{demo.snippet 'au-dateTime-picker-value.hbs'}}
{{/docs-demo}}

## @onChange

Triggered everytime the time gets changed by the user. Expects a function to which it returns the time.

{{#docs-demo as |demo|}}
  {{#demo.example name='au-time-picker-on-change.hbs'}}
    <AuTimePicker  @onChange={{this.myCallBackFunc}} @nowLabel="Now"/>
  {{/demo.example}}
  {{docs-snippet name="au-time-picker-on-change.js" unindent=false language=js showCopy=false}}
{{/docs-demo}}

## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@hoursLabel` | Hours label  | `string` | - |
| `@minutesLabel` | Minutes label  | `string` | - |
| `@secondsLabel` | Seconds label  | `string` | - |
| `@nowLabel` | Current time button label  | `string` | - |
| `@nowLabel` | Current time button label  | `string` | - |
| `@hours`| Sets the hour value | 'integer' | 12 |
| `@minutes`| Sets the minutes value | 'integer' | 0 |
| `@seconds`| Sets the seconds value | 'integer' | 0 |
| `@onChange`| Gets called when a time value changes. Returns an object with all time values in an object | 'object' | - |


