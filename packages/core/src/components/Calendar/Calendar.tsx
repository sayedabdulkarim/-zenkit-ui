'use client';

import { forwardRef, useState, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface CalendarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Selected date */
  value?: Date;
  /** On change callback */
  onChange?: (date: Date) => void;
  /** Mode */
  mode?: 'month' | 'year';
  /** On mode change */
  onModeChange?: (mode: 'month' | 'year') => void;
  /** Full screen mode */
  fullscreen?: boolean;
  /** Disabled dates */
  disabledDate?: (date: Date) => boolean;
  /** Custom date cell render */
  dateCellRender?: (date: Date) => ReactNode;
  /** Custom month cell render */
  monthCellRender?: (month: number) => ReactNode;
  /** Header render */
  headerRender?: (config: { value: Date; onChange: (date: Date) => void }) => ReactNode;
}

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  (
    {
      value,
      onChange,
      mode = 'month',
      onModeChange,
      fullscreen = true,
      disabledDate,
      dateCellRender,
      monthCellRender,
      headerRender,
      className,
      ...props
    },
    ref
  ) => {
    const [currentDate, setCurrentDate] = useState(value || new Date());
    const [currentMode, setCurrentMode] = useState(mode);

    const handleModeChange = (newMode: 'month' | 'year') => {
      setCurrentMode(newMode);
      onModeChange?.(newMode);
    };

    const handleDateChange = (date: Date) => {
      setCurrentDate(date);
      onChange?.(date);
    };

    const navigateMonth = (delta: number) => {
      const newDate = new Date(currentDate);
      if (currentMode === 'month') {
        newDate.setMonth(newDate.getMonth() + delta);
      } else {
        newDate.setFullYear(newDate.getFullYear() + delta);
      }
      setCurrentDate(newDate);
    };

    const getDaysInMonth = () => {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
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

    const isToday = (date: Date) => new Date().toDateString() === date.toDateString();
    const isSelected = (date: Date) => value?.toDateString() === date.toDateString();

    const defaultHeader = (
      <div className="calendar-header">
        <button type="button" className="calendar-nav" onClick={() => navigateMonth(-1)}>
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div className="calendar-header-content">
          <button type="button" className="calendar-mode-btn" onClick={() => handleModeChange(currentMode === 'month' ? 'year' : 'month')}>
            {currentMode === 'month'
              ? `${MONTHS[currentDate.getMonth()]} ${currentDate.getFullYear()}`
              : currentDate.getFullYear()}
          </button>
        </div>
        <button type="button" className="calendar-nav" onClick={() => navigateMonth(1)}>
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    );

    return (
      <div
        ref={ref}
        className={cn('calendar', fullscreen && 'calendar-fullscreen', className)}
        {...props}
      >
        {headerRender ? headerRender({ value: currentDate, onChange: handleDateChange }) : defaultHeader}

        {currentMode === 'month' ? (
          <div className="calendar-body">
            <div className="calendar-days-header">
              {DAYS.map((day) => (
                <div key={day} className="calendar-day-name">{day}</div>
              ))}
            </div>
            <div className="calendar-days">
              {getDaysInMonth().map(({ date, isCurrentMonth }, i) => {
                const disabled = disabledDate?.(date);
                return (
                  <div
                    key={i}
                    className={cn(
                      'calendar-cell',
                      !isCurrentMonth && 'calendar-cell-outside',
                      isToday(date) && 'calendar-cell-today',
                      isSelected(date) && 'calendar-cell-selected',
                      disabled && 'calendar-cell-disabled'
                    )}
                    onClick={() => !disabled && handleDateChange(date)}
                  >
                    <div className="calendar-date">{date.getDate()}</div>
                    {dateCellRender && <div className="calendar-cell-content">{dateCellRender(date)}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="calendar-months">
            {MONTHS.map((month, i) => (
              <div
                key={month}
                className={cn(
                  'calendar-month-cell',
                  currentDate.getMonth() === i && 'calendar-month-selected'
                )}
                onClick={() => {
                  const newDate = new Date(currentDate);
                  newDate.setMonth(i);
                  handleDateChange(newDate);
                  handleModeChange('month');
                }}
              >
                {monthCellRender ? monthCellRender(i) : month}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

Calendar.displayName = 'Calendar';
