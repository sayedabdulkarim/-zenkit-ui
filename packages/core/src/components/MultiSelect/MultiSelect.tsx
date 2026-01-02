'use client';

import React, { forwardRef, useState, useRef, useEffect, useCallback } from 'react';
import { cn } from '../../utils/cn';

export interface MultiSelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  group?: string;
}

export interface MultiSelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Available options */
  options: MultiSelectOption[];
  /** Selected values */
  value?: string[];
  /** Default selected values */
  defaultValue?: string[];
  /** Called when selection changes */
  onChange?: (value: string[]) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Whether the select is disabled */
  disabled?: boolean;
  /** Whether the select is searchable */
  searchable?: boolean;
  /** Whether to allow clearing all selections */
  clearable?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Error state */
  error?: boolean;
  /** Maximum number of selections */
  maxSelections?: number;
  /** Label */
  label?: React.ReactNode;
  /** Whether to show checkboxes */
  withCheckbox?: boolean;
  /** Hide selected options from dropdown */
  hideSelected?: boolean;
}

export const MultiSelect = forwardRef<HTMLDivElement, MultiSelectProps>(
  (
    {
      className,
      options,
      value,
      defaultValue = [],
      onChange,
      placeholder = 'Select...',
      disabled,
      searchable = true,
      clearable = true,
      size = 'md',
      error,
      maxSelections,
      label,
      withCheckbox = true,
      hideSelected,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [internalValue, setInternalValue] = useState<string[]>(defaultValue);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const selectedValues = value !== undefined ? value : internalValue;

    const updateValue = useCallback(
      (newValue: string[]) => {
        setInternalValue(newValue);
        onChange?.(newValue);
      },
      [onChange]
    );

    const filteredOptions = options.filter((option) => {
      const matchesSearch = option.label.toLowerCase().includes(search.toLowerCase());
      const notHidden = !hideSelected || !selectedValues.includes(option.value);
      return matchesSearch && notHidden;
    });

    const handleSelect = (optionValue: string) => {
      if (selectedValues.includes(optionValue)) {
        updateValue(selectedValues.filter((v) => v !== optionValue));
      } else {
        if (maxSelections && selectedValues.length >= maxSelections) return;
        updateValue([...selectedValues, optionValue]);
      }
      setSearch('');
    };

    const handleRemove = (optionValue: string, e: React.MouseEvent) => {
      e.stopPropagation();
      updateValue(selectedValues.filter((v) => v !== optionValue));
    };

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      updateValue([]);
      setSearch('');
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Backspace' && !search && selectedValues.length > 0) {
        updateValue(selectedValues.slice(0, -1));
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
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

    const getLabel = (val: string) => {
      return options.find((o) => o.value === val)?.label || val;
    };

    return (
      <div
        ref={ref}
        className={cn(
          'zk-multi-select',
          `zk-multi-select--${size}`,
          isOpen && 'zk-multi-select--open',
          disabled && 'zk-multi-select--disabled',
          error && 'zk-multi-select--error',
          className
        )}
        {...props}
      >
        {label && <div className="zk-multi-select__label">{label}</div>}
        <div
          ref={containerRef}
          className="zk-multi-select__control"
          onClick={() => {
            if (!disabled) {
              setIsOpen(true);
              inputRef.current?.focus();
            }
          }}
        >
          <div className="zk-multi-select__values">
            {selectedValues.map((val) => (
              <span key={val} className="zk-multi-select__tag">
                {getLabel(val)}
                <button
                  type="button"
                  className="zk-multi-select__tag-remove"
                  onClick={(e) => handleRemove(val, e)}
                  aria-label={`Remove ${getLabel(val)}`}
                >
                  ✕
                </button>
              </span>
            ))}
            {searchable && (
              <input
                ref={inputRef}
                type="text"
                className="zk-multi-select__input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={selectedValues.length === 0 ? placeholder : ''}
                disabled={disabled}
              />
            )}
            {!searchable && selectedValues.length === 0 && (
              <span className="zk-multi-select__placeholder">{placeholder}</span>
            )}
          </div>
          <div className="zk-multi-select__actions">
            {clearable && selectedValues.length > 0 && !disabled && (
              <button
                type="button"
                className="zk-multi-select__clear"
                onClick={handleClear}
                aria-label="Clear all"
              >
                ✕
              </button>
            )}
            <span className="zk-multi-select__arrow">▼</span>
          </div>
        </div>
        {isOpen && (
          <div className="zk-multi-select__dropdown">
            {filteredOptions.length === 0 ? (
              <div className="zk-multi-select__empty">No options</div>
            ) : (
              filteredOptions.map((option) => (
                <div
                  key={option.value}
                  className={cn(
                    'zk-multi-select__option',
                    selectedValues.includes(option.value) && 'zk-multi-select__option--selected',
                    option.disabled && 'zk-multi-select__option--disabled'
                  )}
                  onClick={() => !option.disabled && handleSelect(option.value)}
                >
                  {withCheckbox && (
                    <span className="zk-multi-select__checkbox">
                      {selectedValues.includes(option.value) ? '☑' : '☐'}
                    </span>
                  )}
                  {option.label}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    );
  }
);

MultiSelect.displayName = 'MultiSelect';
