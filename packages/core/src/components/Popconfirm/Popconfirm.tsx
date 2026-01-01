'use client';

import { forwardRef, useState, useRef, useEffect, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface PopconfirmProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Title */
  title: ReactNode;
  /** Description */
  description?: ReactNode;
  /** Trigger element */
  children: ReactNode;
  /** On confirm callback */
  onConfirm?: () => void;
  /** On cancel callback */
  onCancel?: () => void;
  /** Confirm button text */
  okText?: string;
  /** Cancel button text */
  cancelText?: string;
  /** Placement */
  placement?: 'top' | 'bottom' | 'left' | 'right';
  /** Show icon */
  showIcon?: boolean;
  /** Icon */
  icon?: ReactNode;
  /** Disabled */
  disabled?: boolean;
  /** Ok button type */
  okType?: 'primary' | 'danger';
}

export const Popconfirm = forwardRef<HTMLDivElement, PopconfirmProps>(
  (
    {
      title,
      description,
      children,
      onConfirm,
      onCancel,
      okText = 'Yes',
      cancelText = 'No',
      placement = 'top',
      showIcon = true,
      icon,
      disabled = false,
      okType = 'primary',
      className,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };

      if (open) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open]);

    const handleConfirm = () => {
      onConfirm?.();
      setOpen(false);
    };

    const handleCancel = () => {
      onCancel?.();
      setOpen(false);
    };

    const defaultIcon = (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </svg>
    );

    return (
      <div ref={containerRef} className={cn('popconfirm', className)} {...props}>
        <div
          ref={ref}
          className="popconfirm-trigger"
          onClick={() => !disabled && setOpen(!open)}
        >
          {children}
        </div>
        {open && (
          <div className={cn('popconfirm-content', `popconfirm-${placement}`)}>
            <div className="popconfirm-arrow" />
            <div className="popconfirm-inner">
              <div className="popconfirm-message">
                {showIcon && (
                  <span className="popconfirm-icon">{icon || defaultIcon}</span>
                )}
                <div className="popconfirm-text">
                  <div className="popconfirm-title">{title}</div>
                  {description && <div className="popconfirm-description">{description}</div>}
                </div>
              </div>
              <div className="popconfirm-buttons">
                <button
                  type="button"
                  className="popconfirm-btn popconfirm-btn-cancel"
                  onClick={handleCancel}
                >
                  {cancelText}
                </button>
                <button
                  type="button"
                  className={cn('popconfirm-btn', `popconfirm-btn-${okType}`)}
                  onClick={handleConfirm}
                >
                  {okText}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);

Popconfirm.displayName = 'Popconfirm';
