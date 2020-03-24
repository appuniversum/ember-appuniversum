# Header

---

{{#docs-demo as |demo|}}
  {{#demo.example name='au-header.hbs'}}
    <AuHeader @appTitle="App title" @contactLink="#!">
      <AuPopover @popoverTitle="Demo popover" @popoverButtonLabel="Account settings">
        <button class="au-c-popover__item">
          <AuIcon @icon="powerdown" @iconLeft="true" />Afmelden
        </button>
      </AuPopover>
    </AuHeader>
  {{/demo.example}}
  {{demo.snippet 'au-header.hbs'}}
{{/docs-demo}}
