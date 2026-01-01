'use client';

import { forwardRef, useState, useRef, type HTMLAttributes, type KeyboardEvent } from 'react';
import { cn } from '../../utils/cn';

export interface TagsInputProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Tags */
  value?: string[];
  /** On change callback */
  onChange?: (tags: string[]) => void;
  /** Placeholder */
  placeholder?: string;
  /** Max tags */
  maxTags?: number;
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Error state */
  error?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Allow duplicates */
  allowDuplicates?: boolean;
  /** Separator keys */
  separatorKeys?: string[];
}

export const TagsInput = forwardRef<HTMLDivElement, TagsInputProps>(
  (
    {
      value = [],
      onChange,
      placeholder = 'Add tag...',
      maxTags,
      size = 'md',
      error = false,
      disabled = false,
      allowDuplicates = false,
      separatorKeys = ['Enter', ','],
      className,
      ...props
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const addTag = (tag: string) => {
      const trimmedTag = tag.trim();
      if (!trimmedTag) return;
      if (maxTags && value.length >= maxTags) return;
      if (!allowDuplicates && value.includes(trimmedTag)) return;

      onChange?.([...value, trimmedTag]);
      setInputValue('');
    };

    const removeTag = (index: number) => {
      onChange?.(value.filter((_, i) => i !== index));
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (separatorKeys.includes(e.key)) {
        e.preventDefault();
        addTag(inputValue);
      } else if (e.key === 'Backspace' && !inputValue && value.length > 0) {
        removeTag(value.length - 1);
      }
    };

    const handleContainerClick = () => {
      inputRef.current?.focus();
    };

    return (
      <div
        ref={ref}
        className={cn(
          'tags-input',
          `tags-input-${size}`,
          error && 'tags-input-error',
          disabled && 'tags-input-disabled',
          className
        )}
        onClick={handleContainerClick}
        {...props}
      >
        <div className="tags-input-tags">
          {value.map((tag, index) => (
            <span key={`${tag}-${index}`} className="tags-input-tag">
              <span className="tags-input-tag-text">{tag}</span>
              {!disabled && (
                <button
                  type="button"
                  className="tags-input-tag-remove"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeTag(index);
                  }}
                >
                  <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </span>
          ))}
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={() => addTag(inputValue)}
            placeholder={value.length === 0 ? placeholder : ''}
            disabled={disabled || (maxTags !== undefined && value.length >= maxTags)}
            className="tags-input-input"
          />
        </div>
      </div>
    );
  }
);

TagsInput.displayName = 'TagsInput';
