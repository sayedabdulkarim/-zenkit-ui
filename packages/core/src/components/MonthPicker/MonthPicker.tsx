'use client';

import { forwardRef, useState, useRef, useEffect, type InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface MonthPickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'size'> {
  /** Selected month (0-11) and year */
  value?: { month: number; year: number } | null;
  /** On change callback */
  onChange?: (value: { month: number; year: number } | null) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Format for display */
  format?: 'short' | 'long';
  /** Minimum year */
  minYear?: number;
  /** Maximum year */
  maxYear?: number;
  /** Clearable */
  clearable?: boolean;
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Error state */
  error?: boolean;
}

const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MONTHS_LONG = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const MonthPicker = forwardRef<HTMLInputElement, MonthPickerProps>(
  (
    {
      value,
      onChange,
      placeholder = 'Select month',
      format = 'long',
      minYear = 1900,
      maxYear = 2100,
      clearable = true,
      size = 'md',
      error = false,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [viewYear, setViewYear] = useState(value?.year || new Date().getFullYear());
    const containerRef = useRef<HTMLDivElement>(null);

    const months = format === 'short' ? MONTHS_SHORT : MONTHS_LONG;

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };

      if (open) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open]);

    const handleSelect = (month: number) => {
      onChange?.({ month, year: viewYear });
      setOpen(false);
    };

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      onChange?.(null);
    };

    const navigateYear = (delta: number) => {
      const newYear = viewYear + delta;
      if (newYear >= minYear && newYear <= maxYear) {
        setViewYear(newYear);
      }
    };

    const isSelected = (month: number) => {
      return value?.month === month && value?.year === viewYear;
    };

    const displayValue = value ? `${months[value.month]} ${value.year}` : '';

    return (
      <div ref={containerRef} className={cn('zk-month-picker', `zk-month-picker--${size}`, className)}>
        <div
          className={cn(
            'zk-month-picker__input',
            error && 'zk-month-picker__input--error',
            disabled && 'zk-month-picker__input--disabled',
            open && 'zk-month-picker__input--open'
          )}
          onClick={() => !disabled && setOpen(!open)}
        >
          <input
            ref={ref}
            type="text"
            readOnly
            disabled={disabled}
            placeholder={placeholder}
            value={displayValue}
            className="zk-month-picker__field"
            {...props}
          />
          <div className="zk-month-picker__icons">
            {clearable && value && !disabled && (
              <button type="button" className="zk-month-picker__clear" onClick={handleClear}>
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
            <svg className="zk-month-picker__icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
        </div>

        {open && (
          <div className="zk-month-picker__dropdown">
            <div className="zk-month-picker__header">
              <button
                type="button"
                onClick={() => navigateYear(-1)}
                className="zk-month-picker__nav"
                disabled={viewYear <= minYear}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <span className="zk-month-picker__title">{viewYear}</span>
              <button
                type="button"
                onClick={() => navigateYear(1)}
                className="zk-month-picker__nav"
                disabled={viewYear >= maxYear}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
            <div className="zk-month-picker__grid">
              {MONTHS_SHORT.map((month, index) => (
                <button
                  key={month}
                  type="button"
                  className={cn(
                    'zk-month-picker__month',
                    isSelected(index) && 'zk-month-picker__month--selected'
                  )}
                  onClick={() => handleSelect(index)}
                >
                  {month}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
);

MonthPicker.displayName = 'MonthPicker';
