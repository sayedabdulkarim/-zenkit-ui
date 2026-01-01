'use client';

import { forwardRef, useState, useRef, useCallback, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export type ResizeDirection = 'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

export interface ResizableProps extends HTMLAttributes<HTMLDivElement> {
  /** Minimum width */
  minWidth?: number;
  /** Maximum width */
  maxWidth?: number;
  /** Minimum height */
  minHeight?: number;
  /** Maximum height */
  maxHeight?: number;
  /** Initial width */
  defaultWidth?: number;
  /** Initial height */
  defaultHeight?: number;
  /** Controlled width */
  width?: number;
  /** Controlled height */
  height?: number;
  /** Enabled resize directions */
  directions?: ResizeDirection[];
  /** Handle size */
  handleSize?: number;
  /** On resize callback */
  onResize?: (width: number, height: number) => void;
  /** On resize start */
  onResizeStart?: () => void;
  /** On resize end */
  onResizeEnd?: (width: number, height: number) => void;
  /** Children */
  children: ReactNode;
}

export const Resizable = forwardRef<HTMLDivElement, ResizableProps>(
  (
    {
      minWidth = 100,
      maxWidth = Infinity,
      minHeight = 100,
      maxHeight = Infinity,
      defaultWidth,
      defaultHeight,
      width: controlledWidth,
      height: controlledHeight,
      directions = ['right', 'bottom', 'bottomRight'],
      handleSize = 8,
      onResize,
      onResizeStart,
      onResizeEnd,
      className,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState({
      width: defaultWidth || 200,
      height: defaultHeight || 200,
    });
    const [isResizing, setIsResizing] = useState(false);

    const width = controlledWidth ?? size.width;
    const height = controlledHeight ?? size.height;

    const handleMouseDown = useCallback(
      (direction: ResizeDirection) => (e: React.MouseEvent) => {
        e.preventDefault();
        setIsResizing(true);
        onResizeStart?.();

        const startX = e.clientX;
        const startY = e.clientY;
        const startWidth = width;
        const startHeight = height;

        const handleMouseMove = (moveEvent: MouseEvent) => {
          let newWidth = startWidth;
          let newHeight = startHeight;
          const deltaX = moveEvent.clientX - startX;
          const deltaY = moveEvent.clientY - startY;

          if (direction.includes('right') || direction === 'right') {
            newWidth = Math.min(maxWidth, Math.max(minWidth, startWidth + deltaX));
          }
          if (direction.includes('left') || direction === 'left') {
            newWidth = Math.min(maxWidth, Math.max(minWidth, startWidth - deltaX));
          }
          if (direction.includes('bottom') || direction === 'bottom') {
            newHeight = Math.min(maxHeight, Math.max(minHeight, startHeight + deltaY));
          }
          if (direction.includes('top') || direction === 'top') {
            newHeight = Math.min(maxHeight, Math.max(minHeight, startHeight - deltaY));
          }

          if (controlledWidth === undefined && controlledHeight === undefined) {
            setSize({ width: newWidth, height: newHeight });
          }
          onResize?.(newWidth, newHeight);
        };

        const handleMouseUp = () => {
          setIsResizing(false);
          onResizeEnd?.(
            controlledWidth ?? size.width,
            controlledHeight ?? size.height
          );
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      },
      [width, height, minWidth, maxWidth, minHeight, maxHeight, controlledWidth, controlledHeight, size, onResize, onResizeStart, onResizeEnd]
    );

    const renderHandle = (direction: ResizeDirection) => {
      if (!directions.includes(direction)) return null;

      return (
        <div
          key={direction}
          className={cn('resizable-handle', `resizable-handle-${direction}`)}
          style={{ '--handle-size': `${handleSize}px` } as React.CSSProperties}
          onMouseDown={handleMouseDown(direction)}
        />
      );
    };

    return (
      <div
        ref={ref || containerRef}
        className={cn('resizable', isResizing && 'resizable-resizing', className)}
        style={{
          width,
          height,
          ...style,
        }}
        {...props}
      >
        {children}
        {renderHandle('top')}
        {renderHandle('bottom')}
        {renderHandle('left')}
        {renderHandle('right')}
        {renderHandle('topLeft')}
        {renderHandle('topRight')}
        {renderHandle('bottomLeft')}
        {renderHandle('bottomRight')}
      </div>
    );
  }
);

Resizable.displayName = 'Resizable';
