'use client';

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** HTML element to render */
  as?: React.ElementType;
  /** Whether to make content focusable (shows on focus) */
  focusable?: boolean;
}

export const VisuallyHidden = forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  ({ className, as: Component = 'span', focusable, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'zk-visually-hidden',
          focusable && 'zk-visually-hidden--focusable',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

VisuallyHidden.displayName = 'VisuallyHidden';

// Inline styles for SSR/no-CSS fallback
export const visuallyHiddenStyles: React.CSSProperties = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
};
