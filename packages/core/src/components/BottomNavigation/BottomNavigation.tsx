import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface BottomNavigationProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  /** Active item key */
  activeKey?: string;
  /** On change callback */
  onChange?: (key: string) => void;
  /** Show labels */
  showLabels?: boolean;
  /** Hide on scroll */
  hideOnScroll?: boolean;
}

export const BottomNavigation = forwardRef<HTMLElement, BottomNavigationProps>(
  (
    {
      activeKey,
      onChange,
      showLabels = true,
      hideOnScroll = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <nav
        ref={ref}
        className={cn(
          'bottom-nav',
          showLabels && 'bottom-nav-labels',
          hideOnScroll && 'bottom-nav-hide-scroll',
          className
        )}
        {...props}
      >
        <div className="bottom-nav-container">{children}</div>
      </nav>
    );
  }
);

BottomNavigation.displayName = 'BottomNavigation';

// Bottom Navigation Item
export interface BottomNavigationItemProps extends HTMLAttributes<HTMLButtonElement> {
  /** Item key */
  itemKey: string;
  /** Icon */
  icon: ReactNode;
  /** Label */
  label?: string;
  /** Active state */
  active?: boolean;
  /** Badge count */
  badge?: number | boolean;
  /** Disabled state */
  disabled?: boolean;
}

export const BottomNavigationItem = forwardRef<HTMLButtonElement, BottomNavigationItemProps>(
  (
    {
      itemKey,
      icon,
      label,
      active = false,
      badge,
      disabled = false,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        aria-selected={active}
        disabled={disabled}
        className={cn(
          'bottom-nav-item',
          active && 'bottom-nav-item-active',
          disabled && 'bottom-nav-item-disabled',
          className
        )}
        onClick={onClick}
        {...props}
      >
        <span className="bottom-nav-item-icon">
          {icon}
          {badge !== undefined && badge !== false && (
            <span className="bottom-nav-item-badge">
              {typeof badge === 'number' ? (badge > 99 ? '99+' : badge) : ''}
            </span>
          )}
        </span>
        {label && <span className="bottom-nav-item-label">{label}</span>}
      </button>
    );
  }
);

BottomNavigationItem.displayName = 'BottomNavigationItem';
