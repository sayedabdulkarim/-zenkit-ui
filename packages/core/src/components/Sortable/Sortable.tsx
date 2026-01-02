'use client';

import { forwardRef, useState, useRef, useCallback, type HTMLAttributes, type ReactNode, type CSSProperties } from 'react';
import { cn } from '../../utils/cn';

export interface SortableItem {
  id: string | number;
  [key: string]: unknown;
}

export interface SortableProps<T extends SortableItem> extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Items to sort */
  items: T[];
  /** On items reorder */
  onReorder: (items: T[]) => void;
  /** Render item function */
  renderItem: (item: T, index: number, isDragging: boolean, dragHandleProps: DragHandleProps) => ReactNode;
  /** Direction of the list */
  direction?: 'vertical' | 'horizontal';
  /** Gap between items */
  gap?: number;
  /** Handle selector (if not provided, entire item is draggable) */
  handleSelector?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Animation duration in ms */
  animationDuration?: number;
  /** Lock axis during drag */
  lockAxis?: 'x' | 'y' | null;
  /** Placeholder style */
  placeholderStyle?: CSSProperties;
}

export interface DragHandleProps {
  draggable: boolean;
  onDragStart: (e: React.DragEvent) => void;
  onDragEnd: (e: React.DragEvent) => void;
  'data-drag-handle': boolean;
  style: CSSProperties;
}

export const Sortable = forwardRef<HTMLDivElement, SortableProps<SortableItem>>(
  <T extends SortableItem>(
    {
      className,
      items,
      onReorder,
      renderItem,
      direction = 'vertical',
      gap = 8,
      disabled = false,
      animationDuration = 200,
      lockAxis = null,
      placeholderStyle,
      ...props
    }: SortableProps<T>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
    const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleDragStart = useCallback((index: number) => (e: React.DragEvent) => {
      if (disabled) {
        e.preventDefault();
        return;
      }

      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', String(index));
      setDraggedIndex(index);

      // Set drag image
      if (e.currentTarget instanceof HTMLElement) {
        const rect = e.currentTarget.getBoundingClientRect();
        e.dataTransfer.setDragImage(e.currentTarget, rect.width / 2, rect.height / 2);
      }
    }, [disabled]);

    const handleDragEnd = useCallback(() => {
      setDraggedIndex(null);
      setDragOverIndex(null);
    }, []);

    const handleDragOver = useCallback((index: number) => (e: React.DragEvent) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';

      if (draggedIndex === null || draggedIndex === index) return;

      setDragOverIndex(index);
    }, [draggedIndex]);

    const handleDrop = useCallback((index: number) => (e: React.DragEvent) => {
      e.preventDefault();

      if (draggedIndex === null || draggedIndex === index) return;

      const newItems = [...items];
      const [draggedItem] = newItems.splice(draggedIndex, 1);
      newItems.splice(index, 0, draggedItem);

      onReorder(newItems as T[]);
      setDraggedIndex(null);
      setDragOverIndex(null);
    }, [draggedIndex, items, onReorder]);

    const getDragHandleProps = useCallback((index: number): DragHandleProps => ({
      draggable: !disabled,
      onDragStart: handleDragStart(index),
      onDragEnd: handleDragEnd,
      'data-drag-handle': true,
      style: { cursor: disabled ? 'default' : 'grab' },
    }), [disabled, handleDragStart, handleDragEnd]);

    // Set ref
    const setRefs = useCallback((el: HTMLDivElement | null) => {
      (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
      if (typeof ref === 'function') {
        ref(el);
      } else if (ref) {
        ref.current = el;
      }
    }, [ref]);

    return (
      <div
        ref={setRefs}
        className={cn(
          'zk-sortable',
          `zk-sortable--${direction}`,
          disabled && 'zk-sortable--disabled',
          className
        )}
        style={{
          display: 'flex',
          flexDirection: direction === 'vertical' ? 'column' : 'row',
          gap,
        }}
        {...props}
      >
        {items.map((item, index) => {
          const isDragging = draggedIndex === index;
          const isDragOver = dragOverIndex === index;

          return (
            <div
              key={item.id}
              className={cn(
                'zk-sortable__item',
                isDragging && 'zk-sortable__item--dragging',
                isDragOver && 'zk-sortable__item--drag-over'
              )}
              style={{
                transition: `transform ${animationDuration}ms ease`,
                opacity: isDragging ? 0.5 : 1,
                transform: isDragOver
                  ? direction === 'vertical'
                    ? `translateY(${draggedIndex !== null && draggedIndex < index ? '-' : ''}4px)`
                    : `translateX(${draggedIndex !== null && draggedIndex < index ? '-' : ''}4px)`
                  : undefined,
              }}
              onDragOver={handleDragOver(index)}
              onDrop={handleDrop(index)}
            >
              {renderItem(item as T, index, isDragging, getDragHandleProps(index))}
            </div>
          );
        })}
      </div>
    );
  }
) as <T extends SortableItem>(props: SortableProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> }) => JSX.Element;

(Sortable as { displayName?: string }).displayName = 'Sortable';

// Sortable Handle component
export interface SortableHandleProps extends HTMLAttributes<HTMLDivElement> {
  /** Drag handle props from parent */
  dragHandleProps?: DragHandleProps;
}

export const SortableHandle = forwardRef<HTMLDivElement, SortableHandleProps>(
  ({ className, dragHandleProps, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('zk-sortable__handle', className)}
        {...dragHandleProps}
        {...props}
      >
        {children || (
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <circle cx="8" cy="6" r="1.5" />
            <circle cx="16" cy="6" r="1.5" />
            <circle cx="8" cy="12" r="1.5" />
            <circle cx="16" cy="12" r="1.5" />
            <circle cx="8" cy="18" r="1.5" />
            <circle cx="16" cy="18" r="1.5" />
          </svg>
        )}
      </div>
    );
  }
);

SortableHandle.displayName = 'SortableHandle';
