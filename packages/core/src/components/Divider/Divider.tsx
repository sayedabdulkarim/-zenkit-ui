import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

type DividerOrientation = 'horizontal' | 'vertical';
type DividerVariant = 'solid' | 'dashed' | 'dotted';

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /** Divider orientation */
  orientation?: DividerOrientation;
  /** Divider style variant */
  variant?: DividerVariant;
  /** Text label position */
  labelPosition?: 'left' | 'center' | 'right';
  /** Text content */
  children?: ReactNode;
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      orientation = 'horizontal',
      variant = 'solid',
      labelPosition = 'center',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const hasLabel = !!children;

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={cn(
          'divider',
          orientation === 'vertical' && 'divider-vertical',
          variant === 'dashed' && 'divider-dashed',
          variant === 'dotted' && 'divider-dotted',
          hasLabel && `divider-with-text divider-text-${labelPosition}`,
          className
        )}
        {...props}
      >
        {hasLabel && <span className="divider-text">{children}</span>}
      </div>
    );
  }
);

Divider.displayName = 'Divider';
