'use client';

import React, { forwardRef, useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';

export interface ColorInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'size'> {
  /** Current color value (hex) */
  value?: string;
  /** Default color value */
  defaultValue?: string;
  /** Called when color changes */
  onChange?: (value: string) => void;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Error state */
  error?: boolean;
  /** Label */
  label?: React.ReactNode;
  /** Preset colors to show */
  swatches?: string[];
  /** Whether to show the color picker popup */
  withPicker?: boolean;
  /** Format for the color value */
  format?: 'hex' | 'rgb' | 'hsl';
  /** Whether to allow opacity/alpha */
  withAlpha?: boolean;
}

export const ColorInput = forwardRef<HTMLInputElement, ColorInputProps>(
  (
    {
      className,
      value,
      defaultValue = '#000000',
      onChange,
      size = 'md',
      disabled,
      error,
      label,
      swatches = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#000000', '#ffffff'],
      withPicker = true,
      format = 'hex',
      withAlpha,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const colorPickerRef = useRef<HTMLInputElement>(null);

    const currentValue = value !== undefined ? value : internalValue;

    const updateValue = (newValue: string) => {
      setInternalValue(newValue);
      onChange?.(newValue);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (/^#[0-9A-Fa-f]{0,6}$/.test(newValue) || newValue === '') {
        updateValue(newValue);
      }
    };

    const handleColorPickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      updateValue(e.target.value);
    };

    const handleSwatchClick = (color: string) => {
      updateValue(color);
      setIsOpen(false);
    };

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
      <div
        ref={containerRef}
        className={cn(
          'zk-color-input',
          `zk-color-input--${size}`,
          disabled && 'zk-color-input--disabled',
          error && 'zk-color-input--error',
          isOpen && 'zk-color-input--open',
          className
        )}
      >
        {label && <label className="zk-color-input__label">{label}</label>}
        <div className="zk-color-input__control">
          <button
            type="button"
            className="zk-color-input__swatch"
            style={{ backgroundColor: currentValue }}
            onClick={() => !disabled && setIsOpen(!isOpen)}
            disabled={disabled}
            aria-label="Pick color"
          />
          <input
            ref={ref}
            type="text"
            className="zk-color-input__input"
            value={currentValue}
            onChange={handleInputChange}
            disabled={disabled}
            placeholder="#000000"
            {...props}
          />
          {withPicker && (
            <input
              ref={colorPickerRef}
              type="color"
              className="zk-color-input__picker"
              value={currentValue}
              onChange={handleColorPickerChange}
              disabled={disabled}
            />
          )}
        </div>
        {isOpen && swatches.length > 0 && (
          <div className="zk-color-input__dropdown">
            <div className="zk-color-input__swatches">
              {swatches.map((color) => (
                <button
                  key={color}
                  type="button"
                  className={cn(
                    'zk-color-input__swatch-option',
                    currentValue === color && 'zk-color-input__swatch-option--selected'
                  )}
                  style={{ backgroundColor: color }}
                  onClick={() => handleSwatchClick(color)}
                  aria-label={`Select ${color}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
);

ColorInput.displayName = 'ColorInput';
