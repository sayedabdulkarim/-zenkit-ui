'use client';

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface ColorSwatchProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Color to display */
  color: string;
  /** Size of the swatch */
  size?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Border radius */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  /** Whether to show a border */
  withShadow?: boolean;
  /** Whether the swatch is selected */
  selected?: boolean;
  /** Children to render inside (e.g., checkmark) */
  children?: React.ReactNode;
}

export const ColorSwatch = forwardRef<HTMLDivElement, ColorSwatchProps>(
  (
    {
      className,
      color,
      size = 'md',
      radius = 'md',
      withShadow,
      selected,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const sizeMap: Record<string, number> = {
      xs: 16,
      sm: 20,
      md: 28,
      lg: 36,
      xl: 48,
    };

    const numericSize = typeof size === 'number' ? size : sizeMap[size] || 28;

    return (
      <div
        ref={ref}
        className={cn(
          'zk-color-swatch',
          `zk-color-swatch--radius-${radius}`,
          withShadow && 'zk-color-swatch--with-shadow',
          selected && 'zk-color-swatch--selected',
          className
        )}
        style={{
          backgroundColor: color,
          width: numericSize,
          height: numericSize,
          ...style,
        }}
        role="img"
        aria-label={`Color: ${color}`}
        {...props}
      >
        {children}
        {/* Transparency pattern for transparent colors */}
        <div className="zk-color-swatch__pattern" />
        {/* Color overlay */}
        <div
          className="zk-color-swatch__color"
          style={{ backgroundColor: color }}
        />
        {/* Children (checkmark, etc.) */}
        {children && <div className="zk-color-swatch__content">{children}</div>}
      </div>
    );
  }
);

ColorSwatch.displayName = 'ColorSwatch';
