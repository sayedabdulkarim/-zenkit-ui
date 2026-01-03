import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export type PillSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type PillVariant = 'default' | 'filled' | 'outline';

export interface PillProps extends HTMLAttributes<HTMLSpanElement> {
  /** Size variant */
  size?: PillSize;
  /** Visual variant */
  variant?: PillVariant;
  /** Show remove button */
  withRemoveButton?: boolean;
  /** Callback when remove button clicked */
  onRemove?: () => void;
  /** Disabled state */
  disabled?: boolean;
  /** Icon displayed before label */
  leftSection?: ReactNode;
}

const sizeClasses: Record<PillSize, string> = {
  xs: 'pill-xs',
  sm: 'pill-sm',
  md: 'pill-md',
  lg: 'pill-lg',
  xl: 'pill-xl',
};

const variantClasses: Record<PillVariant, string> = {
  default: '',
  filled: 'pill-filled',
  outline: 'pill-outline',
};

export const Pill = forwardRef<HTMLSpanElement, PillProps>(
  (
    {
      size = 'md',
      variant = 'default',
      withRemoveButton = false,
      onRemove,
      disabled = false,
      leftSection,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          'pill',
          sizeClasses[size],
          variantClasses[variant],
          leftSection && 'pill-with-icon',
          disabled && 'pill-disabled',
          className
        )}
        {...props}
      >
        {leftSection}
        <span className="pill-label">{children}</span>
        {withRemoveButton && (
          <button
            type="button"
            className="pill-remove"
            onClick={onRemove}
            disabled={disabled}
            aria-label="Remove"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M1 1l8 8M9 1l-8 8" />
            </svg>
          </button>
        )}
      </span>
    );
  }
);

Pill.displayName = 'Pill';
