'use client';

import { forwardRef, useState, useRef, useCallback, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface SplitterProps extends HTMLAttributes<HTMLDivElement> {
  /** Orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Initial sizes (percentages) */
  defaultSizes?: number[];
  /** Minimum size for panels (px) */
  minSize?: number;
  /** Gutter size (px) */
  gutterSize?: number;
  /** Disable resizing */
  disabled?: boolean;
}

export const Splitter = forwardRef<HTMLDivElement, SplitterProps>(
  (
    {
      orientation = 'horizontal',
      defaultSizes,
      minSize = 100,
      gutterSize = 8,
      disabled = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const childArray = Array.isArray(children) ? children : [children];
    const panelCount = childArray.length;
    const initialSizes = defaultSizes || Array(panelCount).fill(100 / panelCount);
    const [sizes, setSizes] = useState<number[]>(initialSizes);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = useCallback(
      (index: number) => (e: React.MouseEvent) => {
        if (disabled) return;
        e.preventDefault();

        const container = containerRef.current;
        if (!container) return;

        const isHorizontal = orientation === 'horizontal';
        const containerRect = container.getBoundingClientRect();
        const containerSize = isHorizontal ? containerRect.width : containerRect.height;

        const startPos = isHorizontal ? e.clientX : e.clientY;
        const startSizes = [...sizes];

        const handleMouseMove = (moveEvent: MouseEvent) => {
          const currentPos = isHorizontal ? moveEvent.clientX : moveEvent.clientY;
          const delta = ((currentPos - startPos) / containerSize) * 100;

          const newSizes = [...startSizes];
          newSizes[index] = Math.max((minSize / containerSize) * 100, startSizes[index] + delta);
          newSizes[index + 1] = Math.max((minSize / containerSize) * 100, startSizes[index + 1] - delta);

          setSizes(newSizes);
        };

        const handleMouseUp = () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      },
      [orientation, sizes, minSize, disabled]
    );

    return (
      <div
        ref={(node) => {
          (containerRef as any).current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        className={cn(
          'splitter',
          `splitter-${orientation}`,
          disabled && 'splitter-disabled',
          className
        )}
        {...props}
      >
        {childArray.map((child, index) => (
          <div key={index} className="splitter-panel-wrapper">
            <div
              className="splitter-panel"
              style={{
                [orientation === 'horizontal' ? 'width' : 'height']: `${sizes[index]}%`,
              }}
            >
              {child}
            </div>
            {index < panelCount - 1 && (
              <div
                className={cn('splitter-gutter', !disabled && 'splitter-gutter-active')}
                style={{
                  [orientation === 'horizontal' ? 'width' : 'height']: gutterSize,
                }}
                onMouseDown={handleMouseDown(index)}
              >
                <div className="splitter-gutter-handle" />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
);

Splitter.displayName = 'Splitter';

export interface SplitterPanelProps extends HTMLAttributes<HTMLDivElement> {
  /** Default size (percentage) */
  defaultSize?: number;
  /** Minimum size (px) */
  minSize?: number;
  /** Maximum size (px) */
  maxSize?: number;
  /** Collapsible */
  collapsible?: boolean;
}

export const SplitterPanel = forwardRef<HTMLDivElement, SplitterPanelProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('splitter-panel-content', className)} {...props}>
        {children}
      </div>
    );
  }
);

SplitterPanel.displayName = 'SplitterPanel';
