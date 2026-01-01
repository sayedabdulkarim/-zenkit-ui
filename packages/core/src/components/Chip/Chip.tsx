import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

type ChipSize = 'sm' | 'md' | 'lg';
type ChipVariant = 'solid' | 'outline' | 'light';
type ChipColor = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  /** Chip size */
  size?: ChipSize;
  /** Chip variant */
  variant?: ChipVariant;
  /** Color scheme */
  color?: ChipColor;
  /** Avatar or icon on left */
  avatar?: ReactNode;
  /** Start content */
  startContent?: ReactNode;
  /** End content */
  endContent?: ReactNode;
  /** Deletable chip */
  onClose?: () => void;
  /** Disabled state */
  disabled?: boolean;
  /** Clickable chip */
  clickable?: boolean;
}

const sizeClasses: Record<ChipSize, string> = {
  sm: 'chip-sm',
  md: '',
  lg: 'chip-lg',
};

const variantClasses: Record<ChipVariant, string> = {
  solid: 'chip-solid',
  outline: 'chip-outline',
  light: 'chip-light',
};

export const Chip = forwardRef<HTMLSpanElement, ChipProps>(
  (
    {
      size = 'md',
      variant = 'solid',
      color = 'default',
      avatar,
      startContent,
      endContent,
      onClose,
      disabled = false,
      clickable = false,
      className,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const isClickable = clickable || !!onClick;

    return (
      <span
        ref={ref}
        role={isClickable ? 'button' : undefined}
        tabIndex={isClickable && !disabled ? 0 : undefined}
        className={cn(
          'chip',
          sizeClasses[size],
          variantClasses[variant],
          `chip-${color}`,
          disabled && 'chip-disabled',
          isClickable && 'chip-clickable',
          className
        )}
        onClick={!disabled ? onClick : undefined}
        {...props}
      >
        {avatar && <span className="chip-avatar">{avatar}</span>}
        {startContent && <span className="chip-start">{startContent}</span>}
        <span className="chip-content">{children}</span>
        {endContent && <span className="chip-end">{endContent}</span>}
        {onClose && !disabled && (
          <button
            type="button"
            className="chip-close"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Remove"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </span>
    );
  }
);

Chip.displayName = 'Chip';

// Chip Group
export interface ChipGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Gap between chips */
  gap?: 'sm' | 'md' | 'lg';
}

export const ChipGroup = forwardRef<HTMLDivElement, ChipGroupProps>(
  ({ gap = 'sm', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('chip-group', `chip-group-gap-${gap}`, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ChipGroup.displayName = 'ChipGroup';
