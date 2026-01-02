'use client';

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface PaperProps extends React.HTMLAttributes<HTMLDivElement> {
  /** HTML element to render */
  as?: React.ElementType;
  /** Elevation level (shadow depth) */
  elevation?: 0 | 1 | 2 | 3 | 4 | 5;
  /** Whether to use square corners */
  square?: boolean;
  /** Border radius size */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Variant style */
  variant?: 'elevation' | 'outlined' | 'filled';
  /** Padding */
  p?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Whether paper is interactive (hoverable) */
  interactive?: boolean;
  /** Background color */
  bg?: 'default' | 'muted' | 'subtle';
}

export const Paper = forwardRef<HTMLDivElement, PaperProps>(
  (
    {
      className,
      as: Component = 'div',
      elevation = 1,
      square,
      radius = 'md',
      variant = 'elevation',
      p,
      interactive,
      bg = 'default',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'zk-paper',
          `zk-paper--${variant}`,
          variant === 'elevation' && `zk-paper--elevation-${elevation}`,
          square ? 'zk-paper--square' : `zk-paper--radius-${radius}`,
          p && `zk-paper--p-${p}`,
          `zk-paper--bg-${bg}`,
          interactive && 'zk-paper--interactive',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Paper.displayName = 'Paper';
