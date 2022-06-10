# How To Contribute

## New features 

- Use one of the provided issue templates to report a bug or request a new feature.
- Create a PR for the corresponding issue.

### Flow for new features

1. Are the requirements clear? If not the requirements need to be further clarified in the issue.
2. Can an existing component fullfil the requirements or do we need to create a new component?
3. Is the feature a snowflake?
* Snowflakes are one-off components that are needed to build a product, but don’t really get reused outside of their first use case. Snowflakes will not be included in ember-appuniversum but need to be picked up in a project. They can be documented in an issue in case another project develops a similar need.
4. Is there a corresponding component in [webuniversum](https://overheid.vlaanderen.be/webuniversum/v3/documentation/components)? If so we will follow the design of that component.
5. Create a PR for the new feature
* Document the component in storybook and optionally create pattern or template to showcase how it can be used
* Write a test
* Test the new feature in your project using `npm link`
* Check visual regressions in Chromatic (link available in the checks section of the PR or at )
* Request a code review
6. New feature will be merged and included in the next release.

## Installation

* `git clone <repository-url>`
* `cd ember-appuniversum`
* `npm install`

### Linting

* `npm run lint`
* `npm run lint:fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `npm start`
* Visit the storybook application at [http://localhost:6006](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
