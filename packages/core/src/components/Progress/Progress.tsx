import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

type ProgressStatus = 'default' | 'success' | 'warning' | 'danger';

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  /** Progress value (0-100) */
  value?: number;
  /** Maximum value */
  max?: number;
  /** Show percentage label */
  showLabel?: boolean;
  /** Progress size */
  size?: 'sm' | 'md' | 'lg';
  /** Striped style */
  striped?: boolean;
  /** Animated stripes */
  animated?: boolean;
  /** Progress status/color */
  status?: ProgressStatus;
  /** Indeterminate loading state */
  indeterminate?: boolean;
}

const sizeClasses = {
  sm: 'progress-sm',
  md: '',
  lg: 'progress-lg',
};

const statusClasses: Record<ProgressStatus, string> = {
  default: 'bg-primary',
  success: 'bg-success',
  warning: 'bg-warning',
  danger: 'bg-danger',
};

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      value = 0,
      max = 100,
      showLabel = false,
      size = 'md',
      striped = false,
      animated = false,
      status = 'default',
      indeterminate = false,
      className,
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
      <div
        ref={ref}
        className={cn('progress', sizeClasses[size], className)}
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuemin={0}
        aria-valuemax={max}
        {...props}
      >
        <div
          className={cn(
            'progress-bar',
            statusClasses[status],
            striped && 'progress-bar-striped',
            (animated || indeterminate) && 'progress-bar-animated',
            indeterminate && 'progress-bar-indeterminate'
          )}
          style={{ width: indeterminate ? '100%' : `${percentage}%` }}
        >
          {showLabel && !indeterminate && `${Math.round(percentage)}%`}
        </div>
      </div>
    );
  }
);

Progress.displayName = 'Progress';
