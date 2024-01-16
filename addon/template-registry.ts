import type AuAlert from '@appuniversum/ember-appuniversum/components/au-alert';
import type AuApp from '@appuniversum/ember-appuniversum/components/au-app';
import type AuBadge from '@appuniversum/ember-appuniversum/components/au-badge';
import type AuBodyContainer from '@appuniversum/ember-appuniversum/components/au-body-container';
import type AuBrand from '@appuniversum/ember-appuniversum/components/au-brand';
import type AuButtonGroup from '@appuniversum/ember-appuniversum/components/au-button-group';
import type AuIcon from '@appuniversum/ember-appuniversum/components/au-icon';

export default interface AppuniversumRegistry {
  AuAlert: typeof AuAlert;
  AuApp: typeof AuApp;
  AuBadge: typeof AuBadge;
  AuBodyContainer: typeof AuBodyContainer;
  AuBrand: typeof AuBrand;
  AuButtonGroup: typeof AuButtonGroup;
  AuIcon: typeof AuIcon;
}
