'use client';

import { forwardRef, useState, createContext, useContext, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

interface NavigationMenuContextValue {
  activeItem: string | null;
  setActiveItem: (item: string | null) => void;
}

const NavigationMenuContext = createContext<NavigationMenuContextValue | null>(null);

export interface NavigationMenuProps extends HTMLAttributes<HTMLElement> {
  /** Default active item */
  defaultValue?: string;
  /** Controlled active value */
  value?: string;
  /** On value change */
  onValueChange?: (value: string) => void;
  /** Orientation */
  orientation?: 'horizontal' | 'vertical';
}

export const NavigationMenu = forwardRef<HTMLElement, NavigationMenuProps>(
  (
    {
      defaultValue,
      value,
      onValueChange,
      orientation = 'horizontal',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [activeItem, setActiveItem] = useState<string | null>(defaultValue || null);
    const currentValue = value ?? activeItem;

    const handleSetActiveItem = (item: string | null) => {
      setActiveItem(item);
      if (item) onValueChange?.(item);
    };

    return (
      <NavigationMenuContext.Provider value={{ activeItem: currentValue, setActiveItem: handleSetActiveItem }}>
        <nav
          ref={ref}
          className={cn('nav-menu', `nav-menu-${orientation}`, className)}
          {...props}
        >
          <div className="nav-menu-list">{children}</div>
        </nav>
      </NavigationMenuContext.Provider>
    );
  }
);

NavigationMenu.displayName = 'NavigationMenu';

// Navigation Menu Item
export interface NavigationMenuItemProps extends HTMLAttributes<HTMLDivElement> {
  /** Item value */
  value: string;
}

export const NavigationMenuItem = forwardRef<HTMLDivElement, NavigationMenuItemProps>(
  ({ value, className, children, ...props }, ref) => {
    const context = useContext(NavigationMenuContext);

    return (
      <div
        ref={ref}
        className={cn('nav-menu-item', context?.activeItem === value && 'nav-menu-item-active', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

NavigationMenuItem.displayName = 'NavigationMenuItem';

// Navigation Menu Trigger
export interface NavigationMenuTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  /** Disable chevron */
  hideChevron?: boolean;
}

export const NavigationMenuTrigger = forwardRef<HTMLButtonElement, NavigationMenuTriggerProps>(
  ({ hideChevron = false, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn('nav-menu-trigger', className)}
        {...props}
      >
        {children}
        {!hideChevron && (
          <svg className="nav-menu-trigger-chevron" viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        )}
      </button>
    );
  }
);

NavigationMenuTrigger.displayName = 'NavigationMenuTrigger';

// Navigation Menu Content
export interface NavigationMenuContentProps extends HTMLAttributes<HTMLDivElement> {}

export const NavigationMenuContent = forwardRef<HTMLDivElement, NavigationMenuContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('nav-menu-content', className)} {...props}>
        {children}
      </div>
    );
  }
);

NavigationMenuContent.displayName = 'NavigationMenuContent';

// Navigation Menu Link
export interface NavigationMenuLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  /** Link href */
  href?: string;
  /** Active state */
  active?: boolean;
}

export const NavigationMenuLink = forwardRef<HTMLAnchorElement, NavigationMenuLinkProps>(
  ({ href, active = false, className, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={cn('nav-menu-link', active && 'nav-menu-link-active', className)}
        {...props}
      >
        {children}
      </a>
    );
  }
);

NavigationMenuLink.displayName = 'NavigationMenuLink';

// Navigation Menu Viewport
export interface NavigationMenuViewportProps extends HTMLAttributes<HTMLDivElement> {}

export const NavigationMenuViewport = forwardRef<HTMLDivElement, NavigationMenuViewportProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn('nav-menu-viewport', className)} {...props} />;
  }
);

NavigationMenuViewport.displayName = 'NavigationMenuViewport';

// Navigation Menu Indicator
export interface NavigationMenuIndicatorProps extends HTMLAttributes<HTMLDivElement> {}

export const NavigationMenuIndicator = forwardRef<HTMLDivElement, NavigationMenuIndicatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('nav-menu-indicator', className)} {...props}>
        <div className="nav-menu-indicator-arrow" />
      </div>
    );
  }
);

NavigationMenuIndicator.displayName = 'NavigationMenuIndicator';
