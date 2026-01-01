'use client';

import { forwardRef, useState, useRef, useEffect, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface EditableProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'onSubmit'> {
  /** Value */
  value?: string;
  /** Default value */
  defaultValue?: string;
  /** On change callback */
  onChange?: (value: string) => void;
  /** On submit callback */
  onSubmit?: (value: string) => void;
  /** On cancel callback */
  onCancel?: () => void;
  /** Placeholder */
  placeholder?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Start in edit mode */
  startWithEditView?: boolean;
  /** Submit on blur */
  submitOnBlur?: boolean;
  /** Select all on focus */
  selectAllOnFocus?: boolean;
  /** As element type */
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

export const Editable = forwardRef<HTMLDivElement, EditableProps>(
  (
    {
      value: controlledValue,
      defaultValue = '',
      onChange,
      onSubmit,
      onCancel,
      placeholder = 'Click to edit',
      disabled = false,
      startWithEditView = false,
      submitOnBlur = true,
      selectAllOnFocus = true,
      as: Component = 'span',
      className,
      ...props
    },
    ref
  ) => {
    const [isEditing, setIsEditing] = useState(startWithEditView);
    const [value, setValue] = useState(controlledValue ?? defaultValue);
    const [previousValue, setPreviousValue] = useState(value);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (controlledValue !== undefined) {
        setValue(controlledValue);
      }
    }, [controlledValue]);

    useEffect(() => {
      if (isEditing && inputRef.current) {
        inputRef.current.focus();
        if (selectAllOnFocus) {
          inputRef.current.select();
        }
      }
    }, [isEditing, selectAllOnFocus]);

    const handleEdit = () => {
      if (disabled) return;
      setPreviousValue(value);
      setIsEditing(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      onChange?.(newValue);
    };

    const handleSubmit = () => {
      setIsEditing(false);
      onSubmit?.(value);
    };

    const handleCancel = () => {
      setValue(previousValue);
      setIsEditing(false);
      onCancel?.();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleSubmit();
      } else if (e.key === 'Escape') {
        handleCancel();
      }
    };

    const handleBlur = () => {
      if (submitOnBlur) {
        handleSubmit();
      } else {
        handleCancel();
      }
    };

    if (isEditing) {
      return (
        <div ref={ref} className={cn('editable', 'editable-editing', className)} {...props}>
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            className="editable-input"
          />
          <div className="editable-controls">
            <button
              type="button"
              className="editable-submit"
              onClick={handleSubmit}
              aria-label="Submit"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </button>
            <button
              type="button"
              className="editable-cancel"
              onClick={handleCancel}
              aria-label="Cancel"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn('editable', disabled && 'editable-disabled', className)}
        onClick={handleEdit}
        {...props}
      >
        <Component className={cn('editable-preview', !value && 'editable-placeholder')}>
          {value || placeholder}
        </Component>
        {!disabled && (
          <svg className="editable-icon" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none">
            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
        )}
      </div>
    );
  }
);

Editable.displayName = 'Editable';
