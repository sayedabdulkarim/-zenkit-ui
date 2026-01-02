'use client';

import React, { forwardRef, useState, useRef, useCallback, useEffect } from 'react';
import { cn } from '../../utils/cn';

export interface AngleSliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Current angle value (0-360) */
  value?: number;
  /** Default angle value */
  defaultValue?: number;
  /** Called when angle changes */
  onChange?: (value: number) => void;
  /** Size of the slider */
  size?: number;
  /** Whether the slider is disabled */
  disabled?: boolean;
  /** Step increment */
  step?: number;
  /** Color of the track */
  trackColor?: string;
  /** Color of the thumb */
  thumbColor?: string;
  /** Whether to show the value label */
  showValue?: boolean;
  /** Format function for the value */
  formatValue?: (value: number) => string;
  /** Label */
  label?: React.ReactNode;
}

export const AngleSlider = forwardRef<HTMLDivElement, AngleSliderProps>(
  (
    {
      className,
      value,
      defaultValue = 0,
      onChange,
      size = 100,
      disabled,
      step = 1,
      trackColor = '#e9ecef',
      thumbColor = '#228be6',
      showValue = true,
      formatValue = (v) => `${Math.round(v)}°`,
      label,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const currentValue = value !== undefined ? value : internalValue;

    const getAngleFromPosition = useCallback(
      (clientX: number, clientY: number) => {
        if (!containerRef.current) return currentValue;

        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = clientX - centerX;
        const dy = clientY - centerY;

        let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
        if (angle < 0) angle += 360;

        // Apply step
        angle = Math.round(angle / step) * step;
        if (angle >= 360) angle = 0;

        return angle;
      },
      [currentValue, step]
    );

    const updateValue = useCallback(
      (newValue: number) => {
        setInternalValue(newValue);
        onChange?.(newValue);
      },
      [onChange]
    );

    const handleMouseDown = (e: React.MouseEvent) => {
      if (disabled) return;
      e.preventDefault();
      setIsDragging(true);
      const angle = getAngleFromPosition(e.clientX, e.clientY);
      updateValue(angle);
    };

    useEffect(() => {
      if (!isDragging) return;

      const handleMouseMove = (e: MouseEvent) => {
        const angle = getAngleFromPosition(e.clientX, e.clientY);
        updateValue(angle);
      };

      const handleMouseUp = () => {
        setIsDragging(false);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }, [isDragging, getAngleFromPosition, updateValue]);

    const thumbX = Math.sin((currentValue * Math.PI) / 180) * (size / 2 - 10) + size / 2;
    const thumbY = -Math.cos((currentValue * Math.PI) / 180) * (size / 2 - 10) + size / 2;

    return (
      <div
        ref={ref}
        className={cn(
          'zk-angle-slider',
          disabled && 'zk-angle-slider--disabled',
          isDragging && 'zk-angle-slider--dragging',
          className
        )}
        {...props}
      >
        {label && <div className="zk-angle-slider__label">{label}</div>}
        <div
          ref={containerRef}
          className="zk-angle-slider__container"
          style={{ width: size, height: size }}
          onMouseDown={handleMouseDown}
        >
          {/* Track */}
          <svg
            width={size}
            height={size}
            className="zk-angle-slider__track"
          >
            <circle
              cx={size / 2}
              cy={size / 2}
              r={size / 2 - 10}
              fill="none"
              stroke={trackColor}
              strokeWidth="4"
            />
            {/* Value arc */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={size / 2 - 10}
              fill="none"
              stroke={thumbColor}
              strokeWidth="4"
              strokeDasharray={`${(currentValue / 360) * 2 * Math.PI * (size / 2 - 10)} ${2 * Math.PI * (size / 2 - 10)}`}
              strokeDashoffset={2 * Math.PI * (size / 2 - 10) * 0.25}
              style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
            />
          </svg>
          {/* Thumb */}
          <div
            className="zk-angle-slider__thumb"
            style={{
              left: thumbX,
              top: thumbY,
              backgroundColor: thumbColor,
            }}
          />
          {/* Center indicator */}
          <div className="zk-angle-slider__center" />
        </div>
        {showValue && (
          <div className="zk-angle-slider__value">{formatValue(currentValue)}</div>
        )}
      </div>
    );
  }
);

AngleSlider.displayName = 'AngleSlider';
