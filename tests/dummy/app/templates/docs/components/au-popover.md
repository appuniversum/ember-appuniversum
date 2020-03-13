# Popover

---

{{#docs-demo as |demo|}}
  {{#demo.example name='au-popover.hbs'}}
    <AuPopover @popoverTitle="Demo popover" @popoverButtonLabel="Account settings">
      <button class="au-c-popover__item" role="menuitem">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" class="au-c-icon au-c-icon--left" aria-hidden="true">
          <path d="M24.1666667,2.5 L19.8333333,2.5 L19.8333333,24.1666667 L24.1666667,24.1666667 L24.1666667,2.5 Z M34.6316667,7.20166667 L31.555,10.2783333 C34.9783333,13.03 37.1666667,17.255 37.1666667,22 C37.1666667,30.385 30.385,37.1666667 22,37.1666667 C13.615,37.1666667 6.83333333,30.385 6.83333333,22 C6.83333333,17.255 9.02166667,13.03 12.4233333,10.2566667 L9.36833333,7.20166667 C5.165,10.7766667 2.5,16.0633333 2.5,22 C2.5,32.7683333 11.2316667,41.5 22,41.5 C32.7683333,41.5 41.5,32.7683333 41.5,22 C41.5,16.0633333 38.835,10.7766667 34.6316667,7.20166667 Z"/>
        </svg>Afmelden
      </button>
    </AuPopover>
  {{/demo.example}}
  {{demo.snippet 'au-popover.hbs'}}
{{/docs-demo}}
