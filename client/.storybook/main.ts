/// <reference types="node" />

const config = {
  staticDirs: ['..\\public'],
  stories: ['../src/components/**/stories.tsx'],
  addons: [
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