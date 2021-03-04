/* eslint-disable ember/no-mixins */
import JSONAPISerializer from '@ember-data/serializer/json-api';
import DataTableSerializerMixin from 'ember-data-table/mixins/serializer';

export default JSONAPISerializer.extend(DataTableSerializerMixin, {
  keyForAttribute(key) { return key; }
});
