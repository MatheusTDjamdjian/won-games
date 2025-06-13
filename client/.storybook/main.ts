const config = {
  staticDirs: ['..\\public'],
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-themes'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {},
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}

export default config
