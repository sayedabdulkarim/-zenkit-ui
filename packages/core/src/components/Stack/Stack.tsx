import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

type StackDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type StackAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
type StackSpacing = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  /** Stack direction */
  direction?: StackDirection;
  /** Align items */
  align?: StackAlign;
  /** Justify content */
  justify?: StackJustify;
  /** Gap between items */
  spacing?: StackSpacing;
  /** Wrap items */
  wrap?: boolean;
  /** Divider between items */
  divider?: boolean;
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      direction = 'column',
      align = 'stretch',
      justify = 'start',
      spacing = 'md',
      wrap = false,
      divider = false,
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
          'stack',
          `stack-${direction}`,
          `stack-align-${align}`,
          `stack-justify-${justify}`,
          `stack-spacing-${spacing}`,
          wrap && 'stack-wrap',
          divider && 'stack-divider',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Stack.displayName = 'Stack';

// VStack - Vertical Stack
export interface VStackProps extends Omit<StackProps, 'direction'> {}

export const VStack = forwardRef<HTMLDivElement, VStackProps>(
  (props, ref) => <Stack ref={ref} direction="column" {...props} />
);

VStack.displayName = 'VStack';

// HStack - Horizontal Stack
export interface HStackProps extends Omit<StackProps, 'direction'> {}

export const HStack = forwardRef<HTMLDivElement, HStackProps>(
  (props, ref) => <Stack ref={ref} direction="row" {...props} />
);

HStack.displayName = 'HStack';
