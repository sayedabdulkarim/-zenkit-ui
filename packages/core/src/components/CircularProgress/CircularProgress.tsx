import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface CircularProgressProps extends HTMLAttributes<HTMLDivElement> {
  /** Progress value (0-100) */
  value?: number;
  /** Size in pixels */
  size?: number;
  /** Stroke width */
  strokeWidth?: number;
  /** Indeterminate state */
  indeterminate?: boolean;
  /** Color */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  /** Show value label */
  showValue?: boolean;
  /** Track color */
  trackColor?: string;
  /** Custom formatter */
  formatValue?: (value: number) => string;
}

export const CircularProgress = forwardRef<HTMLDivElement, CircularProgressProps>(
  (
    {
      value = 0,
      size = 48,
      strokeWidth = 4,
      indeterminate = false,
      color = 'primary',
      showValue = false,
      trackColor,
      formatValue = (v) => `${Math.round(v)}%`,
      className,
      ...props
    },
    ref
  ) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (value / 100) * circumference;

    return (
      <div
        ref={ref}
        className={cn(
          'circular-progress',
          `circular-progress-${color}`,
          indeterminate && 'circular-progress-indeterminate',
          className
        )}
        style={{ width: size, height: size }}
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuemin={0}
        aria-valuemax={100}
        {...props}
      >
        <svg className="circular-progress-svg" viewBox={`0 0 ${size} ${size}`}>
          <circle
            className="circular-progress-track"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            fill="none"
            style={{ stroke: trackColor }}
          />
          <circle
            className="circular-progress-indicator"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: indeterminate ? circumference * 0.75 : offset,
            }}
          />
        </svg>
        {showValue && !indeterminate && (
          <span className="circular-progress-value">{formatValue(value)}</span>
        )}
      </div>
    );
  }
);

CircularProgress.displayName = 'CircularProgress';
