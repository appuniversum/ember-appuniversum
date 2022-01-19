import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Brand/AuMainFooter',
  argTypes: {

  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuMainFooter>
      <AuHeading @level="3" @skin="4">
        Gelinkt-notuleren.lblod.info is een officiële website van de Vlaamse overheid
      </AuHeading>
      <AuContent @skin="small">
        <p>Uitgegeven door <a class="au-c-link" href="https://www.vlaanderen.be/organisaties/administratieve-diensten-van-de-vlaamse-overheid/beleidsdomein-kanselarij-en-bestuur/agentschap-binnenlands-bestuur">Agentschap Binnenlands Bestuur</a></p>
        <ul class="au-c-list-horizontal">
          <li class="au-c-list-horizontal__item">
            <AuLink @route="" @skin="secondary">Disclaimer</AuLink>
          </li>
          <li class="au-c-list-horizontal__item">
            <AuLink @route="" @skin="secondary">Cookieverklaring</AuLink>
          </li>
        </ul>
      </AuContent>
    </AuMainFooter>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {

};
