import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Patterns/Forms',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuApp>
      <AuMainContainer as |m|>
        <m.content @scroll={{true}}>
          <section class="au-o-region-large">
            <AuForm as |form|>
              <form::section>
              </form::section>

            </AuForm>
          </section>
        </m.content>
      </AuMainContainer>
    </AuApp>
    `,
  context: args,
});

export const Page = Template.bind({});
Page.args = {};
