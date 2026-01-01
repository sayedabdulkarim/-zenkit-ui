'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface SheetProps extends HTMLAttributes<HTMLDivElement> {
  /** Open state */
  open?: boolean;
  /** On open change */
  onOpenChange?: (open: boolean) => void;
  /** Side */
  side?: 'top' | 'bottom' | 'left' | 'right';
  /** Close on overlay click */
  closeOnOverlayClick?: boolean;
}

export const Sheet = forwardRef<HTMLDivElement, SheetProps>(
  (
    {
      open = false,
      onOpenChange,
      side = 'right',
      closeOnOverlayClick = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    if (!open) return null;

    return (
      <>
        <div
          className="sheet-overlay"
          onClick={() => closeOnOverlayClick && onOpenChange?.(false)}
        />
        <div
          ref={ref}
          className={cn('sheet', `sheet-${side}`, className)}
          {...props}
        >
          {children}
        </div>
      </>
    );
  }
);

Sheet.displayName = 'Sheet';

// Sheet Header
export interface SheetHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const SheetHeader = forwardRef<HTMLDivElement, SheetHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('sheet-header', className)} {...props}>
      {children}
    </div>
  )
);

SheetHeader.displayName = 'SheetHeader';

// Sheet Title
export interface SheetTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export const SheetTitle = forwardRef<HTMLHeadingElement, SheetTitleProps>(
  ({ className, children, ...props }, ref) => (
    <h2 ref={ref} className={cn('sheet-title', className)} {...props}>
      {children}
    </h2>
  )
);

SheetTitle.displayName = 'SheetTitle';

// Sheet Description
export interface SheetDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

export const SheetDescription = forwardRef<HTMLParagraphElement, SheetDescriptionProps>(
  ({ className, children, ...props }, ref) => (
    <p ref={ref} className={cn('sheet-description', className)} {...props}>
      {children}
    </p>
  )
);

SheetDescription.displayName = 'SheetDescription';

// Sheet Content
export interface SheetContentProps extends HTMLAttributes<HTMLDivElement> {}

export const SheetContent = forwardRef<HTMLDivElement, SheetContentProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('sheet-content', className)} {...props}>
      {children}
    </div>
  )
);

SheetContent.displayName = 'SheetContent';

// Sheet Footer
export interface SheetFooterProps extends HTMLAttributes<HTMLDivElement> {}

export const SheetFooter = forwardRef<HTMLDivElement, SheetFooterProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('sheet-footer', className)} {...props}>
      {children}
    </div>
  )
);

SheetFooter.displayName = 'SheetFooter';

// Sheet Close
export interface SheetCloseProps extends HTMLAttributes<HTMLButtonElement> {
  /** On close callback */
  onClose?: () => void;
}

export const SheetClose = forwardRef<HTMLButtonElement, SheetCloseProps>(
  ({ className, onClose, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={cn('sheet-close', className)}
      onClick={onClose}
      aria-label="Close"
      {...props}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  )
);

SheetClose.displayName = 'SheetClose';
