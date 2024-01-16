import type AuAlert from '@appuniversum/ember-appuniversum/components/au-alert';
import type AuApp from '@appuniversum/ember-appuniversum/components/au-app';
import type AuIcon from '@appuniversum/ember-appuniversum/components/au-icon';

export default interface AppuniversumRegistry {
  AuAlert: typeof AuAlert;
  AuApp: typeof AuApp;
  AuIcon: typeof AuIcon;
}
