'use client';

import React, { forwardRef, useEffect } from 'react';
import { cn } from '../../utils/cn';
import { Portal } from '../Portal';

export interface BackdropProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the backdrop is visible */
  open?: boolean;
  /** Called when backdrop is clicked */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  /** Whether the backdrop is invisible */
  invisible?: boolean;
  /** Z-index of the backdrop */
  zIndex?: number;
  /** Whether to use portal */
  portal?: boolean;
  /** Whether to lock body scroll */
  lockScroll?: boolean;
  /** Transition duration in ms */
  transitionDuration?: number;
}

export const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(
  (
    {
      className,
      open = false,
      onClick,
      invisible,
      zIndex = 1000,
      portal = true,
      lockScroll = true,
      transitionDuration = 300,
      children,
      style,
      ...props
    },
    ref
  ) => {
    useEffect(() => {
      if (open && lockScroll) {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = originalOverflow;
        };
      }
    }, [open, lockScroll]);

    if (!open) return null;

    const content = (
      <div
        ref={ref}
        className={cn(
          'zk-backdrop',
          invisible && 'zk-backdrop--invisible',
          className
        )}
        onClick={onClick}
        style={{
          zIndex,
          '--backdrop-transition-duration': `${transitionDuration}ms`,
          ...style,
        } as React.CSSProperties}
        aria-hidden="true"
        {...props}
      >
        {children}
      </div>
    );

    if (portal) {
      return <Portal>{content}</Portal>;
    }

    return content;
  }
);

Backdrop.displayName = 'Backdrop';
