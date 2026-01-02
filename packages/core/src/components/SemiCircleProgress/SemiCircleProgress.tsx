'use client';

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface SemiCircleProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Progress value (0-100) */
  value?: number;
  /** Size of the component */
  size?: number;
  /** Thickness of the progress arc */
  thickness?: number;
  /** Color of the progress */
  color?: string;
  /** Color of the track */
  trackColor?: string;
  /** Label to show */
  label?: React.ReactNode;
  /** Whether to show percentage */
  showPercentage?: boolean;
  /** Format function for percentage */
  formatPercentage?: (value: number) => string;
  /** Orientation */
  orientation?: 'up' | 'down';
  /** Whether to animate */
  animate?: boolean;
}

export const SemiCircleProgress = forwardRef<HTMLDivElement, SemiCircleProgressProps>(
  (
    {
      className,
      value = 0,
      size = 200,
      thickness = 20,
      color = '#228be6',
      trackColor = '#e9ecef',
      label,
      showPercentage = true,
      formatPercentage = (v) => `${Math.round(v)}%`,
      orientation = 'up',
      animate = true,
      style,
      ...props
    },
    ref
  ) => {
    const clampedValue = Math.max(0, Math.min(100, value));
    const radius = (size - thickness) / 2;
    const circumference = Math.PI * radius;
    const progress = (clampedValue / 100) * circumference;

    const isDown = orientation === 'down';
    const viewBox = isDown ? `0 0 ${size} ${size / 2 + thickness / 2}` : `0 ${size / 2 - thickness / 2} ${size} ${size / 2 + thickness / 2}`;

    return (
      <div
        ref={ref}
        className={cn(
          'zk-semi-circle-progress',
          `zk-semi-circle-progress--${orientation}`,
          animate && 'zk-semi-circle-progress--animate',
          className
        )}
        style={{
          width: size,
          height: size / 2 + thickness / 2,
          ...style,
        }}
        {...props}
      >
        <svg
          width={size}
          height={size / 2 + thickness / 2}
          viewBox={viewBox}
          className="zk-semi-circle-progress__svg"
        >
          {/* Track */}
          <path
            d={
              isDown
                ? `M ${thickness / 2} ${thickness / 2} A ${radius} ${radius} 0 0 1 ${size - thickness / 2} ${thickness / 2}`
                : `M ${thickness / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - thickness / 2} ${size / 2}`
            }
            fill="none"
            stroke={trackColor}
            strokeWidth={thickness}
            strokeLinecap="round"
          />
          {/* Progress */}
          <path
            d={
              isDown
                ? `M ${thickness / 2} ${thickness / 2} A ${radius} ${radius} 0 0 1 ${size - thickness / 2} ${thickness / 2}`
                : `M ${thickness / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - thickness / 2} ${size / 2}`
            }
            fill="none"
            stroke={color}
            strokeWidth={thickness}
            strokeLinecap="round"
            strokeDasharray={`${progress} ${circumference}`}
            className="zk-semi-circle-progress__progress"
          />
        </svg>
        <div className="zk-semi-circle-progress__content">
          {showPercentage && (
            <div className="zk-semi-circle-progress__value">
              {formatPercentage(clampedValue)}
            </div>
          )}
          {label && <div className="zk-semi-circle-progress__label">{label}</div>}
        </div>
      </div>
    );
  }
);

SemiCircleProgress.displayName = 'SemiCircleProgress';
