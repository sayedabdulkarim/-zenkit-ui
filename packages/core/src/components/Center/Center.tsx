'use client';

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface CenterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** HTML element to render */
  as?: React.ElementType;
  /** Whether to center inline (horizontal only) */
  inline?: boolean;
  /** Padding */
  p?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Gap between children */
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Direction of children */
  direction?: 'row' | 'column';
}

export const Center = forwardRef<HTMLDivElement, CenterProps>(
  (
    {
      className,
      as: Component = 'div',
      inline,
      p,
      gap,
      direction = 'row',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'zk-center',
          inline && 'zk-center--inline',
          `zk-center--${direction}`,
          p && `zk-center--p-${p}`,
          gap && `zk-center--gap-${gap}`,
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Center.displayName = 'Center';
