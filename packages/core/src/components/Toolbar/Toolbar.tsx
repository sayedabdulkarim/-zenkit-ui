'use client';

import { forwardRef, createContext, useContext, type HTMLAttributes, type ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

// Toolbar Context
interface ToolbarContextValue {
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
}

const ToolbarContext = createContext<ToolbarContextValue>({});

// Toolbar Root
export interface ToolbarProps extends HTMLAttributes<HTMLDivElement> {
  /** Orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Aria label */
  'aria-label'?: string;
}

export const Toolbar = forwardRef<HTMLDivElement, ToolbarProps>(
  ({ className, orientation = 'horizontal', size = 'md', children, ...props }, ref) => {
    return (
      <ToolbarContext.Provider value={{ orientation, size }}>
        <div
          ref={ref}
          role="toolbar"
          aria-orientation={orientation}
          className={cn(
            'zk-toolbar',
            `zk-toolbar--${orientation}`,
            `zk-toolbar--${size}`,
            className
          )}
          {...props}
        >
          {children}
        </div>
      </ToolbarContext.Provider>
    );
  }
);

Toolbar.displayName = 'Toolbar';

// Toolbar Button
export interface ToolbarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Is active/pressed */
  isActive?: boolean;
  /** Variant */
  variant?: 'default' | 'ghost' | 'outline';
  /** Tooltip text */
  tooltip?: string;
}

export const ToolbarButton = forwardRef<HTMLButtonElement, ToolbarButtonProps>(
  ({ className, isActive = false, variant = 'ghost', tooltip, children, ...props }, ref) => {
    const { size } = useContext(ToolbarContext);

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          'zk-toolbar__button',
          `zk-toolbar__button--${variant}`,
          `zk-toolbar__button--${size}`,
          isActive && 'zk-toolbar__button--active',
          className
        )}
        aria-pressed={isActive}
        title={tooltip}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ToolbarButton.displayName = 'ToolbarButton';

// Toolbar Separator
export interface ToolbarSeparatorProps extends HTMLAttributes<HTMLDivElement> {}

export const ToolbarSeparator = forwardRef<HTMLDivElement, ToolbarSeparatorProps>(
  ({ className, ...props }, ref) => {
    const { orientation } = useContext(ToolbarContext);

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation === 'horizontal' ? 'vertical' : 'horizontal'}
        className={cn(
          'zk-toolbar__separator',
          orientation === 'horizontal' ? 'zk-toolbar__separator--vertical' : 'zk-toolbar__separator--horizontal',
          className
        )}
        {...props}
      />
    );
  }
);

ToolbarSeparator.displayName = 'ToolbarSeparator';

// Toolbar Group
export interface ToolbarGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Spacing between items */
  spacing?: 'none' | 'sm' | 'md';
}

export const ToolbarGroup = forwardRef<HTMLDivElement, ToolbarGroupProps>(
  ({ className, spacing = 'sm', children, ...props }, ref) => {
    const { orientation } = useContext(ToolbarContext);
    const spacingValues = { none: '0', sm: '0.25rem', md: '0.5rem' };

    return (
      <div
        ref={ref}
        role="group"
        className={cn('zk-toolbar__group', className)}
        style={{
          display: 'flex',
          flexDirection: orientation === 'vertical' ? 'column' : 'row',
          gap: spacingValues[spacing],
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ToolbarGroup.displayName = 'ToolbarGroup';

// Toolbar Toggle Group
export interface ToolbarToggleGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Type of selection */
  type?: 'single' | 'multiple';
  /** Selected value(s) */
  value?: string | string[];
  /** On value change */
  onValueChange?: (value: string | string[]) => void;
}

export const ToolbarToggleGroup = forwardRef<HTMLDivElement, ToolbarToggleGroupProps>(
  ({ className, type = 'single', value, onValueChange, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="group"
        className={cn('zk-toolbar__toggle-group', className)}
        data-type={type}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ToolbarToggleGroup.displayName = 'ToolbarToggleGroup';

// Toolbar Link
export interface ToolbarLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  /** Link href */
  href?: string;
  /** Target */
  target?: string;
}

export const ToolbarLink = forwardRef<HTMLAnchorElement, ToolbarLinkProps>(
  ({ className, children, ...props }, ref) => {
    const { size } = useContext(ToolbarContext);

    return (
      <a
        ref={ref}
        className={cn('zk-toolbar__link', `zk-toolbar__link--${size}`, className)}
        {...props}
      >
        {children}
      </a>
    );
  }
);

ToolbarLink.displayName = 'ToolbarLink';

export const useToolbar = () => useContext(ToolbarContext);
