import React, { useEffect, useState, useCallback } from 'react';
import type { Preview, Decorator } from '@storybook/react';
import { DocsContainer } from '@storybook/blocks';
import { themes } from '@storybook/theming';
import { addons } from '@storybook/preview-api';
import { GLOBALS_UPDATED, SET_GLOBALS } from '@storybook/core-events';
import 'zenkit-css/dist/zenkit.css';
import './storybook-overrides.css';

// Global theme state to persist across remounts
let globalTheme = 'light';

// Helper to get theme from various possible locations
const getThemeFromContext = (context: any): string => {
  // First check URL - most reliable source
  if (typeof window !== 'undefined') {
    const url = new URL(window.location.href);
    const globalsParam = url.searchParams.get('globals');
    if (globalsParam) {
      const match = globalsParam.match(/theme:(\w+)/);
      if (match) {
        globalTheme = match[1];
        return match[1];
      }
    }
  }

  // Check global variable (persists across remounts)
  if (globalTheme !== 'light') {
    return globalTheme;
  }

  // Then try context paths
  const paths = [
    context?.store?.globals?.globals?.theme,
    context?.store?.globals?.theme,
    context?.globals?.theme,
    context?.storyContext?.globals?.theme,
  ];

  for (const path of paths) {
    if (path) {
      globalTheme = path;
      return path;
    }
  }
  return 'light';
};

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

// Custom Docs Container for dark mode support with live updates
const ThemedDocsContainer: React.FC<any> = ({ children, context, ...props }) => {
  const [theme, setTheme] = useState(() => getThemeFromContext(context));
  const isDark = theme === 'dark';

  // Debug logging
  console.log('[ThemedDocsContainer] Current theme:', theme);
  console.log('[ThemedDocsContainer] Context:', context);
  console.log('[ThemedDocsContainer] isDark:', isDark);

  // Update DOM when theme changes
  useEffect(() => {
    console.log('[ThemedDocsContainer] Setting data-theme to:', theme);

    // Set on root elements
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);

    // Set on all possible Storybook wrapper elements
    const selectors = [
      '.sbdocs-wrapper',
      '.sbdocs',
      '.sbdocs-content',
      '.sb-show-main',
      '.docs-story',
      '#storybook-docs',
      '[class*="DocsContent"]',
    ];

    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        el.setAttribute('data-theme', theme);
      });
    });

    // Also try to access iframe content if exists
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
      try {
        if (iframe.contentDocument) {
          iframe.contentDocument.documentElement.setAttribute('data-theme', theme);
          iframe.contentDocument.body.setAttribute('data-theme', theme);
        }
      } catch (e) {
        // Cross-origin iframe, ignore
      }
    });
  }, [theme]);

  // Listen for global changes via multiple events
  useEffect(() => {
    const channel = addons.getChannel();

    const handleGlobalsUpdate = (payload: any) => {
      console.log('[ThemedDocsContainer] GLOBALS_UPDATED event:', payload);
      // Handle different payload structures
      const newTheme = payload?.globals?.theme || payload?.theme;
      console.log('[ThemedDocsContainer] Extracted theme from event:', newTheme);
      if (newTheme && newTheme !== theme) {
        console.log('[ThemedDocsContainer] Updating theme to:', newTheme);
        globalTheme = newTheme; // Update global variable
        setTheme(newTheme);
      }
    };

    // Listen to multiple events for better compatibility
    channel.on(GLOBALS_UPDATED, handleGlobalsUpdate);
    channel.on(SET_GLOBALS, handleGlobalsUpdate);
    channel.on('updateGlobals', handleGlobalsUpdate);

    return () => {
      channel.off(GLOBALS_UPDATED, handleGlobalsUpdate);
      channel.off(SET_GLOBALS, handleGlobalsUpdate);
      channel.off('updateGlobals', handleGlobalsUpdate);
    };
  }, [theme]);

  // Polling fallback - check for theme changes periodically
  useEffect(() => {
    const checkTheme = () => {
      const currentTheme = getThemeFromContext(context);
      if (currentTheme !== theme) {
        setTheme(currentTheme);
      }
    };

    const interval = setInterval(checkTheme, 500);
    return () => clearInterval(interval);
  }, [context, theme]);

  return (
    <DocsContainer context={context} theme={isDark ? themes.dark : themes.light} {...props}>
      <div data-theme={theme} style={{ minHeight: '100%' }}>
        {children}
      </div>
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
