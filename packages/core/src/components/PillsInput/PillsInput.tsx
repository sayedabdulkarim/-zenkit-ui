import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
  type KeyboardEvent,
  useRef,
  useImperativeHandle,
} from 'react';
import { cn } from '../../utils/cn';

export type PillsInputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type PillsInputVariant = 'default' | 'filled' | 'unstyled';

export interface PillsInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Pills to display */
  children?: ReactNode;
  /** Size variant */
  size?: PillsInputSize;
  /** Visual variant */
  variant?: PillsInputVariant;
  /** Error state */
  error?: boolean;
  /** Callback when wrapper is clicked */
  onWrapperClick?: () => void;
}

export interface PillsInputFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  /** Callback when Enter is pressed */
  onEnter?: (value: string) => void;
}

const sizeClasses: Record<PillsInputSize, string> = {
  xs: 'pills-input-xs',
  sm: 'pills-input-sm',
  md: 'pills-input-md',
  lg: 'pills-input-lg',
  xl: 'pills-input-xl',
};

const variantClasses: Record<PillsInputVariant, string> = {
  default: '',
  filled: 'pills-input-filled',
  unstyled: 'pills-input-unstyled',
};

export const PillsInput = forwardRef<HTMLDivElement, PillsInputProps>(
  (
    {
      children,
      size = 'md',
      variant = 'default',
      error = false,
      disabled = false,
      readOnly = false,
      className,
      onWrapperClick,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'pills-input',
          sizeClasses[size],
          variantClasses[variant],
          error && 'pills-input-error',
          disabled && 'pills-input-disabled',
          readOnly && 'pills-input-readonly',
          className
        )}
        onClick={onWrapperClick}
        {...props}
      >
        {children}
      </div>
    );
  }
);

PillsInput.displayName = 'PillsInput';

export const PillsInputField = forwardRef<HTMLInputElement, PillsInputFieldProps>(
  ({ onEnter, onKeyDown, className, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current!);

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && onEnter && inputRef.current) {
        e.preventDefault();
        onEnter(inputRef.current.value);
      }
      onKeyDown?.(e);
    };

    return (
      <input
        ref={inputRef}
        type="text"
        className={cn('pills-input-field', className)}
        onKeyDown={handleKeyDown}
        {...props}
      />
    );
  }
);

PillsInputField.displayName = 'PillsInputField';
