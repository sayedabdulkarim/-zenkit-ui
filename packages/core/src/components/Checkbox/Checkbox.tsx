import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import type { Size, ColorScheme } from '../../types';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Checkbox label */
  label?: ReactNode;
  /** Checkbox size */
  size?: Size;
  /** Color scheme */
  colorScheme?: ColorScheme;
  /** Indeterminate state */
  indeterminate?: boolean;
  /** Error state */
  error?: boolean;
  /** Label position */
  labelPosition?: 'left' | 'right';
}

const sizeClasses: Record<Size, string> = {
  sm: 'form-check-sm',
  md: '',
  lg: 'form-check-lg',
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      size = 'md',
      colorScheme = 'primary',
      indeterminate = false,
      error = false,
      labelPosition = 'right',
      disabled,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div
        className={cn(
          'form-check',
          sizeClasses[size],
          labelPosition === 'left' && 'form-check-reverse',
          error && 'is-invalid',
          className
        )}
      >
        <input
          ref={(node) => {
            if (node) {
              node.indeterminate = indeterminate;
            }
            if (typeof ref === 'function') {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          type="checkbox"
          id={checkboxId}
          disabled={disabled}
          className={cn(
            'form-check-input',
            colorScheme !== 'primary' && `form-check-${colorScheme}`
          )}
          aria-invalid={error}
          {...props}
        />
        {label && (
          <label
            htmlFor={checkboxId}
            className="form-check-label"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
