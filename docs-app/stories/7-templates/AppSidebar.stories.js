import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Templates/App with Sidebar',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuApp>
      <AuMainHeader @brandLink="https://www.vlaanderen.be/nl" @homeRoute="docs.templates.app-sidebar" @appTitle="App title" @contactRoute="docs.templates.app-sidebar">
        <AuDropdown @title="Aangemeld als ..." @alignment="right" role="menu">
          <AuButton @skin="link" role="menuitem">
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
  `,
  context: args,
});

export const Page = Template.bind({});
Page.args = {};
