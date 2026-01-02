'use client';

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Orientation of the separator */
  orientation?: 'horizontal' | 'vertical';
  /** Whether the separator is decorative */
  decorative?: boolean;
  /** Size/thickness of the separator */
  size?: 'sm' | 'md' | 'lg';
  /** Label to show in the middle */
  label?: React.ReactNode;
  /** Label position */
  labelPosition?: 'left' | 'center' | 'right';
}

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  (
    {
      className,
      orientation = 'horizontal',
      decorative = true,
      size = 'md',
      label,
      labelPosition = 'center',
      ...props
    },
    ref
  ) => {
    const semanticProps = decorative
      ? { role: 'none' }
      : { role: 'separator', 'aria-orientation': orientation };

    if (label) {
      return (
        <div
          ref={ref}
          className={cn(
            'zk-separator',
            `zk-separator--${orientation}`,
            `zk-separator--${size}`,
            'zk-separator--with-label',
            `zk-separator--label-${labelPosition}`,
            className
          )}
          {...semanticProps}
          {...props}
        >
          <span className="zk-separator__label">{label}</span>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          'zk-separator',
          `zk-separator--${orientation}`,
          `zk-separator--${size}`,
          className
        )}
        {...semanticProps}
        {...props}
      />
    );
  }
);

Separator.displayName = 'Separator';
