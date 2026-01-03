import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export type OverlayOpacity = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;
export type OverlayBlur = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type OverlayRadius = 'sm' | 'md' | 'lg';

export interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  /** Background opacity (10-90) */
  opacity?: OverlayOpacity;
  /** Backdrop blur level */
  blur?: OverlayBlur;
  /** Use fixed positioning instead of absolute */
  fixed?: boolean;
  /** Center content within overlay */
  center?: boolean;
  /** Use white background instead of black */
  white?: boolean;
  /** Use gradient background */
  gradient?: boolean;
  /** Border radius */
  radius?: OverlayRadius;
  /** Custom z-index */
  zIndex?: number;
}

const opacityClasses: Record<OverlayOpacity, string> = {
  10: 'overlay-opacity-10',
  20: 'overlay-opacity-20',
  30: 'overlay-opacity-30',
  40: 'overlay-opacity-40',
  50: 'overlay-opacity-50',
  60: 'overlay-opacity-60',
  70: 'overlay-opacity-70',
  80: 'overlay-opacity-80',
  90: 'overlay-opacity-90',
};

const blurClasses: Record<OverlayBlur, string> = {
  xs: 'overlay-blur-xs',
  sm: 'overlay-blur-sm',
  md: 'overlay-blur-md',
  lg: 'overlay-blur-lg',
  xl: 'overlay-blur-xl',
};

const radiusClasses: Record<OverlayRadius, string> = {
  sm: 'overlay-radius-sm',
  md: 'overlay-radius-md',
  lg: 'overlay-radius-lg',
};

export const Overlay = forwardRef<HTMLDivElement, OverlayProps>(
  (
    {
      opacity,
      blur,
      fixed = false,
      center = false,
      white = false,
      gradient = false,
      radius,
      zIndex,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'overlay',
          opacity && opacityClasses[opacity],
          blur && blurClasses[blur],
          fixed && 'overlay-fixed',
          center && 'overlay-center',
          white && 'overlay-white',
          gradient && 'overlay-gradient',
          radius && radiusClasses[radius],
          className
        )}
        style={{ ...style, ...(zIndex !== undefined && { zIndex }) }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Overlay.displayName = 'Overlay';
