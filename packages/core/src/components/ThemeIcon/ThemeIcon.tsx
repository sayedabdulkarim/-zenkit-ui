'use client';

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface ThemeIconProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size of the icon container */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  /** Border radius */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Color variant */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'gray';
  /** Variant style */
  variant?: 'filled' | 'light' | 'outline' | 'gradient';
  /** Gradient (when variant is gradient) */
  gradient?: { from: string; to: string; deg?: number };
  /** Custom background color */
  bg?: string;
  /** Custom icon color */
  iconColor?: string;
}

export const ThemeIcon = forwardRef<HTMLDivElement, ThemeIconProps>(
  (
    {
      className,
      size = 'md',
      radius = 'md',
      color = 'primary',
      variant = 'filled',
      gradient,
      bg,
      iconColor,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const sizeMap: Record<string, number> = {
      xs: 24,
      sm: 32,
      md: 40,
      lg: 52,
      xl: 64,
    };

    const numericSize = typeof size === 'number' ? size : sizeMap[size] || 40;

    const gradientStyle = gradient
      ? {
          background: `linear-gradient(${gradient.deg || 45}deg, ${gradient.from}, ${gradient.to})`,
        }
      : undefined;

    return (
      <div
        ref={ref}
        className={cn(
          'zk-theme-icon',
          `zk-theme-icon--${variant}`,
          `zk-theme-icon--${color}`,
          `zk-theme-icon--radius-${radius}`,
          className
        )}
        style={{
          width: numericSize,
          height: numericSize,
          backgroundColor: bg,
          color: iconColor,
          ...gradientStyle,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ThemeIcon.displayName = 'ThemeIcon';
