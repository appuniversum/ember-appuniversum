import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';

export default Route.extend(DataTableRouteMixin, {
  async model () {
    let response = await fetch('/api/data-table-demo.json');
    let parsed = await response.json();
    return parsed;
  },
  queryParams: {
    sort: { refreshModel: true },
    filter: { refreshModel: true },
    // filter params
    title: { refreshModel: true }
  },
});
