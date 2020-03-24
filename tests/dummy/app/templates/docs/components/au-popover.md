# Popover

---

{{#docs-demo as |demo|}}
  {{#demo.example name='au-popover.hbs'}}
    <AuPopover @popoverTitle="Demo popover" @popoverButtonLabel="Account settings">
      <button class="au-c-popover__item" role="menuitem">
        <AuIcon @icon="powerdown" @iconLeft="true" />Afmelden
      </button>
    </AuPopover>
  {{/demo.example}}
  {{demo.snippet 'au-popover.hbs'}}
{{/docs-demo}}
