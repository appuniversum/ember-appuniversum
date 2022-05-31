@appuniversum/ember-appuniversum
==============================================================================

Ember addon wrapping [the appuniversum components](https://appuniversum.github.io/ember-appuniversum/).


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.20 or above
* Ember CLI v3.20 or above
* Node.js v12 or above


Installation
------------------------------------------------------------------------------

```
ember install @appuniversum/ember-appuniversum
```


Usage
------------------------------------------------------------------------------

This ember addon wraps a CSS framework for Flanders government applications called appuniversum. It provides components that helps being complient with this framework in Ember apps.


Development
------------------------------------------------------------------------------

Local development:
- Build the CSS and run storybook: `npm start`
- Run the documentation site: `npm run storybook`
- Generate the icons: `npm run icons`

Testing:
- PR previews and testing is available on [Chromatci](https://www.chromatic.com/build?appId=61e5835e5fbce3003a653ee6)

Releases:
- Release to npm: `npm run release`

Link to an ember project:
- In the addon: `npm link`
- In the your project: `npm link @appuniversum/ember-appuniversum`

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
