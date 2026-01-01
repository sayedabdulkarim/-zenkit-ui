'use client';

import { createContext, useContext, type ReactNode } from 'react';

export interface ConfigProviderProps {
  /** Children */
  children: ReactNode;
  /** Theme mode */
  theme?: 'light' | 'dark' | 'system';
  /** Locale */
  locale?: string;
  /** Component size */
  size?: 'small' | 'medium' | 'large';
  /** Prefix for class names */
  prefixCls?: string;
  /** Direction */
  direction?: 'ltr' | 'rtl';
  /** Custom config */
  config?: Record<string, unknown>;
}

export interface ConfigContextValue {
  theme: 'light' | 'dark' | 'system';
  locale: string;
  size: 'small' | 'medium' | 'large';
  prefixCls: string;
  direction: 'ltr' | 'rtl';
  config: Record<string, unknown>;
}

const defaultConfig: ConfigContextValue = {
  theme: 'light',
  locale: 'en-US',
  size: 'medium',
  prefixCls: 'zenkit',
  direction: 'ltr',
  config: {},
};

const ConfigContext = createContext<ConfigContextValue>(defaultConfig);

export const useConfig = () => useContext(ConfigContext);

export const ConfigProvider = ({
  children,
  theme = 'light',
  locale = 'en-US',
  size = 'medium',
  prefixCls = 'zenkit',
  direction = 'ltr',
  config = {},
}: ConfigProviderProps) => {
  const value: ConfigContextValue = {
    theme,
    locale,
    size,
    prefixCls,
    direction,
    config,
  };

  return (
    <ConfigContext.Provider value={value}>
      <div
        className="config-provider"
        data-theme={theme}
        data-size={size}
        dir={direction}
      >
        {children}
      </div>
    </ConfigContext.Provider>
  );
};

ConfigProvider.displayName = 'ConfigProvider';
