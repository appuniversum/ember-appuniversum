# Converting from Webuniversum

---

We follow the same visual guidelines as Webuniversum but optimise our components for web application design in Ember.

## Webuniversum vs Appuniversum components

Most of the components from Webuniversum are available in Appuniversum. The current state is listed here:

| Webuniversum      | Appuniversum | Status | 
| ------------- | ----------- | ---- | 
| `wu-alert` | <AuLink @route="docs.components.au-alert">AuAlert</AuLink> | <AuPill @skin="success">Available</AuPill> |
| `wu-accordion` | Use <AuLink @route="docs.components.au-card">AuCard</AuLink> instead | <AuPill @skin="success">Available</AuPill> |
| `wu-badge` | <AuLink @route="docs.atoms.au-badge">AuBadge</AuLink>  | <AuPill @skin="success">Available</AuPill> |
| `wu-button` | <AuLink @route="docs.atoms.au-button">AuButton</AuLink> | <AuPill @skin="success">Available</AuPill> |
| `wu-button-group` | <AuLink @route="docs.atoms.au-button-group">AuButtonGroup</AuLink> | <AuPill @skin="success">Available</AuPill> |
| `wu-content-header` | <AuLink @route="docs.patterns.au-content-header">AuContentHeader</AuLink> | <AuPill @skin="success">Available</AuPill> |
| `wu-datepicker` | <AuLink @route="docs.atoms.au-form-datepicker">AuDatepicker</AuLink> | <AuPill @skin="success">Available</AuPill> |
| `wu-icon` | <AuLink @route="docs.atoms.au-icon">AuIcon</AuLink> | <AuPill @skin="success">Available</AuPill> |
| `wu-link-button` | Replaced by <AuLink @route="docs.atoms.au-link">AuLink</AuLink> or <AuLink @route="docs.atoms.au-button">AuButton</AuLink> | <AuPill @skin="success">Available</AuPill> |
| `wu-loader` | <AuLink @route="docs.atoms.au-loader">AuLoader</AuLink> | <AuPill @skin="success">Available</AuPill> |
| `wu-modal` | <AuLink @route="docs.components.au-modal">AuModal</AuLink> | <AuPill @skin="success">Available</AuPill> |
| `wu-pill` | <AuLink @route="docs.atoms.au-pill">AuPill</AuLink> | <AuPill @skin="success">Available</AuPill> |
| `wu-popover` | <AuLink @route="docs.components.au-dropdown">Dropdown</AuLink> | <AuPill @skin="success">Available</AuPill> |
| `wu-radio-button` | <AuLink @route="docs.atoms.au-form-radio">AuControlRadio</AuLink> | <AuPill @skin="success">Available</AuPill> |
| `wu-switch` | <AuLink @route="docs.atoms.au-toggle-switch">AuToggleSwitch</AuLink> | <AuPill @skin="success">Available</AuPill> |
| `wu-checkbox` | <AuLink @route="docs.atoms.au-form-checkbox">AuControlCheckbox</AuLink> | <AuPill>In progress</AuPill> |
| `data-table` | <AuLink @route="docs.components.au-data-table">AuDataTable</AuLink> | <AuPill>In progress</AuPill> |
| `power-select` | <AuLink @route="docs.atoms.ember-power-select">PowerSelect</AuLink> | <AuPill>In progress</AuPill> |
| - | <AuLink @route="docs.patterns.au-body-container">AuBodyContainer</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @route="docs.atoms.au-brand">AuBrand</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @route="docs.atoms.au-content">AuContent</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @route="docs.components.au-card">AuCard</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @route="docs.atoms.au-form-input">AuInput</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @route="docs.atoms.au-heading">AuHeading</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @route="docs.atoms.au-helptext">AuHelptext</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @route="docs.atoms.au-hr">AuHr</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @route="docs.atoms.au-form-label">AuLabel</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @route="docs.atoms.au-link">AuLink</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @route="docs.patterns.au-main-container">AuMainContainer</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @route="docs.patterns.au-main-header">AuMainHeader</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @route="docs.patterns.au-main-footer">AuMainfooter</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @route="docs.atoms.au-navigation-link">AuNavigationLink</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @route="docs.atoms.au-form-timepicker">AuTimepicker</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @route="docs.atoms.au-form-textarea">AuTextarea</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @route="docs.patterns.au-toolbar">AuToolbar</AuLink> | <AuPill @skin="action">New</AuPill> |
| `wu-contact-card` | - | <AuPill @skin="warning">Not started</AuPill> |
| `wu-date-range` | - | <AuPill @skin="warning">Not started</AuPill> |
| `wu-document-miniature` | - | <AuPill @skin="warning">Not started</AuPill> |
| `wu-info-tile` | - | <AuPill @skin="warning">Not started</AuPill> |
| `wu-wizard` | - | <AuPill @skin="warning">Not started</AuPill> |
