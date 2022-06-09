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
          <AuToolbar @size="small" class="au-u-padding-bottom-none" as |Group|>
            <Group>
              <AuLink @route="docs.templates.app-editor" @skin="secondary">
                <AuIcon @icon="arrow-left" @alignment="left" />
                Terug naar overzicht agendapunten
              </AuLink>
              <span class="au-c-app-chrome__entity">Title</span>
            </Group>
            <Group>
              <ul class="au-c-list-horizontal au-u-padding-right-tiny">
                <li class="au-c-list-horizontal__item">
                  <span class="au-c-app-chrome__status">
                    Bewaard op 25/10/2021
                  </span>
                </li>
              </ul>
            </Group>
          </AuToolbar>
          <AuToolbar @size="small" class="au-u-padding-top-none" as |Group|>
            <Group>
              <div>
                <AuPill @skin="warning">
                  <AuIcon @icon="alert-triangle" @alignment="left" />
                  Concept niet bewaard
                </AuPill>
              </div>
              <h1 class="au-c-app-chrome__title">
                Title
              </h1>
            </Group>
            <Group class="au-c-toolbar__group--actions">
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
            </Group>
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
            <div class="say-editor-hints__insert">
              <AuAccordion
                @skin="border"
                @reverse={{true}}
                @iconOpen="remove"
                @iconClosed="add"
                @buttonLabel="Invoegen"
              >
                <AuList @divider={{true}}>
                  <AuList::Item>
                    <AuButton
                      @icon="add"
                      @iconAlignment="left"
                      @skin="link"
                    >
                      Tussentitel
                    </AuButton>
                  </AuList::Item>
                  <AuList::Item>
                    <AuButton
                      @icon="add"
                      @iconAlignment="left"
                      @skin="link"
                    >
                      Artikel
                    </AuButton>
                  </AuList::Item>
                  <AuList::Item>
                    <AuButton
                      @icon="add"
                      @iconAlignment="left"
                      @skin="link"
                      @disabled={{true}}
                    >
                      Artikel opschrift
                    </AuButton>
                  </AuList::Item>
                  <AuList::Item>
                    <AuButton
                      @icon="add"
                      @iconAlignment="left"
                      @skin="link"
                      @disabled={{true}}
                    >
                      Paragraaf
                    </AuButton>
                  </AuList::Item>
                  <AuList::Item>
                    <AuButton
                      @icon="add"
                      @iconAlignment="left"
                      @skin="link"
                      @disabled={{true}}
                    >
                      Codelijst
                    </AuButton>
                  </AuList::Item>
                </AuList>
              </AuAccordion>
            </div>
            <div class="say-editor-hints">
              <ul class="say-editor-hints__list">
                <li class="say-editor-hints__list-item">
                  <AuCard @flex={{true}} @divided={{true}} @expandable={{false}} @shadow={{true}} @size="flush" as |c|>
                    <c.header class="au-u-hidden-visually">
                      <AuHeading @level="3" @skin="6">
                        Title for card
                      </AuHeading>
                    </c.header>
                    <c.content class="au-c-content--small">
                      <AuList @divider={{true}} class="au-u-padding-top-tiny au-u-padding-bottom-tiny">
                        <AuList::Item>
                          <AuButton
                            @icon="nav-up"
                            @iconAlignment="left"
                            @skin="link"
                          >
                            Tussentitel naar boven verplaatsen
                          </AuButton>
                        </AuList::Item>
                        <AuList::Item>
                          <AuButton
                            @icon="nav-down"
                            @iconAlignment="left"
                            @skin="link"
                          >
                            Tussentitel naar beneden verplaatsen
                          </AuButton>
                        </AuList::Item>
                        <AuList::Item>
                          <AuButton
                            @icon="nav-up-double"
                            @iconAlignment="left"
                            @skin="link"
                          >
                            Niveau hoger
                          </AuButton>
                        </AuList::Item>
                        <AuList::Item>
                          <AuButton
                            @icon="nav-down-double"
                            @iconAlignment="left"
                            @skin="link"
                          >
                            Niveau lager
                          </AuButton>
                        </AuList::Item>
                        <AuList::Item>
                          <AuButton
                            @icon="bin"
                            @iconAlignment="left"
                            @skin="link"
                            @alert={{true}}
                          >
                            Tussentitel verwijderen
                          </AuButton>
                        </AuList::Item>
                      </AuList>
                    </c.content>
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
Page.args = {};
