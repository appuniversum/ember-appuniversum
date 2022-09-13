import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Templates/App with Breadcrumbs',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuApp>
      <AuMainHeader @brandLink="https://www.vlaanderen.be/nl" @homeRoute="docs.templates.app-sidebar" @appTitle="App title" @contactRoute="docs.templates.app-sidebar">
        <AuDropdown @title="Aangemeld als ..." @buttonLabel="Account settings" @alignment="right">
          <AuButton @skin="tertiary" role="menuitem">
            <AuIcon @icon="logout" @alignment="left" />Afmelden
          </AuButton>
        </AuDropdown>
      </AuMainHeader>
      <AuToolbar @size="medium" @skin="tint" @border="bottom" as |Group|>
        <Group>
          <ul class="au-c-list-horizontal au-c-list-horizontal--small">
            <li class="au-c-list-horizontal__item">
              <AuLink @linkRoute="index" @icon="arrow-left">
                Overzicht modules
              </AuLink>
            </li>
            <li class="au-c-list-horizontal__item">
              Test
            </li>
          </ul>
        </Group>
      </AuToolbar>
      <AuMainContainer as |m|>
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
