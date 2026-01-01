import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface MasonryProps extends HTMLAttributes<HTMLDivElement> {
  /** Number of columns */
  columns?: number | { sm?: number; md?: number; lg?: number; xl?: number };
  /** Gap between items */
  gap?: 'none' | 'sm' | 'md' | 'lg';
}

export const Masonry = forwardRef<HTMLDivElement, MasonryProps>(
  ({ columns = 3, gap = 'md', className, children, style, ...props }, ref) => {
    const columnCount = typeof columns === 'number' ? columns : columns.md || 3;

    return (
      <div
        ref={ref}
        className={cn('masonry', `masonry-gap-${gap}`, className)}
        style={{
          ...style,
          '--masonry-columns': columnCount,
        } as React.CSSProperties}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Masonry.displayName = 'Masonry';

export interface MasonryItemProps extends HTMLAttributes<HTMLDivElement> {}

export const MasonryItem = forwardRef<HTMLDivElement, MasonryItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('masonry-item', className)} {...props}>
        {children}
      </div>
    );
  }
);

MasonryItem.displayName = 'MasonryItem';
