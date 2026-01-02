'use client';

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Whether the link is active */
  active?: boolean;
  /** Label for the link */
  label?: React.ReactNode;
  /** Description text */
  description?: React.ReactNode;
  /** Left section (icon) */
  leftSection?: React.ReactNode;
  /** Right section (badge, arrow) */
  rightSection?: React.ReactNode;
  /** Whether the link is disabled */
  disabled?: boolean;
  /** Variant style */
  variant?: 'light' | 'filled' | 'subtle';
  /** Color when active */
  color?: 'primary' | 'secondary' | 'gray';
  /** Whether to show active indicator */
  noActiveIndicator?: boolean;
  /** Nested nav links */
  children?: React.ReactNode;
  /** Whether the nested links are open */
  opened?: boolean;
  /** Called when clicked */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  /** Component to render as */
  as?: React.ElementType;
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  (
    {
      className,
      active,
      label,
      description,
      leftSection,
      rightSection,
      disabled,
      variant = 'light',
      color = 'primary',
      noActiveIndicator,
      children,
      opened,
      onClick,
      as: Component = 'a',
      ...props
    },
    ref
  ) => {
    const hasChildren = React.Children.count(children) > 0;

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      onClick?.(e);
    };

    return (
      <div className={cn('zk-nav-link-wrapper', hasChildren && opened && 'zk-nav-link-wrapper--opened')}>
        <Component
          ref={ref}
          className={cn(
            'zk-nav-link',
            `zk-nav-link--${variant}`,
            `zk-nav-link--${color}`,
            active && 'zk-nav-link--active',
            disabled && 'zk-nav-link--disabled',
            hasChildren && 'zk-nav-link--has-children',
            !noActiveIndicator && active && 'zk-nav-link--with-indicator',
            className
          )}
          onClick={handleClick}
          aria-disabled={disabled}
          aria-current={active ? 'page' : undefined}
          {...props}
        >
          {leftSection && (
            <span className="zk-nav-link__left-section">{leftSection}</span>
          )}
          <div className="zk-nav-link__body">
            {label && <span className="zk-nav-link__label">{label}</span>}
            {description && (
              <span className="zk-nav-link__description">{description}</span>
            )}
          </div>
          {(rightSection || hasChildren) && (
            <span className="zk-nav-link__right-section">
              {rightSection}
              {hasChildren && (
                <span className={cn('zk-nav-link__chevron', opened && 'zk-nav-link__chevron--opened')}>
                  ▼
                </span>
              )}
            </span>
          )}
        </Component>
        {hasChildren && opened && (
          <div className="zk-nav-link__children">{children}</div>
        )}
      </div>
    );
  }
);

NavLink.displayName = 'NavLink';
