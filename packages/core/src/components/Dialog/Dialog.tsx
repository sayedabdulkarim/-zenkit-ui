'use client';

import React, { forwardRef, useEffect, useCallback } from 'react';
import { cn } from '../../utils/cn';
import { Portal } from '../Portal';

export interface DialogProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Whether the dialog is open */
  open?: boolean;
  /** Called when the dialog should close */
  onOpenChange?: (open: boolean) => void;
  /** Dialog title */
  title?: React.ReactNode;
  /** Dialog description */
  description?: React.ReactNode;
  /** Whether to show overlay */
  overlay?: boolean;
  /** Whether clicking overlay closes the dialog */
  closeOnOverlayClick?: boolean;
  /** Whether pressing Escape closes the dialog */
  closeOnEscape?: boolean;
  /** Whether to render in a portal */
  portal?: boolean;
  /** Dialog size */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  (
    {
      className,
      open = false,
      onOpenChange,
      title,
      description,
      overlay = true,
      closeOnOverlayClick = true,
      closeOnEscape = true,
      portal = true,
      size = 'md',
      children,
      ...props
    },
    ref
  ) => {
    const handleClose = useCallback(() => {
      onOpenChange?.(false);
    }, [onOpenChange]);

    const handleOverlayClick = useCallback(
      (e: React.MouseEvent) => {
        if (e.target === e.currentTarget && closeOnOverlayClick) {
          handleClose();
        }
      },
      [closeOnOverlayClick, handleClose]
    );

    useEffect(() => {
      if (!closeOnEscape) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && open) {
          handleClose();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [open, closeOnEscape, handleClose]);

    useEffect(() => {
      if (open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return () => {
        document.body.style.overflow = '';
      };
    }, [open]);

    if (!open) return null;

    const content = (
      <div
        className={cn('dialog-overlay', overlay && 'dialog-overlay-visible')}
        onClick={handleOverlayClick}
        aria-hidden="true"
      >
        <div
          ref={ref}
          className={cn('dialog', `dialog-${size}`, className)}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? 'dialog-title' : undefined}
          aria-describedby={description ? 'dialog-description' : undefined}
          {...props}
        >
          {title && (
            <div id="dialog-title" className="dialog-title">
              {title}
            </div>
          )}
          {description && (
            <div id="dialog-description" className="dialog-description">
              {description}
            </div>
          )}
          <div className="dialog-content">{children}</div>
        </div>
      </div>
    );

    if (portal) {
      return <Portal>{content}</Portal>;
    }

    return content;
  }
);

Dialog.displayName = 'Dialog';

// Dialog subcomponents
export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DialogHeader = forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('dialog-header', className)} {...props} />
  )
);

DialogHeader.displayName = 'DialogHeader';

export interface DialogBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DialogBody = forwardRef<HTMLDivElement, DialogBodyProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('dialog-body', className)} {...props} />
  )
);

DialogBody.displayName = 'DialogBody';

export interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DialogFooter = forwardRef<HTMLDivElement, DialogFooterProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('dialog-footer', className)} {...props} />
  )
);

DialogFooter.displayName = 'DialogFooter';

export interface DialogCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const DialogClose = forwardRef<HTMLButtonElement, DialogCloseProps>(
  ({ className, children, ...props }, ref) => (
    <button ref={ref} className={cn('dialog-close', className)} type="button" {...props}>
      {children || '✕'}
    </button>
  )
);

DialogClose.displayName = 'DialogClose';
