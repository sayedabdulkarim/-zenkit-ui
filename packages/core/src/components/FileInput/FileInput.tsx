'use client';

import React, { forwardRef, useRef, useState } from 'react';
import { cn } from '../../utils/cn';

export interface FileInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'onChange' | 'size'> {
  /** Current file(s) */
  value?: File | File[] | null;
  /** Called when files change */
  onChange?: (files: File | File[] | null) => void;
  /** Whether to accept multiple files */
  multiple?: boolean;
  /** Accepted file types */
  accept?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Placeholder text */
  placeholder?: string;
  /** Whether the input is in error state */
  error?: boolean;
  /** Whether to show clear button */
  clearable?: boolean;
  /** Label for the button */
  buttonLabel?: string;
  /** Variant style */
  variant?: 'default' | 'filled' | 'unstyled';
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  (
    {
      className,
      value,
      onChange,
      multiple,
      accept,
      size = 'md',
      placeholder = 'Choose file...',
      error,
      clearable = true,
      buttonLabel = 'Browse',
      variant = 'default',
      disabled,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [internalFiles, setInternalFiles] = useState<File | File[] | null>(null);

    const files = value !== undefined ? value : internalFiles;

    const handleClick = () => {
      inputRef.current?.click();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = e.target.files;
      if (!selectedFiles || selectedFiles.length === 0) {
        setInternalFiles(null);
        onChange?.(null);
        return;
      }

      const newFiles = multiple ? Array.from(selectedFiles) : selectedFiles[0];
      setInternalFiles(newFiles);
      onChange?.(newFiles);
    };

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (inputRef.current) {
        inputRef.current.value = '';
      }
      setInternalFiles(null);
      onChange?.(null);
    };

    const getDisplayText = () => {
      if (!files) return placeholder;
      if (Array.isArray(files)) {
        return files.length === 1 ? files[0].name : `${files.length} files selected`;
      }
      return files.name;
    };

    const hasFiles = files && (Array.isArray(files) ? files.length > 0 : true);

    return (
      <div
        className={cn(
          'zk-file-input',
          `zk-file-input--${size}`,
          `zk-file-input--${variant}`,
          error && 'zk-file-input--error',
          disabled && 'zk-file-input--disabled',
          className
        )}
        onClick={disabled ? undefined : handleClick}
      >
        <input
          ref={(node) => {
            (inputRef as React.MutableRefObject<HTMLInputElement | null>).current = node;
            if (typeof ref === 'function') {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          type="file"
          className="zk-file-input__input"
          onChange={handleChange}
          multiple={multiple}
          accept={accept}
          disabled={disabled}
          {...props}
        />
        <span className={cn('zk-file-input__text', !hasFiles && 'zk-file-input__text--placeholder')}>
          {getDisplayText()}
        </span>
        <div className="zk-file-input__actions">
          {hasFiles && clearable && !disabled && (
            <button
              type="button"
              className="zk-file-input__clear"
              onClick={handleClear}
              aria-label="Clear"
            >
              ✕
            </button>
          )}
          <span className="zk-file-input__button">{buttonLabel}</span>
        </div>
      </div>
    );
  }
);

FileInput.displayName = 'FileInput';
