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
      <svg className="zk-split-button__spinner" viewBox="0 0 24 24" width="16" height="16">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="31.4" strokeLinecap="round">
          <animateTransform attributeName="transform" type="rotate" values="0 12 12;360 12 12" dur="1s" repeatCount="indefinite" />
        </circle>
      </svg>
    );

    const placementClasses = {
      'bottom-start': 'zk-split-button__dropdown--bottom-start',
      'bottom-end': 'zk-split-button__dropdown--bottom-end',
      'top-start': 'zk-split-button__dropdown--top-start',
      'top-end': 'zk-split-button__dropdown--top-end',
    };

    return (
      <div ref={containerRef} className={cn('zk-split-button', className)}>
        <div className={cn('zk-split-button__group', `zk-split-button__group--${variant}`, `zk-split-button__group--${size}`)}>
          <button
            ref={ref}
            type="button"
            className="zk-split-button__primary"
            onClick={onClick}
            disabled={disabled || loading}
            {...props}
          >
            {loading ? loadingSpinner : children}
          </button>
          <button
            type="button"
            className="zk-split-button__trigger"
            onClick={() => setOpen(!open)}
            disabled={disabled || loading}
            aria-haspopup="true"
            aria-expanded={open}
          >
            {dropdownIcon || defaultDropdownIcon}
          </button>
        </div>

        {open && (
          <div className={cn('zk-split-button__dropdown', placementClasses[placement])}>
            <ul className="zk-split-button__menu" role="menu">
              {options.map((option) => (
                <li key={option.value} role="none">
                  <button
                    type="button"
                    role="menuitem"
                    className={cn(
                      'zk-split-button__option',
                      selectedValue === option.value && 'zk-split-button__option--selected',
                      option.disabled && 'zk-split-button__option--disabled'
                    )}
                    onClick={() => handleOptionClick(option)}
                    disabled={option.disabled}
                  >
                    {option.icon && <span className="zk-split-button__option-icon">{option.icon}</span>}
                    <span className="zk-split-button__option-label">{option.label}</span>
                    {selectedValue === option.value && (
                      <svg className="zk-split-button__check" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
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
