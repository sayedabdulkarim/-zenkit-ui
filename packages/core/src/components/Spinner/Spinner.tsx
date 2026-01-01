import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

type SpinnerSize = 'sm' | 'md' | 'lg';
type SpinnerVariant = 'border' | 'grow';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  /** Spinner size */
  size?: SpinnerSize;
  /** Spinner variant */
  variant?: SpinnerVariant;
  /** Spinner color */
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  /** Accessible label */
  label?: string;
}

const sizeClasses: Record<SpinnerSize, string> = {
  sm: 'spinner-sm',
  md: '',
  lg: 'spinner-lg',
};

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  (
    {
      size = 'md',
      variant = 'border',
      color = 'primary',
      label = 'Loading...',
      className,
      ...props
    },
    ref
  ) => {
    const spinnerClass = variant === 'grow' ? 'spinner-grow' : 'spinner-border';

    return (
      <div
        ref={ref}
        className={cn(spinnerClass, sizeClasses[size], `text-${color}`, className)}
        role="status"
        aria-label={label}
        {...props}
      >
        <span className="visually-hidden">{label}</span>
      </div>
    );
  }
);

Spinner.displayName = 'Spinner';
