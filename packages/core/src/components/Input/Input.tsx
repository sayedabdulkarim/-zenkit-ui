import { forwardRef, useState, type InputHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import type { Size } from '../../types';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  /** Input size variant */
  size?: Size;
  /** Error state */
  error?: boolean;
  /** Prefix element (icon or text) */
  prefix?: ReactNode;
  /** Suffix element (icon or text) */
  suffix?: ReactNode;
  /** Show clear button */
  allowClear?: boolean;
  /** Callback when clear button is clicked */
  onClear?: () => void;
  /** Full width input */
  fullWidth?: boolean;
  /** Wrapper className */
  wrapperClassName?: string;
}

const sizeClasses: Record<Size, string> = {
  sm: 'form-control-sm',
  md: '',
  lg: 'form-control-lg',
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      error = false,
      prefix,
      suffix,
      allowClear = false,
      onClear,
      fullWidth = false,
      disabled,
      className,
      wrapperClassName,
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue ?? '');
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    };

    const handleClear = () => {
      if (!isControlled) {
        setInternalValue('');
      }
      onClear?.();
      // Create a synthetic event for onChange
      const syntheticEvent = {
        target: { value: '' },
        currentTarget: { value: '' },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange?.(syntheticEvent);
    };

    const showClear = allowClear && currentValue && !disabled;
    const hasPrefix = !!prefix;
    const hasSuffix = !!suffix || showClear;

    if (hasPrefix || hasSuffix) {
      return (
        <div
          className={cn(
            'form-input-wrapper',
            hasPrefix && 'has-prefix',
            hasSuffix && 'has-suffix',
            fullWidth && 'w-100',
            wrapperClassName
          )}
        >
          {prefix && <span className="form-input-prefix">{prefix}</span>}
          <input
            ref={ref}
            value={currentValue}
            onChange={handleChange}
            disabled={disabled}
            className={cn(
              'form-control',
              sizeClasses[size],
              error && 'is-invalid',
              className
            )}
            aria-invalid={error}
            {...props}
          />
          {(suffix || showClear) && (
            <span className="form-input-suffix">
              {showClear && (
                <button
                  type="button"
                  className="form-input-clear"
                  onClick={handleClear}
                  aria-label="Clear input"
                  tabIndex={-1}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              )}
              {suffix}
            </span>
          )}
        </div>
      );
    }

    return (
      <input
        ref={ref}
        value={isControlled ? value : undefined}
        defaultValue={!isControlled ? defaultValue : undefined}
        onChange={onChange}
        disabled={disabled}
        className={cn(
          'form-control',
          sizeClasses[size],
          error && 'is-invalid',
          fullWidth && 'w-100',
          className
        )}
        aria-invalid={error}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
