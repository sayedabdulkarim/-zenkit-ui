'use client';

import React, { forwardRef, useState, useCallback, useEffect } from 'react';
import { cn } from '../../utils/cn';

export interface JsonInputProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'> {
  /** Current JSON value */
  value?: string;
  /** Default JSON value */
  defaultValue?: string;
  /** Called when value changes */
  onChange?: (value: string) => void;
  /** Called when JSON is valid/invalid */
  onValidationChange?: (isValid: boolean, error?: string) => void;
  /** Whether to validate on change */
  validateOnChange?: boolean;
  /** Whether to format on blur */
  formatOnBlur?: boolean;
  /** Indentation spaces */
  indentation?: number;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Minimum rows */
  minRows?: number;
  /** Maximum rows */
  maxRows?: number;
  /** Label */
  label?: React.ReactNode;
  /** Error message */
  error?: React.ReactNode;
  /** Whether to show line numbers */
  showLineNumbers?: boolean;
}

export const JsonInput = forwardRef<HTMLTextAreaElement, JsonInputProps>(
  (
    {
      className,
      value,
      defaultValue = '',
      onChange,
      onValidationChange,
      validateOnChange = true,
      formatOnBlur = true,
      indentation = 2,
      size = 'md',
      minRows = 4,
      maxRows = 20,
      label,
      error,
      showLineNumbers,
      disabled,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [validationError, setValidationError] = useState<string | null>(null);

    const currentValue = value !== undefined ? value : internalValue;

    const validateJson = useCallback((jsonString: string): { isValid: boolean; error?: string } => {
      if (!jsonString.trim()) {
        return { isValid: true };
      }
      try {
        JSON.parse(jsonString);
        return { isValid: true };
      } catch (e) {
        return { isValid: false, error: (e as Error).message };
      }
    }, []);

    const formatJson = useCallback(
      (jsonString: string): string => {
        try {
          const parsed = JSON.parse(jsonString);
          return JSON.stringify(parsed, null, indentation);
        } catch {
          return jsonString;
        }
      },
      [indentation]
    );

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      setInternalValue(newValue);
      onChange?.(newValue);

      if (validateOnChange) {
        const result = validateJson(newValue);
        setValidationError(result.isValid ? null : result.error || 'Invalid JSON');
        onValidationChange?.(result.isValid, result.error);
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      if (formatOnBlur) {
        const result = validateJson(currentValue);
        if (result.isValid && currentValue.trim()) {
          const formatted = formatJson(currentValue);
          setInternalValue(formatted);
          onChange?.(formatted);
        }
      }
      props.onBlur?.(e);
    };

    useEffect(() => {
      if (validateOnChange && currentValue) {
        const result = validateJson(currentValue);
        setValidationError(result.isValid ? null : result.error || 'Invalid JSON');
      }
    }, [currentValue, validateOnChange, validateJson]);

    const lineCount = currentValue.split('\n').length;
    const rows = Math.min(Math.max(lineCount, minRows), maxRows);

    const displayError = error || validationError;

    return (
      <div
        className={cn(
          'zk-json-input',
          `zk-json-input--${size}`,
          displayError && 'zk-json-input--error',
          disabled && 'zk-json-input--disabled',
          className
        )}
      >
        {label && <label className="zk-json-input__label">{label}</label>}
        <div className="zk-json-input__container">
          {showLineNumbers && (
            <div className="zk-json-input__line-numbers">
              {Array.from({ length: rows }).map((_, i) => (
                <span key={i} className="zk-json-input__line-number">
                  {i + 1}
                </span>
              ))}
            </div>
          )}
          <textarea
            ref={ref}
            className="zk-json-input__textarea"
            value={currentValue}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={rows}
            disabled={disabled}
            spellCheck={false}
            {...props}
          />
        </div>
        {displayError && (
          <div className="zk-json-input__error">{displayError}</div>
        )}
      </div>
    );
  }
);

JsonInput.displayName = 'JsonInput';
