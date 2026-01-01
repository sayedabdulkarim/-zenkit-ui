import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface SegmentedOption {
  value: string;
  label: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface SegmentedProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Options */
  options: (string | SegmentedOption)[];
  /** Selected value */
  value?: string;
  /** On change callback */
  onChange?: (value: string) => void;
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Block mode (full width) */
  block?: boolean;
  /** Disabled state */
  disabled?: boolean;
}

export const Segmented = forwardRef<HTMLDivElement, SegmentedProps>(
  (
    {
      options,
      value,
      onChange,
      size = 'md',
      block = false,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const normalizedOptions: SegmentedOption[] = options.map((opt) =>
      typeof opt === 'string' ? { value: opt, label: opt } : opt
    );

    return (
      <div
        ref={ref}
        role="radiogroup"
        className={cn(
          'segmented',
          `segmented-${size}`,
          block && 'segmented-block',
          disabled && 'segmented-disabled',
          className
        )}
        {...props}
      >
        {normalizedOptions.map((option) => {
          const isSelected = option.value === value;
          const isDisabled = disabled || option.disabled;

          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={isDisabled}
              className={cn(
                'segmented-item',
                isSelected && 'segmented-item-selected',
                isDisabled && 'segmented-item-disabled'
              )}
              onClick={() => !isDisabled && onChange?.(option.value)}
            >
              {option.icon && <span className="segmented-item-icon">{option.icon}</span>}
              <span className="segmented-item-label">{option.label}</span>
            </button>
          );
        })}
      </div>
    );
  }
);

Segmented.displayName = 'Segmented';
