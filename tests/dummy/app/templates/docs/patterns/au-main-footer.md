# Main footer

---

{{#docs-demo as |demo|}}
  {{#demo.example name='au-main-footer.hbs'}}
    <AuMainFooter>
      <AuHeading @level="3" @skin="4">
        Gelinkt-notuleren.lblod.info is een officiële website van de Vlaamse overheid
      </AuHeading>
      <AuContent @skin="small">
        <p>Uitgegeven door <a class="au-c-link" href="https://www.vlaanderen.be/organisaties/administratieve-diensten-van-de-vlaamse-overheid/beleidsdomein-kanselarij-en-bestuur/agentschap-binnenlands-bestuur">Agentschap Binnenlands Bestuur</a></p>
        <ul class="au-c-list-horizontal">
          <li class="au-c-list-horizontal__item">
            <AuLink @route="index" @skin="secondary">Disclaimer</AuLink>
          </li>
          <li class="au-c-list-horizontal__item">
            <AuLink @route="index" @skin="secondary">Cookieverklaring</AuLink>
          </li>
        </ul>
      </AuContent>
    </AuMainFooter>
  {{/demo.example}}
  {{demo.snippet 'au-main-footer.hbs'}}
{{/docs-demo}}
