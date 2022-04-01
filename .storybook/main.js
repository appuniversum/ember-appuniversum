module.exports = {
  core: {
    builder: "webpack5"
  },
  "stories": [
    '../stories/Introduction.stories.mdx', // set default page
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-storysource",
    '@etchteam/storybook-addon-status'
  ],
  staticDirs: ['../dist', '../stories/assets']
}
