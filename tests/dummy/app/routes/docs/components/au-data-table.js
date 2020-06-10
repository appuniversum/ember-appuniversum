import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';

export default Route.extend(DataTableRouteMixin, {
  async model () {
    return [
      {
        title: "Gemeenteraad Gent",
        description: "Reglementen en verordeningen"
      },
      {
        title: "Gemeenteraad Gent",
        description: "Advies bij jaarrekening AGB"
      },
      {
        title: "College van Burgemeester en Schepenen Gent",
        description: "Besluitenlijst"
      }
    ]
  },
  queryParams: {
    sort: { refreshModel: true },
    filter: { refreshModel: true },
    // filter params
    title: { refreshModel: true }
  },
});
