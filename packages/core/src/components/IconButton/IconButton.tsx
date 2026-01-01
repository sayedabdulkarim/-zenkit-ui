import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

type IconButtonSize = 'sm' | 'md' | 'lg';
type IconButtonVariant = 'solid' | 'outline' | 'ghost' | 'light';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button size */
  size?: IconButtonSize;
  /** Button variant */
  variant?: IconButtonVariant;
  /** Color scheme */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  /** Icon element */
  icon: ReactNode;
  /** Loading state */
  loading?: boolean;
  /** Rounded style */
  rounded?: boolean;
  /** Accessible label */
  'aria-label': string;
}

const sizeClasses: Record<IconButtonSize, string> = {
  sm: 'icon-btn-sm',
  md: '',
  lg: 'icon-btn-lg',
};

const variantClasses: Record<IconButtonVariant, string> = {
  solid: 'icon-btn-solid',
  outline: 'icon-btn-outline',
  ghost: 'icon-btn-ghost',
  light: 'icon-btn-light',
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      size = 'md',
      variant = 'ghost',
      color = 'primary',
      icon,
      loading = false,
      rounded = false,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled || loading}
        className={cn(
          'icon-btn',
          sizeClasses[size],
          variantClasses[variant],
          `icon-btn-${color}`,
          rounded && 'icon-btn-rounded',
          loading && 'icon-btn-loading',
          className
        )}
        {...props}
      >
        {loading ? (
          <span className="icon-btn-spinner" />
        ) : (
          icon
        )}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
