import { forwardRef, type HTMLAttributes, type CSSProperties } from 'react';
import { cn } from '../../utils/cn';

type ColSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';
type Gap = 0 | 1 | 2 | 3 | 4 | 5;

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  /** Number of columns */
  columns?: number;
  /** Gap between items */
  gap?: Gap;
  /** Row gap */
  rowGap?: Gap;
  /** Column gap */
  columnGap?: Gap;
  /** Align items */
  alignItems?: CSSProperties['alignItems'];
  /** Justify content */
  justifyContent?: CSSProperties['justifyContent'];
}

export interface ColProps extends HTMLAttributes<HTMLDivElement> {
  /** Column span */
  span?: ColSpan;
  /** Offset */
  offset?: number;
  /** Small breakpoint span */
  sm?: ColSpan;
  /** Medium breakpoint span */
  md?: ColSpan;
  /** Large breakpoint span */
  lg?: ColSpan;
  /** Extra large breakpoint span */
  xl?: ColSpan;
}

const gapClasses: Record<Gap, string> = {
  0: 'g-0',
  1: 'g-1',
  2: 'g-2',
  3: 'g-3',
  4: 'g-4',
  5: 'g-5',
};

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      columns,
      gap = 3,
      rowGap,
      columnGap,
      alignItems,
      justifyContent,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const gridStyle: CSSProperties = {
      ...style,
      ...(columns && { gridTemplateColumns: `repeat(${columns}, 1fr)` }),
      ...(alignItems && { alignItems }),
      ...(justifyContent && { justifyContent }),
    };

    return (
      <div
        ref={ref}
        className={cn(
          'row',
          gap !== undefined && gapClasses[gap],
          rowGap !== undefined && `gy-${rowGap}`,
          columnGap !== undefined && `gx-${columnGap}`,
          className
        )}
        style={gridStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';

export const Col = forwardRef<HTMLDivElement, ColProps>(
  (
    {
      span,
      offset,
      sm,
      md,
      lg,
      xl,
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
          span ? `col-${span}` : 'col',
          offset && `offset-${offset}`,
          sm && `col-sm-${sm}`,
          md && `col-md-${md}`,
          lg && `col-lg-${lg}`,
          xl && `col-xl-${xl}`,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Col.displayName = 'Col';
