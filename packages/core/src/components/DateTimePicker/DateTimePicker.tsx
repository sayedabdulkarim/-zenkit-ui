'use client';

import { forwardRef, useState, useRef, useEffect, type InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface DateTimePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'size'> {
  /** Selected date and time */
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
  /** Clearable */
  clearable?: boolean;
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Error state */
  error?: boolean;
  /** Time step in minutes */
  timeStep?: number;
  /** 12 or 24 hour format */
  hourFormat?: '12' | '24';
}

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const formatDateTime = (date: Date, format: string = 'MM/DD/YYYY HH:mm', hourFormat: '12' | '24' = '24'): string => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  let period = '';

  if (hourFormat === '12') {
    period = hours >= 12 ? ' PM' : ' AM';
    hours = hours % 12 || 12;
  }

  const hoursStr = hours.toString().padStart(2, '0');
  return format
    .replace('DD', day)
    .replace('MM', month)
    .replace('YYYY', year.toString())
    .replace('HH', hoursStr)
    .replace('mm', minutes) + (hourFormat === '12' ? period : '');
};

export const DateTimePicker = forwardRef<HTMLInputElement, DateTimePickerProps>(
  (
    {
      value,
      onChange,
      placeholder = 'Select date and time',
      format = 'MM/DD/YYYY HH:mm',
      minDate,
      maxDate,
      clearable = true,
      size = 'md',
      error = false,
      timeStep = 15,
      hourFormat = '24',
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [viewDate, setViewDate] = useState(value || new Date());
    const [selectedHour, setSelectedHour] = useState(value?.getHours() || 12);
    const [selectedMinute, setSelectedMinute] = useState(value?.getMinutes() || 0);
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

    useEffect(() => {
      if (value) {
        setSelectedHour(value.getHours());
        setSelectedMinute(value.getMinutes());
      }
    }, [value]);

    const getDaysInMonth = (date: Date) => {
      const year = date.getFullYear();
      const month = date.getMonth();
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const daysInPrevMonth = new Date(year, month, 0).getDate();

      const days: { date: Date; isCurrentMonth: boolean }[] = [];

      for (let i = firstDay - 1; i >= 0; i--) {
        days.push({
          date: new Date(year, month - 1, daysInPrevMonth - i),
          isCurrentMonth: false,
        });
      }

      for (let i = 1; i <= daysInMonth; i++) {
        days.push({
          date: new Date(year, month, i),
          isCurrentMonth: true,
        });
      }

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
      return false;
    };

    const isSelected = (date: Date) => {
      return value?.toDateString() === date.toDateString();
    };

    const isToday = (date: Date) => {
      return new Date().toDateString() === date.toDateString();
    };

    const handleSelect = (date: Date) => {
      if (isDisabled(date)) return;
      const newDate = new Date(date);
      newDate.setHours(selectedHour, selectedMinute, 0, 0);
      onChange?.(newDate);
    };

    const handleTimeChange = (hour: number, minute: number) => {
      setSelectedHour(hour);
      setSelectedMinute(minute);
      if (value) {
        const newDate = new Date(value);
        newDate.setHours(hour, minute, 0, 0);
        onChange?.(newDate);
      }
    };

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      onChange?.(null);
    };

    const navigateMonth = (delta: number) => {
      setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + delta, 1));
    };

    const hours = hourFormat === '12' ? Array.from({ length: 12 }, (_, i) => i + 1) : Array.from({ length: 24 }, (_, i) => i);
    const minutes = Array.from({ length: 60 / timeStep }, (_, i) => i * timeStep);

    return (
      <div ref={containerRef} className={cn('zk-datetime-picker', `zk-datetime-picker--${size}`, className)}>
        <div
          className={cn(
            'zk-datetime-picker__input',
            error && 'zk-datetime-picker__input--error',
            disabled && 'zk-datetime-picker__input--disabled',
            open && 'zk-datetime-picker__input--open'
          )}
          onClick={() => !disabled && setOpen(!open)}
        >
          <input
            ref={ref}
            type="text"
            readOnly
            disabled={disabled}
            placeholder={placeholder}
            value={value ? formatDateTime(value, format, hourFormat) : ''}
            className="zk-datetime-picker__field"
            {...props}
          />
          <div className="zk-datetime-picker__icons">
            {clearable && value && !disabled && (
              <button type="button" className="zk-datetime-picker__clear" onClick={handleClear}>
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
            <svg className="zk-datetime-picker__icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
              <circle cx="17" cy="17" r="3" />
              <line x1="17" y1="15" x2="17" y2="17" />
              <line x1="17" y1="17" x2="18.5" y2="18" />
            </svg>
          </div>
        </div>

        {open && (
          <div className="zk-datetime-picker__dropdown">
            <div className="zk-datetime-picker__calendar">
              <div className="zk-datetime-picker__header">
                <button type="button" onClick={() => navigateMonth(-1)} className="zk-datetime-picker__nav">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <span className="zk-datetime-picker__title">
                  {MONTHS[viewDate.getMonth()]} {viewDate.getFullYear()}
                </span>
                <button type="button" onClick={() => navigateMonth(1)} className="zk-datetime-picker__nav">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
              <div className="zk-datetime-picker__days-header">
                {DAYS.map(day => <div key={day} className="zk-datetime-picker__day-name">{day}</div>)}
              </div>
              <div className="zk-datetime-picker__days">
                {getDaysInMonth(viewDate).map(({ date, isCurrentMonth }, i) => (
                  <button
                    key={i}
                    type="button"
                    className={cn(
                      'zk-datetime-picker__day',
                      !isCurrentMonth && 'zk-datetime-picker__day--outside',
                      isSelected(date) && 'zk-datetime-picker__day--selected',
                      isToday(date) && 'zk-datetime-picker__day--today',
                      isDisabled(date) && 'zk-datetime-picker__day--disabled'
                    )}
                    onClick={() => handleSelect(date)}
                    disabled={isDisabled(date)}
                  >
                    {date.getDate()}
                  </button>
                ))}
              </div>
            </div>

            <div className="zk-datetime-picker__time">
              <div className="zk-datetime-picker__time-label">Time</div>
              <div className="zk-datetime-picker__time-selectors">
                <select
                  className="zk-datetime-picker__time-select"
                  value={selectedHour}
                  onChange={(e) => handleTimeChange(Number(e.target.value), selectedMinute)}
                >
                  {hours.map(h => (
                    <option key={h} value={hourFormat === '12' ? (h === 12 ? 12 : h) : h}>
                      {h.toString().padStart(2, '0')}
                    </option>
                  ))}
                </select>
                <span className="zk-datetime-picker__time-separator">:</span>
                <select
                  className="zk-datetime-picker__time-select"
                  value={selectedMinute}
                  onChange={(e) => handleTimeChange(selectedHour, Number(e.target.value))}
                >
                  {minutes.map(m => (
                    <option key={m} value={m}>{m.toString().padStart(2, '0')}</option>
                  ))}
                </select>
                {hourFormat === '12' && (
                  <select
                    className="zk-datetime-picker__time-select"
                    value={selectedHour >= 12 ? 'PM' : 'AM'}
                    onChange={(e) => {
                      const isPM = e.target.value === 'PM';
                      const hour12 = selectedHour % 12 || 12;
                      const newHour = isPM ? (hour12 === 12 ? 12 : hour12 + 12) : (hour12 === 12 ? 0 : hour12);
                      handleTimeChange(newHour, selectedMinute);
                    }}
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);

DateTimePicker.displayName = 'DateTimePicker';
