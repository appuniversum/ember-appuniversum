# App with sidebar

---

{{#docs-demo as |demo|}}
  {{#demo.example name='app-with-sidebar.hbs'}}
    <AuApp>
      <AuMainHeader @brandLink="https://www.vlaanderen.be/nl" @homeRoute="docs.templates.app-sidebar" @appTitle="App title" @contactRoute="docs.templates.app-sidebar">
        <AuDropdown @dropdownTitle="Aangemeld als ..." @dropdownButtonLabel="Account settings" @alignment="right">
          <AuButton @skin="tertiary" role="menuitem">
            <AuIcon @icon="logout" @alignment="left" />Afmelden
          </AuButton>
        </AuDropdown>
      </AuMainHeader>
      <AuMainContainer as |m|>
        <m.sidebar>
          <div class="au-c-sidebar">
            <div class="au-c-sidebar__content">
              <nav>
                <ul class="au-c-list-navigation">
                  <li class="au-c-list-navigation__item">
                    <AuNavigationLink @linkRoute="docs.templates.app-sidebar">
                      <AuIcon @icon="documents" @alignment="left" />
                      Navigation item
                    </AuNavigationLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="au-c-sidebar__footer">
              <AuLinkExternal href="https://www.vlaanderen.be/" @width="block" @skin="secondary" @icon="manual" @iconAlignment="left">
                Manual
              </AuLinkExternal>
            </div>
          </div>
        </m.sidebar>
        <m.content @scroll={{true}}>
          <div class="au-d-component-block au-d-component-block--overflow">
            Main content
          </div>
        </m.content>
      </AuMainContainer>
    </AuApp>
  {{/demo.example}}
  {{demo.snippet 'app-with-sidebar.hbs'}}
{{/docs-demo}}
