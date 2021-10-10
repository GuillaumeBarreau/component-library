module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "reactOptions": {
    "fastRefresh": true,
    "strictMode": true,
  },
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/preset-create-react-app",
    '@storybook/addon-docs', 
    'storybook-addon-react-docgen',
    '@storybook/addon-a11y'
  ],
  "typescript": {
    "reactDocgen": 'react-docgen-typescript',
    "reactDocgenTypescriptOptions": {
      "compilerOptions": {
        "allowSyntheticDefaultImports": false,
        "esModuleInterop": false,
      },
    }
  }
}