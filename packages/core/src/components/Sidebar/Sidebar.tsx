'use client';

import { forwardRef, createContext, useContext, useState, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface SidebarContextValue {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const SidebarContext = createContext<SidebarContextValue | null>(null);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a Sidebar');
  }
  return context;
};

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  /** Collapsed state */
  collapsed?: boolean;
  /** Default collapsed state */
  defaultCollapsed?: boolean;
  /** On collapse change */
  onCollapsedChange?: (collapsed: boolean) => void;
  /** Width when expanded */
  width?: number;
  /** Width when collapsed */
  collapsedWidth?: number;
  /** Position */
  position?: 'left' | 'right';
}

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  (
    {
      collapsed: controlledCollapsed,
      defaultCollapsed = false,
      onCollapsedChange,
      width = 280,
      collapsedWidth = 80,
      position = 'left',
      className,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
    const collapsed = controlledCollapsed ?? internalCollapsed;

    const setCollapsed = (value: boolean) => {
      setInternalCollapsed(value);
      onCollapsedChange?.(value);
    };

    return (
      <SidebarContext.Provider value={{ collapsed, setCollapsed }}>
        <aside
          ref={ref}
          className={cn(
            'sidebar',
            collapsed && 'sidebar-collapsed',
            `sidebar-${position}`,
            className
          )}
          style={{
            ...style,
            '--sidebar-width': `${width}px`,
            '--sidebar-collapsed-width': `${collapsedWidth}px`,
          } as React.CSSProperties}
          {...props}
        >
          {children}
        </aside>
      </SidebarContext.Provider>
    );
  }
);

Sidebar.displayName = 'Sidebar';

// Sidebar Header
export interface SidebarHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const SidebarHeader = forwardRef<HTMLDivElement, SidebarHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('sidebar-header', className)} {...props}>
      {children}
    </div>
  )
);

SidebarHeader.displayName = 'SidebarHeader';

// Sidebar Content
export interface SidebarContentProps extends HTMLAttributes<HTMLDivElement> {}

export const SidebarContent = forwardRef<HTMLDivElement, SidebarContentProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('sidebar-content', className)} {...props}>
      {children}
    </div>
  )
);

SidebarContent.displayName = 'SidebarContent';

// Sidebar Footer
export interface SidebarFooterProps extends HTMLAttributes<HTMLDivElement> {}

export const SidebarFooter = forwardRef<HTMLDivElement, SidebarFooterProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('sidebar-footer', className)} {...props}>
      {children}
    </div>
  )
);

SidebarFooter.displayName = 'SidebarFooter';

// Sidebar Group
export interface SidebarGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Group label */
  label?: ReactNode;
}

export const SidebarGroup = forwardRef<HTMLDivElement, SidebarGroupProps>(
  ({ label, className, children, ...props }, ref) => (
    <div ref={ref} className={cn('sidebar-group', className)} {...props}>
      {label && <div className="sidebar-group-label">{label}</div>}
      <div className="sidebar-group-content">{children}</div>
    </div>
  )
);

SidebarGroup.displayName = 'SidebarGroup';

// Sidebar Item
export interface SidebarItemProps extends HTMLAttributes<HTMLDivElement> {
  /** Icon */
  icon?: ReactNode;
  /** Active state */
  active?: boolean;
  /** Disabled state */
  disabled?: boolean;
}

export const SidebarItem = forwardRef<HTMLDivElement, SidebarItemProps>(
  ({ icon, active = false, disabled = false, className, children, ...props }, ref) => {
    const { collapsed } = useSidebar();

    return (
      <div
        ref={ref}
        className={cn(
          'sidebar-item',
          active && 'sidebar-item-active',
          disabled && 'sidebar-item-disabled',
          className
        )}
        {...props}
      >
        {icon && <span className="sidebar-item-icon">{icon}</span>}
        {!collapsed && <span className="sidebar-item-label">{children}</span>}
      </div>
    );
  }
);

SidebarItem.displayName = 'SidebarItem';

// Sidebar Toggle
export interface SidebarToggleProps extends HTMLAttributes<HTMLButtonElement> {}

export const SidebarToggle = forwardRef<HTMLButtonElement, SidebarToggleProps>(
  ({ className, ...props }, ref) => {
    const { collapsed, setCollapsed } = useSidebar();

    return (
      <button
        ref={ref}
        type="button"
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        className={cn('sidebar-toggle', className)}
        onClick={() => setCollapsed(!collapsed)}
        {...props}
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          style={{ transform: collapsed ? 'rotate(180deg)' : undefined }}
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
    );
  }
);

SidebarToggle.displayName = 'SidebarToggle';
