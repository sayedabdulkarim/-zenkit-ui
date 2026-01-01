'use client';

import { forwardRef, useState, useRef, useEffect, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface DateRange {
  start: Date | null;
  end: Date | null;
}

export interface DateRangePickerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Selected date range */
  value?: DateRange;
  /** On change callback */
  onChange?: (range: DateRange) => void;
  /** Start placeholder */
  startPlaceholder?: string;
  /** End placeholder */
  endPlaceholder?: string;
  /** Minimum date */
  minDate?: Date;
  /** Maximum date */
  maxDate?: Date;
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Error state */
  error?: boolean;
  /** Disabled state */
  disabled?: boolean;
}

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const formatDate = (date: Date | null): string => {
  if (!date) return '';
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

export const DateRangePicker = forwardRef<HTMLDivElement, DateRangePickerProps>(
  (
    {
      value = { start: null, end: null },
      onChange,
      startPlaceholder = 'Start date',
      endPlaceholder = 'End date',
      minDate,
      maxDate,
      size = 'md',
      error = false,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [selecting, setSelecting] = useState<'start' | 'end'>('start');
    const [hoverDate, setHoverDate] = useState<Date | null>(null);
    const [leftMonth, setLeftMonth] = useState(value.start || new Date());
    const containerRef = useRef<HTMLDivElement>(null);

    const rightMonth = new Date(leftMonth.getFullYear(), leftMonth.getMonth() + 1, 1);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };

      if (open) document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open]);

    const getDaysInMonth = (date: Date) => {
      const year = date.getFullYear();
      const month = date.getMonth();
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const daysInPrevMonth = new Date(year, month, 0).getDate();

      const days: { date: Date; isCurrentMonth: boolean }[] = [];

      for (let i = firstDay - 1; i >= 0; i--) {
        days.push({ date: new Date(year, month - 1, daysInPrevMonth - i), isCurrentMonth: false });
      }
      for (let i = 1; i <= daysInMonth; i++) {
        days.push({ date: new Date(year, month, i), isCurrentMonth: true });
      }
      const remaining = 42 - days.length;
      for (let i = 1; i <= remaining; i++) {
        days.push({ date: new Date(year, month + 1, i), isCurrentMonth: false });
      }

      return days;
    };

    const isInRange = (date: Date) => {
      if (!value.start) return false;
      const end = value.end || hoverDate;
      if (!end) return false;
      return date >= value.start && date <= end;
    };

    const isRangeStart = (date: Date) => value.start?.toDateString() === date.toDateString();
    const isRangeEnd = (date: Date) => (value.end || hoverDate)?.toDateString() === date.toDateString();

    const handleSelect = (date: Date) => {
      if (selecting === 'start' || !value.start || date < value.start) {
        onChange?.({ start: date, end: null });
        setSelecting('end');
      } else {
        onChange?.({ start: value.start, end: date });
        setSelecting('start');
        setOpen(false);
      }
    };

    const renderCalendar = (monthDate: Date) => (
      <div className="date-range-calendar">
        <div className="date-range-header">
          <span>{MONTHS[monthDate.getMonth()]} {monthDate.getFullYear()}</span>
        </div>
        <div className="date-range-days-header">
          {DAYS.map(d => <div key={d} className="date-range-day-name">{d}</div>)}
        </div>
        <div className="date-range-days">
          {getDaysInMonth(monthDate).map(({ date, isCurrentMonth }, i) => (
            <button
              key={i}
              type="button"
              className={cn(
                'date-range-day',
                !isCurrentMonth && 'date-range-day-outside',
                isInRange(date) && 'date-range-day-in-range',
                isRangeStart(date) && 'date-range-day-start',
                isRangeEnd(date) && 'date-range-day-end'
              )}
              onClick={() => handleSelect(date)}
              onMouseEnter={() => selecting === 'end' && setHoverDate(date)}
            >
              {date.getDate()}
            </button>
          ))}
        </div>
      </div>
    );

    return (
      <div ref={containerRef} className={cn('date-range-picker', `date-range-picker-${size}`, className)} {...props}>
        <div
          ref={ref}
          className={cn(
            'date-range-input',
            error && 'date-range-error',
            disabled && 'date-range-disabled',
            open && 'date-range-open'
          )}
          onClick={() => !disabled && setOpen(!open)}
        >
          <input type="text" readOnly placeholder={startPlaceholder} value={formatDate(value.start)} className="date-range-input-field" />
          <span className="date-range-separator">→</span>
          <input type="text" readOnly placeholder={endPlaceholder} value={formatDate(value.end)} className="date-range-input-field" />
          <svg className="date-range-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
            <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </div>

        {open && (
          <div className="date-range-dropdown">
            <button type="button" className="date-range-nav date-range-nav-prev" onClick={() => setLeftMonth(new Date(leftMonth.getFullYear(), leftMonth.getMonth() - 1, 1))}>
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            {renderCalendar(leftMonth)}
            {renderCalendar(rightMonth)}
            <button type="button" className="date-range-nav date-range-nav-next" onClick={() => setLeftMonth(new Date(leftMonth.getFullYear(), leftMonth.getMonth() + 1, 1))}>
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        )}
      </div>
    );
  }
);

DateRangePicker.displayName = 'DateRangePicker';
