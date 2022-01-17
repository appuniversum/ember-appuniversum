import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Templates/App with Login',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuApp>
      <AuMainHeader @brandLink="https://www.vlaanderen.be/nl" @homeRoute="docs.templates.app-sidebar" @appTitle="App title" @contactRoute="docs.templates.app-sidebar">
        <AuButton @skin="tertiary" role="menuitem">
          <AuIcon @icon="login" @alignment="left" />Aanmelden
        </AuButton>
      </AuMainHeader>
      <AuMainContainer as |m|>
        <m.content @scroll={{true}}>
          <AuContentHeader @titlePartOne="Vlaanderen" @titlePartTwo="is lokaal bestuur">
            <img sizes="50vw" src={{root-url "/images/loket-header-1600.jpg"}} srcset={{srcSet}} alt="Foto van een laptop met daarop het vlaanderen logo.">
          </AuContentHeader>

          <section class="au-o-region-large">
            <div class="au-o-layout">
              <div class="au-o-grid au-o-grid--small">
                <div class="au-o-grid__item au-u-3-4@small au-u-1-2@medium">
                  <AuContent @skin="large">
                    <h1>Gelinkt Notuleren</h1>
                    <p class="au-c-heading au-c-heading--4">Een webapplicatie die helpt met het opmaken en publiceren van agenda's, notulen en besluiten voor Lokale Besturen.</p>
                    <p>Lukt het aanmelden niet? Neem contact op met uw interne beheerder. Indien er zich een probleem voordoet, contacteer <a class="au-c-link" href="https://overheid.vlaanderen.be/ict/ict-diensten/gebruikersbeheer">gebruikersbeheer Vlaanderen</a>.</p>
                    <p>Het aanmelden gebeurt in een pop-up; zorg dat de instellingen van uw browser correct staan indien deze niet verschijnt.</p>
                  </AuContent>
                </div>
                <div class="au-o-grid__item au-u-1-4@small au-u-1-2@medium au-u-text-right@medium">
                  <AuButton @icon="login" @iconAlignment="left">
                    Aanmelden
                  </AuButton>
                </div>
              </div>
            </div>
          </section>

          <section class="au-o-region-large au-u-background-gray-200">
            <div class="au-o-layout">
              <AuContent @skin="large" class="au-u-margin-bottom">
                <AuHeading @level="2" @skin="3" class="au-u-margin-bottom">De functionaliteiten van Gelinkt Notuleren</AuHeading>
                <p>Alle functionaliteiten, samen met handige tips & tricks, kan u bekijken in handleiding. <a class="au-c-link" href="#!" target="_blank" rel="noopener noreferrer" >Bekijk de handleiding hier.</a></p>
              </AuContent>
              <div class="au-o-grid au-o-grid--small">
                <div class="au-o-grid__item au-u-1-2@small">
                  <AuCard @textCenter="true" as |c|>
                    <c.header @badgeSkin="brand" @badgeIcon="pencil">
                      <AuHeading @level="3" @skin="4">
                        Feature
                      </AuHeading>
                    </c.header>
                    <c.content>
                      <p>Feature description</p>
                      <ul>
                        <li>Feature list;</li>
                        <li>Feature list;</li>
                        <li>Feature list;</li>
                      </ul>
                    </c.content>
                    <c.footer>
                      <p>
                        <a class="au-c-button" href="#!" rel="noopener noreferrer" target="_blank">Manual link</a>
                      </p>
                    </c.footer>
                  </AuCard>
                </div>
                <div class="au-o-grid__item au-u-1-2@small">
                  <AuCard @textCenter="true" as |c|>
                    <c.header @badgeSkin="brand" @badgeIcon="pencil">
                      <AuHeading @level="3" @skin="4">
                        Feature
                      </AuHeading>
                    </c.header>
                    <c.content>
                      <p>Feature description</p>
                      <ul>
                        <li>Feature list;</li>
                        <li>Feature list;</li>
                        <li>Feature list;</li>
                      </ul>
                    </c.content>
                    <c.footer>
                      <p>
                        <a class="au-c-button" href="#!" rel="noopener noreferrer" target="_blank">Manual link</a>
                      </p>
                    </c.footer>
                  </AuCard>
                </div>
              </div>
            </div>
          </section>

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
        </m.content>
      </AuMainContainer>
    </AuApp>
  `,
  context: args,
});

export const Page = Template.bind({});
Page.args = {

};
