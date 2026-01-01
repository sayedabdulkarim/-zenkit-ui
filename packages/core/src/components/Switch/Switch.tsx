import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import type { Size, ColorScheme } from '../../types';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Switch label */
  label?: ReactNode;
  /** Switch size */
  size?: Size;
  /** Color scheme */
  colorScheme?: ColorScheme;
  /** Loading state */
  loading?: boolean;
  /** Error state */
  error?: boolean;
  /** Label position */
  labelPosition?: 'left' | 'right';
}

const sizeClasses: Record<Size, string> = {
  sm: 'form-switch-sm',
  md: '',
  lg: 'form-switch-lg',
};

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      label,
      size = 'md',
      colorScheme = 'primary',
      loading = false,
      error = false,
      labelPosition = 'right',
      disabled,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;
    const isDisabled = disabled || loading;

    return (
      <div
        className={cn(
          'form-check form-switch',
          sizeClasses[size],
          labelPosition === 'left' && 'form-check-reverse',
          error && 'is-invalid',
          className
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          id={switchId}
          disabled={isDisabled}
          className={cn(
            'form-check-input',
            colorScheme !== 'primary' && `form-check-${colorScheme}`,
            loading && 'form-switch-loading'
          )}
          aria-invalid={error}
          aria-busy={loading}
          {...props}
        />
        {label && (
          <label htmlFor={switchId} className="form-check-label">
            {loading && <span className="spinner-border spinner-border-sm me-2" />}
            {label}
          </label>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';
