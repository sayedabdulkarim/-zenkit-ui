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

    // Inject CSS to remove borders from story containers
    const styleId = 'sb-border-fix';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        /* Remove all borders/outlines from story containers */
        .docs-story, .docs-story > *, .docs-story > * > *,
        .sb-story-wrapper, [data-theme],
        div:has(> .docs-story), div:has(> .sb-story-wrapper),
        [class^="css-"]:has(.docs-story), [class*="css-"]:has(.sb-story-wrapper),
        /* Canvas and Preview wrappers */
        [class*="innerZoomElementWrapper"],
        [class*="Canvas"], [class*="Preview"],
        /* All focusable elements */
        [tabindex], [tabindex="0"],
        /* Override focus-visible globally in docs */
        .sbdocs :focus-visible, .sbdocs *:focus-visible,
        #storybook-docs :focus-visible, #storybook-docs *:focus-visible {
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
        }
        /* Remove primary outline from focus-visible */
        :focus-visible {
          outline: none !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, [theme]);

  return (
    <div
      data-theme={theme}
      className="sb-story-wrapper"
      style={{
        padding: '1rem',
        minHeight: '100px',
        backgroundColor: theme === 'dark' ? '#1a1a1a' : '#ffffff',
        color: theme === 'dark' ? '#ffffff' : '#1a1a1a',
        border: 'none',
        outline: 'none',
        boxShadow: 'none',
      }}
    >
      <Story />
    </div>
  );
};

// Footer component
const Footer: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <footer
    style={{
      marginTop: '4rem',
      paddingTop: '2rem',
      borderTop: `1px solid ${isDark ? '#333' : '#e0e0e0'}`,
      textAlign: 'center',
      color: isDark ? '#999' : '#666',
      fontSize: '14px',
    }}
  >
    <div style={{ marginBottom: '0.5rem' }}>
      Made with <span style={{ color: '#e25555' }}>❤</span> by
    </div>
    <a
      href="https://github.com/sayedabdulkarim"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: isDark ? '#6ea8fe' : '#1890ff',
        textDecoration: 'none',
        fontWeight: 500,
      }}
    >
      Sayed Abdul Karim
    </a>
  </footer>
);

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
        <Footer isDark={isDark} />
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
      canvas: {
        sourceState: 'shown',
      },
    },
    // Disable outline addon
    outline: {
      disable: true,
    },
    // Use fullscreen layout by default to avoid Canvas border
    layout: 'fullscreen',
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
    outline: false,
  },
  decorators: [withTheme],
};

export default preview;
