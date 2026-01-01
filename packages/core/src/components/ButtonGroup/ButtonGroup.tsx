import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

type ButtonGroupSize = 'sm' | 'md' | 'lg';
type ButtonGroupVariant = 'solid' | 'outline' | 'ghost';

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Size of buttons in the group */
  size?: ButtonGroupSize;
  /** Variant of buttons in the group */
  variant?: ButtonGroupVariant;
  /** Disable all buttons */
  disabled?: boolean;
  /** Vertical orientation */
  vertical?: boolean;
  /** Attached buttons (no gap) */
  attached?: boolean;
}

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      size = 'md',
      variant = 'solid',
      disabled = false,
      vertical = false,
      attached = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="group"
        className={cn(
          'btn-group',
          vertical && 'btn-group-vertical',
          attached && 'btn-group-attached',
          disabled && 'btn-group-disabled',
          className
        )}
        data-size={size}
        data-variant={variant}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';
