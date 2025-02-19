import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@whitespace/storybook-addon-html",
    "@storybook/addon-storysource",
    "@storybook/addon-a11y",
    // "@storybook/addon-designs"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};
export default config;
