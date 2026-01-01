import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';
type ColorScheme = 'light' | 'dark';

interface ZenKitContextValue {
  theme: Theme;
  colorScheme: ColorScheme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ZenKitContext = createContext<ZenKitContextValue | undefined>(undefined);

export interface ZenKitProviderProps {
  children: ReactNode;
  /** Default theme */
  defaultTheme?: Theme;
  /** Storage key for persisting theme */
  storageKey?: string;
  /** Attribute to set on document element */
  attribute?: 'class' | 'data-theme';
}

export const ZenKitProvider = ({
  children,
  defaultTheme = 'system',
  storageKey = 'zenkit-theme',
  attribute = 'data-theme',
}: ZenKitProviderProps) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') return defaultTheme;
    return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
  });

  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  // Resolve the actual color scheme based on theme and system preference
  useEffect(() => {
    const resolveColorScheme = (): ColorScheme => {
      if (theme === 'system') {
        if (typeof window === 'undefined') return 'light';
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      return theme;
    };

    const updateColorScheme = () => {
      const resolved = resolveColorScheme();
      setColorScheme(resolved);

      // Apply to document
      const root = document.documentElement;
      if (attribute === 'class') {
        root.classList.remove('light', 'dark');
        root.classList.add(resolved);
      } else {
        root.setAttribute('data-theme', resolved);
      }
    };

    updateColorScheme();

    // Listen for system theme changes
    if (theme === 'system' && typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = () => updateColorScheme();
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, [theme, attribute]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, newTheme);
    }
  };

  const toggleTheme = () => {
    setTheme(colorScheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ZenKitContext.Provider value={{ theme, colorScheme, setTheme, toggleTheme }}>
      {children}
    </ZenKitContext.Provider>
  );
};

ZenKitProvider.displayName = 'ZenKitProvider';

export const useTheme = (): ZenKitContextValue => {
  const context = useContext(ZenKitContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ZenKitProvider');
  }
  return context;
};

// Optional hook that doesn't throw if used outside provider
export const useThemeOptional = (): ZenKitContextValue | undefined => {
  return useContext(ZenKitContext);
};
