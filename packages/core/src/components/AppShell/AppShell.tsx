'use client';

import React, { forwardRef, createContext, useContext, useState, useCallback } from 'react';
import { cn } from '../../utils/cn';

export interface AppShellContextValue {
  navbarCollapsed: boolean;
  asideCollapsed: boolean;
  toggleNavbar: () => void;
  toggleAside: () => void;
}

const AppShellContext = createContext<AppShellContextValue | null>(null);

export const useAppShell = () => {
  const context = useContext(AppShellContext);
  if (!context) {
    throw new Error('useAppShell must be used within an AppShell');
  }
  return context;
};

export interface AppShellProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Header height */
  headerHeight?: number | string;
  /** Footer height */
  footerHeight?: number | string;
  /** Navbar width */
  navbarWidth?: number | string;
  /** Aside width */
  asideWidth?: number | string;
  /** Whether navbar is initially collapsed */
  navbarCollapsed?: boolean;
  /** Whether aside is initially collapsed */
  asideCollapsed?: boolean;
  /** Padding for main content */
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Layout variant */
  layout?: 'default' | 'alt';
  /** Whether header is fixed */
  fixedHeader?: boolean;
}

export const AppShell = forwardRef<HTMLDivElement, AppShellProps>(
  (
    {
      className,
      headerHeight = 60,
      footerHeight = 60,
      navbarWidth = 250,
      asideWidth = 250,
      navbarCollapsed: initialNavbarCollapsed = false,
      asideCollapsed: initialAsideCollapsed = true,
      padding = 'md',
      layout = 'default',
      fixedHeader = true,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const [navbarCollapsed, setNavbarCollapsed] = useState(initialNavbarCollapsed);
    const [asideCollapsed, setAsideCollapsed] = useState(initialAsideCollapsed);

    const toggleNavbar = useCallback(() => setNavbarCollapsed((prev) => !prev), []);
    const toggleAside = useCallback(() => setAsideCollapsed((prev) => !prev), []);

    const contextValue: AppShellContextValue = {
      navbarCollapsed,
      asideCollapsed,
      toggleNavbar,
      toggleAside,
    };

    return (
      <AppShellContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn(
            'app-shell',
            `app-shell-${layout}`,
            `app-shell-padding-${padding}`,
            fixedHeader && 'app-shell-fixed-header',
            navbarCollapsed && 'app-shell-navbar-collapsed',
            asideCollapsed && 'app-shell-aside-collapsed',
            className
          )}
          style={{
            '--app-shell-header-height': typeof headerHeight === 'number' ? `${headerHeight}px` : headerHeight,
            '--app-shell-footer-height': typeof footerHeight === 'number' ? `${footerHeight}px` : footerHeight,
            '--app-shell-navbar-width': typeof navbarWidth === 'number' ? `${navbarWidth}px` : navbarWidth,
            '--app-shell-aside-width': typeof asideWidth === 'number' ? `${asideWidth}px` : asideWidth,
            ...style,
          } as React.CSSProperties}
          {...props}
        >
          {children}
        </div>
      </AppShellContext.Provider>
    );
  }
);

AppShell.displayName = 'AppShell';

// AppShell subcomponents
export interface AppShellHeaderProps extends React.HTMLAttributes<HTMLElement> {}

export const AppShellHeader = forwardRef<HTMLElement, AppShellHeaderProps>(
  ({ className, ...props }, ref) => (
    <header ref={ref} className={cn('app-shell-header', className)} {...props} />
  )
);

AppShellHeader.displayName = 'AppShellHeader';

export interface AppShellNavbarProps extends React.HTMLAttributes<HTMLElement> {
  /** Collapsed width */
  collapsedWidth?: number | string;
}

export const AppShellNavbar = forwardRef<HTMLElement, AppShellNavbarProps>(
  ({ className, collapsedWidth = 60, style, ...props }, ref) => (
    <nav
      ref={ref}
      className={cn('app-shell-navbar', className)}
      style={{
        '--app-shell-navbar-collapsed-width': typeof collapsedWidth === 'number' ? `${collapsedWidth}px` : collapsedWidth,
        ...style,
      } as React.CSSProperties}
      {...props}
    />
  )
);

AppShellNavbar.displayName = 'AppShellNavbar';

export interface AppShellMainProps extends React.HTMLAttributes<HTMLElement> {}

export const AppShellMain = forwardRef<HTMLElement, AppShellMainProps>(
  ({ className, ...props }, ref) => (
    <main ref={ref} className={cn('app-shell-main', className)} {...props} />
  )
);

AppShellMain.displayName = 'AppShellMain';

export interface AppShellAsideProps extends React.HTMLAttributes<HTMLElement> {}

export const AppShellAside = forwardRef<HTMLElement, AppShellAsideProps>(
  ({ className, ...props }, ref) => (
    <aside ref={ref} className={cn('app-shell-aside', className)} {...props} />
  )
);

AppShellAside.displayName = 'AppShellAside';

export interface AppShellFooterProps extends React.HTMLAttributes<HTMLElement> {}

export const AppShellFooter = forwardRef<HTMLElement, AppShellFooterProps>(
  ({ className, ...props }, ref) => (
    <footer ref={ref} className={cn('app-shell-footer', className)} {...props} />
  )
);

AppShellFooter.displayName = 'AppShellFooter';
