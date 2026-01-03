import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export type BurgerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface BurgerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether the burger is in opened state */
  opened: boolean;
  /** Size variant */
  size?: BurgerSize;
  /** Accessible label */
  'aria-label'?: string;
}

const sizeClasses: Record<BurgerSize, string> = {
  xs: 'burger-xs',
  sm: 'burger-sm',
  md: 'burger-md',
  lg: 'burger-lg',
  xl: 'burger-xl',
};

export const Burger = forwardRef<HTMLButtonElement, BurgerProps>(
  (
    {
      opened,
      size = 'md',
      disabled = false,
      className,
      'aria-label': ariaLabel = 'Toggle navigation',
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          'burger',
          sizeClasses[size],
          opened && 'burger-opened',
          disabled && 'burger-disabled',
          className
        )}
        aria-expanded={opened}
        aria-label={ariaLabel}
        disabled={disabled}
        {...props}
      >
        <div className="burger-inner">
          <span className="burger-line" />
          <span className="burger-line" />
          <span className="burger-line" />
        </div>
      </button>
    );
  }
);

Burger.displayName = 'Burger';
