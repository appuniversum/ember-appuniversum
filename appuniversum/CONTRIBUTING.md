# How To Contribute

## New features

- Use one of the provided issue templates to report a bug or request a new feature.
- Create a PR for the corresponding issue.

### Flow for new features

1. Are the requirements clear? If not the requirements need to be further clarified in the issue.
2. Can an existing component fullfil the requirements or do we need to create a new component?
3. Is the feature a snowflake?

- Snowflakes are one-off components that are needed to build a product, but don’t really get reused outside of their first use case. Snowflakes will not be included in ember-appuniversum but need to be picked up in a project. They can be documented in an issue in case another project develops a similar need.

4. Is there a corresponding component in [webuniversum](https://overheid.vlaanderen.be/webuniversum/v3/documentation/components)? If so we will follow the design of that component.
5. Create a PR for the new feature

- Document the component in storybook and optionally create pattern or template to showcase how it can be used
- Write a test
- Test the new feature in your project
- Check visual regressions in Chromatic (link available in the checks section of the PR or at )
- Request a code review

6. New feature will be merged and included in the next release.

## Installation

- `git clone <repository-url>`
- `cd ember-appuniversum`
- `pnpm install`

## Development

We use the "template tag" (.gjs/.gts) format for component authoring which has been described in detail in the [RFC](https://github.com/emberjs/rfcs/blob/master/text/0779-first-class-component-templates.md).
A summarized version can be found in the ember-template-imports library which also has some information about [how to setup your dev environment](https://github.com/ember-template-imports/ember-template-imports#editor-integrations) for a better experience.

We're also using TypeScript and [Glint](https://typed-ember.gitbook.io/glint/).

### Running the docs app locally

- build the addon: `pnpm build:addon`
- Start the docs app: `pnpm start:docs`
- Run the documentation site: `pnpm start:storybook` (make sure the docs app is running)
- Generate the icons: `npm run icons`

> We don't use the docs app as a development environment, but as a final test. Hot reloading component code doesn't work at the moment, so it always requires a restart of the docs and storybook scripts.

### Testing:

- run the addon in dev mode: `pnpm start:addon`
- Go to the `/tests` route to run the tests in your browser.
- Alternatively you can run `pnpm test` to run the tests in a headless browser, but this requires that you have Chrome installed (unless you change the testem config)
- PR previews and testing is available on [Chromatic](https://www.chromatic.com/build?appId=61e5835e5fbce3003a653ee6)

### Testing changes in apps

#### npm link

- build the addon: `pnpm build:addon`
- In the addon: `npm link`
- In the your project: `npm link @appuniversum/ember-appuniversum`

#### yalc

[yalc](https://github.com/wclr/yalc) is a good alternative if the npm link setup doesn't work as expected.

### Linting

- `pnpm lint`
- `pnpm lint:fix`
