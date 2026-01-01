import { forwardRef, useState, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface RateProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Current value */
  value?: number;
  /** Default value */
  defaultValue?: number;
  /** Number of stars */
  count?: number;
  /** Allow half rating */
  allowHalf?: boolean;
  /** Allow clear */
  allowClear?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Read only */
  readOnly?: boolean;
  /** Custom character */
  character?: ReactNode;
  /** Change callback */
  onChange?: (value: number) => void;
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Tooltips for each star */
  tooltips?: string[];
}

const defaultStar = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const sizeClasses = {
  sm: 'rate-sm',
  md: '',
  lg: 'rate-lg',
};

export const Rate = forwardRef<HTMLDivElement, RateProps>(
  (
    {
      value: controlledValue,
      defaultValue = 0,
      count = 5,
      allowHalf = false,
      allowClear = true,
      disabled = false,
      readOnly = false,
      character = defaultStar,
      onChange,
      size = 'md',
      tooltips,
      className,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [hoverValue, setHoverValue] = useState<number | null>(null);
    const value = controlledValue ?? internalValue;

    const handleClick = (newValue: number) => {
      if (disabled || readOnly) return;

      // Allow clear
      if (allowClear && newValue === value) {
        const clearedValue = 0;
        if (controlledValue === undefined) {
          setInternalValue(clearedValue);
        }
        onChange?.(clearedValue);
        return;
      }

      if (controlledValue === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    };

    const handleMouseEnter = (starValue: number) => {
      if (disabled || readOnly) return;
      setHoverValue(starValue);
    };

    const handleMouseLeave = () => {
      setHoverValue(null);
    };

    const displayValue = hoverValue ?? value;

    const renderStar = (index: number) => {
      const starValue = index + 1;
      const halfValue = index + 0.5;
      const isFull = displayValue >= starValue;
      const isHalf = allowHalf && !isFull && displayValue >= halfValue;
      const isEmpty = !isFull && !isHalf;

      const tooltip = tooltips?.[index];

      return (
        <div
          key={index}
          className={cn(
            'rate-star',
            isFull && 'rate-star-full',
            isHalf && 'rate-star-half',
            isEmpty && 'rate-star-empty'
          )}
          onClick={() => handleClick(starValue)}
          onMouseEnter={() => handleMouseEnter(starValue)}
          title={tooltip}
        >
          {allowHalf && (
            <div
              className="rate-star-first"
              onClick={(e) => {
                e.stopPropagation();
                handleClick(halfValue);
              }}
              onMouseEnter={(e) => {
                e.stopPropagation();
                handleMouseEnter(halfValue);
              }}
            >
              {character}
            </div>
          )}
          <div className="rate-star-second">{character}</div>
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={cn(
          'rate',
          sizeClasses[size],
          disabled && 'rate-disabled',
          readOnly && 'rate-readonly',
          className
        )}
        onMouseLeave={handleMouseLeave}
        role="radiogroup"
        aria-label="Rating"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={count}
        {...props}
      >
        {Array.from({ length: count }).map((_, index) => renderStar(index))}
      </div>
    );
  }
);

Rate.displayName = 'Rate';
