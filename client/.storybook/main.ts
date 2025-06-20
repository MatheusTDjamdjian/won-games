/// <reference types="node" />

const config = {
  staticDirs: ['..\\public'],
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    '@storybook/addon-viewport'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {},
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  },
}

export default config