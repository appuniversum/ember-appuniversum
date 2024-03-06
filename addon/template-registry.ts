// Components
import type AuAccordion from '@appuniversum/ember-appuniversum/components/au-accordion';
import type AuAlert from '@appuniversum/ember-appuniversum/components/au-alert';
import type AuApp from '@appuniversum/ember-appuniversum/components/au-app';
import type AuBadge from '@appuniversum/ember-appuniversum/components/au-badge';
import type AuBodyContainer from '@appuniversum/ember-appuniversum/components/au-body-container';
import type AuBrand from '@appuniversum/ember-appuniversum/components/au-brand';
import type AuButtonGroup from '@appuniversum/ember-appuniversum/components/au-button-group';
import type AuButton from '@appuniversum/ember-appuniversum/components/au-button';
import type AuCard from '@appuniversum/ember-appuniversum/components/au-card';
import type AuCheckbox from '@appuniversum/ember-appuniversum/components/au-checkbox';
import type AuCheckboxGroup from '@appuniversum/ember-appuniversum/components/au-checkbox-group';
import type AuContentHeader from '@appuniversum/ember-appuniversum/components/au-content-header';
import type AuContent from '@appuniversum/ember-appuniversum/components/au-content';
import type AuDateInput from '@appuniversum/ember-appuniversum/components/au-date-input';
import type AuFileCard from '@appuniversum/ember-appuniversum/components/au-file-card';
import type AuFileUpload from '@appuniversum/ember-appuniversum/components/au-file-upload';
import type AuFormRow from '@appuniversum/ember-appuniversum/components/au-form-row';
import type AuHeading from '@appuniversum/ember-appuniversum/components/au-heading';
import type AuHelpText from '@appuniversum/ember-appuniversum/components/au-help-text';
import type AuHr from '@appuniversum/ember-appuniversum/components/au-hr';
import type AuIcon from '@appuniversum/ember-appuniversum/components/au-icon';
import type AuInput from '@appuniversum/ember-appuniversum/components/au-input';
import type AuLinkExternal from '@appuniversum/ember-appuniversum/components/au-link-external';
import type AuLink from '@appuniversum/ember-appuniversum/components/au-link';
import type AuList from '@appuniversum/ember-appuniversum/components/au-list';
import type AuLoader from '@appuniversum/ember-appuniversum/components/au-loader';
import type AuMainContainer from '@appuniversum/ember-appuniversum/components/au-main-container';
import type AuToolbar from '@appuniversum/ember-appuniversum/components/au-toolbar';

// Modifiers
import type AuDateInputModifier from '@appuniversum/ember-appuniversum/modifiers/au-date-input';

export default interface AppuniversumRegistry {
  // Components
  AuAccordion: typeof AuAccordion;
  AuAlert: typeof AuAlert;
  AuApp: typeof AuApp;
  AuBadge: typeof AuBadge;
  AuBodyContainer: typeof AuBodyContainer;
  AuBrand: typeof AuBrand;
  AuButtonGroup: typeof AuButtonGroup;
  AuButton: typeof AuButton;
  AuCard: typeof AuCard;
  AuCheckbox: typeof AuCheckbox;
  AuCheckboxGroup: typeof AuCheckboxGroup;
  AuContentHeader: typeof AuContentHeader;
  AuContent: typeof AuContent;
  AuDateInput: typeof AuDateInput;
  AuFileCard: typeof AuFileCard;
  AuFileUpload: typeof AuFileUpload;
  AuFormRow: typeof AuFormRow;
  AuHeading: typeof AuHeading;
  AuHelpText: typeof AuHelpText;
  AuHr: typeof AuHr;
  AuIcon: typeof AuIcon;
  AuInput: typeof AuInput;
  AuLinkExternal: typeof AuLinkExternal;
  AuLink: typeof AuLink;
  AuList: typeof AuList;
  AuLoader: typeof AuLoader;
  AuMainContainer: typeof AuMainContainer;
  AuToolbar: typeof AuToolbar;

  // Modifiers
  'au-date-input': typeof AuDateInputModifier;
}
