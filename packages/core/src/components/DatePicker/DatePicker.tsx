'use client';

import { forwardRef, useState, useRef, useEffect, type InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface DatePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'size'> {
  /** Selected date */
  value?: Date | null;
  /** On change callback */
  onChange?: (date: Date | null) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Date format */
  format?: string;
  /** Minimum date */
  minDate?: Date;
  /** Maximum date */
  maxDate?: Date;
  /** Disabled dates */
  disabledDates?: Date[];
  /** Clearable */
  clearable?: boolean;
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Error state */
  error?: boolean;
}

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const formatDate = (date: Date, format: string = 'MM/DD/YYYY'): string => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return format.replace('DD', day).replace('MM', month).replace('YYYY', year.toString());
};

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      value,
      onChange,
      placeholder = 'Select date',
      format = 'MM/DD/YYYY',
      minDate,
      maxDate,
      disabledDates = [],
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
    const [viewDate, setViewDate] = useState(value || new Date());
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

    const getDaysInMonth = (date: Date) => {
      const year = date.getFullYear();
      const month = date.getMonth();
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const daysInPrevMonth = new Date(year, month, 0).getDate();

      const days: { date: Date; isCurrentMonth: boolean }[] = [];

      // Previous month days
      for (let i = firstDay - 1; i >= 0; i--) {
        days.push({
          date: new Date(year, month - 1, daysInPrevMonth - i),
          isCurrentMonth: false,
        });
      }

      // Current month days
      for (let i = 1; i <= daysInMonth; i++) {
        days.push({
          date: new Date(year, month, i),
          isCurrentMonth: true,
        });
      }

      // Next month days
      const remaining = 42 - days.length;
      for (let i = 1; i <= remaining; i++) {
        days.push({
          date: new Date(year, month + 1, i),
          isCurrentMonth: false,
        });
      }

      return days;
    };

    const isDisabled = (date: Date) => {
      if (minDate && date < minDate) return true;
      if (maxDate && date > maxDate) return true;
      return disabledDates.some(d => d.toDateString() === date.toDateString());
    };

    const isSelected = (date: Date) => {
      return value?.toDateString() === date.toDateString();
    };

    const isToday = (date: Date) => {
      return new Date().toDateString() === date.toDateString();
    };

    const handleSelect = (date: Date) => {
      if (isDisabled(date)) return;
      onChange?.(date);
      setOpen(false);
    };

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      onChange?.(null);
    };

    const navigateMonth = (delta: number) => {
      setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + delta, 1));
    };

    return (
      <div ref={containerRef} className={cn('date-picker', `date-picker-${size}`, className)}>
        <div
          className={cn(
            'date-picker-input',
            error && 'date-picker-error',
            disabled && 'date-picker-disabled',
            open && 'date-picker-open'
          )}
          onClick={() => !disabled && setOpen(!open)}
        >
          <input
            ref={ref}
            type="text"
            readOnly
            disabled={disabled}
            placeholder={placeholder}
            value={value ? formatDate(value, format) : ''}
            className="date-picker-input-field"
            {...props}
          />
          <div className="date-picker-icons">
            {clearable && value && !disabled && (
              <button type="button" className="date-picker-clear" onClick={handleClear}>
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
            <svg className="date-picker-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
        </div>

        {open && (
          <div className="date-picker-dropdown">
            <div className="date-picker-header">
              <button type="button" onClick={() => navigateMonth(-1)} className="date-picker-nav">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <span className="date-picker-title">
                {MONTHS[viewDate.getMonth()]} {viewDate.getFullYear()}
              </span>
              <button type="button" onClick={() => navigateMonth(1)} className="date-picker-nav">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
            <div className="date-picker-days-header">
              {DAYS.map(day => <div key={day} className="date-picker-day-name">{day}</div>)}
            </div>
            <div className="date-picker-days">
              {getDaysInMonth(viewDate).map(({ date, isCurrentMonth }, i) => (
                <button
                  key={i}
                  type="button"
                  className={cn(
                    'date-picker-day',
                    !isCurrentMonth && 'date-picker-day-outside',
                    isSelected(date) && 'date-picker-day-selected',
                    isToday(date) && 'date-picker-day-today',
                    isDisabled(date) && 'date-picker-day-disabled'
                  )}
                  onClick={() => handleSelect(date)}
                  disabled={isDisabled(date)}
                >
                  {date.getDate()}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';
