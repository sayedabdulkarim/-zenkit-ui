'use client';

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface IndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Position of the indicator */
  position?: 'top-start' | 'top-center' | 'top-end' | 'middle-start' | 'middle-center' | 'middle-end' | 'bottom-start' | 'bottom-center' | 'bottom-end';
  /** Color of the indicator */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'gray';
  /** Size of the indicator */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Offset from the corner */
  offset?: number;
  /** Whether to show the indicator */
  disabled?: boolean;
  /** Whether to show a processing animation */
  processing?: boolean;
  /** Whether the indicator has a border */
  withBorder?: boolean;
  /** Label to show in the indicator */
  label?: React.ReactNode;
  /** Inline mode (no absolute positioning) */
  inline?: boolean;
  /** Z-index of the indicator */
  zIndex?: number;
}

export const Indicator = forwardRef<HTMLDivElement, IndicatorProps>(
  (
    {
      className,
      position = 'top-end',
      color = 'primary',
      size = 'md',
      offset = 0,
      disabled,
      processing,
      withBorder = true,
      label,
      inline,
      zIndex = 100,
      children,
      style,
      ...props
    },
    ref
  ) => {
    if (disabled) {
      return <>{children}</>;
    }

    const [vertical, horizontal] = position.split('-') as [string, string];

    const getPositionStyles = (): React.CSSProperties => {
      const styles: React.CSSProperties = {};

      if (vertical === 'top') {
        styles.top = offset;
      } else if (vertical === 'bottom') {
        styles.bottom = offset;
      } else {
        styles.top = '50%';
        styles.transform = 'translateY(-50%)';
      }

      if (horizontal === 'start') {
        styles.left = offset;
      } else if (horizontal === 'end') {
        styles.right = offset;
      } else {
        styles.left = '50%';
        styles.transform = styles.transform
          ? `${styles.transform} translateX(-50%)`
          : 'translateX(-50%)';
      }

      return styles;
    };

    const indicatorElement = (
      <div
        className={cn(
          'indicator-badge',
          `indicator-badge--${color}`,
          `indicator-badge--${size}`,
          processing && 'indicator-badge--processing',
          withBorder && 'indicator-badge--bordered',
          label && 'indicator-badge--with-label'
        )}
        style={{
          ...getPositionStyles(),
          zIndex,
        }}
      >
        {label}
        {processing && <span className="indicator-pulse" />}
      </div>
    );

    if (inline) {
      return (
        <span
          ref={ref}
          className={cn('indicator', 'indicator-inline', className)}
          style={style}
          {...props}
        >
          {children}
          {indicatorElement}
        </span>
      );
    }

    return (
      <div
        ref={ref}
        className={cn('indicator', className)}
        style={style}
        {...props}
      >
        {children}
        {indicatorElement}
      </div>
    );
  }
);

Indicator.displayName = 'Indicator';
