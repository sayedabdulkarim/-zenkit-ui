import { forwardRef, createContext, useContext, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

interface ToggleGroupContextValue {
  value: string | string[];
  onValueChange: (value: string) => void;
  type: 'single' | 'multiple';
  size: 'sm' | 'md' | 'lg';
  variant: 'default' | 'outline';
  disabled: boolean;
}

const ToggleGroupContext = createContext<ToggleGroupContextValue | null>(null);

export interface ToggleGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Selection type */
  type?: 'single' | 'multiple';
  /** Selected value(s) */
  value?: string | string[];
  /** Default value(s) */
  defaultValue?: string | string[];
  /** On value change */
  onValueChange?: (value: string | string[]) => void;
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Variant */
  variant?: 'default' | 'outline';
  /** Disabled state */
  disabled?: boolean;
  /** Orientation */
  orientation?: 'horizontal' | 'vertical';
}

export const ToggleGroup = forwardRef<HTMLDivElement, ToggleGroupProps>(
  (
    {
      type = 'single',
      value,
      defaultValue,
      onValueChange,
      size = 'md',
      variant = 'default',
      disabled = false,
      orientation = 'horizontal',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const currentValue = value ?? defaultValue ?? (type === 'single' ? '' : []);

    const handleValueChange = (itemValue: string) => {
      if (type === 'single') {
        onValueChange?.(itemValue === currentValue ? '' : itemValue);
      } else {
        const arrayValue = Array.isArray(currentValue) ? currentValue : [];
        const newValue = arrayValue.includes(itemValue)
          ? arrayValue.filter((v) => v !== itemValue)
          : [...arrayValue, itemValue];
        onValueChange?.(newValue);
      }
    };

    return (
      <ToggleGroupContext.Provider
        value={{
          value: currentValue,
          onValueChange: handleValueChange,
          type,
          size,
          variant,
          disabled,
        }}
      >
        <div
          ref={ref}
          role="group"
          className={cn(
            'toggle-group',
            `toggle-group-${orientation}`,
            className
          )}
          {...props}
        >
          {children}
        </div>
      </ToggleGroupContext.Provider>
    );
  }
);

ToggleGroup.displayName = 'ToggleGroup';

// Toggle Group Item
export interface ToggleGroupItemProps extends HTMLAttributes<HTMLButtonElement> {
  /** Item value */
  value: string;
  /** Disabled state */
  disabled?: boolean;
}

export const ToggleGroupItem = forwardRef<HTMLButtonElement, ToggleGroupItemProps>(
  ({ value, disabled: itemDisabled, className, children, ...props }, ref) => {
    const context = useContext(ToggleGroupContext);

    if (!context) {
      throw new Error('ToggleGroupItem must be used within a ToggleGroup');
    }

    const { value: groupValue, onValueChange, type, size, variant, disabled: groupDisabled } = context;

    const isPressed = type === 'single'
      ? groupValue === value
      : Array.isArray(groupValue) && groupValue.includes(value);

    const isDisabled = groupDisabled || itemDisabled;

    return (
      <button
        ref={ref}
        type="button"
        role="radio"
        aria-checked={isPressed}
        disabled={isDisabled}
        className={cn(
          'toggle-group-item',
          `toggle-group-item-${size}`,
          `toggle-group-item-${variant}`,
          isPressed && 'toggle-group-item-pressed',
          className
        )}
        onClick={() => onValueChange(value)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ToggleGroupItem.displayName = 'ToggleGroupItem';
