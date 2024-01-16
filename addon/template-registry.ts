import type AuAlert from '@appuniversum/ember-appuniversum/components/au-alert';
import type AuIcon from '@appuniversum/ember-appuniversum/components/au-icon';

export default interface AppuniversumRegistry {
  AuAlert: typeof AuAlert;
  AuIcon: typeof AuIcon;
}
