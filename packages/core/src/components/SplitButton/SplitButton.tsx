'use client';

import { forwardRef, useState, useRef, useEffect, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface SplitButtonOption {
  /** Option label */
  label: ReactNode;
  /** Option value */
  value: string;
  /** Option icon */
  icon?: ReactNode;
  /** Disabled state */
  disabled?: boolean;
  /** On click handler */
  onClick?: () => void;
}

export interface SplitButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'onSelect'> {
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Primary button content */
  children: ReactNode;
  /** Primary button click handler */
  onClick?: () => void;
  /** Dropdown options */
  options: SplitButtonOption[];
  /** Selected option value */
  selectedValue?: string;
  /** On option select */
  onSelect?: (value: string) => void;
  /** Loading state */
  loading?: boolean;
  /** Dropdown placement */
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
  /** Icon for dropdown trigger */
  dropdownIcon?: ReactNode;
}

export const SplitButton = forwardRef<HTMLButtonElement, SplitButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      children,
      onClick,
      options,
      selectedValue,
      onSelect,
      loading = false,
      placement = 'bottom-end',
      dropdownIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };

      if (open) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open]);

    const handleOptionClick = (option: SplitButtonOption) => {
      if (option.disabled) return;
      option.onClick?.();
      onSelect?.(option.value);
      setOpen(false);
    };

    const defaultDropdownIcon = (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    );

    const loadingSpinner = (
      <svg className="split-button-spinner" viewBox="0 0 24 24" width="16" height="16">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="31.4" strokeLinecap="round">
          <animateTransform attributeName="transform" type="rotate" values="0 12 12;360 12 12" dur="1s" repeatCount="indefinite" />
        </circle>
      </svg>
    );

    const placementClasses = {
      'bottom-start': 'split-button-dropdown--bottom-start',
      'bottom-end': 'split-button-dropdown--bottom-end',
      'top-start': 'split-button-dropdown--top-start',
      'top-end': 'split-button-dropdown--top-end',
    };

    return (
      <div ref={containerRef} className={cn('split-button', className)}>
        <div className={cn('split-button-group', `split-button-group--${variant}`, `split-button-group--${size}`)}>
          <button
            ref={ref}
            type="button"
            className="split-button-primary"
            onClick={onClick}
            disabled={disabled || loading}
            {...props}
          >
            {loading ? loadingSpinner : children}
          </button>
          <button
            type="button"
            className="split-button-trigger"
            onClick={() => setOpen(!open)}
            disabled={disabled || loading}
            aria-haspopup="true"
            aria-expanded={open}
          >
            {dropdownIcon || defaultDropdownIcon}
          </button>
        </div>

        {open && (
          <div className={cn('split-button-dropdown', placementClasses[placement])}>
            <ul className="split-button-menu" role="menu">
              {options.map((option) => (
                <li key={option.value} role="none">
                  <button
                    type="button"
                    role="menuitem"
                    className={cn(
                      'split-button-option',
                      selectedValue === option.value && 'split-button-option--selected',
                      option.disabled && 'split-button-option--disabled'
                    )}
                    onClick={() => handleOptionClick(option)}
                    disabled={option.disabled}
                  >
                    {option.icon && <span className="split-button-option-icon">{option.icon}</span>}
                    <span className="split-button-option-label">{option.label}</span>
                    {selectedValue === option.value && (
                      <svg className="split-button-check" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
);

SplitButton.displayName = 'SplitButton';
