'use client';

import { forwardRef, useState, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface SpeedDialAction {
  key: string;
  icon: ReactNode;
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface SpeedDialProps extends HTMLAttributes<HTMLDivElement> {
  /** Actions */
  actions: SpeedDialAction[];
  /** Main button icon */
  icon?: ReactNode;
  /** Open icon (when expanded) */
  openIcon?: ReactNode;
  /** Direction */
  direction?: 'up' | 'down' | 'left' | 'right';
  /** Position */
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  /** Controlled open state */
  open?: boolean;
  /** On open change */
  onOpenChange?: (open: boolean) => void;
  /** Show labels */
  showLabels?: boolean;
  /** Disabled state */
  disabled?: boolean;
}

export const SpeedDial = forwardRef<HTMLDivElement, SpeedDialProps>(
  (
    {
      actions,
      icon,
      openIcon,
      direction = 'up',
      position = 'bottom-right',
      open: controlledOpen,
      onOpenChange,
      showLabels = true,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const isOpen = controlledOpen ?? internalOpen;

    const handleToggle = () => {
      if (disabled) return;
      const newOpen = !isOpen;
      setInternalOpen(newOpen);
      onOpenChange?.(newOpen);
    };

    const handleActionClick = (action: SpeedDialAction) => {
      if (action.disabled) return;
      action.onClick?.();
      setInternalOpen(false);
      onOpenChange?.(false);
    };

    const defaultIcon = (
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    );

    const defaultOpenIcon = (
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    );

    return (
      <div
        ref={ref}
        className={cn(
          'speed-dial',
          `speed-dial-${position}`,
          `speed-dial-${direction}`,
          isOpen && 'speed-dial-open',
          disabled && 'speed-dial-disabled',
          className
        )}
        {...props}
      >
        <div className="speed-dial-actions">
          {actions.map((action, index) => (
            <div
              key={action.key}
              className={cn(
                'speed-dial-action',
                action.disabled && 'speed-dial-action-disabled'
              )}
              style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
              onClick={() => handleActionClick(action)}
            >
              {showLabels && action.label && (
                <span className="speed-dial-action-label">{action.label}</span>
              )}
              <button
                type="button"
                className="speed-dial-action-button"
                disabled={action.disabled}
                aria-label={action.label}
              >
                {action.icon}
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="speed-dial-trigger"
          onClick={handleToggle}
          disabled={disabled}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close actions' : 'Open actions'}
        >
          <span className={cn('speed-dial-icon', isOpen && 'speed-dial-icon-open')}>
            {isOpen ? (openIcon || defaultOpenIcon) : (icon || defaultIcon)}
          </span>
        </button>
      </div>
    );
  }
);

SpeedDial.displayName = 'SpeedDial';
