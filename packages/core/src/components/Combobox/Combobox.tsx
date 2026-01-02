'use client';

import React, { forwardRef, useState, useRef, useEffect, useCallback } from 'react';
import { cn } from '../../utils/cn';

export interface ComboboxOption {
  value: string;
  label: string;
  disabled?: boolean;
  description?: string;
}

export interface ComboboxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Available options */
  options: ComboboxOption[];
  /** Selected value */
  value?: string;
  /** Default value */
  defaultValue?: string;
  /** Called when selection changes */
  onChange?: (value: string) => void;
  /** Called when input value changes */
  onInputChange?: (value: string) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Whether the combobox is disabled */
  disabled?: boolean;
  /** Whether to allow custom values */
  allowCustomValue?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Error state */
  error?: boolean;
  /** Label */
  label?: React.ReactNode;
  /** Whether selection is required */
  required?: boolean;
  /** Empty state message */
  emptyMessage?: string;
  /** Loading state */
  loading?: boolean;
}

export const Combobox = forwardRef<HTMLDivElement, ComboboxProps>(
  (
    {
      className,
      options,
      value,
      defaultValue = '',
      onChange,
      onInputChange,
      placeholder = 'Search...',
      disabled,
      allowCustomValue = false,
      size = 'md',
      error,
      label,
      required,
      emptyMessage = 'No results found',
      loading,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    const selectedValue = value !== undefined ? value : internalValue;

    const selectedOption = options.find((o) => o.value === selectedValue);

    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );

    const updateValue = useCallback(
      (newValue: string) => {
        setInternalValue(newValue);
        onChange?.(newValue);
      },
      [onChange]
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newInputValue = e.target.value;
      setInputValue(newInputValue);
      onInputChange?.(newInputValue);
      setIsOpen(true);
      setHighlightedIndex(0);
    };

    const handleSelect = (option: ComboboxOption) => {
      updateValue(option.value);
      setInputValue('');
      setIsOpen(false);
      inputRef.current?.blur();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setIsOpen(true);
          setHighlightedIndex((prev) =>
            prev < filteredOptions.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
          break;
        case 'Enter':
          e.preventDefault();
          if (highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
            handleSelect(filteredOptions[highlightedIndex]);
          } else if (allowCustomValue && inputValue) {
            updateValue(inputValue);
            setInputValue('');
            setIsOpen(false);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setInputValue('');
          break;
        case 'Tab':
          setIsOpen(false);
          break;
      }
    };

    const handleFocus = () => {
      setIsOpen(true);
    };

    const handleBlur = () => {
      // Delay to allow click events on options
      setTimeout(() => {
        if (!containerRef.current?.contains(document.activeElement)) {
          setIsOpen(false);
          setInputValue('');
        }
      }, 150);
    };

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setIsOpen(false);
          setInputValue('');
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
      <div
        ref={ref}
        className={cn(
          'zk-combobox',
          `zk-combobox--${size}`,
          isOpen && 'zk-combobox--open',
          disabled && 'zk-combobox--disabled',
          error && 'zk-combobox--error',
          className
        )}
        {...props}
      >
        {label && (
          <label className="zk-combobox__label">
            {label}
            {required && <span className="zk-combobox__required">*</span>}
          </label>
        )}
        <div ref={containerRef} className="zk-combobox__container">
          <input
            ref={inputRef}
            type="text"
            className="zk-combobox__input"
            value={inputValue || (isOpen ? '' : selectedOption?.label || '')}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={selectedOption?.label || placeholder}
            disabled={disabled}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-autocomplete="list"
            role="combobox"
          />
          <div className="zk-combobox__icons">
            {loading && <span className="zk-combobox__loader">⟳</span>}
            <span className="zk-combobox__arrow">▼</span>
          </div>
          {isOpen && (
            <div ref={listRef} className="zk-combobox__dropdown" role="listbox">
              {filteredOptions.length === 0 ? (
                <div className="zk-combobox__empty">{emptyMessage}</div>
              ) : (
                filteredOptions.map((option, index) => (
                  <div
                    key={option.value}
                    className={cn(
                      'zk-combobox__option',
                      option.value === selectedValue && 'zk-combobox__option--selected',
                      index === highlightedIndex && 'zk-combobox__option--highlighted',
                      option.disabled && 'zk-combobox__option--disabled'
                    )}
                    onClick={() => !option.disabled && handleSelect(option)}
                    role="option"
                    aria-selected={option.value === selectedValue}
                  >
                    <span className="zk-combobox__option-label">{option.label}</span>
                    {option.description && (
                      <span className="zk-combobox__option-description">{option.description}</span>
                    )}
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Combobox.displayName = 'Combobox';
