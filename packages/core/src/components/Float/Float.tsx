import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export type FloatPlacement =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'left-center'
  | 'right-center'
  | 'center';

export type FloatOffset = 1 | 2 | 3 | 4;

export interface FloatProps extends HTMLAttributes<HTMLDivElement> {
  /** Position of the floating element */
  placement?: FloatPlacement;
  /** Offset from the edge */
  offset?: FloatOffset;
  /** Place element outside the container */
  outside?: boolean;
}

const placementClasses: Record<FloatPlacement, string> = {
  'top-left': 'float-top-left',
  'top-center': 'float-top-center',
  'top-right': 'float-top-right',
  'bottom-left': 'float-bottom-left',
  'bottom-center': 'float-bottom-center',
  'bottom-right': 'float-bottom-right',
  'left-center': 'float-left-center',
  'right-center': 'float-right-center',
  center: 'float-center',
};

const offsetClasses: Record<FloatOffset, string> = {
  1: 'float-offset-1',
  2: 'float-offset-2',
  3: 'float-offset-3',
  4: 'float-offset-4',
};

export const Float = forwardRef<HTMLDivElement, FloatProps>(
  (
    {
      placement = 'top-right',
      offset,
      outside = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'float',
          placementClasses[placement],
          offset && offsetClasses[offset],
          outside && 'float-outside',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Float.displayName = 'Float';
