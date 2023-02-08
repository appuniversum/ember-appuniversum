# @appuniversum/ember-appuniversum

Ember addon wrapping [the appuniversum components](https://appuniversum.github.io/ember-appuniversum/).


## Compatibility

* Ember.js v3.28 or above
* Ember CLI v3.28 or above
* Node.js v14 or above


## Installation

```
ember install @appuniversum/ember-appuniversum
```


## Usage

This ember addon wraps a CSS framework for Flanders government applications called appuniversum. It provides components that helps being complient with this framework in Ember apps.

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## Development
> We still use npm 6 during development since that's the version that's bundled with node 14.

Local development:
- Build the ember app: `npm run ember`
- Run the documentation site: `npm run storybook` (make sure the `npm run ember` command is finished)
- Generate the icons: `npm run icons`

Testing:
- PR previews and testing is available on [Chromatic](https://www.chromatic.com/build?appId=61e5835e5fbce3003a653ee6)

Releases:
- Release to npm: `npm run release`

Link to an ember project:
- In the addon: `npm link`
- In the your project: `npm link @appuniversum/ember-appuniversum`

## License

This project is licensed under the [MIT License](LICENSE.md).
