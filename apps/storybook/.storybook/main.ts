import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  // Load only essential stories for faster dev
  stories: [
    '../src/stories/Introduction.mdx',
    '../src/stories/Button.stories.tsx',
    '../src/stories/Alert.stories.tsx',
    '../src/stories/Card.stories.tsx',
    '../src/stories/Input.stories.tsx',
    '../src/stories/Modal.stories.tsx',
    '../src/stories/Badge.stories.tsx',
    '../src/stories/Avatar.stories.tsx',
    '../src/stories/Tabs.stories.tsx',
    '../src/stories/Dropdown.stories.tsx',
    '../src/stories/Table.stories.tsx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
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
