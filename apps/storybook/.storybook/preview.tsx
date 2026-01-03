import React, { useEffect } from 'react';
import type { Preview, Decorator } from '@storybook/react';
import { DocsContainer } from '@storybook/blocks';
import { themes } from '@storybook/theming';
import 'zenkit-css/dist/zenkit.css';
import './storybook-overrides.css';

// Theme wrapper - wraps story with data-theme attribute
const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme || 'light';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div
      data-theme={theme}
      style={{
        padding: '1rem',
        minHeight: '100px',
        backgroundColor: theme === 'dark' ? '#1a1a1a' : '#ffffff',
        color: theme === 'dark' ? '#ffffff' : '#1a1a1a',
      }}
    >
      <Story />
    </div>
  );
};

// Custom Docs Container for dark mode support
const ThemedDocsContainer: React.FC<any> = ({ children, context, ...props }) => {
  const theme = context?.store?.globals?.globals?.theme || 'light';
  const isDark = theme === 'dark';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <DocsContainer context={context} theme={isDark ? themes.dark : themes.light} {...props}>
      <div data-theme={theme}>{children}</div>
    </DocsContainer>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      container: ThemedDocsContainer,
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [withTheme],
};

export default preview;
