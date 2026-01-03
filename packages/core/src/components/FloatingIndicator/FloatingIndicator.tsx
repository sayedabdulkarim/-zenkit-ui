import { forwardRef, type HTMLAttributes, type CSSProperties } from 'react';
import { cn } from '../../utils/cn';

export type FloatingIndicatorVariant = 'default' | 'filled' | 'light' | 'outline';

export interface FloatingIndicatorProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual variant */
  variant?: FloatingIndicatorVariant;
  /** Disable transition animation */
  noTransition?: boolean;
  /** Hide the indicator */
  hidden?: boolean;
  /** Target element dimensions and position */
  target?: {
    width: number;
    height: number;
    x: number;
    y: number;
  };
}

const variantClasses: Record<FloatingIndicatorVariant, string> = {
  default: '',
  filled: 'floating-indicator-filled',
  light: 'floating-indicator-light',
  outline: 'floating-indicator-outline',
};

export const FloatingIndicator = forwardRef<HTMLDivElement, FloatingIndicatorProps>(
  (
    {
      variant = 'default',
      noTransition = false,
      hidden = false,
      target,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const indicatorStyle: CSSProperties = {
      ...style,
      ...(target && {
        width: target.width,
        height: target.height,
        transform: `translate(${target.x}px, ${target.y}px)`,
      }),
    };

    return (
      <div
        ref={ref}
        className={cn(
          'floating-indicator',
          variantClasses[variant],
          noTransition && 'floating-indicator-no-transition',
          hidden && 'floating-indicator-hidden',
          className
        )}
        style={indicatorStyle}
        {...props}
      />
    );
  }
);

FloatingIndicator.displayName = 'FloatingIndicator';
