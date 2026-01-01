import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface StatisticProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'prefix'> {
  /** Statistic title */
  title?: ReactNode;
  /** Statistic value */
  value: ReactNode;
  /** Value prefix */
  prefix?: ReactNode;
  /** Value suffix */
  suffix?: ReactNode;
  /** Precision for number values */
  precision?: number;
  /** Loading state */
  loading?: boolean;
  /** Value style */
  valueStyle?: React.CSSProperties;
  /** Formatter function */
  formatter?: (value: ReactNode) => ReactNode;
}

export interface StatisticCountdownProps extends Omit<StatisticProps, 'value'> {
  /** Target timestamp (ms) */
  value: number;
  /** Format string */
  format?: string;
  /** Countdown finish callback */
  onFinish?: () => void;
}

export const Statistic = forwardRef<HTMLDivElement, StatisticProps>(
  (
    {
      title,
      value,
      prefix,
      suffix,
      precision,
      loading = false,
      valueStyle,
      formatter,
      className,
      ...props
    },
    ref
  ) => {
    const formatValue = () => {
      if (formatter) {
        return formatter(value);
      }

      if (typeof value === 'number' && precision !== undefined) {
        return value.toFixed(precision);
      }

      if (typeof value === 'number') {
        return value.toLocaleString();
      }

      return value;
    };

    return (
      <div ref={ref} className={cn('statistic', className)} {...props}>
        {title && <div className="statistic-title">{title}</div>}
        <div className="statistic-content" style={valueStyle}>
          {loading ? (
            <span className="statistic-skeleton" />
          ) : (
            <>
              {prefix && <span className="statistic-prefix">{prefix}</span>}
              <span className="statistic-value">{formatValue()}</span>
              {suffix && <span className="statistic-suffix">{suffix}</span>}
            </>
          )}
        </div>
      </div>
    );
  }
);

Statistic.displayName = 'Statistic';

// Statistic Group for displaying multiple statistics
export interface StatisticGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Divider between items */
  divider?: boolean;
}

export const StatisticGroup = forwardRef<HTMLDivElement, StatisticGroupProps>(
  ({ divider = true, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('statistic-group', divider && 'statistic-group-divider', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

StatisticGroup.displayName = 'StatisticGroup';
