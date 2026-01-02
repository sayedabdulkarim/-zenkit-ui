'use client';

import { forwardRef, type HTMLAttributes, type CSSProperties } from 'react';
import { cn } from '../../utils/cn';

type ResponsiveValue<T> = T | { base?: T; sm?: T; md?: T; lg?: T; xl?: T; '2xl'?: T };

export interface SimpleGridProps extends HTMLAttributes<HTMLDivElement> {
  /** Number of columns */
  cols?: ResponsiveValue<number>;
  /** Minimum child width (auto-fit) */
  minChildWidth?: string;
  /** Gap between items */
  spacing?: ResponsiveValue<string | number>;
  /** Horizontal spacing */
  spacingX?: ResponsiveValue<string | number>;
  /** Vertical spacing */
  spacingY?: ResponsiveValue<string | number>;
}

const getSpacingValue = (value: string | number): string => {
  if (typeof value === 'number') return `${value * 0.25}rem`;
  return value;
};

export const SimpleGrid = forwardRef<HTMLDivElement, SimpleGridProps>(
  (
    {
      className,
      cols = 1,
      minChildWidth,
      spacing,
      spacingX,
      spacingY,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const getResponsiveStyles = (): CSSProperties => {
      const styles: CSSProperties = {
        display: 'grid',
      };

      // Handle minChildWidth (auto-fit)
      if (minChildWidth) {
        styles.gridTemplateColumns = `repeat(auto-fit, minmax(${minChildWidth}, 1fr))`;
      } else if (typeof cols === 'number') {
        // Simple number columns
        styles.gridTemplateColumns = `repeat(${cols}, minmax(0, 1fr))`;
      }

      // Handle spacing
      const finalSpacingX = spacingX ?? spacing;
      const finalSpacingY = spacingY ?? spacing;

      if (finalSpacingX !== undefined && finalSpacingY !== undefined) {
        if (typeof finalSpacingX === 'number' || typeof finalSpacingX === 'string') {
          styles.columnGap = getSpacingValue(finalSpacingX as string | number);
        }
        if (typeof finalSpacingY === 'number' || typeof finalSpacingY === 'string') {
          styles.rowGap = getSpacingValue(finalSpacingY as string | number);
        }
      } else if (spacing !== undefined) {
        if (typeof spacing === 'number' || typeof spacing === 'string') {
          styles.gap = getSpacingValue(spacing as string | number);
        }
      } else {
        styles.gap = '1rem'; // Default gap
      }

      return { ...styles, ...style };
    };

    return (
      <div
        ref={ref}
        className={cn(
          'zk-simple-grid',
          typeof cols === 'object' && !minChildWidth && 'zk-simple-grid--responsive',
          className
        )}
        style={getResponsiveStyles()}
        {...props}
      >
        {children}
      </div>
    );
  }
);

SimpleGrid.displayName = 'SimpleGrid';
