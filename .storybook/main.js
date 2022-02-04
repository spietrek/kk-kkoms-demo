const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/vue',
  webpackFinal: async config => {
    config.resolve.alias['~storybook'] = path.resolve(__dirname)
    config.resolve.alias['@'] = path.resolve(__dirname, '..', 'src')
    config.module.rules.push({
      test: /\.sass$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    })

    return config
  },
}
