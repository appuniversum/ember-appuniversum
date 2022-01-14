import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/AuNavigationLink',
  argTypes: {
    text: {control: 'text', description:''},
    route: {control: 'route', description:'The route that is passed to the link'},
    model: { control: 'model', description:'Supply a model to the route'},
    models: { control: 'model', description:'Supply models to the route'},
    query: { control: 'query', description:'Supply query parameters to the route'}
  }
};

const Template = (args) => ({
  template: hbs`
    <ul class="au-c-list-navigation">
      <li class="au-c-list-navigation__item">
        <AuNavigationLink
          @route={{this.route}}
          @model={{this.model}}
          @models={{this.models}}
          @query={{this.query}}
        >
          {{text}}
        </AuNavigationLink>
      </li>
    </ul>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  text: "Navigation Link",
  route: "index"
};
