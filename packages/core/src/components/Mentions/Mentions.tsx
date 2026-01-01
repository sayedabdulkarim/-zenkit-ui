'use client';

import { forwardRef, useState, useRef, useEffect, type TextareaHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface MentionOption {
  value: string;
  label: string;
  avatar?: string;
}

export interface MentionsProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  /** Mention options */
  options: MentionOption[];
  /** Value */
  value?: string;
  /** On change callback */
  onChange?: (value: string) => void;
  /** On mention callback */
  onMention?: (option: MentionOption) => void;
  /** Trigger character */
  trigger?: string;
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Error state */
  error?: boolean;
}

export const Mentions = forwardRef<HTMLTextAreaElement, MentionsProps>(
  (
    {
      options,
      value = '',
      onChange,
      onMention,
      trigger = '@',
      size = 'md',
      error = false,
      disabled,
      placeholder,
      className,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const [cursorPosition, setCursorPosition] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const filteredOptions = options.filter((opt) =>
      opt.label.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const val = e.target.value;
      const pos = e.target.selectionStart || 0;
      setCursorPosition(pos);
      onChange?.(val);

      // Check for trigger
      const beforeCursor = val.slice(0, pos);
      const triggerIndex = beforeCursor.lastIndexOf(trigger);

      if (triggerIndex !== -1) {
        const afterTrigger = beforeCursor.slice(triggerIndex + 1);
        if (!/\s/.test(afterTrigger)) {
          setSearch(afterTrigger);
          setOpen(true);
          setHighlightedIndex(0);
          return;
        }
      }

      setOpen(false);
    };

    const handleSelect = (option: MentionOption) => {
      const beforeTrigger = value.slice(0, value.lastIndexOf(trigger, cursorPosition));
      const afterCursor = value.slice(cursorPosition);
      const newValue = `${beforeTrigger}${trigger}${option.value} ${afterCursor}`;
      onChange?.(newValue);
      onMention?.(option);
      setOpen(false);

      // Focus back on textarea
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 0);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (!open) return;

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
      <div ref={containerRef} className={cn('mentions', `mentions-${size}`, className)}>
        <textarea
          ref={(el) => {
            textareaRef.current = el;
            if (typeof ref === 'function') ref(el);
            else if (ref) ref.current = el;
          }}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder={placeholder}
          className={cn(
            'mentions-input',
            error && 'mentions-error',
            disabled && 'mentions-disabled'
          )}
          {...props}
        />

        {open && filteredOptions.length > 0 && (
          <div className="mentions-dropdown">
            {filteredOptions.map((option, index) => (
              <div
                key={option.value}
                className={cn(
                  'mentions-option',
                  index === highlightedIndex && 'mentions-option-highlighted'
                )}
                onClick={() => handleSelect(option)}
                onMouseEnter={() => setHighlightedIndex(index)}
              >
                {option.avatar && (
                  <img src={option.avatar} alt="" className="mentions-option-avatar" />
                )}
                <span className="mentions-option-label">{option.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

Mentions.displayName = 'Mentions';
