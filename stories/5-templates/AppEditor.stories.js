import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Templates/App with Editor',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuApp>
      <nav>
        <div class="au-c-app-chrome">
          <AuToolbar @size="small" class="au-u-padding-bottom-none">
            <AuToolbarGroup>
              <AuLink @route="docs.templates.app-editor" @skin="secondary">
                <AuIcon @icon="arrow-left" @alignment="left" />
                Terug naar overzicht agendapunten
              </AuLink>
              <span class="au-c-app-chrome__entity">Title</span>
            </AuToolbarGroup>
            <AuToolbarGroup>
              <ul class="au-c-list-horizontal au-u-padding-right-tiny">
                <li class="au-c-list-horizontal__item">
                  <span class="au-c-app-chrome__status">
                    Bewaard op 25/10/2021
                  </span>
                </li>
              </ul>
            </AuToolbarGroup>
          </AuToolbar>
          <AuToolbar @size="small" class="au-u-padding-top-none">
            <AuToolbarGroup>
              <div>
                <AuPill @skin="warning">
                  <AuIcon @icon="alert-triangle" @alignment="left" />
                  Concept niet bewaard
                </AuPill>
              </div>
              <h1 class="au-c-app-chrome__title">
                Title
              </h1>
            </AuToolbarGroup>
            <AuToolbarGroup class="au-c-toolbar__group--actions">
              <AuDropdown @title="Bestand acties" @buttonLabel="Bestand opties" @alignment="right">
                <AuButton @skin="tertiary" role="menuitem">
                  <AuIcon @icon="copy" @alignment="left" />
                  Kopieer agendapunt
                </AuButton>
                <AuButton @skin="tertiary" role="menuitem">
                  <AuIcon @icon="export" @alignment="left" />
                  Exporteer als HTML
                </AuButton>
                <AuButton @skin="tertiary" @alert="true" role="menuitem">
                  <AuIcon @icon="bin" @alignment="left" />
                  Naar prullenmand
                </AuButton>
              </AuDropdown>
              <AuButton>Bewaar</AuButton>
            </AuToolbarGroup>
          </AuToolbar>
        </div>
      </nav>
      <div class="say-container">
        <div class="say-container__main">
          <div class="say-editor">
            <div class="say-editor__paper">
              <div class="say-editor__inner say-content">
              </div>
            </div>
          </div>
          <div class="say-container__aside">
            <div class="say-editor-hints">
              <ul class="say-editor-hints__list">
                <li class="say-editor-hints__list-item">
                  <AuCard @flex={{true}} @divided={{true}} @shadow={{true}} @size="small" as |c|>
                    <c.header>
                      <AuHeading @level="3" @skin="6">
                        Title for card
                      </AuHeading>
                    </c.header>
                    <c.content>
                      <p>Information in the card that comes below the header. Content.</p>
                    </c.content>
                    <c.footer>
                      <AuButtonGroup class="au-u-text-right">
                        <AuButton @skin="link" @icon="cross" @iconAlignment="left">Venster sluiten</AuButton>
                      </AuButtonGroup>
                    </c.footer>
                  </AuCard>
                </li>
                <li class="say-editor-hints__list-item">
                  <AuCard @flex={{true}} @divided={{true}} @expandable={{true}} @shadow={{true}} @size="small" as |c|>
                    <c.header>
                      <AuHeading @level="3" @skin="6">
                        Title for card
                      </AuHeading>
                    </c.header>
                    <c.content>
                      <p>Information in the card that comes below the header. Content.</p>
                    </c.content>
                  </AuCard>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AuApp>
  `,
  context: args,
});

export const Page = Template.bind({});
Page.args = {

};
