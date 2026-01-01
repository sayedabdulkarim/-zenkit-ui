import { forwardRef, useRef, useEffect, type TextareaHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import type { Size } from '../../types';

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /** Textarea size variant */
  size?: Size;
  /** Error state */
  error?: boolean;
  /** Auto grow based on content */
  autoGrow?: boolean;
  /** Minimum rows for auto grow */
  minRows?: number;
  /** Maximum rows for auto grow */
  maxRows?: number;
  /** Show character counter */
  showCount?: boolean;
  /** Full width textarea */
  fullWidth?: boolean;
}

const sizeClasses: Record<Size, string> = {
  sm: 'form-control-sm',
  md: '',
  lg: 'form-control-lg',
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      size = 'md',
      error = false,
      autoGrow = false,
      minRows = 2,
      maxRows = 10,
      showCount = false,
      fullWidth = false,
      maxLength,
      className,
      value,
      defaultValue,
      onChange,
      rows,
      ...props
    },
    ref
  ) => {
    const internalRef = useRef<HTMLTextAreaElement>(null);
    const textareaRef = (ref as React.RefObject<HTMLTextAreaElement>) || internalRef;

    const adjustHeight = () => {
      const textarea = textareaRef.current;
      if (!textarea || !autoGrow) return;

      textarea.style.height = 'auto';
      const lineHeight = parseInt(getComputedStyle(textarea).lineHeight) || 20;
      const minHeight = minRows * lineHeight;
      const maxHeight = maxRows * lineHeight;
      const scrollHeight = textarea.scrollHeight;

      textarea.style.height = `${Math.min(Math.max(scrollHeight, minHeight), maxHeight)}px`;
    };

    useEffect(() => {
      adjustHeight();
    }, [value, defaultValue]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      adjustHeight();
      onChange?.(e);
    };

    const currentLength = String(value ?? defaultValue ?? '').length;

    const textarea = (
      <textarea
        ref={textareaRef}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        maxLength={maxLength}
        rows={autoGrow ? minRows : rows}
        className={cn(
          'form-control',
          sizeClasses[size],
          error && 'is-invalid',
          autoGrow && 'form-control-autogrow',
          fullWidth && 'w-100',
          className
        )}
        aria-invalid={error}
        {...props}
      />
    );

    if (showCount && maxLength) {
      return (
        <div className={cn('form-textarea-wrapper', fullWidth && 'w-100')}>
          {textarea}
          <div className="form-character-counter">
            <span className={currentLength >= maxLength ? 'text-danger' : ''}>
              {currentLength}
            </span>
            <span> / {maxLength}</span>
          </div>
        </div>
      );
    }

    return textarea;
  }
);

Textarea.displayName = 'Textarea';
