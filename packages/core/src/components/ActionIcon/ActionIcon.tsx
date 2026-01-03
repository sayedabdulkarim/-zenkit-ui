import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export type ActionIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ActionIconVariant = 'default' | 'filled' | 'light' | 'outline' | 'subtle' | 'transparent';
export type ActionIconColor = 'default' | 'primary' | 'success' | 'warning' | 'danger';

export interface ActionIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon size */
  size?: ActionIconSize;
  /** Visual variant */
  variant?: ActionIconVariant;
  /** Color theme */
  color?: ActionIconColor;
  /** Loading state */
  loading?: boolean;
  /** Custom loader element */
  loader?: ReactNode;
}

const sizeClasses: Record<ActionIconSize, string> = {
  xs: 'action-icon-xs',
  sm: 'action-icon-sm',
  md: 'action-icon-md',
  lg: 'action-icon-lg',
  xl: 'action-icon-xl',
};

const variantClasses: Record<ActionIconVariant, string> = {
  default: '',
  filled: 'action-icon-filled',
  light: 'action-icon-light',
  outline: 'action-icon-outline',
  subtle: 'action-icon-subtle',
  transparent: 'action-icon-transparent',
};

const colorClasses: Record<ActionIconColor, string> = {
  default: '',
  primary: 'action-icon-primary',
  success: 'action-icon-success',
  warning: 'action-icon-warning',
  danger: 'action-icon-danger',
};

export const ActionIcon = forwardRef<HTMLButtonElement, ActionIconProps>(
  (
    {
      size = 'md',
      variant = 'default',
      color = 'default',
      loading = false,
      loader,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          'action-icon',
          sizeClasses[size],
          variantClasses[variant],
          colorClasses[color],
          loading && 'action-icon-loading',
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          loader || (
            <span className="action-icon-loader">
              <svg
                width="70%"
                height="70%"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
            </span>
          )
        ) : (
          children
        )}
      </button>
    );
  }
);

ActionIcon.displayName = 'ActionIcon';
