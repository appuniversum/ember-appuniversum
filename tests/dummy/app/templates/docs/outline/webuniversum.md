# Converting from Webuniversum

---

We follow the same visual guidelines as Webuniversum but optimise our components for web application design in Ember.

## Webuniversum vs Appuniversum components

Most of the components from Webuniversum are available in Appuniversum. The current state is listed here:

| Webuniversum      | Appuniversum | Status | 
| ------------- | ----------- | ---- | 
| `wu-alert` | <AuLink @linkRoute="docs.components.au-alert">AuAlert</AuLink> | <AuPill @skin="success">Available</AuPill> |
| `wu-accordion` | Use <AuLink @linkRoute="docs.components.au-card">AuCard</AuLink> instead | <AuPill @skin="success">Available</AuPill> |
| `wu-badge` | <AuLink @linkRoute="docs.atoms.au-badge">AuBadge</AuLink>  | <AuPill @skin="success">Available</AuPill> |
| `wu-button` | <AuLink @linkRoute="docs.atoms.au-button">AuButton</AuLink> | <AuPill @skin="success">Available</AuPill> |
| `wu-button-group` | <AuLink @linkRoute="docs.atoms.au-button-group">AuButtonGroup</AuLink> | <AuPill @skin="success">Available</AuPill> |
| `wu-content-header` | <AuLink @linkRoute="docs.patterns.au-content-header">AuContentHeader</AuLink> | <AuPill @skin="success">Available</AuPill> |
| `wu-datepicker` | <AuLink @linkRoute="docs.atoms.au-form-datepicker">AuDatepicker</AuLink> | <AuPill @skin="success">Available</AuPill> |
| `wu-icon` | <AuLink @linkRoute="docs.atoms.au-icon">AuIcon</AuLink> | <AuPill @skin="success">Available</AuPill> |
| `wu-link-button` | Replaced by <AuLink @linkRoute="docs.atoms.au-link">AuLink</AuLink> or <AuLink @linkRoute="docs.atoms.au-button">AuButton</AuLink> | <AuPill @skin="success">Available</AuPill> |
| `wu-loader` | <AuLink @linkRoute="docs.atoms.au-loader">AuLoader</AuLink> | <AuPill @skin="success">Available</AuPill> |
| `wu-pill` | <AuLink @linkRoute="docs.atoms.au-pill">AuPill</AuLink> | <AuPill @skin="success">Available</AuPill> |
| `wu-popover` | <AuLink @linkRoute="docs.components.au-dropdown">Dropdown</AuLink> | <AuPill @skin="success">Available</AuPill> |
| `wu-checkbox` | <AuLink @linkRoute="docs.atoms.au-form-checkbox">AuControlCheckbox</AuLink> | <AuPill>In progress</AuPill> |
| `data-table` | <AuLink @linkRoute="docs.components.au-data-table">AuDataTable</AuLink> | <AuPill>In progress</AuPill> |
| `wu-modal` | <AuLink @linkRoute="docs.components.au-modal">AuModal</AuLink> | <AuPill>In progress</AuPill> |
| `power-select` | <AuLink @linkRoute="docs.atoms.ember-power-select">PowerSelect</AuLink> | <AuPill>In progress</AuPill> |
| `wu-radio-button` | <AuLink @linkRoute="docs.atoms.au-form-radio">AuControlRadio</AuLink> | <AuPill>In progress</AuPill> |
| - | <AuLink @linkRoute="docs.patterns.au-body-container">AuBodyContainer</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @linkRoute="docs.atoms.au-brand">AuBrand</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @linkRoute="docs.atoms.au-content">AuContent</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @linkRoute="docs.components.au-card">AuCard</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @linkRoute="docs.atoms.au-form-input">AuInput</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @linkRoute="docs.atoms.au-heading">AuHeading</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @linkRoute="docs.atoms.au-helptext">AuHelptext</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @linkRoute="docs.atoms.au-hr">AuHr</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @linkRoute="docs.atoms.au-form-label">AuLabel</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @linkRoute="docs.atoms.au-link">AuLink</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @linkRoute="docs.patterns.au-main-container">AuMainContainer</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @linkRoute="docs.patterns.au-main-header">AuMainHeader</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @linkRoute="docs.patterns.au-main-footer">AuMainfooter</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @linkRoute="docs.atoms.au-navigation-link">AuNavigationLink</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @linkRoute="docs.atoms.au-form-textarea">AuTextarea</AuLink> | <AuPill @skin="action">New</AuPill> |
| - | <AuLink @linkRoute="docs.patterns.au-toolbar">AuToolbar</AuLink> | <AuPill @skin="action">New</AuPill> |
| `wu-contact-card` | - | <AuPill @skin="warning">Not started</AuPill> |
| `wu-datepicker-input` | - | <AuPill @skin="warning">Not started</AuPill> |
| `wu-date-range` | - | <AuPill @skin="warning">Not started</AuPill> |
| `wu-document-miniature` | - | <AuPill @skin="warning">Not started</AuPill> |
| `wu-info-tile` | - | <AuPill @skin="warning">Not started</AuPill> |
| `wu-switch` | - | <AuPill @skin="warning">Not started</AuPill> |
| `wu-wizard` | - | <AuPill @skin="warning">Not started</AuPill> |
