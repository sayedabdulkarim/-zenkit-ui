'use client';

import { forwardRef, useState, useRef, useEffect, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface CascaderOption {
  value: string;
  label: ReactNode;
  children?: CascaderOption[];
  disabled?: boolean;
}

export interface CascaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Options */
  options: CascaderOption[];
  /** Selected value path */
  value?: string[];
  /** On change callback */
  onChange?: (value: string[], options: CascaderOption[]) => void;
  /** Placeholder */
  placeholder?: string;
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Error state */
  error?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Show full path in input */
  showFullPath?: boolean;
  /** Separator for display */
  separator?: string;
}

export const Cascader = forwardRef<HTMLDivElement, CascaderProps>(
  (
    {
      options,
      value = [],
      onChange,
      placeholder = 'Select...',
      size = 'md',
      error = false,
      disabled = false,
      showFullPath = true,
      separator = ' / ',
      className,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [activeColumns, setActiveColumns] = useState<CascaderOption[][]>([options]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };

      if (open) document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open]);

    const getSelectedOptions = (): CascaderOption[] => {
      const result: CascaderOption[] = [];
      let currentOptions = options;

      for (const val of value) {
        const opt = currentOptions.find((o) => o.value === val);
        if (opt) {
          result.push(opt);
          currentOptions = opt.children || [];
        }
      }

      return result;
    };

    const displayValue = showFullPath
      ? getSelectedOptions().map((o) => o.label).join(separator)
      : getSelectedOptions().slice(-1)[0]?.label || '';

    const handleOptionClick = (option: CascaderOption, columnIndex: number) => {
      if (option.disabled) return;

      const newValue = value.slice(0, columnIndex);
      newValue.push(option.value);

      if (option.children && option.children.length > 0) {
        const newColumns = activeColumns.slice(0, columnIndex + 1);
        newColumns.push(option.children);
        setActiveColumns(newColumns);
        onChange?.(newValue, getSelectedOptions());
      } else {
        onChange?.(newValue, [...getSelectedOptions().slice(0, columnIndex), option]);
        setOpen(false);
      }
    };

    const handleOpen = () => {
      if (disabled) return;
      setOpen(!open);

      // Rebuild columns based on current value
      if (!open) {
        const columns: CascaderOption[][] = [options];
        let currentOptions = options;

        for (const val of value) {
          const opt = currentOptions.find((o) => o.value === val);
          if (opt?.children) {
            columns.push(opt.children);
            currentOptions = opt.children;
          }
        }

        setActiveColumns(columns);
      }
    };

    return (
      <div ref={containerRef} className={cn('cascader', `cascader-${size}`, className)} {...props}>
        <div
          ref={ref}
          className={cn(
            'cascader-selector',
            error && 'cascader-error',
            disabled && 'cascader-disabled',
            open && 'cascader-open'
          )}
          onClick={handleOpen}
        >
          <span className={cn('cascader-value', !displayValue && 'cascader-placeholder')}>
            {displayValue || placeholder}
          </span>
          <svg className="cascader-arrow" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>

        {open && (
          <div className="cascader-dropdown">
            {activeColumns.map((column, columnIndex) => (
              <div key={columnIndex} className="cascader-column">
                {column.map((option) => (
                  <div
                    key={option.value}
                    className={cn(
                      'cascader-option',
                      value[columnIndex] === option.value && 'cascader-option-selected',
                      option.disabled && 'cascader-option-disabled'
                    )}
                    onClick={() => handleOptionClick(option, columnIndex)}
                  >
                    <span className="cascader-option-label">{option.label}</span>
                    {option.children && option.children.length > 0 && (
                      <svg className="cascader-option-arrow" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

Cascader.displayName = 'Cascader';
