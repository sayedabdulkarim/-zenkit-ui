'use client';

import React, { forwardRef, useCallback, useRef, useState, useEffect } from 'react';
import { cn } from '../../utils/cn';

export interface RangeSliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  /** Current range value [min, max] */
  value?: [number, number];
  /** Default range value */
  defaultValue?: [number, number];
  /** Called when value changes */
  onChange?: (value: [number, number]) => void;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step increment */
  step?: number;
  /** Whether the slider is disabled */
  disabled?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Color variant */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  /** Show marks */
  marks?: boolean | { value: number; label?: string }[];
  /** Show tooltip with value */
  showTooltip?: boolean;
  /** Orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Minimum range between handles */
  minRange?: number;
  /** Label */
  label?: React.ReactNode;
}

export const RangeSlider = forwardRef<HTMLDivElement, RangeSliderProps>(
  (
    {
      className,
      value,
      defaultValue = [25, 75],
      onChange,
      min = 0,
      max = 100,
      step = 1,
      disabled,
      size = 'md',
      color = 'primary',
      marks,
      showTooltip,
      orientation = 'horizontal',
      minRange = 0,
      label,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState<[number, number]>(defaultValue);
    const [activeHandle, setActiveHandle] = useState<'start' | 'end' | null>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    const currentValue = value !== undefined ? value : internalValue;

    const getPercentage = (val: number) => ((val - min) / (max - min)) * 100;

    const getValueFromPosition = useCallback(
      (clientX: number) => {
        if (!trackRef.current) return currentValue[0];
        const rect = trackRef.current.getBoundingClientRect();
        const percentage = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
        const rawValue = (percentage / 100) * (max - min) + min;
        return Math.round(rawValue / step) * step;
      },
      [min, max, step, currentValue]
    );

    const updateValue = useCallback(
      (newValue: [number, number]) => {
        const [start, end] = newValue;
        const clampedStart = Math.max(min, Math.min(end - minRange, start));
        const clampedEnd = Math.min(max, Math.max(start + minRange, end));
        const finalValue: [number, number] = [clampedStart, clampedEnd];

        setInternalValue(finalValue);
        onChange?.(finalValue);
      },
      [min, max, minRange, onChange]
    );

    const handleMouseDown = (handle: 'start' | 'end') => (e: React.MouseEvent) => {
      if (disabled) return;
      e.preventDefault();
      setActiveHandle(handle);
    };

    useEffect(() => {
      if (!activeHandle) return;

      const handleMouseMove = (e: MouseEvent) => {
        const newVal = getValueFromPosition(e.clientX);
        if (activeHandle === 'start') {
          updateValue([newVal, currentValue[1]]);
        } else {
          updateValue([currentValue[0], newVal]);
        }
      };

      const handleMouseUp = () => {
        setActiveHandle(null);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }, [activeHandle, currentValue, getValueFromPosition, updateValue]);

    const startPercent = getPercentage(currentValue[0]);
    const endPercent = getPercentage(currentValue[1]);

    const renderMarks = () => {
      if (!marks) return null;

      const markArray = marks === true
        ? [
            { value: min, label: String(min) },
            { value: max, label: String(max) },
          ]
        : marks;

      return (
        <div className="zk-range-slider__marks">
          {markArray.map((mark) => (
            <div
              key={mark.value}
              className="zk-range-slider__mark"
              style={{ left: `${getPercentage(mark.value)}%` }}
            >
              {mark.label && <span className="zk-range-slider__mark-label">{mark.label}</span>}
            </div>
          ))}
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={cn(
          'zk-range-slider',
          `zk-range-slider--${size}`,
          `zk-range-slider--${color}`,
          `zk-range-slider--${orientation}`,
          disabled && 'zk-range-slider--disabled',
          className
        )}
        {...props}
      >
        {label && <div className="zk-range-slider__label">{label}</div>}
        <div className="zk-range-slider__container">
          <div ref={trackRef} className="zk-range-slider__track">
            <div
              className="zk-range-slider__range"
              style={{
                left: `${startPercent}%`,
                width: `${endPercent - startPercent}%`,
              }}
            />
            <div
              className={cn('zk-range-slider__thumb', activeHandle === 'start' && 'zk-range-slider__thumb--active')}
              style={{ left: `${startPercent}%` }}
              onMouseDown={handleMouseDown('start')}
              role="slider"
              aria-valuemin={min}
              aria-valuemax={currentValue[1] - minRange}
              aria-valuenow={currentValue[0]}
              tabIndex={disabled ? -1 : 0}
            >
              {showTooltip && (
                <div className="zk-range-slider__tooltip">{currentValue[0]}</div>
              )}
            </div>
            <div
              className={cn('zk-range-slider__thumb', activeHandle === 'end' && 'zk-range-slider__thumb--active')}
              style={{ left: `${endPercent}%` }}
              onMouseDown={handleMouseDown('end')}
              role="slider"
              aria-valuemin={currentValue[0] + minRange}
              aria-valuemax={max}
              aria-valuenow={currentValue[1]}
              tabIndex={disabled ? -1 : 0}
            >
              {showTooltip && (
                <div className="zk-range-slider__tooltip">{currentValue[1]}</div>
              )}
            </div>
          </div>
          {renderMarks()}
        </div>
      </div>
    );
  }
);

RangeSlider.displayName = 'RangeSlider';
