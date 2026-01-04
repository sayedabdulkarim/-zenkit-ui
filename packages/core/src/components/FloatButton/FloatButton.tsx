'use client';

import React, { forwardRef, useState, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface FloatButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon to display */
  icon?: ReactNode;
  /** Tooltip text */
  tooltip?: string;
  /** Shape of the button */
  shape?: 'circle' | 'square';
  /** Button type/variant */
  variant?: 'default' | 'primary';
  /** Badge content */
  badge?: ReactNode;
  /** Position */
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  /** Href for link button */
  href?: string;
  /** Target for link */
  target?: string;
}

// Map position prop to zenkit-css class names
const getPositionClasses = (position: string, isGroup = false) => {
  if (isGroup) {
    const positionMap: Record<string, string> = {
      'bottom-right': 'float-button-group-right',
      'bottom-left': 'float-button-group-left',
      'top-right': 'float-button-group-right-top',
      'top-left': 'float-button-group-left-top',
    };
    return positionMap[position] || positionMap['bottom-right'];
  } else {
    // Single FloatButton needs both 'float-button-single' and position class
    const positionMap: Record<string, string> = {
      'bottom-right': 'float-button-single float-button-single-right',
      'bottom-left': 'float-button-single float-button-single-left',
      'top-right': 'float-button-single float-button-single-right',
      'top-left': 'float-button-single float-button-single-left',
    };
    return positionMap[position] || positionMap['bottom-right'];
  }
};

export const FloatButton = forwardRef<HTMLButtonElement, FloatButtonProps>(
  (
    {
      icon,
      tooltip,
      shape = 'circle',
      variant = 'default',
      badge,
      position = 'bottom-right',
      href,
      target,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const content = (
      <>
        {icon && <span className="float-button-icon">{icon}</span>}
        {children && <span className="float-button-text">{children}</span>}
        {badge !== undefined && <span className="float-button-badge"><span className="float-button-badge-count">{badge}</span></span>}
        {tooltip && showTooltip && (
          <span className="float-button-tooltip">{tooltip}</span>
        )}
      </>
    );

    const buttonClass = cn(
      'float-button',
      `float-button-${shape}`,
      `float-button-${variant}`,
      getPositionClasses(position, false),
      className
    );

    if (href) {
      return (
        <a
          href={href}
          target={target}
          className={buttonClass}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        type="button"
        className={buttonClass}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        {...props}
      >
        {content}
      </button>
    );
  }
);

FloatButton.displayName = 'FloatButton';

// FloatButton Group
export interface FloatButtonGroupProps extends Omit<ButtonHTMLAttributes<HTMLDivElement>, 'onClick'> {
  /** Trigger type */
  trigger?: 'click' | 'hover';
  /** Open state (controlled) */
  open?: boolean;
  /** On open change */
  onOpenChange?: (open: boolean) => void;
  /** Icon when closed */
  icon?: ReactNode;
  /** Icon when open */
  closeIcon?: ReactNode;
  /** Shape */
  shape?: 'circle' | 'square';
  /** Position */
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  /** Children (FloatButton items) */
  children: ReactNode;
}

export const FloatButtonGroup = forwardRef<HTMLDivElement, FloatButtonGroupProps>(
  (
    {
      trigger = 'hover',
      open: controlledOpen,
      onOpenChange,
      icon,
      closeIcon,
      shape = 'circle',
      position = 'bottom-right',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const isOpen = controlledOpen ?? internalOpen;

    const handleToggle = () => {
      const newOpen = !isOpen;
      setInternalOpen(newOpen);
      onOpenChange?.(newOpen);
    };

    const handleMouseEnter = () => {
      if (trigger === 'hover') {
        setInternalOpen(true);
        onOpenChange?.(true);
      }
    };

    const handleMouseLeave = () => {
      if (trigger === 'hover') {
        setInternalOpen(false);
        onOpenChange?.(false);
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          'float-button-group',
          getPositionClasses(position, true),
          isOpen && 'is-open',
          className
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <div className="float-button-menu">
          {React.Children.map(children, (child, index) => (
            <div className="float-button-menu-item" key={index}>
              {child}
            </div>
          ))}
        </div>
        <button
          type="button"
          className={cn('float-button', `float-button-${shape}`, 'float-button-trigger')}
          onClick={trigger === 'click' ? handleToggle : undefined}
        >
          <span className="float-button-trigger-icon">
            {isOpen ? (closeIcon || '×') : (icon || '+')}
          </span>
        </button>
      </div>
    );
  }
);

FloatButtonGroup.displayName = 'FloatButtonGroup';

// Float Back to top button (alternative to BackTop component)
export interface FloatBackTopProps extends Omit<FloatButtonProps, 'onClick' | 'target'> {
  /** Visibility threshold (scroll distance) */
  visibilityHeight?: number;
  /** Target scroll container */
  target?: () => HTMLElement | Window | null;
  /** Duration of scroll animation */
  duration?: number;
  /** On click callback */
  onClick?: () => void;
}

export const FloatBackTop = forwardRef<HTMLButtonElement, FloatBackTopProps>(
  (
    {
      visibilityHeight = 400,
      target,
      duration = 450,
      onClick,
      icon,
      ...props
    },
    ref
  ) => {
    const [visible, setVisible] = useState(false);

    const getTarget = () => {
      if (target) {
        return target();
      }
      return window;
    };

    const handleScroll = () => {
      const targetElement = getTarget();
      if (!targetElement) return;

      const scrollTop = targetElement === window
        ? window.scrollY
        : (targetElement as HTMLElement).scrollTop;

      setVisible(scrollTop >= visibilityHeight);
    };

    const handleClick = () => {
      const targetElement = getTarget();
      if (!targetElement) return;

      const scrollTop = targetElement === window
        ? window.scrollY
        : (targetElement as HTMLElement).scrollTop;

      const startTime = performance.now();

      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const newScrollTop = scrollTop * (1 - easeProgress);

        if (targetElement === window) {
          window.scrollTo(0, newScrollTop);
        } else {
          (targetElement as HTMLElement).scrollTop = newScrollTop;
        }

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
      onClick?.();
    };

    // Set up scroll listener
    if (typeof window !== 'undefined') {
      const targetElement = getTarget();
      if (targetElement) {
        targetElement.addEventListener('scroll', handleScroll);
        handleScroll();
      }
    }

    if (!visible) return null;

    return (
      <FloatButton
        ref={ref}
        icon={icon || (
          <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        )}
        onClick={handleClick}
        {...props}
      />
    );
  }
);

FloatBackTop.displayName = 'FloatBackTop';
