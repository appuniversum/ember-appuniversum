import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Tables/AuTable',
  argTypes: {
    size: { control: 'select', options: ['default', 'small'], description:'Set the size of the table'}
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuTable
      @size={{this.size}}
    >
      <:title>Test</:title>
      <:header>
        <tr>
          <th>Titel notulen</th>
          <th>Omschrijving</th>
        </tr>
      </:header>
      <:body>
        <tr>
          <td>Gemeenteraad Gent</td>
          <td>Reglementen en verordeningen</td>
        </tr>
        <tr>
          <td>Gemeenteraad Gent</td>
          <td>Advies bij jaarrekening AGB</td>
        </tr>
      </:body>
      <:footer>
        <tr>
          <td>College van Burgemeester en Schepenen Gent</td>
          <td>Besluitenlijst</td>
        </tr>
      </:footer>
    </AuTable>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  size: 'default'
};
