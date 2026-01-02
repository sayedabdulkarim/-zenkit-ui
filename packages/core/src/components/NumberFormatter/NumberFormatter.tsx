'use client';

import { forwardRef, useMemo, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface NumberFormatterProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  /** Number value to format */
  value: number;
  /** Number of decimal places */
  decimalPlaces?: number;
  /** Locale for formatting */
  locale?: string;
  /** Format style */
  formatStyle?: 'decimal' | 'currency' | 'percent' | 'unit';
  /** Currency code (for currency style) */
  currency?: string;
  /** Currency display type */
  currencyDisplay?: 'symbol' | 'narrowSymbol' | 'code' | 'name';
  /** Unit type (for unit style) */
  unit?: string;
  /** Unit display type */
  unitDisplay?: 'short' | 'long' | 'narrow';
  /** Notation style */
  notation?: 'standard' | 'scientific' | 'engineering' | 'compact';
  /** Compact display */
  compactDisplay?: 'short' | 'long';
  /** Sign display */
  signDisplay?: 'auto' | 'never' | 'always' | 'exceptZero';
  /** Use grouping separators */
  useGrouping?: boolean;
  /** Prefix text */
  prefix?: string;
  /** Suffix text */
  suffix?: string;
  /** Minimum integer digits */
  minimumIntegerDigits?: number;
  /** Minimum fraction digits */
  minimumFractionDigits?: number;
  /** Maximum fraction digits */
  maximumFractionDigits?: number;
  /** Minimum significant digits */
  minimumSignificantDigits?: number;
  /** Maximum significant digits */
  maximumSignificantDigits?: number;
}

export const NumberFormatter = forwardRef<HTMLSpanElement, NumberFormatterProps>(
  (
    {
      className,
      value,
      decimalPlaces,
      locale = 'en-US',
      formatStyle = 'decimal',
      currency = 'USD',
      currencyDisplay = 'symbol',
      unit,
      unitDisplay = 'short',
      notation = 'standard',
      compactDisplay = 'short',
      signDisplay = 'auto',
      useGrouping = true,
      prefix = '',
      suffix = '',
      minimumIntegerDigits,
      minimumFractionDigits,
      maximumFractionDigits,
      minimumSignificantDigits,
      maximumSignificantDigits,
      ...props
    },
    ref
  ) => {
    const formattedValue = useMemo(() => {
      try {
        const options: Intl.NumberFormatOptions = {
          style: formatStyle,
          notation,
          compactDisplay: notation === 'compact' ? compactDisplay : undefined,
          signDisplay,
          useGrouping,
          minimumIntegerDigits,
          minimumFractionDigits: decimalPlaces ?? minimumFractionDigits,
          maximumFractionDigits: decimalPlaces ?? maximumFractionDigits,
          minimumSignificantDigits,
          maximumSignificantDigits,
        };

        if (formatStyle === 'currency') {
          options.currency = currency;
          options.currencyDisplay = currencyDisplay;
        }

        if (formatStyle === 'unit' && unit) {
          options.unit = unit;
          options.unitDisplay = unitDisplay;
        }

        const formatter = new Intl.NumberFormat(locale, options);
        return formatter.format(value);
      } catch {
        // Fallback for unsupported options
        return value.toLocaleString(locale);
      }
    }, [
      value,
      locale,
      formatStyle,
      currency,
      currencyDisplay,
      unit,
      unitDisplay,
      notation,
      compactDisplay,
      signDisplay,
      useGrouping,
      decimalPlaces,
      minimumIntegerDigits,
      minimumFractionDigits,
      maximumFractionDigits,
      minimumSignificantDigits,
      maximumSignificantDigits,
    ]);

    return (
      <span ref={ref} className={cn('zk-number-formatter', className)} {...props}>
        {prefix}{formattedValue}{suffix}
      </span>
    );
  }
);

NumberFormatter.displayName = 'NumberFormatter';

// Utility functions
export const formatNumber = (
  value: number,
  options?: Partial<Omit<NumberFormatterProps, 'className' | 'style' | 'id'>>
): string => {
  const {
    locale = 'en-US',
    formatStyle = 'decimal',
    decimalPlaces,
    currency = 'USD',
    notation = 'standard',
    prefix = '',
    suffix = '',
    useGrouping,
    minimumIntegerDigits,
    minimumFractionDigits,
    maximumFractionDigits,
    minimumSignificantDigits,
    maximumSignificantDigits,
  } = options || {};

  try {
    const formatOptions: Intl.NumberFormatOptions = {
      style: formatStyle,
      notation,
      useGrouping,
      minimumIntegerDigits,
      minimumFractionDigits: decimalPlaces ?? minimumFractionDigits,
      maximumFractionDigits: decimalPlaces ?? maximumFractionDigits,
      minimumSignificantDigits,
      maximumSignificantDigits,
    };

    if (formatStyle === 'currency') {
      formatOptions.currency = currency;
    }

    const formatter = new Intl.NumberFormat(locale, formatOptions);
    return `${prefix}${formatter.format(value)}${suffix}`;
  } catch {
    return `${prefix}${value}${suffix}`;
  }
};

export const formatCurrency = (
  value: number,
  currency = 'USD',
  locale = 'en-US'
): string => {
  return formatNumber(value, { formatStyle: 'currency', currency, locale });
};

export const formatPercent = (
  value: number,
  decimalPlaces = 0,
  locale = 'en-US'
): string => {
  return formatNumber(value, { formatStyle: 'percent', decimalPlaces, locale });
};

export const formatCompact = (
  value: number,
  locale = 'en-US'
): string => {
  return formatNumber(value, { notation: 'compact', locale });
};
