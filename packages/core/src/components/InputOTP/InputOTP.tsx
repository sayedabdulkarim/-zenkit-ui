'use client';

import { forwardRef, useState, useRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface InputOTPProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Number of inputs */
  length?: number;
  /** Value */
  value?: string;
  /** On change callback */
  onChange?: (value: string) => void;
  /** On complete callback */
  onComplete?: (value: string) => void;
  /** Mask input */
  mask?: boolean;
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Error state */
  error?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Auto focus first input */
  autoFocus?: boolean;
  /** Type */
  type?: 'numeric' | 'alphanumeric';
}

export const InputOTP = forwardRef<HTMLDivElement, InputOTPProps>(
  (
    {
      length = 6,
      value = '',
      onChange,
      onComplete,
      mask = false,
      size = 'md',
      error = false,
      disabled = false,
      autoFocus = false,
      type = 'numeric',
      className,
      ...props
    },
    ref
  ) => {
    const [values, setValues] = useState<string[]>(value.split('').slice(0, length));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const focusInput = (index: number) => {
      if (index >= 0 && index < length) {
        inputRefs.current[index]?.focus();
      }
    };

    const handleChange = (index: number, inputValue: string) => {
      const regex = type === 'numeric' ? /^[0-9]$/ : /^[a-zA-Z0-9]$/;
      const char = inputValue.slice(-1);

      if (!char || regex.test(char)) {
        const newValues = [...values];
        newValues[index] = char;
        setValues(newValues);

        const newValue = newValues.join('');
        onChange?.(newValue);

        if (char && index < length - 1) {
          focusInput(index + 1);
        }

        if (newValue.length === length) {
          onComplete?.(newValue);
        }
      }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace') {
        if (!values[index] && index > 0) {
          focusInput(index - 1);
        } else {
          const newValues = [...values];
          newValues[index] = '';
          setValues(newValues);
          onChange?.(newValues.join(''));
        }
      } else if (e.key === 'ArrowLeft') {
        focusInput(index - 1);
      } else if (e.key === 'ArrowRight') {
        focusInput(index + 1);
      }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
      e.preventDefault();
      const pastedData = e.clipboardData.getData('text');
      const regex = type === 'numeric' ? /[0-9]/g : /[a-zA-Z0-9]/g;
      const validChars = pastedData.match(regex) || [];

      const newValues = [...values];
      validChars.slice(0, length).forEach((char, i) => {
        newValues[i] = char;
      });

      setValues(newValues);
      const newValue = newValues.join('');
      onChange?.(newValue);

      if (newValue.length === length) {
        onComplete?.(newValue);
      }

      focusInput(Math.min(validChars.length, length - 1));
    };

    return (
      <div
        ref={ref}
        className={cn('input-otp', `input-otp-${size}`, error && 'input-otp-error', className)}
        {...props}
      >
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            ref={(el) => { inputRefs.current[index] = el; }}
            type={mask ? 'password' : 'text'}
            inputMode={type === 'numeric' ? 'numeric' : 'text'}
            maxLength={1}
            value={values[index] || ''}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            onFocus={(e) => e.target.select()}
            disabled={disabled}
            autoFocus={autoFocus && index === 0}
            className="input-otp-slot"
            autoComplete="one-time-code"
          />
        ))}
      </div>
    );
  }
);

InputOTP.displayName = 'InputOTP';
