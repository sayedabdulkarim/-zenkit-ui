import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export type GroupGap = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 0;
export type GroupJustify = 'left' | 'center' | 'right' | 'apart' | 'around' | 'evenly';
export type GroupAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';

export interface GroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Gap between items */
  gap?: GroupGap;
  /** Horizontal alignment */
  justify?: GroupJustify;
  /** Vertical alignment */
  align?: GroupAlign;
  /** Prevent items from wrapping */
  nowrap?: boolean;
  /** Allow items to grow to fill space */
  grow?: boolean;
  /** Prevent items from growing */
  preventGrow?: boolean;
}

const gapClasses: Record<GroupGap, string> = {
  0: 'group-gap-0',
  xs: 'group-gap-xs',
  sm: 'group-gap-sm',
  md: 'group-gap-md',
  lg: 'group-gap-lg',
  xl: 'group-gap-xl',
};

const justifyClasses: Record<GroupJustify, string> = {
  left: 'group-left',
  center: 'group-center',
  right: 'group-right',
  apart: 'group-apart',
  around: 'group-around',
  evenly: 'group-evenly',
};

const alignClasses: Record<GroupAlign, string> = {
  start: 'group-align-start',
  center: 'group-align-center',
  end: 'group-align-end',
  stretch: 'group-align-stretch',
  baseline: 'group-align-baseline',
};

export const Group = forwardRef<HTMLDivElement, GroupProps>(
  (
    {
      gap = 'md',
      justify = 'left',
      align = 'center',
      nowrap = false,
      grow = false,
      preventGrow = false,
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
          'group',
          gapClasses[gap],
          justifyClasses[justify],
          alignClasses[align],
          nowrap && 'group-nowrap',
          grow && 'group-grow',
          preventGrow && 'group-prevent-grow',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Group.displayName = 'Group';
