'use client';

import { forwardRef, useState, type InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Error state */
  error?: boolean;
  /** Show strength indicator */
  showStrength?: boolean;
  /** Visible by default */
  defaultVisible?: boolean;
}

const calculateStrength = (password: string): { score: number; label: string } => {
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;

  const labels = ['Very weak', 'Weak', 'Fair', 'Strong', 'Very strong'];
  return { score, label: labels[Math.min(score, 4)] };
};

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      size = 'md',
      error = false,
      showStrength = false,
      defaultVisible = false,
      disabled,
      value,
      className,
      ...props
    },
    ref
  ) => {
    const [visible, setVisible] = useState(defaultVisible);
    const strength = showStrength && typeof value === 'string' ? calculateStrength(value) : null;

    return (
      <div className={cn('password-input-wrapper', className)}>
        <div
          className={cn(
            'password-input',
            `password-input-${size}`,
            error && 'password-input-error',
            disabled && 'password-input-disabled'
          )}
        >
          <input
            ref={ref}
            type={visible ? 'text' : 'password'}
            value={value}
            disabled={disabled}
            className="password-input-field"
            {...props}
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setVisible(!visible)}
            disabled={disabled}
            tabIndex={-1}
            aria-label={visible ? 'Hide password' : 'Show password'}
          >
            {visible ? (
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        </div>

        {showStrength && strength && typeof value === 'string' && value.length > 0 && (
          <div className="password-strength">
            <div className="password-strength-bar">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={cn(
                    'password-strength-segment',
                    i < strength.score && `password-strength-segment-${strength.score}`
                  )}
                />
              ))}
            </div>
            <span className="password-strength-label">{strength.label}</span>
          </div>
        )}
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';
