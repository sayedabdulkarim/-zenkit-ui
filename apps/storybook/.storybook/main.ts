import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  // Load all stories
  stories: [
    '../src/stories/Introduction.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        // Disable outline addon
        outline: false,
      },
    },
    // Temporarily commenting out a11y to test if it's causing borders
    // '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    reactDocgen: false,
  },
  core: {
    disableTelemetry: true,
  },
};

export default config;
