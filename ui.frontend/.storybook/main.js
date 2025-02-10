// .storybook/main.js

module.exports = {
  stories: ['../**/*.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],

  framework: {
    name: "@storybook/html-webpack5",
    options: {},
  },

  docs: {
    autodocs: false,
  },

  addons: [
    "@storybook/addon-webpack5-compiler-babel",
    "@chromatic-com/storybook",
    '@storybook/addon-essentials',
    "@whitespace/storybook-addon-html",
    "@storybook/addon-storysource",
    "@storybook/addon-designs",
    // "@storybook/addon-a11y"
  ],
};
