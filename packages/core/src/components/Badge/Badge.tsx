import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

type BadgeVariant = 'solid' | 'soft' | 'outline';
type BadgeColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Badge variant */
  variant?: BadgeVariant;
  /** Badge color */
  color?: BadgeColor;
  /** Badge size */
  size?: BadgeSize;
  /** Pill shape */
  pill?: boolean;
  /** Dot indicator (no text) */
  dot?: boolean;
}

const colorClasses: Record<BadgeColor, string> = {
  primary: 'badge-primary',
  secondary: 'badge-secondary',
  success: 'badge-success',
  danger: 'badge-danger',
  warning: 'badge-warning',
  info: 'badge-info',
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'badge-sm',
  md: '',
  lg: 'badge-lg',
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'solid',
      color = 'primary',
      size = 'md',
      pill = false,
      dot = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          'badge',
          colorClasses[color],
          sizeClasses[size],
          variant === 'soft' && 'badge-soft',
          variant === 'outline' && 'badge-outline',
          pill && 'badge-pill',
          dot && 'badge-dot',
          className
        )}
        {...props}
      >
        {!dot && children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
