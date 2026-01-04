'use client';

import React, { forwardRef, useEffect, useState, useCallback } from 'react';
import { cn } from '../../utils/cn';

export interface ToastProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Toast title */
  title?: React.ReactNode;
  /** Toast description/message */
  description?: React.ReactNode;
  /** Toast type */
  type?: 'default' | 'success' | 'error' | 'warning' | 'info';
  /** Duration in ms before auto-dismiss (0 = no auto-dismiss) */
  duration?: number;
  /** Show close button */
  closable?: boolean;
  /** Action button */
  action?: React.ReactNode;
  /** Called when toast is dismissed */
  onDismiss?: () => void;
  /** Toast position */
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  /** Whether the toast is open */
  open?: boolean;
}

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      className,
      title,
      description,
      type = 'default',
      duration = 5000,
      closable = true,
      action,
      onDismiss,
      position = 'bottom-right',
      open = true,
      children,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(open);

    useEffect(() => {
      setIsVisible(open);
    }, [open]);

    useEffect(() => {
      if (isVisible && duration > 0) {
        const timer = setTimeout(() => {
          setIsVisible(false);
          onDismiss?.();
        }, duration);
        return () => clearTimeout(timer);
      }
    }, [isVisible, duration, onDismiss]);

    const handleDismiss = useCallback(() => {
      setIsVisible(false);
      onDismiss?.();
    }, [onDismiss]);

    if (!isVisible) return null;

    const typeIcons: Record<string, string> = {
      success: '✓',
      error: '✕',
      warning: '⚠',
      info: 'ℹ',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'toast',
          `toast-${type}`,
          className
        )}
        role="alert"
        aria-live="polite"
        {...props}
      >
        {type !== 'default' && (
          <span className="toast-icon">{typeIcons[type]}</span>
        )}
        <div className="toast-body">
          {title && <div className="toast-title">{title}</div>}
          {description && <div className="toast-description">{description}</div>}
          {children}
        </div>
        {action && <div className="toast-action">{action}</div>}
        {closable && (
          <button
            type="button"
            className="toast-close"
            onClick={handleDismiss}
            aria-label="Close"
          >
            ✕
          </button>
        )}
      </div>
    );
  }
);

Toast.displayName = 'Toast';

// Toast Container for positioning multiple toasts
export interface ToastContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Position of the toast container */
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
}

export const ToastContainer = forwardRef<HTMLDivElement, ToastContainerProps>(
  ({ className, position = 'bottom-right', children, ...props }, ref) => {
    // Map position to zenkit-css class names
    const positionMap: Record<string, string> = {
      'top-left': 'toast-container-top-start',
      'top-center': 'toast-container-top-center',
      'top-right': 'toast-container-top-end',
      'bottom-left': 'toast-container-bottom-start',
      'bottom-center': 'toast-container-bottom-center',
      'bottom-right': 'toast-container-bottom-end',
    };

    return (
      <div
        ref={ref}
        className={cn('toast-container', positionMap[position], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ToastContainer.displayName = 'ToastContainer';
