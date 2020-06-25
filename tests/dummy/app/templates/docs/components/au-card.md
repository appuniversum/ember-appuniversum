# Card (draft)

---

## Card

{{#docs-demo as |demo|}}
  {{#demo.example name='au-card.hbs'}}
    <AuCard>
      <AuBadge @icon="search-folder" @skin="brand" class="au-u-margin-bottom-small" />
      <AuContent>
        <AuHeading @level="2" @skin="4">
          Toezicht
        </AuHeading>
        <p class="au-u-margin-top-tiny">Bezorg besluiten en overzichtslijsten elektronisch aan de toezichthoudende overheid.</p>
        <p>
          <a class="au-c-button" href="https://lokaalbestuur.vlaanderen.be/mijn-binnenland" target="_blank" rel="noopener noreferrer">Meer informatie</a>
          <a class="au-c-button au-c-button--secondary" href="https://loket.lokaalbestuur.vlaanderen.be/handleiding/#toezicht" target="_blank" rel="noopener noreferrer">Handleiding</a>
        </p>
      </AuContent>
    </AuCard>
  {{/demo.example}}
  {{demo.snippet 'au-card.hbs'}}
{{/docs-demo}}

## Card (flex)

{{#docs-demo as |demo|}}
  {{#demo.example name='au-card-flex.hbs'}}
    <AuCard @flex="true">
      <AuBadge @icon="search-folder" @skin="brand" />
      <AuContent @skin="small">
        <AuHeading @level="2" @skin="4">
          Toezicht
        </AuHeading>
        <p class="au-u-margin-top-tiny">Bezorg besluiten en overzichtslijsten aan de toezichthoudende overheid.</p>
        <p>
          <AuButton {{action "goToToezicht"}}>Ga naar toezicht</AuButton>
        </p>
        <p>
          <a class="au-c-link au-c-link--secondary" href="https://lokaalbestuur.vlaanderen.be/loket-lokaal-bestuur-module-toezicht" target="_blank" rel="noopener noreferrer">
            <AuIcon @icon="link" @alignment="left" />
            Meer informatie
          </a>
          &nbsp;
          <a class="au-c-link au-c-link--secondary" href="https://loket.lokaalbestuur.vlaanderen.be/handleiding/#toezicht" target="_blank" rel="noopener noreferrer">
            <AuIcon @icon="manual" @alignment="left" />
            Handleiding
          </a>
        </p>
      </AuContent>
    </AuCard>
  {{/demo.example}}
  {{demo.snippet 'au-card-flex.hbs'}}
{{/docs-demo}}


## Properties

- `@flex`: [ true ] - layout elements as flexbox columns
