





## v3.13.0 (2025-07-17)

#### :rocket: Enhancement
* [#544](https://github.com/appuniversum/ember-appuniversum/pull/544) Add a `AuTooltip` component ([@Windvis](https://github.com/Windvis))


## v3.12.0 (2025-06-12)

#### :rocket: Enhancement
* [#543](https://github.com/appuniversum/ember-appuniversum/pull/543) Add `check-filled` and `close-filled` icons ([@lagartoverde](https://github.com/lagartoverde))


## v3.11.0 (2025-06-03)

#### :rocket: Enhancement
* [#541](https://github.com/appuniversum/ember-appuniversum/pull/541) Add a `paragraph` icon ([@lagartoverde](https://github.com/lagartoverde))
* [#535](https://github.com/appuniversum/ember-appuniversum/pull/535) Deprecate the internal `AuContent` usage ([@Windvis](https://github.com/Windvis))


## v3.10.0 (2025-05-19)

#### :rocket: Enhancement
* [#539](https://github.com/appuniversum/ember-appuniversum/pull/539) Add new icons from wu and update some existing ones ([@lagartoverde](https://github.com/lagartoverde))


## v3.9.0 (2025-05-14)

#### :rocket: Enhancement
* [#538](https://github.com/appuniversum/ember-appuniversum/pull/538) Add a new `@onUpload` action to the `AuFileUpload` component ([@Windvis](https://github.com/Windvis))
* [#537](https://github.com/appuniversum/ember-appuniversum/pull/537) Resolve the "import inject from `@ember/service`" deprecation ([@Windvis](https://github.com/Windvis))
* [#531](https://github.com/appuniversum/ember-appuniversum/pull/531) Add a "bold" link skin ([@Windvis](https://github.com/Windvis))


## v3.8.0 (2025-02-13)

#### :rocket: Enhancement
* [#532](https://github.com/appuniversum/ember-appuniversum/pull/532) Add a `@minFileSizeKB` argument to the `<AuFileUpload>` component ([@aatauil](https://github.com/aatauil))
* [#529](https://github.com/appuniversum/ember-appuniversum/pull/529) Add support for ember-source v6 ([@Windvis](https://github.com/Windvis))

#### :house: Internal
* [#530](https://github.com/appuniversum/ember-appuniversum/pull/530) Dependency maintenance ([@Windvis](https://github.com/Windvis))
* [#528](https://github.com/appuniversum/ember-appuniversum/pull/528) AuTable improvements ([@Windvis](https://github.com/Windvis))

#### Committers: 2
- Achraf Atauil ([@aatauil](https://github.com/aatauil))
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))


## v3.7.0 (2024-11-12)

#### :rocket: Enhancement
* [#526](https://github.com/appuniversum/ember-appuniversum/pull/526) Add support for hiding the pagination in the `AuDataTable` component ([@Windvis](https://github.com/Windvis))
* [#525](https://github.com/appuniversum/ember-appuniversum/pull/525) Resolve action helper/modifier deprecations ([@Windvis](https://github.com/Windvis))
  * ⚠️ This change also removed our `ember-data-table` dependency. If your app imports one of the mixins from that package, be sure it's part of your app's own dependency list.
 
* [#524](https://github.com/appuniversum/ember-appuniversum/pull/524) Add a `@newTab` argument to the `AuLinkExternal` component ([@Windvis](https://github.com/Windvis))
* [#514](https://github.com/appuniversum/ember-appuniversum/pull/514) Add a `au-u-height-full` utility ([@Windvis](https://github.com/Windvis))
* [#512](https://github.com/appuniversum/ember-appuniversum/pull/512) Add support for ember-concurrency v4 and ember-power-select v8 ([@Windvis](https://github.com/Windvis))

#### :bug: Bug Fix
* [#515](https://github.com/appuniversum/ember-appuniversum/pull/515) Fix some whitespace issues ([@Windvis](https://github.com/Windvis))
* [#513](https://github.com/appuniversum/ember-appuniversum/pull/513) Fix a PowerSelect outline issue ([@Windvis](https://github.com/Windvis))

#### :house: Internal
* [#522](https://github.com/appuniversum/ember-appuniversum/pull/522) Update to the Ember v5.12 blueprint ([@Windvis](https://github.com/Windvis))
* [#521](https://github.com/appuniversum/ember-appuniversum/pull/521) Update to eslint 9 ([@Windvis](https://github.com/Windvis))
* [#517](https://github.com/appuniversum/ember-appuniversum/pull/517) Update to inputmask v5.0.9 ([@Windvis](https://github.com/Windvis))
* [#516](https://github.com/appuniversum/ember-appuniversum/pull/516) Remove our ember-template-tag TS workaround ([@Windvis](https://github.com/Windvis))
   * ⚠️ If you run into issues after updating, be sure that `babel-plugin-ember-template-compilation` is on v2.3.0+. You can check this by running `npm ls babel-plugin-ember-template-compilation`. `npm upgrade babel-plugin-ember-template-compilation` should work, but you might need to regenerate your lock file if it doesn't.
   * If you use ember-template-imports, it's likely that you need v4+ as well.

#### Committers: 1
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))


## v3.6.0 (2024-09-06)

#### :rocket: Enhancement
* [#508](https://github.com/appuniversum/ember-appuniversum/pull/508) Accessibility update / Tested for frontend-subsidiepunt ([@Dietr](https://github.com/Dietr))

#### :bug: Bug Fix
* [#505](https://github.com/appuniversum/ember-appuniversum/pull/505) Add missing content styles ([@Windvis](https://github.com/Windvis))

#### Committers: 2
- Dieter Peirs ([@Dietr](https://github.com/Dietr))
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))


## v3.5.0 (2024-07-31)

#### :rocket: Enhancement
* [#497](https://github.com/appuniversum/ember-appuniversum/pull/497) [AuButton] deprecate the default loading message ([@Windvis](https://github.com/Windvis))

#### :bug: Bug Fix
* [#503](https://github.com/appuniversum/ember-appuniversum/pull/503) Fix a styling issue in the `AuMainHeader` component ([@Windvis](https://github.com/Windvis))
* [#501](https://github.com/appuniversum/ember-appuniversum/pull/501) Fix the order of the "spacing" utilities ([@Windvis](https://github.com/Windvis))
* [#502](https://github.com/appuniversum/ember-appuniversum/pull/502) Fix the "reverse" flex utilities ([@Windvis](https://github.com/Windvis))
* [#500](https://github.com/appuniversum/ember-appuniversum/pull/500) Add missing responsive flex utilities ([@Windvis](https://github.com/Windvis))

#### :house: Internal
* [#494](https://github.com/appuniversum/ember-appuniversum/pull/494) More Glint / TS conversion ([@Windvis](https://github.com/Windvis))


## v3.4.2 (2024-05-14)

#### :bug: Bug Fix
* [#492](https://github.com/appuniversum/ember-appuniversum/pull/492) Resolve some issues with `babel-plugin-ember-template-compilation` v2.2.2+ ([@Windvis](https://github.com/Windvis))

#### :house: Internal
* [#489](https://github.com/appuniversum/ember-appuniversum/pull/489) More Glint / TS conversion ([@Windvis](https://github.com/Windvis))


## v3.4.1 (2024-03-27)

#### :bug: Bug Fix
* [#488](https://github.com/appuniversum/ember-appuniversum/pull/488) Remove the fill attribute from all icons ([@Windvis](https://github.com/Windvis))

#### Committers: 1
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))


## v3.4.0 (2024-03-25)

#### :rocket: Enhancement
* [#487](https://github.com/appuniversum/ember-appuniversum/pull/487) [Experimental] Add icon components ([@Windvis](https://github.com/Windvis))
* [#481](https://github.com/appuniversum/ember-appuniversum/pull/481) [Experimental] Add support for using components as icons ([@piemonkey](https://github.com/piemonkey))

#### :house: Internal
* [#486](https://github.com/appuniversum/ember-appuniversum/pull/486) Use the icon components internally ([@Windvis](https://github.com/Windvis))

#### Committers: 2
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))
- [@piemonkey](https://github.com/piemonkey)


## v3.3.1 (2024-03-12)

#### :bug: Bug Fix
* [#479](https://github.com/appuniversum/ember-appuniversum/pull/479) Fix incompatibilities between some `AuModal` arguments ([@Windvis](https://github.com/Windvis))

#### Committers: 1
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))


## v3.3.0 (2024-03-12)

#### :rocket: Enhancement
* [#476](https://github.com/appuniversum/ember-appuniversum/pull/476) Add support for displaying multiple modals at the same time ([@Rahien](https://github.com/Rahien))

#### :house: Internal
* [#474](https://github.com/appuniversum/ember-appuniversum/pull/474) More Glint / TS conversion ([@Windvis](https://github.com/Windvis))

#### Committers: 2
- Karel Kremer ([@Rahien](https://github.com/Rahien))
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))


## v3.2.0 (2024-02-29)

#### :rocket: Enhancement
* [#473](https://github.com/appuniversum/ember-appuniversum/pull/473) Add a `@centered` argument to the `AuLoader` component ([@Windvis](https://github.com/Windvis))

#### :house: Internal
* [#471](https://github.com/appuniversum/ember-appuniversum/pull/471) More Glint / TS conversion ([@Windvis](https://github.com/Windvis))

#### Committers: 1
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))


## v3.1.0 (2024-02-16)

#### :rocket: Enhancement
* [#469](https://github.com/appuniversum/ember-appuniversum/pull/469) Add an `isOpenInitially` argument to the `AuAccordion` component ([@Windvis](https://github.com/Windvis))
* [#464](https://github.com/appuniversum/ember-appuniversum/pull/464) `AuLoader` updates ([@Windvis](https://github.com/Windvis))
* [#465](https://github.com/appuniversum/ember-appuniversum/pull/465) Fix the responsive flex utilities ([@Windvis](https://github.com/Windvis))

#### :bug: Bug Fix
* [#467](https://github.com/appuniversum/ember-appuniversum/pull/467) Fix a FastBoot issue caused by inputmask ([@Windvis](https://github.com/Windvis))

#### :house: Internal
* [#468](https://github.com/appuniversum/ember-appuniversum/pull/468) Replace the `@zestia/ember-auto-focus` addon with a simple custom modifier ([@Windvis](https://github.com/Windvis))
  * ⚠️ If you are using the `{{auto-focus}}` modifier, be sure to check that you have `@zestia/ember-auto-focus` installed in your app as well. You might have accidentally been depending on the one bundled with ember-appuniversum.
* [#463](https://github.com/appuniversum/ember-appuniversum/pull/463) Partial TypeScript conversion ([@Windvis](https://github.com/Windvis))

#### Committers: 1
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))


## v3.0.0 (2024-01-12)

Upgrade guide: https://github.com/appuniversum/ember-appuniversum/pull/459

#### :boom: Breaking Change
* [#446](https://github.com/appuniversum/ember-appuniversum/pull/446) Remove all deprecated code targetting v3 ([@Windvis](https://github.com/Windvis))
* [#454](https://github.com/appuniversum/ember-appuniversum/pull/454) Update dependencies to newest majors matching our support range ([@Windvis](https://github.com/Windvis))
* [#447](https://github.com/appuniversum/ember-appuniversum/pull/447) Drop Ember 3.28 and 4.4 support ([@Windvis](https://github.com/Windvis))
* [#457](https://github.com/appuniversum/ember-appuniversum/pull/457) Drop Ember 4.8 LTS support ([@Windvis](https://github.com/Windvis))
* [#453](https://github.com/appuniversum/ember-appuniversum/pull/453) Drop support for node 14 and 16 ([@Windvis](https://github.com/Windvis))

#### Committers: 1
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))


## v2.18.0 (2023-10-17)

#### :rocket: Enhancement
* [#449](https://github.com/appuniversum/ember-appuniversum/pull/449) Add vote star filled icon ([@lagartoverde](https://github.com/lagartoverde))

#### Committers: 1
- Oscar Rodriguez Villalobos ([@lagartoverde](https://github.com/lagartoverde))


## v2.17.0 (2023-10-12)

#### :rocket: Enhancement
* [#445](https://github.com/appuniversum/ember-appuniversum/pull/445) Deprecate the `@size` argument for the `AuLoader` component ([@Windvis](https://github.com/Windvis))
* [#444](https://github.com/appuniversum/ember-appuniversum/pull/444) Deprecate the  `app/styles/*` import paths ([@Windvis](https://github.com/Windvis))

#### Committers: 1
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))


## v2.16.0 (2023-10-10)

#### :rocket: Enhancement
* [#442](https://github.com/appuniversum/ember-appuniversum/pull/442) Update `tracked-toolbox` to v2 ([@Windvis](https://github.com/Windvis))
* [#438](https://github.com/appuniversum/ember-appuniversum/pull/438) Addition of an image icon ([@elpoelma](https://github.com/elpoelma))

#### :house: Internal
* [#440](https://github.com/appuniversum/ember-appuniversum/pull/440) .gjs conversion ([@Windvis](https://github.com/Windvis))

#### Committers: 2
- Elena Poelman ([@elpoelma](https://github.com/elpoelma))
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))


## v2.15.0 (2023-09-20)

#### :rocket: Enhancement
* [#437](https://github.com/appuniversum/ember-appuniversum/pull/437) Deprecate the `AuTextarea` `@value` argument ([@Windvis](https://github.com/Windvis))

#### Committers: 1
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))


## v2.14.0 (2023-09-15)

#### :rocket: Enhancement
* [#435](https://github.com/appuniversum/ember-appuniversum/pull/435) Add a `{{au-date-input}}` modifier ([@Windvis](https://github.com/Windvis))
* [#434](https://github.com/appuniversum/ember-appuniversum/pull/434) Deprecate the 2-way-binding setup in the AuToggleSwitch component ([@Windvis](https://github.com/Windvis))
* [#433](https://github.com/appuniversum/ember-appuniversum/pull/433) Deprecate the `tertiary` button skin ([@Windvis](https://github.com/Windvis))

#### :bug: Bug Fix
* [#432](https://github.com/appuniversum/ember-appuniversum/pull/432) Resolve `AuInput` deprecations in the `AuTimePicker` component ([@Windvis](https://github.com/Windvis))

#### Committers: 1
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))


## v2.13.0 (2023-09-14)

#### :rocket: Enhancement
* [#429](https://github.com/appuniversum/ember-appuniversum/pull/429) Deprecate some `AuInput` features ([@Windvis](https://github.com/Windvis))
* [#428](https://github.com/appuniversum/ember-appuniversum/pull/428) Add a `{{au-inputmask}}` modifier ([@Windvis](https://github.com/Windvis))
* [#427](https://github.com/appuniversum/ember-appuniversum/pull/427) Add Ember v5 support ([@Windvis](https://github.com/Windvis))

#### :house: Internal
* [#426](https://github.com/appuniversum/ember-appuniversum/pull/426) Ember v5.2 blueprint update ([@Windvis](https://github.com/Windvis))

#### Committers: 1
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))


## v2.12.1 (2023-09-11)

#### :bug: Bug Fix
* [#423](https://github.com/appuniversum/ember-appuniversum/pull/423) Clicking issue for wormhole elements/components within the modal component ([@brenner-company](https://github.com/brenner-company))

#### Committers: 1
- Karel Persoons ([@brenner-company](https://github.com/brenner-company))

## v2.12.0 (2023-08-18)

#### :rocket: Enhancement
* [#412](https://github.com/appuniversum/ember-appuniversum/pull/412) Removal of backdrop click close trigger & addition of closable boolean for modal component ([@brenner-company](https://github.com/brenner-company))
* [#419](https://github.com/appuniversum/ember-appuniversum/pull/419) Add support for custom toaster components ([@Windvis](https://github.com/Windvis))
* [#414](https://github.com/appuniversum/ember-appuniversum/pull/414) Addition of clear action within toaster service ([@brenner-company](https://github.com/brenner-company))

#### Committers: 2
- Karel Persoons ([@brenner-company](https://github.com/brenner-company))
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))

## v2.11.0 (2023-08-02)

#### :rocket: Enhancement
* [#417](https://github.com/appuniversum/ember-appuniversum/pull/417) Support ember-concurrency v3 ([@Windvis](https://github.com/Windvis))
* [#416](https://github.com/appuniversum/ember-appuniversum/pull/416) Support ember-power-select v7 ([@Windvis](https://github.com/Windvis))

#### Committers: 1
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))


## v2.10.0 (2023-08-01)

#### :rocket: Enhancement
* [#415](https://github.com/appuniversum/ember-appuniversum/pull/415) Make all pill skins available for href and route options ([@Dietr](https://github.com/Dietr))
* [#408](https://github.com/appuniversum/ember-appuniversum/pull/408) Addition of in-between breakpoint variable within main container styling ([@brenner-company](https://github.com/brenner-company))

#### Committers: 2
- Dieter Peirs ([@Dietr](https://github.com/Dietr))
- Karel Persoons ([@brenner-company](https://github.com/brenner-company))


## v2.9.3 (2023-07-19)

#### :bug: Bug Fix
* [#407](https://github.com/appuniversum/ember-appuniversum/pull/407) Additional accessibility errors ([@Dietr](https://github.com/Dietr))

#### Committers: 1
- Dieter Peirs ([@Dietr](https://github.com/Dietr))


## v2.9.2 (2023-07-18)

#### :bug: Bug Fix
* [#406](https://github.com/appuniversum/ember-appuniversum/pull/406) Fix aria-expanded on the accordion component ([@Dietr](https://github.com/Dietr))

#### Committers: 1
- Dieter Peirs ([@Dietr](https://github.com/Dietr))


## v2.9.1 (2023-07-18)

#### :bug: Bug Fix
* [#405](https://github.com/appuniversum/ember-appuniversum/pull/405) Use aria-hidden=true as default on icons ([@Dietr](https://github.com/Dietr))

#### Committers: 1
- Dieter Peirs ([@Dietr](https://github.com/Dietr))


## v2.9.0 (2023-07-18)

#### :rocket: Enhancement
* [#404](https://github.com/appuniversum/ember-appuniversum/pull/404) Accessibility fixes ([@Dietr](https://github.com/Dietr))

#### Committers: 1
- Dieter Peirs ([@Dietr](https://github.com/Dietr))


## v2.8.0 (2023-07-14)

#### :rocket: Enhancement
* [#403](https://github.com/appuniversum/ember-appuniversum/pull/403) Add bnb icons ([@Dietr](https://github.com/Dietr))
* [#399](https://github.com/appuniversum/ember-appuniversum/pull/399) Addition of bundled (flanders-serif & flanders-sans) font files ([@brenner-company](https://github.com/brenner-company))

#### :bug: Bug Fix
* [#400](https://github.com/appuniversum/ember-appuniversum/pull/400) Only show the wormhole deprecation in apps ([@Windvis](https://github.com/Windvis))

#### Committers: 3
- Dieter Peirs ([@Dietr](https://github.com/Dietr))
- Karel Persoons ([@brenner-company](https://github.com/brenner-company))
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))


## v2.7.0 (2023-06-02)

#### :rocket: Enhancement
* [#395](https://github.com/appuniversum/ember-appuniversum/pull/395) Update of ember-focus-trap package and application of additional elements argument to modal component ([@brenner-company](https://github.com/brenner-company))

#### Committers: 1
- Karel Persoons ([@brenner-company](https://github.com/brenner-company))

## v2.6.0 (2023-05-03)

#### :rocket: Enhancement
* [#393](https://github.com/appuniversum/ember-appuniversum/pull/393) Addition of various functionality for the toggle-switch component ([@brenner-company](https://github.com/brenner-company))

#### :bug: Bug Fix
* [#396](https://github.com/appuniversum/ember-appuniversum/pull/396) Disable autofill for AuDateInput components ([@Riadabd](https://github.com/Riadabd))

#### Committers: 2
- Karel Persoons ([@brenner-company](https://github.com/brenner-company))
- Riad Abdallah ([@Riadabd](https://github.com/Riadabd))


## v2.5.0 (2023-03-23)

#### :rocket: Enhancement
* [#381](https://github.com/appuniversum/ember-appuniversum/pull/381) Addition of new radio, checkbox and group components ([@brenner-company](https://github.com/brenner-company))

#### Committers: 1
- Karel Persoons ([@brenner-company](https://github.com/brenner-company))

## v2.4.2 (2023-02-20)

#### :bug: Bug Fix
* [#380](https://github.com/appuniversum/ember-appuniversum/pull/380) Fix a `<AuToggleSwitch>` shrinking issue ([@Windvis](https://github.com/Windvis))
* [#379](https://github.com/appuniversum/ember-appuniversum/pull/379) Only call `.focus` if the element exist ([@Windvis](https://github.com/Windvis))

#### Committers: 1
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))


## v2.4.1 (2023-02-10)

#### :bug: Bug Fix
* [#374](https://github.com/appuniversum/ember-appuniversum/pull/374) Disable the `AuButton` component when it is in the loading state ([@Windvis](https://github.com/Windvis))

#### Committers: 1
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))


## v2.4.0 (2023-02-09)

#### :rocket: Enhancement

- [#370](https://github.com/appuniversum/ember-appuniversum/pull/370) Improve the consistency between the AuControlCheckbox and AuControlRadio components ([@brenner-company](https://github.com/brenner-company))

#### :bug: Bug Fix

- [#373](https://github.com/appuniversum/ember-appuniversum/pull/373) Fix the disableWormholeElement exception ([@Windvis](https://github.com/Windvis))

#### :house: Internal

- [#372](https://github.com/appuniversum/ember-appuniversum/pull/372) Run Prettier on all supported file types ([@Windvis](https://github.com/Windvis))
- [#371](https://github.com/appuniversum/ember-appuniversum/pull/371) Update to the Ember 4.10 blueprints ([@Windvis](https://github.com/Windvis))

#### Committers: 2

- Karel Persoons ([@brenner-company](https://github.com/brenner-company))
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))

## v2.3.0 (2023-02-06)

#### :rocket: Enhancement

- [#369](https://github.com/appuniversum/ember-appuniversum/pull/369) Add a `@maskOptions` argument to the AuInput component ([@Windvis](https://github.com/Windvis))
- [#364](https://github.com/appuniversum/ember-appuniversum/pull/364) Add a `<AuDateInput>` component ([@Windvis](https://github.com/Windvis))
- [#363](https://github.com/appuniversum/ember-appuniversum/pull/363) Add an `@onClose` argument to the `AuAlert` component ([@Windvis](https://github.com/Windvis))
- [#362](https://github.com/appuniversum/ember-appuniversum/pull/362) Add an `@onClose` argument to the `AuDropdown` component ([@Windvis](https://github.com/Windvis))
- [#361](https://github.com/appuniversum/ember-appuniversum/pull/361) Deprecate the `#ember-appuniversum-wormhole` element ([@Windvis](https://github.com/Windvis))

#### :memo: Documentation

- [#366](https://github.com/appuniversum/ember-appuniversum/pull/366) Use the proper name for the checkbox and radio components in the documentation ([@Windvis](https://github.com/Windvis))
- [#357](https://github.com/appuniversum/ember-appuniversum/pull/357) Au radio control checked should be without the @ ([@lagartoverde](https://github.com/lagartoverde))

#### :house: Internal

- [#360](https://github.com/appuniversum/ember-appuniversum/pull/360) Make the au-link-to-models helper truly private ([@Windvis](https://github.com/Windvis))

#### Committers: 2

- Oscar Rodriguez Villalobos ([@lagartoverde](https://github.com/lagartoverde))
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))

## v2.2.0 (2023-01-09)

#### :rocket: Enhancement

- [#349](https://github.com/appuniversum/ember-appuniversum/pull/349) Application of floating UI helpers within dropdown component ([@brenner-company](https://github.com/brenner-company))
- [#352](https://github.com/appuniversum/ember-appuniversum/pull/352) Improvement of solo (label-less) control (checkbox & radio) components ([@brenner-company](https://github.com/brenner-company))
- [#353](https://github.com/appuniversum/ember-appuniversum/pull/353) Addition of indeterminate state for the checkbox component ([@brenner-company](https://github.com/brenner-company))
- [#347](https://github.com/appuniversum/ember-appuniversum/pull/347) Add subscript and superscript icons ([@Dietr](https://github.com/Dietr))

#### :house: Internal

- [#344](https://github.com/appuniversum/ember-appuniversum/pull/344) Addition of floating UI helpers ([@brenner-company](https://github.com/brenner-company))

#### Committers: 3

- Dieter Peirs ([@Dietr](https://github.com/Dietr))
- Karel Persoons ([@brenner-company](https://github.com/brenner-company))
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))

## v2.1.0 (2022-11-22)

#### :rocket: Enhancement

- [#345](https://github.com/appuniversum/ember-appuniversum/pull/345) Addition of support for block content within checkbox component ([@brenner-company](https://github.com/brenner-company))

#### Committers: 1

- Karel Persoons ([@brenner-company](https://github.com/brenner-company))

## v2.0.0 (2022-11-17)

#### :boom: Breaking Change

- [#322](https://github.com/appuniversum/ember-appuniversum/pull/322) Remove all deprecations targeting the v2 release ([@Windvis](https://github.com/Windvis))
- [#302](https://github.com/appuniversum/ember-appuniversum/pull/302) ember-file-upload v5+ update ([@Windvis](https://github.com/Windvis))
- [#306](https://github.com/appuniversum/ember-appuniversum/pull/306) Remove support for Ember 3.20 and 3.24 ([@Windvis](https://github.com/Windvis))
- [#305](https://github.com/appuniversum/ember-appuniversum/pull/305) Drop node 12 support ([@Windvis](https://github.com/Windvis))

#### :house: Internal

- [#304](https://github.com/appuniversum/ember-appuniversum/pull/304) Update to Ember 4.4 LTS ([@Windvis](https://github.com/Windvis))

#### Committers: 1

- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))

## v1.10.0 (2022-11-16)

#### :rocket: Enhancement

- [#343](https://github.com/appuniversum/ember-appuniversum/pull/343) Resolve a Sass deprecation triggered by the `color.mix()` function ([@abeforgit](https://github.com/abeforgit))
- [#332](https://github.com/appuniversum/ember-appuniversum/pull/332) Feature/expand flex utilities ([@Dietr](https://github.com/Dietr))
- [#340](https://github.com/appuniversum/ember-appuniversum/pull/340) Addition of button skins for external link component ([@brenner-company](https://github.com/brenner-company))
- [#209](https://github.com/appuniversum/ember-appuniversum/pull/209) Add an option to localize the `AuDatePicker` component in Dutch ([@Windvis](https://github.com/Windvis))

#### :house: Internal

- [#341](https://github.com/appuniversum/ember-appuniversum/pull/341) Use Github Actions to publish to npm ([@Windvis](https://github.com/Windvis))

#### Committers: 4

- Arne Bertrand ([@abeforgit](https://github.com/abeforgit))
- Dieter Peirs ([@Dietr](https://github.com/Dietr))
- Karel Persoons ([@brenner-company](https://github.com/brenner-company))
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))

## v1.9.0 (2022-11-02)

#### :rocket: Enhancement

- [#338](https://github.com/appuniversum/ember-appuniversum/pull/338) Update ember-inputmask5 to v4 ([@Windvis](https://github.com/Windvis))

#### Committers: 2

- Karel Persoons ([@brenner-company](https://github.com/brenner-company))
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))

## v1.8.2 (2022-10-17)

#### :bug: Bug Fix

- [#331](https://github.com/appuniversum/ember-appuniversum/pull/331) Fix focus state on loading buttons ([@Dietr](https://github.com/Dietr))

#### Committers: 1

- Dieter Peirs ([@Dietr](https://github.com/Dietr))

## v1.8.1 (2022-10-07)

#### :bug: Bug Fix

- [#327](https://github.com/appuniversum/ember-appuniversum/pull/327) Various class issues within button & link component ([@brenner-company](https://github.com/brenner-company))

#### Committers: 1

- Karel Persoons ([@brenner-company](https://github.com/brenner-company))

## v1.8.0 (2022-09-30)

#### :rocket: Enhancement

- [#325](https://github.com/appuniversum/ember-appuniversum/pull/325) Add wrap property to a button ([@Dietr](https://github.com/Dietr))
- [#326](https://github.com/appuniversum/ember-appuniversum/pull/326) Add the option to configure the initalFocus of the focus-trap in AuModal ([@elpoelma](https://github.com/elpoelma))

#### Committers: 2

- Dieter Peirs ([@Dietr](https://github.com/Dietr))
- Elena Poelman ([@elpoelma](https://github.com/elpoelma))

## v1.7.0 (2022-09-22)

#### :rocket: Enhancement

- [#323](https://github.com/appuniversum/ember-appuniversum/pull/323) Rework dropdown ([@Dietr](https://github.com/Dietr))

#### Committers: 2

- Dieter Peirs ([@Dietr](https://github.com/Dietr))
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))

## v1.6.1 (2022-09-13)

#### :bug: Bug Fix

- [#320](https://github.com/appuniversum/ember-appuniversum/pull/320) Fix power select multiple disabled state, #318 ([@Dietr](https://github.com/Dietr))
- [#319](https://github.com/appuniversum/ember-appuniversum/pull/319) Spacing issue (icon + text) link component with button skin ([@brenner-company](https://github.com/brenner-company))

#### Committers: 3

- Dieter Peirs ([@Dietr](https://github.com/Dietr))
- Karel Persoons ([@brenner-company](https://github.com/brenner-company))
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))

## v1.6.0 (2022-09-05)

#### :rocket: Enhancement

- [#316](https://github.com/appuniversum/ember-appuniversum/pull/316) Panel component ([@Dietr](https://github.com/Dietr))

#### Committers: 1

- Dieter Peirs ([@Dietr](https://github.com/Dietr))

## v1.5.0 (2022-08-31)

#### :rocket: Enhancement

- [#313](https://github.com/appuniversum/ember-appuniversum/pull/313) Various small improvements to button component ([@brenner-company](https://github.com/brenner-company))

#### Committers: 1

- Karel Persoons ([@brenner-company](https://github.com/brenner-company))

## v1.4.1 (2022-08-26)

#### :bug: Bug Fix

- [#315](https://github.com/appuniversum/ember-appuniversum/pull/315) Revert flex behaviour on AuBodyContainer component ([@Dietr](https://github.com/Dietr))

#### :memo: Documentation

- [#312](https://github.com/appuniversum/ember-appuniversum/pull/312) Document button placement and best practices ([@Dietr](https://github.com/Dietr))

#### Committers: 1

- Dieter Peirs ([@Dietr](https://github.com/Dietr))

## v1.4.0 (2022-08-23)

#### :rocket: Enhancement

- [#307](https://github.com/appuniversum/ember-appuniversum/pull/307) Add support for ember-power-select v6 ([@Windvis](https://github.com/Windvis))

#### :bug: Bug Fix

- [#311](https://github.com/appuniversum/ember-appuniversum/pull/311) Fix App container bug and improve sidebar ([@Dietr](https://github.com/Dietr))

#### Committers: 2

- Dieter Peirs ([@Dietr](https://github.com/Dietr))
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))

## v1.3.0 (2022-08-09)

#### :rocket: Enhancement

- [#300](https://github.com/appuniversum/ember-appuniversum/pull/300) Toast/notification system ([@Dietr](https://github.com/Dietr))
- [#298](https://github.com/appuniversum/ember-appuniversum/pull/298) Add loadingMessage argument to button component ([@Dietr](https://github.com/Dietr))
- [#295](https://github.com/appuniversum/ember-appuniversum/pull/295) Merge appuniversum styles and documentation ([@Dietr](https://github.com/Dietr))
- [#293](https://github.com/appuniversum/ember-appuniversum/pull/293) Add modal overflow property ([@Dietr](https://github.com/Dietr))
- [#287](https://github.com/appuniversum/ember-appuniversum/pull/287) Rework loader, Closes [#286](https://github.com/appuniversum/ember-appuniversum/issues/286) ([@Dietr](https://github.com/Dietr))

#### :bug: Bug Fix

- [#303](https://github.com/appuniversum/ember-appuniversum/pull/303) Fix `AuAlert` deprecations in the `AuFileUpload` component ([@Windvis](https://github.com/Windvis))

#### :house: Internal

- [#299](https://github.com/appuniversum/ember-appuniversum/pull/299) Update ember-data-table to v2.1.0 ([@Windvis](https://github.com/Windvis))
- [#288](https://github.com/appuniversum/ember-appuniversum/pull/288) Use global divider variable ([@Dietr](https://github.com/Dietr))

#### Committers: 2

- Dieter Peirs ([@Dietr](https://github.com/Dietr))
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))

## v1.2.1 (2022-06-10)

#### :bug: Bug Fix

- [#283](https://github.com/appuniversum/ember-appuniversum/pull/283) Fix a problem where selecting a PowerSelect option closes the AuModal component ([@Windvis](https://github.com/Windvis))
- [#281](https://github.com/appuniversum/ember-appuniversum/pull/281) Make tabs border color consistent with toolbar, Closes [#278](https://github.com/appuniversum/ember-appuniversum/issues/278) ([@Dietr](https://github.com/Dietr))

#### :house: Internal

- [#275](https://github.com/appuniversum/ember-appuniversum/pull/275) Upgrade storybook ([@Dietr](https://github.com/Dietr))
- [#279](https://github.com/appuniversum/ember-appuniversum/pull/279) Update issue templates ([@Dietr](https://github.com/Dietr))

#### Committers: 2

- Dieter Peirs ([@Dietr](https://github.com/Dietr))
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))

## v1.2.0 (2022-06-09)

#### :rocket: Enhancement

- [#277](https://github.com/appuniversum/ember-appuniversum/pull/277) Regulatory statement additions ([@Dietr](https://github.com/Dietr))

#### Committers: 1

- Dieter Peirs ([@Dietr](https://github.com/Dietr))

## v1.1.2 (2022-06-09)

#### :house: Internal

- [#276](https://github.com/appuniversum/ember-appuniversum/pull/276) AuModal improvements ([@Windvis](https://github.com/Windvis))

#### Committers: 1

- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))

## v1.1.1 (2022-06-08)

#### :bug: Bug Fix

- [#274](https://github.com/appuniversum/ember-appuniversum/pull/274) Apply modal fix ([@Dietr](https://github.com/Dietr))

#### Committers: 1

- Dieter Peirs ([@Dietr](https://github.com/Dietr))

## v1.1.0 (2022-06-07)

#### :rocket: Enhancement

- [#269](https://github.com/appuniversum/ember-appuniversum/pull/269) Size option(s) for the pill component ([@brenner-company](https://github.com/brenner-company))

#### :bug: Bug Fix

- [#271](https://github.com/appuniversum/ember-appuniversum/pull/271) Use hand cursor for actions ([@Dietr](https://github.com/Dietr))
- [#270](https://github.com/appuniversum/ember-appuniversum/pull/270) Rework pill component action ([@brenner-company](https://github.com/brenner-company))

#### Committers: 2

- Dieter Peirs ([@Dietr](https://github.com/Dietr))
- Karel Persoons ([@brenner-company](https://github.com/brenner-company))

## v1.0.17 (2022-05-31)

#### :bug: Bug Fix

- [#266](https://github.com/appuniversum/ember-appuniversum/pull/266) Yield tabs item and list item ([@Dietr](https://github.com/Dietr))

#### :house: Internal

- [#267](https://github.com/appuniversum/ember-appuniversum/pull/267) Setup Chromatic ([@Dietr](https://github.com/Dietr))
- [#268](https://github.com/appuniversum/ember-appuniversum/pull/268) Replace `{{prop}}` with a custom modifier ([@Windvis](https://github.com/Windvis))

#### Committers: 2

- Dieter Peirs ([@Dietr](https://github.com/Dietr))
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))

## v1.0.16 (2022-05-18)

#### :rocket: Enhancement

- [#261](https://github.com/appuniversum/ember-appuniversum/pull/261) Tabs component ([@Dietr](https://github.com/Dietr))
- [#264](https://github.com/appuniversum/ember-appuniversum/pull/264) Add agenda icons ([@Dietr](https://github.com/Dietr))

#### Committers: 1

- Dieter Peirs ([@Dietr](https://github.com/Dietr))

## v1.0.15 (2022-05-16)

#### :rocket: Enhancement

- [#253](https://github.com/appuniversum/ember-appuniversum/pull/253) yield the `AuToolbarGroup` component from the `AuToolbar` component ([@Windvis](https://github.com/Windvis))
- [#259](https://github.com/appuniversum/ember-appuniversum/pull/259) Update the `AuButton` component so it matches the latest Webuniversum version ([@Dietr](https://github.com/Dietr))

#### :bug: Bug Fix

- [#260](https://github.com/appuniversum/ember-appuniversum/pull/260) Fix power select padding and line height ([@Dietr](https://github.com/Dietr))
- [#257](https://github.com/appuniversum/ember-appuniversum/pull/257) Move tracked-toolbox to the dependencies list ([@Windvis](https://github.com/Windvis))

#### Committers: 2

- Dieter Peirs ([@Dietr](https://github.com/Dietr))
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))

## v1.0.14 (2022-05-13)

#### :rocket: Enhancement

- [#252](https://github.com/appuniversum/ember-appuniversum/pull/252) AuTimepicker remake ([@benjay10](https://github.com/benjay10))

#### Committers: 1

- Ben ([@benjay10](https://github.com/benjay10))

## v1.0.13 (2022-05-11)

#### :bug: Bug Fix

- [#249](https://github.com/appuniversum/ember-appuniversum/pull/249) `AuTimepicker` fixes ([@Windvis](https://github.com/Windvis))
- [#231](https://github.com/appuniversum/ember-appuniversum/pull/231) Use a native input element in the `AuControlCheckbox` component ([@Windvis](https://github.com/Windvis))

#### Committers: 1

- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))

## v1.0.12 (2022-05-03)

#### :bug: Bug Fix

- [#247](https://github.com/appuniversum/ember-appuniversum/pull/247) Fix responsive behaviour of the datepicker ([@Dietr](https://github.com/Dietr))

#### Committers: 1

- Dieter Peirs ([@Dietr](https://github.com/Dietr))

## v1.0.11 (2022-05-02)

#### :bug: Bug Fix

- [#246](https://github.com/appuniversum/ember-appuniversum/pull/246) Closes [#240](https://github.com/appuniversum/ember-appuniversum/issues/240) ([@Dietr](https://github.com/Dietr))
- [#245](https://github.com/appuniversum/ember-appuniversum/pull/245) Closes [#242](https://github.com/appuniversum/ember-appuniversum/issues/242) ([@Dietr](https://github.com/Dietr))
- [#244](https://github.com/appuniversum/ember-appuniversum/pull/244) Fix rendering of list component inside content component ([@Dietr](https://github.com/Dietr))

#### Committers: 1

- Dieter Peirs ([@Dietr](https://github.com/Dietr))

## v1.0.10 (2022-04-29)

#### :bug: Bug Fix

- [#243](https://github.com/appuniversum/ember-appuniversum/pull/243) Bug: fix pill route ([@Dietr](https://github.com/Dietr))

#### :memo: Documentation

- [#241](https://github.com/appuniversum/ember-appuniversum/pull/241) Fix PowerSelect example ([@Windvis](https://github.com/Windvis))

#### Committers: 2

- Dieter Peirs ([@Dietr](https://github.com/Dietr))
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))

## v1.0.9 (2022-04-25)

#### :rocket: Enhancement

- [#239](https://github.com/appuniversum/ember-appuniversum/pull/239) Add alignment option for the datepicker ([@Dietr](https://github.com/Dietr))

#### Committers: 1

- Dieter Peirs ([@Dietr](https://github.com/Dietr))

## v1.0.8 (2022-04-25)

#### :rocket: Enhancement

- [#225](https://github.com/appuniversum/ember-appuniversum/pull/225) Add form patterns and missing form components ([@Dietr](https://github.com/Dietr))
- [#237](https://github.com/appuniversum/ember-appuniversum/pull/237) Deprecate the `alert` prefixed argument names of the `AuAlert` component ([@Windvis](https://github.com/Windvis))

#### Committers: 2

- Dieter Peirs ([@Dietr](https://github.com/Dietr))
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))

## v1.0.7 (2022-04-19)

#### :rocket: Enhancement

- [#238](https://github.com/appuniversum/ember-appuniversum/pull/238) List component and accordion fix ([@Dietr](https://github.com/Dietr))

#### Committers: 1

- Dieter Peirs ([@Dietr](https://github.com/Dietr))

## v1.0.6 (2022-04-15)

#### :rocket: Enhancement

- [#235](https://github.com/appuniversum/ember-appuniversum/pull/235) Extend accordion layout options ([@Dietr](https://github.com/Dietr))

#### :bug: Bug Fix

- [#230](https://github.com/appuniversum/ember-appuniversum/pull/230) Fix remaining deprecations triggered by ember-data-table ([@Windvis](https://github.com/Windvis))

#### :house: Internal

- [#234](https://github.com/appuniversum/ember-appuniversum/pull/234) Remove the `on-click-inside` modifier ([@Windvis](https://github.com/Windvis))

#### Committers: 2

- Dieter Peirs ([@Dietr](https://github.com/Dietr))
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))

## v1.0.5 (2022-04-15)

#### :rocket: Enhancement

- [#232](https://github.com/appuniversum/ember-appuniversum/pull/232) Feature/table icons ([@Dietr](https://github.com/Dietr))

#### Committers: 1

- Dieter Peirs ([@Dietr](https://github.com/Dietr))

## v1.0.4 (2022-04-11)

#### :rocket: Enhancement

- [#220](https://github.com/appuniversum/ember-appuniversum/pull/220) Extend the pill functionality ([@Dietr](https://github.com/Dietr))
- [#215](https://github.com/appuniversum/ember-appuniversum/pull/215) Add a `AuFileCard` component ([@Windvis](https://github.com/Windvis))

#### :bug: Bug Fix

- [#226](https://github.com/appuniversum/ember-appuniversum/pull/226) Fix a typo in the `accordionSubTitle` argument ([@Windvis](https://github.com/Windvis))

#### :house: Internal

- [#228](https://github.com/appuniversum/ember-appuniversum/pull/228) Dependency maintenance ([@Windvis](https://github.com/Windvis))

#### Committers: 2

- Dieter Peirs ([@Dietr](https://github.com/Dietr))
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))

## v1.0.3 (2022-03-25)

#### :house: Internal

- [#214](https://github.com/appuniversum/ember-appuniversum/pull/214) Closes [#212](https://github.com/appuniversum/ember-appuniversum/issues/212) ([@Dietr](https://github.com/Dietr))
- [#188](https://github.com/appuniversum/ember-appuniversum/pull/188) Resolving Ember 3.28 deprecations ([@benjay10](https://github.com/benjay10))
- [#206](https://github.com/appuniversum/ember-appuniversum/pull/206) Switch to the official Ember Github Actions config ([@Windvis](https://github.com/Windvis))

#### Committers: 3

- Ben ([@benjay10](https://github.com/benjay10))
- Dieter Peirs ([@Dietr](https://github.com/Dietr))
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))

## v1.0.2 (2022-02-22)

## v1.0.1 (2022-02-22)

#### :rocket: Enhancement

- [#199](https://github.com/appuniversum/ember-appuniversum/pull/199) Add named block support to the `AuModal` component ([@Windvis](https://github.com/Windvis))

#### :house: Internal

- [#202](https://github.com/appuniversum/ember-appuniversum/pull/202) Bump ember-power-select ([@erikap](https://github.com/erikap))

#### Committers: 2

- Erika Pauwels ([@erikap](https://github.com/erikap))
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))

## v1.0.0 (2022-02-16)

#### :bug: Bug Fix

- [#198](https://github.com/appuniversum/ember-appuniversum/pull/198) Make input-wrapper adapt to the width of the input ([@Dietr](https://github.com/Dietr))

#### :house: Internal

- [#197](https://github.com/appuniversum/ember-appuniversum/pull/197) Group scss imports ([@Dietr](https://github.com/Dietr))

#### Committers: 2

- Dieter Peirs ([@Dietr](https://github.com/Dietr))
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))

## v0.11.0 (2022-02-08)

#### :rocket: Enhancement

- [#187](https://github.com/appuniversum/ember-appuniversum/pull/187) Add kaleidos icons and full icon list ([@Dietr](https://github.com/Dietr))
- [#185](https://github.com/appuniversum/ember-appuniversum/pull/185) Add input mask ([@Dietr](https://github.com/Dietr))

#### :bug: Bug Fix

- [#186](https://github.com/appuniversum/ember-appuniversum/pull/186) Prevent that the `<AuCard>` toggle button shrinks ([@Dietr](https://github.com/Dietr))

#### Committers: 1

- Dieter Peirs ([@Dietr](https://github.com/Dietr))

## v0.10.0 (2022-02-03)

#### :rocket: Enhancement

- [#183](https://github.com/appuniversum/ember-appuniversum/pull/183) Upgrade appuniversum ([@Dietr](https://github.com/Dietr))

Warning: this version contains updated colors and typography styles so this might affect your application design.

#### Committers: 1

- Dieter Peirs ([@Dietr](https://github.com/Dietr))

## v0.9.2 (2022-01-25)

#### :house: Internal

- [#180](https://github.com/appuniversum/ember-appuniversum/pull/180) Dependency maintenance ([@Windvis](https://github.com/Windvis))
- [#178](https://github.com/appuniversum/ember-appuniversum/pull/178) Enable prettier and run `npm run lint:fix` ([@Windvis](https://github.com/Windvis))
- [#181](https://github.com/appuniversum/ember-appuniversum/pull/181) Enable the Embroider scenarios again in CI ([@Windvis](https://github.com/Windvis))

#### Committers: 1

- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))

# Changelog
