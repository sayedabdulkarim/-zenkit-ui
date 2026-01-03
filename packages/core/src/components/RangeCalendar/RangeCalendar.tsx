import {
  forwardRef,
  useState,
  useMemo,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { cn } from '../../utils/cn';

export type RangeCalendarSize = 'sm' | 'md' | 'lg';

export interface CalendarDateRange {
  start: Date | null;
  end: Date | null;
}

export interface RangeCalendarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  /** Selected date range */
  value?: CalendarDateRange;
  /** Default date range (uncontrolled) */
  defaultValue?: CalendarDateRange;
  /** Callback when range changes */
  onChange?: (range: CalendarDateRange) => void;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Size variant */
  size?: RangeCalendarSize;
  /** Show two months side by side */
  dual?: boolean;
  /** Locale for formatting */
  locale?: string;
  /** Week starts on (0 = Sunday, 1 = Monday) */
  weekStartsOn?: 0 | 1;
  /** Preset ranges */
  presets?: Array<{
    label: string;
    value: CalendarDateRange;
  }>;
}

const sizeClasses: Record<RangeCalendarSize, string> = {
  sm: 'range-calendar-sm',
  md: '',
  lg: 'range-calendar-lg',
};

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

const isSameDay = (date1: Date | null, date2: Date | null) => {
  if (!date1 || !date2) return false;
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

const isInRange = (date: Date, start: Date | null, end: Date | null) => {
  if (!start || !end) return false;
  return date > start && date < end;
};

const isToday = (date: Date) => {
  const today = new Date();
  return isSameDay(date, today);
};

export const RangeCalendar = forwardRef<HTMLDivElement, RangeCalendarProps>(
  (
    {
      value,
      defaultValue = { start: null, end: null },
      onChange,
      minDate,
      maxDate,
      size = 'md',
      dual = false,
      locale = 'en-US',
      weekStartsOn = 0,
      presets,
      className,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState<CalendarDateRange>(defaultValue);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selecting, setSelecting] = useState<'start' | 'end' | null>(null);

    const range = value ?? internalValue;

    const setRange = (newRange: CalendarDateRange) => {
      if (!value) {
        setInternalValue(newRange);
      }
      onChange?.(newRange);
    };

    const handleDayClick = (date: Date) => {
      if (!selecting || selecting === 'start') {
        setRange({ start: date, end: null });
        setSelecting('end');
      } else {
        if (range.start && date < range.start) {
          setRange({ start: date, end: range.start });
        } else {
          setRange({ ...range, end: date });
        }
        setSelecting(null);
      }
    };

    const handlePresetClick = (preset: CalendarDateRange) => {
      setRange(preset);
      setSelecting(null);
    };

    const navigateMonth = (direction: number) => {
      setCurrentMonth(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth() + direction, 1)
      );
    };

    const renderMonth = (monthDate: Date) => {
      const year = monthDate.getFullYear();
      const month = monthDate.getMonth();
      const daysInMonth = getDaysInMonth(year, month);
      const firstDay = getFirstDayOfMonth(year, month);
      const days: ReactNode[] = [];

      // Empty cells for days before the first day of the month
      for (let i = 0; i < firstDay; i++) {
        days.push(<div key={`empty-${i}`} className="range-calendar-day range-calendar-day-outside" />);
      }

      // Days of the month
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const isDisabled =
          (minDate && date < minDate) || (maxDate && date > maxDate);
        const isStart = isSameDay(date, range.start);
        const isEnd = isSameDay(date, range.end);
        const inRange = isInRange(date, range.start, range.end);

        days.push(
          <button
            key={day}
            type="button"
            className={cn(
              'range-calendar-day',
              isToday(date) && 'range-calendar-day-today',
              isDisabled && 'range-calendar-day-disabled',
              isStart && 'range-calendar-day-range-start',
              isEnd && 'range-calendar-day-range-end',
              inRange && 'range-calendar-day-in-range'
            )}
            onClick={() => !isDisabled && handleDayClick(date)}
            disabled={isDisabled}
          >
            {day}
          </button>
        );
      }

      return (
        <div className="range-calendar-month">
          <div className="range-calendar-header">
            <span className="range-calendar-title">
              {monthDate.toLocaleDateString(locale, { month: 'long', year: 'numeric' })}
            </span>
          </div>
          <div className="range-calendar-weekdays">
            {WEEKDAYS.map((day) => (
              <div key={day} className="range-calendar-weekday">
                {day}
              </div>
            ))}
          </div>
          <div className="range-calendar-days">{days}</div>
        </div>
      );
    };

    const secondMonth = useMemo(
      () => new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1),
      [currentMonth]
    );

    return (
      <div
        ref={ref}
        className={cn(
          'range-calendar',
          sizeClasses[size],
          dual && 'range-calendar-dual',
          presets && 'range-calendar-with-presets',
          className
        )}
        {...props}
      >
        {presets && (
          <div className="range-calendar-presets">
            {presets.map((preset, index) => (
              <button
                key={index}
                type="button"
                className={cn(
                  'range-calendar-preset',
                  isSameDay(preset.value.start, range.start) &&
                    isSameDay(preset.value.end, range.end) &&
                    'range-calendar-preset-active'
                )}
                onClick={() => handlePresetClick(preset.value)}
              >
                {preset.label}
              </button>
            ))}
          </div>
        )}

        <div className="range-calendar-nav">
          <button
            type="button"
            className="range-calendar-nav-btn"
            onClick={() => navigateMonth(-1)}
            aria-label="Previous month"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M10.354 3.646a.5.5 0 010 .708L6.707 8l3.647 3.646a.5.5 0 01-.708.708l-4-4a.5.5 0 010-.708l4-4a.5.5 0 01.708 0z" />
            </svg>
          </button>
          <button
            type="button"
            className="range-calendar-nav-btn"
            onClick={() => navigateMonth(1)}
            aria-label="Next month"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M5.646 3.646a.5.5 0 01.708 0l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L9.293 8 5.646 4.354a.5.5 0 010-.708z" />
            </svg>
          </button>
        </div>

        {renderMonth(currentMonth)}
        {dual && (
          <>
            <div className="range-calendar-divider" />
            {renderMonth(secondMonth)}
          </>
        )}

        {(range.start || range.end) && (
          <div className="range-calendar-footer">
            <span className="range-calendar-selected-range">
              {range.start?.toLocaleDateString(locale)}
              {range.start && range.end && ' - '}
              {range.end?.toLocaleDateString(locale)}
            </span>
          </div>
        )}
      </div>
    );
  }
);

RangeCalendar.displayName = 'RangeCalendar';
