// .storybook/main.js

module.exports = {
    stories: ['../stories/*.@(mdx|stories.@(js))'],

    framework: {
        name: '@storybook/html-webpack5',
        options: {}
    },

    docs: {
        autodocs: false
    },

    addons: ['@storybook/addon-webpack5-compiler-babel', '@chromatic-com/storybook', '@whitespace/storybook-addon-html']
}