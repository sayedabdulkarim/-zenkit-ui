'use client';

import { forwardRef, useState, useRef, useEffect, type InputHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface AutocompleteOption {
  value: string;
  label: ReactNode;
  disabled?: boolean;
}

export interface AutocompleteProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> {
  /** Options */
  options: AutocompleteOption[];
  /** Selected value */
  value?: string;
  /** On change callback */
  onChange?: (value: string) => void;
  /** On search callback */
  onSearch?: (value: string) => void;
  /** Loading state */
  loading?: boolean;
  /** Allow free text */
  freeSolo?: boolean;
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Error state */
  error?: boolean;
  /** Empty text */
  emptyText?: string;
}

export const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      options,
      value = '',
      onChange,
      onSearch,
      loading = false,
      freeSolo = false,
      size = 'md',
      error = false,
      emptyText = 'No options',
      disabled,
      placeholder,
      className,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const filteredOptions = options.filter(
      (opt) => opt.label?.toString().toLowerCase().includes(inputValue.toLowerCase())
    );

    useEffect(() => {
      setInputValue(value);
    }, [value]);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setOpen(false);
          if (!freeSolo) {
            const match = options.find((o) => o.value === inputValue);
            if (!match) setInputValue(value);
          }
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [freeSolo, inputValue, options, value]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setInputValue(val);
      setOpen(true);
      setHighlightedIndex(0);
      onSearch?.(val);
      if (freeSolo) onChange?.(val);
    };

    const handleSelect = (option: AutocompleteOption) => {
      if (option.disabled) return;
      setInputValue(option.label?.toString() || option.value);
      onChange?.(option.value);
      setOpen(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHighlightedIndex((i) => Math.min(i + 1, filteredOptions.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHighlightedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === 'Enter' && open) {
        e.preventDefault();
        const opt = filteredOptions[highlightedIndex];
        if (opt) handleSelect(opt);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    return (
      <div ref={containerRef} className={cn('autocomplete', `autocomplete-${size}`, className)}>
        <input
          ref={ref}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder={placeholder}
          className={cn(
            'autocomplete-input',
            error && 'autocomplete-error',
            disabled && 'autocomplete-disabled'
          )}
          role="combobox"
          aria-expanded={open}
          aria-autocomplete="list"
          {...props}
        />

        {open && (
          <div className="autocomplete-dropdown">
            {loading ? (
              <div className="autocomplete-loading">Loading...</div>
            ) : filteredOptions.length === 0 ? (
              <div className="autocomplete-empty">{emptyText}</div>
            ) : (
              filteredOptions.map((option, index) => (
                <div
                  key={option.value}
                  className={cn(
                    'autocomplete-option',
                    index === highlightedIndex && 'autocomplete-option-highlighted',
                    option.disabled && 'autocomplete-option-disabled',
                    option.value === value && 'autocomplete-option-selected'
                  )}
                  onClick={() => handleSelect(option)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                >
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

Autocomplete.displayName = 'Autocomplete';
