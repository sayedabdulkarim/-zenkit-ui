import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import type { Size, ColorScheme } from '../../types';

export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link' | 'soft';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  colorScheme?: ColorScheme;
  size?: Size;
  fullWidth?: boolean;
  loading?: boolean;
  loadingText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  iconOnly?: boolean;
}

const sizeClasses: Record<Size, string> = {
  sm: 'btn-sm',
  md: '',
  lg: 'btn-lg',
};

const variantClasses: Record<ButtonVariant, Record<ColorScheme, string>> = {
  solid: {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    success: 'btn-success',
    danger: 'btn-danger',
    warning: 'btn-warning',
    info: 'btn-info',
    light: 'btn-light',
    dark: 'btn-dark',
  },
  outline: {
    primary: 'btn-outline-primary',
    secondary: 'btn-outline-secondary',
    success: 'btn-outline-success',
    danger: 'btn-outline-danger',
    warning: 'btn-outline-warning',
    info: 'btn-outline-info',
    light: 'btn-outline-light',
    dark: 'btn-outline-dark',
  },
  ghost: {
    primary: 'btn-ghost btn-ghost-primary',
    secondary: 'btn-ghost btn-ghost-secondary',
    success: 'btn-ghost btn-ghost-success',
    danger: 'btn-ghost btn-ghost-danger',
    warning: 'btn-ghost btn-ghost-warning',
    info: 'btn-ghost btn-ghost-info',
    light: 'btn-ghost btn-ghost-light',
    dark: 'btn-ghost btn-ghost-dark',
  },
  link: {
    primary: 'btn-link',
    secondary: 'btn-link text-secondary',
    success: 'btn-link text-success',
    danger: 'btn-link text-danger',
    warning: 'btn-link text-warning',
    info: 'btn-link text-info',
    light: 'btn-link text-light',
    dark: 'btn-link text-dark',
  },
  soft: {
    primary: 'btn-soft-primary',
    secondary: 'btn-soft-secondary',
    success: 'btn-soft-success',
    danger: 'btn-soft-danger',
    warning: 'btn-soft-warning',
    info: 'btn-soft-info',
    light: 'btn-soft-light',
    dark: 'btn-soft-dark',
  },
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'solid',
      colorScheme = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      loadingText,
      leftIcon,
      rightIcon,
      iconOnly = false,
      disabled,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type="button"
        disabled={isDisabled}
        className={cn(
          'btn',
          variantClasses[variant][colorScheme],
          sizeClasses[size],
          fullWidth && 'btn-block',
          iconOnly && 'btn-icon',
          loading && 'btn-loading',
          className
        )}
        aria-busy={loading}
        aria-disabled={isDisabled}
        {...props}
      >
        {loading ? (
          <>
            <span className="btn-spinner" aria-hidden="true" />
            {loadingText && <span>{loadingText}</span>}
            {!loadingText && <span className="sr-only">Loading</span>}
          </>
        ) : (
          <>
            {leftIcon && (
              <span className="btn-icon-left" aria-hidden="true">
                {leftIcon}
              </span>
            )}
            {children}
            {rightIcon && (
              <span className="btn-icon-right" aria-hidden="true">
                {rightIcon}
              </span>
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
