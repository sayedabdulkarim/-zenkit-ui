import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Slider value */
  value?: number;
  /** Default value */
  defaultValue?: number;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step increment */
  step?: number;
  /** Show marks */
  showMarks?: boolean;
  /** Show tooltip */
  showTooltip?: boolean;
  /** Slider size */
  size?: 'sm' | 'md' | 'lg';
  /** Slider color */
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
}

const sizeClasses = {
  sm: 'slider-sm',
  md: '',
  lg: 'slider-lg',
};

const colorClasses = {
  primary: 'slider-primary',
  secondary: 'slider-secondary',
  success: 'slider-success',
  danger: 'slider-danger',
  warning: 'slider-warning',
};

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      value,
      defaultValue = 0,
      min = 0,
      max = 100,
      step = 1,
      showMarks = false,
      size = 'md',
      color = 'primary',
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const currentValue = value ?? defaultValue;
    const percentage = ((currentValue - min) / (max - min)) * 100;

    return (
      <div
        className={cn(
          'slider-wrapper',
          sizeClasses[size],
          colorClasses[color],
          disabled && 'slider-disabled',
          className
        )}
      >
        <input
          ref={ref}
          type="range"
          className="slider"
          value={value}
          defaultValue={value === undefined ? defaultValue : undefined}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          style={{
            background: `linear-gradient(to right, var(--slider-fill-color) 0%, var(--slider-fill-color) ${percentage}%, var(--slider-track-color) ${percentage}%, var(--slider-track-color) 100%)`,
          }}
          {...props}
        />
        {showMarks && (
          <div className="slider-marks">
            <span className="slider-mark">{min}</span>
            <span className="slider-mark">{max}</span>
          </div>
        )}
      </div>
    );
  }
);

Slider.displayName = 'Slider';
