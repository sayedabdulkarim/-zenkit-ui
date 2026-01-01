import { forwardRef, createContext, useContext, type InputHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import type { Size, ColorScheme } from '../../types';

// Radio Group Context
interface RadioGroupContextValue {
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
  size?: Size;
  colorScheme?: ColorScheme;
  disabled?: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextValue>({});

// Radio Group Component
export interface RadioGroupProps {
  children: ReactNode;
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  size?: Size;
  colorScheme?: ColorScheme;
  disabled?: boolean;
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

export const RadioGroup = ({
  children,
  name,
  value,
  onChange,
  size = 'md',
  colorScheme = 'primary',
  disabled = false,
  direction = 'vertical',
  className,
}: RadioGroupProps) => {
  return (
    <RadioGroupContext.Provider value={{ name, value, onChange, size, colorScheme, disabled }}>
      <div
        role="radiogroup"
        className={cn(
          'form-radio-group',
          direction === 'horizontal' && 'form-radio-group-horizontal',
          className
        )}
        style={{
          display: 'flex',
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
          gap: direction === 'horizontal' ? '1.5rem' : '0.5rem',
        }}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

// Radio Component
export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Radio label */
  label?: ReactNode;
  /** Radio size */
  size?: Size;
  /** Color scheme */
  colorScheme?: ColorScheme;
  /** Error state */
  error?: boolean;
  /** Label position */
  labelPosition?: 'left' | 'right';
}

const sizeClasses: Record<Size, string> = {
  sm: 'form-check-sm',
  md: '',
  lg: 'form-check-lg',
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      size: sizeProp,
      colorScheme: colorSchemeProp,
      error = false,
      labelPosition = 'right',
      disabled: disabledProp,
      className,
      id,
      value,
      checked,
      onChange,
      ...props
    },
    ref
  ) => {
    const group = useContext(RadioGroupContext);

    const size = sizeProp ?? group.size ?? 'md';
    const colorScheme = colorSchemeProp ?? group.colorScheme ?? 'primary';
    const disabled = disabledProp ?? group.disabled ?? false;
    const name = props.name ?? group.name;

    const isChecked = group.value !== undefined ? group.value === value : checked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (group.onChange && value !== undefined) {
        group.onChange(String(value));
      }
      onChange?.(e);
    };

    const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div
        className={cn(
          'form-check',
          sizeClasses[size],
          labelPosition === 'left' && 'form-check-reverse',
          error && 'is-invalid',
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
          className={cn(
            'form-check-input',
            colorScheme !== 'primary' && `form-check-${colorScheme}`
          )}
          aria-invalid={error}
          {...props}
        />
        {label && (
          <label htmlFor={radioId} className="form-check-label">
            {label}
          </label>
        )}
      </div>
    );
  }
);

Radio.displayName = 'Radio';
RadioGroup.displayName = 'RadioGroup';
