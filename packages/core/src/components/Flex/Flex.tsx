import { forwardRef, type HTMLAttributes, type CSSProperties } from 'react';
import { cn } from '../../utils/cn';

type Gap = 0 | 1 | 2 | 3 | 4 | 5;

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  /** Flex direction */
  direction?: CSSProperties['flexDirection'];
  /** Align items */
  align?: CSSProperties['alignItems'];
  /** Justify content */
  justify?: CSSProperties['justifyContent'];
  /** Flex wrap */
  wrap?: CSSProperties['flexWrap'];
  /** Gap between items */
  gap?: Gap;
  /** Display inline-flex */
  inline?: boolean;
}

const gapClasses: Record<Gap, string> = {
  0: 'gap-0',
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
};

const directionClasses: Record<string, string> = {
  row: 'flex-row',
  'row-reverse': 'flex-row-reverse',
  column: 'flex-column',
  'column-reverse': 'flex-column-reverse',
};

const alignClasses: Record<string, string> = {
  'flex-start': 'align-items-start',
  'flex-end': 'align-items-end',
  center: 'align-items-center',
  baseline: 'align-items-baseline',
  stretch: 'align-items-stretch',
  start: 'align-items-start',
  end: 'align-items-end',
};

const justifyClasses: Record<string, string> = {
  'flex-start': 'justify-content-start',
  'flex-end': 'justify-content-end',
  center: 'justify-content-center',
  'space-between': 'justify-content-between',
  'space-around': 'justify-content-around',
  'space-evenly': 'justify-content-evenly',
  start: 'justify-content-start',
  end: 'justify-content-end',
};

const wrapClasses: Record<string, string> = {
  wrap: 'flex-wrap',
  nowrap: 'flex-nowrap',
  'wrap-reverse': 'flex-wrap-reverse',
};

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      direction = 'row',
      align,
      justify,
      wrap,
      gap,
      inline = false,
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
          inline ? 'd-inline-flex' : 'd-flex',
          direction && directionClasses[direction],
          align && alignClasses[align],
          justify && justifyClasses[justify],
          wrap && wrapClasses[wrap],
          gap !== undefined && gapClasses[gap],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Flex.displayName = 'Flex';
