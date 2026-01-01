'use client';

import { forwardRef, useState, useRef, useEffect, type InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface TimePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'size'> {
  /** Selected time */
  value?: string;
  /** On change callback */
  onChange?: (time: string) => void;
  /** Use 12-hour format */
  use12Hours?: boolean;
  /** Show seconds */
  showSeconds?: boolean;
  /** Hour step */
  hourStep?: number;
  /** Minute step */
  minuteStep?: number;
  /** Second step */
  secondStep?: number;
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Error state */
  error?: boolean;
  /** Clearable */
  clearable?: boolean;
}

export const TimePicker = forwardRef<HTMLInputElement, TimePickerProps>(
  (
    {
      value = '',
      onChange,
      use12Hours = false,
      showSeconds = false,
      hourStep = 1,
      minuteStep = 1,
      secondStep = 1,
      size = 'md',
      error = false,
      clearable = true,
      disabled,
      placeholder = 'Select time',
      className,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const [hours, minutes, seconds] = value.split(':').map(Number);
    const [period, setPeriod] = useState<'AM' | 'PM'>(hours >= 12 ? 'PM' : 'AM');

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };

      if (open) document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open]);

    const generateOptions = (max: number, step: number) => {
      const options: number[] = [];
      for (let i = 0; i < max; i += step) {
        options.push(i);
      }
      return options;
    };

    const hourOptions = generateOptions(use12Hours ? 12 : 24, hourStep);
    const minuteOptions = generateOptions(60, minuteStep);
    const secondOptions = generateOptions(60, secondStep);

    const formatTime = (h: number, m: number, s: number) => {
      const parts = [
        h.toString().padStart(2, '0'),
        m.toString().padStart(2, '0'),
      ];
      if (showSeconds) parts.push(s.toString().padStart(2, '0'));
      return parts.join(':');
    };

    const handleSelect = (type: 'hour' | 'minute' | 'second', val: number) => {
      let h = hours || 0;
      let m = minutes || 0;
      let s = seconds || 0;

      if (type === 'hour') {
        h = use12Hours && period === 'PM' ? (val === 12 ? 12 : val + 12) : (use12Hours && val === 12 ? 0 : val);
      } else if (type === 'minute') {
        m = val;
      } else {
        s = val;
      }

      onChange?.(formatTime(h, m, s));
    };

    const displayValue = value
      ? use12Hours
        ? `${(hours % 12 || 12).toString().padStart(2, '0')}:${minutes?.toString().padStart(2, '0') || '00'}${showSeconds ? `:${seconds?.toString().padStart(2, '0') || '00'}` : ''} ${hours >= 12 ? 'PM' : 'AM'}`
        : value
      : '';

    return (
      <div ref={containerRef} className={cn('time-picker', `time-picker-${size}`, className)}>
        <div
          className={cn(
            'time-picker-input',
            error && 'time-picker-error',
            disabled && 'time-picker-disabled',
            open && 'time-picker-open'
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
            className="time-picker-input-field"
            {...props}
          />
          <svg className="time-picker-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
          </svg>
        </div>

        {open && (
          <div className="time-picker-dropdown">
            <div className="time-picker-column">
              {hourOptions.map((h) => (
                <button
                  key={h}
                  type="button"
                  className={cn('time-picker-option', (use12Hours ? (hours % 12 || 12) : hours) === h && 'time-picker-option-selected')}
                  onClick={() => handleSelect('hour', h)}
                >
                  {(use12Hours ? (h === 0 ? 12 : h) : h).toString().padStart(2, '0')}
                </button>
              ))}
            </div>
            <div className="time-picker-column">
              {minuteOptions.map((m) => (
                <button
                  key={m}
                  type="button"
                  className={cn('time-picker-option', minutes === m && 'time-picker-option-selected')}
                  onClick={() => handleSelect('minute', m)}
                >
                  {m.toString().padStart(2, '0')}
                </button>
              ))}
            </div>
            {showSeconds && (
              <div className="time-picker-column">
                {secondOptions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={cn('time-picker-option', seconds === s && 'time-picker-option-selected')}
                    onClick={() => handleSelect('second', s)}
                  >
                    {s.toString().padStart(2, '0')}
                  </button>
                ))}
              </div>
            )}
            {use12Hours && (
              <div className="time-picker-column time-picker-column-period">
                <button
                  type="button"
                  className={cn('time-picker-option', hours < 12 && 'time-picker-option-selected')}
                  onClick={() => {
                    setPeriod('AM');
                    if (hours >= 12) onChange?.(formatTime(hours - 12, minutes || 0, seconds || 0));
                  }}
                >
                  AM
                </button>
                <button
                  type="button"
                  className={cn('time-picker-option', hours >= 12 && 'time-picker-option-selected')}
                  onClick={() => {
                    setPeriod('PM');
                    if (hours < 12) onChange?.(formatTime(hours + 12, minutes || 0, seconds || 0));
                  }}
                >
                  PM
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

TimePicker.displayName = 'TimePicker';
