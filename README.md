# @appuniversum/ember-appuniversum

Ember addon that provides components for Flanders themed applications.

## Compatibility

- Ember.js v4.12 or above
- Ember CLI v4.12 or above
- Node.js v18 or above

## Installation

```
npm install --save-dev @appuniversum/ember-appuniversum
```

## Usage

This ember addon wraps a CSS framework for Flanders government applications called Appuniversum. It provides components that helps being compliant with this framework in Ember apps.

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## Development

### Running the local development setup

- Start the ember app: `npm run ember`
- Run the documentation site: `npm run storybook` (make sure the `npm run ember` command is finished)
- Generate the icons: `npm run icons`

> We use the "template tag" (.gjs) format for component authoring which has been described in detail in the [RFC](https://github.com/emberjs/rfcs/blob/master/text/0779-first-class-component-templates.md).
> A summarized version can be found in the ember-template-imports library which also has some information about [how to setup your dev environment](https://github.com/ember-template-imports/ember-template-imports#editor-integrations) for a better experience.

### Testing:

- the `/tests` route allows you to run the tests in your browser.
- Specific ember-try scenarios can be run if you want to debug them locally: `npx ember try:one scenario-name`. `--skip-cleanup` can be used to debug the scenario from the `/tests` route
- PR previews and testing is available on [Chromatic](https://www.chromatic.com/build?appId=61e5835e5fbce3003a653ee6)

### Testing changes in apps

#### npm link

- In the addon: `npm link`
- In the your project: `npm link @appuniversum/ember-appuniversum`

#### yalc

[yalc](https://github.com/wclr/yalc) is a good alternative if the npm link setup doesn't work as expected.

### Releases:

Release to npm: `GITHUB_AUTH=your-token npm run release` and follow the prompts

## License

This project is licensed under the [MIT License](LICENSE.md).
