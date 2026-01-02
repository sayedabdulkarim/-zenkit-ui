'use client';

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Heading level (h1-h6) */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Visual size (independent from semantic level) */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  /** Font weight */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Whether to truncate text with ellipsis */
  truncate?: boolean;
  /** Color variant */
  color?: 'default' | 'muted' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  /** Line height */
  lineHeight?: 'tight' | 'normal' | 'relaxed';
}

export const HeadingText = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      className,
      as: Component = 'h2',
      size,
      weight = 'bold',
      align,
      truncate,
      color = 'default',
      lineHeight = 'tight',
      children,
      ...props
    },
    ref
  ) => {
    // Default sizes based on heading level
    const defaultSizes: Record<string, string> = {
      h1: '4xl',
      h2: '3xl',
      h3: '2xl',
      h4: 'xl',
      h5: 'lg',
      h6: 'md',
    };

    const resolvedSize = size || defaultSizes[Component] || 'lg';

    return (
      <Component
        ref={ref}
        className={cn(
          'zk-heading',
          `zk-heading--${resolvedSize}`,
          `zk-heading--${weight}`,
          `zk-heading--${color}`,
          `zk-heading--${lineHeight}`,
          align && `zk-heading--${align}`,
          truncate && 'zk-heading--truncate',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

HeadingText.displayName = 'HeadingText';
