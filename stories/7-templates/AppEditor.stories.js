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
              <AuLink @route="docs.templates.app-editor" @skin="secondary" @icon="arrow-left">
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
                <AuPill @skin="warning" @icon="alert-triangle">
                  Concept niet bewaard
                </AuPill>
              </div>
              <h1 class="au-c-app-chrome__title">
                Title
              </h1>
            </Group>
            <Group class="au-c-toolbar__group--actions">
              <AuDropdown @title="Bestand acties" @alignment="right" role="menu">
                <AuButton @skin="link" role="menuitem">
                  <AuIcon @icon="copy" @alignment="left" />
                  Kopieer agendapunt
                </AuButton>
                <AuButton @skin="link" role="menuitem">
                  <AuIcon @icon="export" @alignment="left" />
                  Exporteer als HTML
                </AuButton>
                <AuButton @skin="link" @alert="true" role="menuitem">
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
              <div class="say-editor__inner say-content au-c-content">
                <div property="http://lblod.data.gift/vocabularies/editor/isLumpNode">
                  <AuHeading>Title</AuHeading>
                  <AuList as |Item|>
                    <Item>
                      <a href="#1" class="au-c-link au-c-link--secondary">
                        Heading
                      </a>
                    </Item>
                    <Item>
                      <AuList as |Item|>
                        <Item>
                          <a href="#2" class="au-c-link au-c-link--secondary">
                            Subheading
                          </a>
                        </Item>
                        <Item>
                          <AuList as |Item|>
                            <Item>
                              <a href="#3" class="au-c-link au-c-link--secondary">
                                Article 1
                              </a>
                            </Item>
                            <Item>
                              <AuList as |Item|>
                                <Item>
                                  <a href="#4" class="au-c-link au-c-link--secondary">
                                    §1.
                                  </a>
                                </Item>
                              </AuList>
                            </Item>
                          </AuList>
                        </Item>
                      </AuList>
                    </Item>
                  </AuList>
                </div>
                <div id="1" class="au-o-flow au-o-flow--small">
                  <AuHeading @level="2" @skin="3">
                    Heading
                  </AuHeading>
                  <div id="2" class="au-o-flow au-o-flow--small">
                    <AuHeading @level="3" @skin="4">
                      Subheading
                    </AuHeading>
                    <div id="3" class="au-o-flow au-o-flow--small">
                      <AuHeading @level="4" @skin="5">
                        Article 1
                      </AuHeading>
                      <div id="4"><p><span class="au-u-muted">§1.</span> Paragraph.</p></div>
                    </div>
                  </div>
                </div>
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
                <AuList @divider={{true}} as |Item|>
                  <Item>
                    <AuButton
                      @icon="add"
                      @iconAlignment="left"
                      @skin="link"
                    >
                      Tussentitel
                    </AuButton>
                  </Item>
                  <Item>
                    <AuButton
                      @icon="add"
                      @iconAlignment="left"
                      @skin="link"
                    >
                      Artikel
                    </AuButton>
                  </Item>
                  <Item>
                    <AuButton
                      @icon="add"
                      @iconAlignment="left"
                      @skin="link"
                      @disabled={{true}}
                    >
                      Artikel opschrift
                    </AuButton>
                  </Item>
                  <Item>
                    <AuButton
                      @icon="add"
                      @iconAlignment="left"
                      @skin="link"
                      @disabled={{true}}
                    >
                      Paragraaf
                    </AuButton>
                  </Item>
                  <Item>
                    <AuButton
                      @icon="add"
                      @iconAlignment="left"
                      @skin="link"
                      @disabled={{true}}
                    >
                      Codelijst
                    </AuButton>
                  </Item>
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
                      <AuList @divider={{true}} class="au-u-padding-top-tiny au-u-padding-bottom-tiny" as |Item|>
                        <Item>
                          <AuButton
                            @icon="nav-up"
                            @iconAlignment="left"
                            @skin="link"
                          >
                            Tussentitel naar boven verplaatsen
                          </AuButton>
                        </Item>
                        <Item>
                          <AuButton
                            @icon="nav-down"
                            @iconAlignment="left"
                            @skin="link"
                          >
                            Tussentitel naar beneden verplaatsen
                          </AuButton>
                        </Item>
                        <Item>
                          <AuButton
                            @icon="nav-up-double"
                            @iconAlignment="left"
                            @skin="link"
                          >
                            Niveau hoger
                          </AuButton>
                        </Item>
                        <Item>
                          <AuButton
                            @icon="nav-down-double"
                            @iconAlignment="left"
                            @skin="link"
                          >
                            Niveau lager
                          </AuButton>
                        </Item>
                        <Item>
                          <AuButton
                            @icon="bin"
                            @iconAlignment="left"
                            @skin="link"
                            @alert={{true}}
                          >
                            Tussentitel verwijderen
                          </AuButton>
                        </Item>
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
