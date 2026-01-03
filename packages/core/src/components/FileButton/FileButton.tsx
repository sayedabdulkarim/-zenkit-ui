import {
  forwardRef,
  useRef,
  type ReactNode,
  type InputHTMLAttributes,
  useImperativeHandle,
} from 'react';
import { cn } from '../../utils/cn';

export interface FileButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'children' | 'onChange'> {
  /** Render function for the button */
  children: (props: { onClick: () => void }) => ReactNode;
  /** Callback when files are selected */
  onChange?: (files: File | File[] | null) => void;
  /** Allow multiple file selection */
  multiple?: boolean;
  /** Reset input value after each selection */
  resetRef?: React.RefObject<() => void>;
}

export interface FileButtonRef {
  reset: () => void;
}

export const FileButton = forwardRef<FileButtonRef, FileButtonProps>(
  (
    {
      children,
      onChange,
      multiple = false,
      accept,
      disabled = false,
      className,
      resetRef,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const reset = () => {
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    };

    useImperativeHandle(ref, () => ({
      reset,
    }));

    // Also expose reset via resetRef for backwards compatibility
    if (resetRef) {
      (resetRef as React.MutableRefObject<() => void>).current = reset;
    }

    const handleClick = () => {
      inputRef.current?.click();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { files } = event.target;
      if (onChange && files) {
        if (multiple) {
          onChange(Array.from(files));
        } else {
          onChange(files[0] || null);
        }
      }
    };

    return (
      <div className={cn('file-button', disabled && 'file-button-disabled', className)}>
        <input
          ref={inputRef}
          type="file"
          className="file-button-input"
          onChange={handleChange}
          multiple={multiple}
          accept={accept}
          disabled={disabled}
          {...props}
        />
        <div className="file-button-content">{children({ onClick: handleClick })}</div>
      </div>
    );
  }
);

FileButton.displayName = 'FileButton';
