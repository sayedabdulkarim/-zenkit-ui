'use client';

import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface NumberInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'type' | 'prefix' | 'size'> {
  /** Value */
  value?: number;
  /** On change callback */
  onChange?: (value: number | undefined) => void;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step value */
  step?: number;
  /** Precision */
  precision?: number;
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Error state */
  error?: boolean;
  /** Hide controls */
  hideControls?: boolean;
  /** Prefix */
  prefix?: React.ReactNode;
  /** Suffix */
  suffix?: React.ReactNode;
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      value,
      onChange,
      min,
      max,
      step = 1,
      precision,
      size = 'md',
      error = false,
      hideControls = false,
      prefix,
      suffix,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const clamp = (val: number) => {
      let result = val;
      if (min !== undefined) result = Math.max(min, result);
      if (max !== undefined) result = Math.min(max, result);
      if (precision !== undefined) result = Number(result.toFixed(precision));
      return result;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      if (val === '' || val === '-') {
        onChange?.(undefined);
        return;
      }
      const num = parseFloat(val);
      if (!isNaN(num)) {
        onChange?.(clamp(num));
      }
    };

    const increment = () => {
      const newValue = clamp((value ?? 0) + step);
      onChange?.(newValue);
    };

    const decrement = () => {
      const newValue = clamp((value ?? 0) - step);
      onChange?.(newValue);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        increment();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        decrement();
      }
    };

    return (
      <div
        className={cn(
          'number-input',
          `number-input-${size}`,
          error && 'number-input-error',
          disabled && 'number-input-disabled',
          className
        )}
      >
        {prefix && <span className="number-input-prefix">{prefix}</span>}
        <input
          ref={ref}
          type="text"
          inputMode="decimal"
          value={value ?? ''}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          className="number-input-field"
          {...props}
        />
        {suffix && <span className="number-input-suffix">{suffix}</span>}
        {!hideControls && (
          <div className="number-input-controls">
            <button
              type="button"
              className="number-input-control"
              onClick={increment}
              disabled={disabled || (max !== undefined && (value ?? 0) >= max)}
              tabIndex={-1}
            >
              <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
            <button
              type="button"
              className="number-input-control"
              onClick={decrement}
              disabled={disabled || (min !== undefined && (value ?? 0) <= min)}
              tabIndex={-1}
            >
              <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        )}
      </div>
    );
  }
);

NumberInput.displayName = 'NumberInput';
