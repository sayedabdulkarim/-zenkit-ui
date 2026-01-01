'use client';

import { forwardRef, useState, useRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface DropzoneProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onDrop'> {
  /** On drop callback */
  onDrop?: (files: File[]) => void;
  /** Accept file types */
  accept?: string;
  /** Multiple files */
  multiple?: boolean;
  /** Max file size (bytes) */
  maxSize?: number;
  /** Max files */
  maxFiles?: number;
  /** Disabled state */
  disabled?: boolean;
  /** Custom content */
  children?: ReactNode;
  /** Loading state */
  loading?: boolean;
}

export const Dropzone = forwardRef<HTMLDivElement, DropzoneProps>(
  (
    {
      onDrop,
      accept,
      multiple = true,
      maxSize,
      maxFiles,
      disabled = false,
      children,
      loading = false,
      className,
      ...props
    },
    ref
  ) => {
    const [isDragOver, setIsDragOver] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const validateFiles = (files: FileList | File[]): File[] => {
      const validFiles: File[] = [];
      const fileArray = Array.from(files);

      for (const file of fileArray) {
        if (maxFiles && validFiles.length >= maxFiles) break;
        if (maxSize && file.size > maxSize) {
          setError(`File ${file.name} exceeds max size`);
          continue;
        }
        if (accept) {
          const acceptedTypes = accept.split(',').map((t) => t.trim());
          const isValid = acceptedTypes.some((type) => {
            if (type.startsWith('.')) {
              return file.name.endsWith(type);
            }
            if (type.endsWith('/*')) {
              return file.type.startsWith(type.slice(0, -1));
            }
            return file.type === type;
          });
          if (!isValid) continue;
        }
        validFiles.push(file);
      }

      return validFiles;
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      setError(null);

      if (disabled || loading) return;

      const files = validateFiles(e.dataTransfer.files);
      if (files.length > 0) {
        onDrop?.(files);
      }
    };

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      if (!disabled && !loading) {
        setIsDragOver(true);
      }
    };

    const handleDragLeave = () => {
      setIsDragOver(false);
    };

    const handleClick = () => {
      if (!disabled && !loading) {
        inputRef.current?.click();
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setError(null);
      if (e.target.files) {
        const files = validateFiles(e.target.files);
        if (files.length > 0) {
          onDrop?.(files);
        }
      }
      e.target.value = '';
    };

    return (
      <div
        ref={ref}
        className={cn(
          'dropzone',
          isDragOver && 'dropzone-active',
          disabled && 'dropzone-disabled',
          loading && 'dropzone-loading',
          error && 'dropzone-error',
          className
        )}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={handleClick}
        {...props}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          style={{ display: 'none' }}
        />
        {children || (
          <div className="dropzone-content">
            {loading ? (
              <div className="dropzone-loading-indicator">
                <span className="dropzone-spinner" />
                <p>Uploading...</p>
              </div>
            ) : (
              <>
                <svg className="dropzone-icon" viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                <p className="dropzone-text">
                  <span className="dropzone-text-primary">Click to upload</span> or drag and drop
                </p>
                {accept && <p className="dropzone-hint">{accept}</p>}
                {maxSize && <p className="dropzone-hint">Max size: {Math.round(maxSize / 1024 / 1024)}MB</p>}
              </>
            )}
          </div>
        )}
        {error && <p className="dropzone-error-text">{error}</p>}
      </div>
    );
  }
);

Dropzone.displayName = 'Dropzone';
