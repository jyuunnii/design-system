module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    "@storybook/addon-docs",
    "@storybook/addon-actions",
  ],
  typescript: {
    check: true,
  },
};