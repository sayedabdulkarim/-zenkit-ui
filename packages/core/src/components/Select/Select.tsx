import { forwardRef, type SelectHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import type { Size } from '../../types';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectOptionGroup {
  label: string;
  options: SelectOption[];
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'prefix'> {
  /** Select options */
  options?: (SelectOption | SelectOptionGroup)[];
  /** Placeholder text */
  placeholder?: string;
  /** Select size */
  size?: Size;
  /** Error state */
  error?: boolean;
  /** Full width */
  fullWidth?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Prefix element */
  prefixIcon?: ReactNode;
}

const sizeClasses: Record<Size, string> = {
  sm: 'form-select-sm',
  md: '',
  lg: 'form-select-lg',
};

const isOptionGroup = (option: SelectOption | SelectOptionGroup): option is SelectOptionGroup => {
  return 'options' in option;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options = [],
      placeholder,
      size = 'md',
      error = false,
      fullWidth = false,
      loading = false,
      prefixIcon,
      disabled,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    const renderOptions = () => {
      if (children) return children;

      return options.map((option, index) => {
        if (isOptionGroup(option)) {
          return (
            <optgroup key={`group-${index}`} label={option.label}>
              {option.options.map((opt) => (
                <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                  {opt.label}
                </option>
              ))}
            </optgroup>
          );
        }

        return (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        );
      });
    };

    const selectElement = (
      <select
        ref={ref}
        disabled={isDisabled}
        className={cn(
          'form-select',
          sizeClasses[size],
          error && 'is-invalid',
          loading && 'form-select-loading',
          fullWidth && 'w-100',
          className
        )}
        aria-invalid={error}
        aria-busy={loading}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {renderOptions()}
      </select>
    );

    if (prefixIcon) {
      return (
        <div className={cn('form-select-wrapper has-prefix', fullWidth && 'w-100')}>
          <span className="form-select-prefix">{prefixIcon}</span>
          {selectElement}
        </div>
      );
    }

    return selectElement;
  }
);

Select.displayName = 'Select';
