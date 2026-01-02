'use client';

import React, { forwardRef, createContext, useContext, useCallback } from 'react';
import { cn } from '../../utils/cn';

export interface CheckboxGroupOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
  description?: string;
}

export interface CheckboxGroupContextValue {
  value: string[];
  onChange: (value: string) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  name?: string;
}

const CheckboxGroupContext = createContext<CheckboxGroupContextValue | null>(null);

export const useCheckboxGroup = () => {
  const context = useContext(CheckboxGroupContext);
  return context;
};

export interface CheckboxGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Current selected values */
  value?: string[];
  /** Default selected values */
  defaultValue?: string[];
  /** Called when selection changes */
  onChange?: (value: string[]) => void;
  /** Options to render */
  options?: CheckboxGroupOption[];
  /** Whether the group is disabled */
  disabled?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Layout orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Name for form submission */
  name?: string;
  /** Label for the group */
  label?: React.ReactNode;
  /** Whether selection is required */
  required?: boolean;
  /** Error state */
  error?: boolean;
  /** Error message */
  errorMessage?: React.ReactNode;
  /** Gap between items */
  gap?: 'xs' | 'sm' | 'md' | 'lg';
}

export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (
    {
      className,
      value,
      defaultValue = [],
      onChange,
      options,
      disabled,
      size = 'md',
      orientation = 'vertical',
      name,
      label,
      required,
      error,
      errorMessage,
      gap = 'sm',
      children,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState<string[]>(defaultValue);

    const currentValue = value !== undefined ? value : internalValue;

    const handleChange = useCallback(
      (itemValue: string) => {
        const newValue = currentValue.includes(itemValue)
          ? currentValue.filter((v) => v !== itemValue)
          : [...currentValue, itemValue];

        setInternalValue(newValue);
        onChange?.(newValue);
      },
      [currentValue, onChange]
    );

    const contextValue: CheckboxGroupContextValue = {
      value: currentValue,
      onChange: handleChange,
      disabled,
      size,
      name,
    };

    const renderOptions = () => {
      if (!options) return null;

      return options.map((option) => (
        <label
          key={option.value}
          className={cn(
            'zk-checkbox-group__item',
            currentValue.includes(option.value) && 'zk-checkbox-group__item--checked',
            (option.disabled || disabled) && 'zk-checkbox-group__item--disabled'
          )}
        >
          <input
            type="checkbox"
            name={name}
            value={option.value}
            checked={currentValue.includes(option.value)}
            onChange={() => handleChange(option.value)}
            disabled={option.disabled || disabled}
            className="zk-checkbox-group__input"
          />
          <span className="zk-checkbox-group__checkbox">
            {currentValue.includes(option.value) && '✓'}
          </span>
          <span className="zk-checkbox-group__content">
            <span className="zk-checkbox-group__label">{option.label}</span>
            {option.description && (
              <span className="zk-checkbox-group__description">{option.description}</span>
            )}
          </span>
        </label>
      ));
    };

    return (
      <CheckboxGroupContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn(
            'zk-checkbox-group',
            `zk-checkbox-group--${size}`,
            `zk-checkbox-group--${orientation}`,
            `zk-checkbox-group--gap-${gap}`,
            error && 'zk-checkbox-group--error',
            disabled && 'zk-checkbox-group--disabled',
            className
          )}
          role="group"
          aria-labelledby={label ? 'checkbox-group-label' : undefined}
          {...props}
        >
          {label && (
            <div id="checkbox-group-label" className="zk-checkbox-group__group-label">
              {label}
              {required && <span className="zk-checkbox-group__required">*</span>}
            </div>
          )}
          <div className="zk-checkbox-group__options">
            {options ? renderOptions() : children}
          </div>
          {error && errorMessage && (
            <div className="zk-checkbox-group__error">{errorMessage}</div>
          )}
        </div>
      </CheckboxGroupContext.Provider>
    );
  }
);

CheckboxGroup.displayName = 'CheckboxGroup';

// CheckboxGroupItem component for compound usage
export interface CheckboxGroupItemProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  /** Item value */
  value: string;
  /** Item label */
  label?: React.ReactNode;
  /** Item description */
  description?: React.ReactNode;
}

export const CheckboxGroupItem = forwardRef<HTMLInputElement, CheckboxGroupItemProps>(
  ({ className, value, label, description, disabled, ...props }, ref) => {
    const context = useCheckboxGroup();

    if (!context) {
      throw new Error('CheckboxGroupItem must be used within a CheckboxGroup');
    }

    const isChecked = context.value.includes(value);
    const isDisabled = disabled || context.disabled;

    return (
      <label
        className={cn(
          'zk-checkbox-group__item',
          isChecked && 'zk-checkbox-group__item--checked',
          isDisabled && 'zk-checkbox-group__item--disabled',
          className
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          name={context.name}
          value={value}
          checked={isChecked}
          onChange={() => context.onChange(value)}
          disabled={isDisabled}
          className="zk-checkbox-group__input"
          {...props}
        />
        <span className="zk-checkbox-group__checkbox">
          {isChecked && '✓'}
        </span>
        {(label || description) && (
          <span className="zk-checkbox-group__content">
            {label && <span className="zk-checkbox-group__label">{label}</span>}
            {description && <span className="zk-checkbox-group__description">{description}</span>}
          </span>
        )}
      </label>
    );
  }
);

CheckboxGroupItem.displayName = 'CheckboxGroupItem';
