import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export type AbsoluteCenterAxis = 'both' | 'horizontal' | 'vertical';

export interface AbsoluteCenterProps extends HTMLAttributes<HTMLDivElement> {
  /** Axis to center on */
  axis?: AbsoluteCenterAxis;
}

const axisClasses: Record<AbsoluteCenterAxis, string> = {
  both: 'absolute-center',
  horizontal: 'absolute-center-horizontal',
  vertical: 'absolute-center-vertical',
};

export const AbsoluteCenter = forwardRef<HTMLDivElement, AbsoluteCenterProps>(
  ({ axis = 'both', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(axisClasses[axis], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AbsoluteCenter.displayName = 'AbsoluteCenter';
