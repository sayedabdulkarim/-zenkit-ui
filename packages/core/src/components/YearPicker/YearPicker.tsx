'use client';

import { forwardRef, useState, useRef, useEffect, type InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface YearPickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'size'> {
  /** Selected year */
  value?: number | null;
  /** On change callback */
  onChange?: (year: number | null) => void;
  /** Placeholder text */
  placeholder?: string;
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
  /** Number of years to show per page */
  yearsPerPage?: number;
}

export const YearPicker = forwardRef<HTMLInputElement, YearPickerProps>(
  (
    {
      value,
      onChange,
      placeholder = 'Select year',
      minYear = 1900,
      maxYear = 2100,
      clearable = true,
      size = 'md',
      error = false,
      yearsPerPage = 12,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const currentYear = new Date().getFullYear();
    const [open, setOpen] = useState(false);
    const [startYear, setStartYear] = useState(
      Math.floor((value || currentYear) / yearsPerPage) * yearsPerPage
    );
    const containerRef = useRef<HTMLDivElement>(null);

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

    const handleSelect = (year: number) => {
      onChange?.(year);
      setOpen(false);
    };

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      onChange?.(null);
    };

    const navigateYears = (delta: number) => {
      const newStart = startYear + delta * yearsPerPage;
      if (newStart >= minYear - yearsPerPage && newStart <= maxYear) {
        setStartYear(newStart);
      }
    };

    const years = Array.from({ length: yearsPerPage }, (_, i) => startYear + i).filter(
      y => y >= minYear && y <= maxYear
    );

    const rangeStart = Math.max(startYear, minYear);
    const rangeEnd = Math.min(startYear + yearsPerPage - 1, maxYear);

    return (
      <div ref={containerRef} className={cn('zk-year-picker', `zk-year-picker--${size}`, className)}>
        <div
          className={cn(
            'zk-year-picker__input',
            error && 'zk-year-picker__input--error',
            disabled && 'zk-year-picker__input--disabled',
            open && 'zk-year-picker__input--open'
          )}
          onClick={() => !disabled && setOpen(!open)}
        >
          <input
            ref={ref}
            type="text"
            readOnly
            disabled={disabled}
            placeholder={placeholder}
            value={value?.toString() || ''}
            className="zk-year-picker__field"
            {...props}
          />
          <div className="zk-year-picker__icons">
            {clearable && value && !disabled && (
              <button type="button" className="zk-year-picker__clear" onClick={handleClear}>
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
            <svg className="zk-year-picker__icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
        </div>

        {open && (
          <div className="zk-year-picker__dropdown">
            <div className="zk-year-picker__header">
              <button
                type="button"
                onClick={() => navigateYears(-1)}
                className="zk-year-picker__nav"
                disabled={startYear <= minYear}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <span className="zk-year-picker__title">{rangeStart} - {rangeEnd}</span>
              <button
                type="button"
                onClick={() => navigateYears(1)}
                className="zk-year-picker__nav"
                disabled={startYear + yearsPerPage > maxYear}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
            <div className="zk-year-picker__grid">
              {years.map(year => (
                <button
                  key={year}
                  type="button"
                  className={cn(
                    'zk-year-picker__year',
                    value === year && 'zk-year-picker__year--selected',
                    year === currentYear && 'zk-year-picker__year--current'
                  )}
                  onClick={() => handleSelect(year)}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
);

YearPicker.displayName = 'YearPicker';
