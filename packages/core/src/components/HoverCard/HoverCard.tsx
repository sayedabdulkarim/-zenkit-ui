'use client';

import { forwardRef, useState, useRef, useEffect, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface HoverCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Trigger element */
  trigger: ReactNode;
  /** Open delay (ms) */
  openDelay?: number;
  /** Close delay (ms) */
  closeDelay?: number;
  /** Placement */
  placement?: 'top' | 'bottom' | 'left' | 'right';
  /** Disabled */
  disabled?: boolean;
}

export const HoverCard = forwardRef<HTMLDivElement, HoverCardProps>(
  (
    {
      trigger,
      openDelay = 200,
      closeDelay = 300,
      placement = 'bottom',
      disabled = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const openTimeoutRef = useRef<NodeJS.Timeout>();
    const closeTimeoutRef = useRef<NodeJS.Timeout>();

    const handleMouseEnter = () => {
      if (disabled) return;
      clearTimeout(closeTimeoutRef.current);
      openTimeoutRef.current = setTimeout(() => setOpen(true), openDelay);
    };

    const handleMouseLeave = () => {
      clearTimeout(openTimeoutRef.current);
      closeTimeoutRef.current = setTimeout(() => setOpen(false), closeDelay);
    };

    useEffect(() => {
      return () => {
        clearTimeout(openTimeoutRef.current);
        clearTimeout(closeTimeoutRef.current);
      };
    }, []);

    return (
      <div
        ref={ref}
        className={cn('hover-card', className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <div className="hover-card-trigger">{trigger}</div>
        {open && (
          <div className={cn('hover-card-content', `hover-card-${placement}`)}>
            <div className="hover-card-arrow" />
            {children}
          </div>
        )}
      </div>
    );
  }
);

HoverCard.displayName = 'HoverCard';

// HoverCard Header
export interface HoverCardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const HoverCardHeader = forwardRef<HTMLDivElement, HoverCardHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('hover-card-header', className)} {...props}>
      {children}
    </div>
  )
);

HoverCardHeader.displayName = 'HoverCardHeader';

// HoverCard Body
export interface HoverCardBodyProps extends HTMLAttributes<HTMLDivElement> {}

export const HoverCardBody = forwardRef<HTMLDivElement, HoverCardBodyProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('hover-card-body', className)} {...props}>
      {children}
    </div>
  )
);

HoverCardBody.displayName = 'HoverCardBody';

// HoverCard Footer
export interface HoverCardFooterProps extends HTMLAttributes<HTMLDivElement> {}

export const HoverCardFooter = forwardRef<HTMLDivElement, HoverCardFooterProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('hover-card-footer', className)} {...props}>
      {children}
    </div>
  )
);

HoverCardFooter.displayName = 'HoverCardFooter';
