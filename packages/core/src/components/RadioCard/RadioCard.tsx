'use client';

import { forwardRef, createContext, useContext, type InputHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

// RadioCard Group Context
interface RadioCardGroupContextValue {
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const RadioCardGroupContext = createContext<RadioCardGroupContextValue>({});

// RadioCard Group Component
export interface RadioCardGroupProps {
  /** Children */
  children: ReactNode;
  /** Group name */
  name?: string;
  /** Selected value */
  value?: string;
  /** Default value */
  defaultValue?: string;
  /** On change callback */
  onChange?: (value: string) => void;
  /** Disabled state */
  disabled?: boolean;
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Layout direction */
  direction?: 'horizontal' | 'vertical';
  /** Number of columns (when horizontal) */
  columns?: number;
  /** Gap between cards */
  gap?: 'sm' | 'md' | 'lg';
  /** Class name */
  className?: string;
}

export const RadioCardGroup = ({
  children,
  name,
  value,
  onChange,
  disabled = false,
  size = 'md',
  direction = 'vertical',
  columns,
  gap = 'md',
  className,
}: RadioCardGroupProps) => {
  const gapSizes = { sm: '0.5rem', md: '1rem', lg: '1.5rem' };

  return (
    <RadioCardGroupContext.Provider value={{ name, value, onChange, disabled, size }}>
      <div
        role="radiogroup"
        className={cn('radio-card-group', className)}
        style={{
          display: direction === 'horizontal' || columns ? 'grid' : 'flex',
          flexDirection: direction === 'vertical' && !columns ? 'column' : undefined,
          gridTemplateColumns: columns ? `repeat(${columns}, 1fr)` : direction === 'horizontal' ? 'repeat(auto-fit, minmax(200px, 1fr))' : undefined,
          gap: gapSizes[gap],
        }}
      >
        {children}
      </div>
    </RadioCardGroupContext.Provider>
  );
};

RadioCardGroup.displayName = 'RadioCardGroup';

// RadioCard Component
export interface RadioCardProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'title'> {
  /** Card title */
  title?: ReactNode;
  /** Card description */
  description?: ReactNode;
  /** Card icon */
  icon?: ReactNode;
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** With border */
  withBorder?: boolean;
  /** With check indicator */
  withIndicator?: boolean;
  /** Custom content */
  children?: ReactNode;
}

export const RadioCard = forwardRef<HTMLInputElement, RadioCardProps>(
  (
    {
      title,
      description,
      icon,
      size: sizeProp,
      withBorder = true,
      withIndicator = true,
      disabled: disabledProp,
      className,
      id,
      value,
      checked,
      onChange,
      children,
      ...props
    },
    ref
  ) => {
    const group = useContext(RadioCardGroupContext);

    const size = sizeProp ?? group.size ?? 'md';
    const disabled = disabledProp ?? group.disabled ?? false;
    const name = props.name ?? group.name;
    const isChecked = group.value !== undefined ? group.value === value : checked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (group.onChange && value !== undefined) {
        group.onChange(String(value));
      }
      onChange?.(e);
    };

    const radioId = id || `radio-card-${Math.random().toString(36).substr(2, 9)}`;

    const sizeClasses = {
      sm: 'radio-card-sm',
      md: 'radio-card-md',
      lg: 'radio-card-lg',
    };

    return (
      <label
        htmlFor={radioId}
        className={cn(
          'radio-card',
          sizeClasses[size],
          withBorder && 'radio-card-bordered',
          isChecked && 'radio-card-checked',
          disabled && 'radio-card-disabled',
          className
        )}
      >
        <input
          ref={ref}
          type="radio"
          id={radioId}
          name={name}
          value={value}
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          className="radio-card-input"
          {...props}
        />

        <div className="radio-card-content">
          {icon && <div className="radio-card-icon">{icon}</div>}
          <div className="radio-card-body">
            {title && <div className="radio-card-title">{title}</div>}
            {description && <div className="radio-card-description">{description}</div>}
            {children}
          </div>
        </div>

        {withIndicator && (
          <div className={cn('radio-card-indicator', isChecked && 'radio-card-indicator--checked')}>
            {isChecked && (
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </div>
        )}
      </label>
    );
  }
);

RadioCard.displayName = 'RadioCard';

export const useRadioCardGroup = () => useContext(RadioCardGroupContext);
