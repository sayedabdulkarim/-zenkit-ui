'use client';

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface AppBarProps extends React.HTMLAttributes<HTMLElement> {
  /** Position of the app bar */
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
  /** Color variant */
  color?: 'default' | 'primary' | 'secondary' | 'transparent';
  /** Whether to show elevation/shadow */
  elevation?: boolean;
  /** Whether the app bar is dense */
  dense?: boolean;
}

export const AppBar = forwardRef<HTMLElement, AppBarProps>(
  (
    {
      className,
      position = 'fixed',
      color = 'primary',
      elevation = true,
      dense,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <header
        ref={ref}
        className={cn(
          'zk-app-bar',
          `zk-app-bar--${position}`,
          `zk-app-bar--${color}`,
          elevation && 'zk-app-bar--elevated',
          dense && 'zk-app-bar--dense',
          className
        )}
        {...props}
      >
        {children}
      </header>
    );
  }
);

AppBar.displayName = 'AppBar';

// Toolbar component for AppBar content
export interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether toolbar content should be centered */
  centered?: boolean;
  /** Whether the toolbar is dense */
  dense?: boolean;
  /** Disable gutters (horizontal padding) */
  disableGutters?: boolean;
}

export const Toolbar = forwardRef<HTMLDivElement, ToolbarProps>(
  ({ className, centered, dense, disableGutters, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'zk-toolbar',
        centered && 'zk-toolbar--centered',
        dense && 'zk-toolbar--dense',
        disableGutters && 'zk-toolbar--no-gutters',
        className
      )}
      {...props}
    />
  )
);

Toolbar.displayName = 'Toolbar';
