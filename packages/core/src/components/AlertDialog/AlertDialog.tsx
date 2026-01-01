'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface AlertDialogProps extends HTMLAttributes<HTMLDivElement> {
  /** Open state */
  open?: boolean;
  /** On open change */
  onOpenChange?: (open: boolean) => void;
}

export const AlertDialog = forwardRef<HTMLDivElement, AlertDialogProps>(
  ({ open = false, onOpenChange, className, children, ...props }, ref) => {
    if (!open) return null;

    return (
      <>
        <div className="alert-dialog-overlay" onClick={() => onOpenChange?.(false)} />
        <div ref={ref} className={cn('alert-dialog', className)} role="alertdialog" {...props}>
          {children}
        </div>
      </>
    );
  }
);

AlertDialog.displayName = 'AlertDialog';

// Alert Dialog Content
export interface AlertDialogContentProps extends HTMLAttributes<HTMLDivElement> {}

export const AlertDialogContent = forwardRef<HTMLDivElement, AlertDialogContentProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('alert-dialog-content', className)} {...props}>
      {children}
    </div>
  )
);

AlertDialogContent.displayName = 'AlertDialogContent';

// Alert Dialog Header
export interface AlertDialogHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const AlertDialogHeader = forwardRef<HTMLDivElement, AlertDialogHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('alert-dialog-header', className)} {...props}>
      {children}
    </div>
  )
);

AlertDialogHeader.displayName = 'AlertDialogHeader';

// Alert Dialog Title
export interface AlertDialogTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export const AlertDialogTitle = forwardRef<HTMLHeadingElement, AlertDialogTitleProps>(
  ({ className, children, ...props }, ref) => (
    <h2 ref={ref} className={cn('alert-dialog-title', className)} {...props}>
      {children}
    </h2>
  )
);

AlertDialogTitle.displayName = 'AlertDialogTitle';

// Alert Dialog Description
export interface AlertDialogDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

export const AlertDialogDescription = forwardRef<HTMLParagraphElement, AlertDialogDescriptionProps>(
  ({ className, children, ...props }, ref) => (
    <p ref={ref} className={cn('alert-dialog-description', className)} {...props}>
      {children}
    </p>
  )
);

AlertDialogDescription.displayName = 'AlertDialogDescription';

// Alert Dialog Footer
export interface AlertDialogFooterProps extends HTMLAttributes<HTMLDivElement> {}

export const AlertDialogFooter = forwardRef<HTMLDivElement, AlertDialogFooterProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('alert-dialog-footer', className)} {...props}>
      {children}
    </div>
  )
);

AlertDialogFooter.displayName = 'AlertDialogFooter';

// Alert Dialog Action
export interface AlertDialogActionProps extends HTMLAttributes<HTMLButtonElement> {
  /** Destructive action */
  destructive?: boolean;
}

export const AlertDialogAction = forwardRef<HTMLButtonElement, AlertDialogActionProps>(
  ({ destructive = false, className, children, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={cn('alert-dialog-action', destructive && 'alert-dialog-action-destructive', className)}
      {...props}
    >
      {children}
    </button>
  )
);

AlertDialogAction.displayName = 'AlertDialogAction';

// Alert Dialog Cancel
export interface AlertDialogCancelProps extends HTMLAttributes<HTMLButtonElement> {}

export const AlertDialogCancel = forwardRef<HTMLButtonElement, AlertDialogCancelProps>(
  ({ className, children, ...props }, ref) => (
    <button ref={ref} type="button" className={cn('alert-dialog-cancel', className)} {...props}>
      {children}
    </button>
  )
);

AlertDialogCancel.displayName = 'AlertDialogCancel';
