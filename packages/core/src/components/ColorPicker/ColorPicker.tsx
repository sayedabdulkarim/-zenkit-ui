'use client';

import { forwardRef, useState, useRef, useEffect, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface ColorPickerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Selected color */
  value?: string;
  /** On change callback */
  onChange?: (color: string) => void;
  /** Preset colors */
  presets?: string[];
  /** Show alpha slider */
  showAlpha?: boolean;
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Disabled state */
  disabled?: boolean;
  /** Format */
  format?: 'hex' | 'rgb' | 'hsl';
}

const DEFAULT_PRESETS = [
  '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3',
  '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39',
  '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#607d8b',
];

export const ColorPicker = forwardRef<HTMLDivElement, ColorPickerProps>(
  (
    {
      value = '#000000',
      onChange,
      presets = DEFAULT_PRESETS,
      showAlpha = false,
      size = 'md',
      disabled = false,
      format = 'hex',
      className,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      setInputValue(value);
    }, [value]);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };

      if (open) document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setInputValue(val);
      if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
        onChange?.(val);
      }
    };

    const handlePresetClick = (color: string) => {
      setInputValue(color);
      onChange?.(color);
    };

    const handleNativeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const color = e.target.value;
      setInputValue(color);
      onChange?.(color);
    };

    return (
      <div ref={containerRef} className={cn('colorpicker', `colorpicker-${size}`, className)} {...props}>
        <div
          ref={ref}
          className={cn(
            'colorpicker-trigger',
            disabled && 'colorpicker-disabled',
            open && 'colorpicker-open'
          )}
          onClick={() => !disabled && setOpen(!open)}
        >
          <div className="colorpicker-swatch" style={{ backgroundColor: value }} />
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            disabled={disabled}
            className="colorpicker-input"
            onClick={(e) => e.stopPropagation()}
          />
        </div>

        {open && (
          <div className="colorpicker-dropdown">
            <div className="colorpicker-native-wrapper">
              <input
                type="color"
                value={value}
                onChange={handleNativeChange}
                className="colorpicker-native"
              />
              <div className="colorpicker-gradient" style={{ backgroundColor: value }} />
            </div>

            {presets.length > 0 && (
              <div className="colorpicker-presets">
                {presets.map((color) => (
                  <button
                    key={color}
                    type="button"
                    className={cn(
                      'colorpicker-preset',
                      value === color && 'colorpicker-preset-selected'
                    )}
                    style={{ backgroundColor: color }}
                    onClick={() => handlePresetClick(color)}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

ColorPicker.displayName = 'ColorPicker';
