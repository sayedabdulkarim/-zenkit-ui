'use client';

import { forwardRef, useRef, useState, useEffect, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface ScrollAreaProps extends HTMLAttributes<HTMLDivElement> {
  /** Scroll direction */
  type?: 'auto' | 'always' | 'scroll' | 'hover';
  /** Scrollbar size */
  scrollbarSize?: number;
  /** Hide delay (ms) */
  scrollHideDelay?: number;
  /** Orientation */
  orientation?: 'vertical' | 'horizontal' | 'both';
}

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
  (
    {
      type = 'hover',
      scrollbarSize = 8,
      scrollHideDelay = 600,
      orientation = 'vertical',
      className,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const viewportRef = useRef<HTMLDivElement>(null);
    const [showScrollbar, setShowScrollbar] = useState(type === 'always');
    const [scrollPercentY, setScrollPercentY] = useState(0);
    const [scrollPercentX, setScrollPercentX] = useState(0);
    const [thumbHeightPercent, setThumbHeightPercent] = useState(100);
    const [thumbWidthPercent, setThumbWidthPercent] = useState(100);
    const hideTimeoutRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
      const viewport = viewportRef.current;
      if (!viewport) return;

      const updateScrollbar = () => {
        const { scrollTop, scrollHeight, clientHeight, scrollLeft, scrollWidth, clientWidth } = viewport;

        setThumbHeightPercent(Math.min(100, (clientHeight / scrollHeight) * 100));
        setThumbWidthPercent(Math.min(100, (clientWidth / scrollWidth) * 100));
        setScrollPercentY((scrollTop / (scrollHeight - clientHeight)) * 100 || 0);
        setScrollPercentX((scrollLeft / (scrollWidth - clientWidth)) * 100 || 0);
      };

      updateScrollbar();
      viewport.addEventListener('scroll', updateScrollbar);
      window.addEventListener('resize', updateScrollbar);

      return () => {
        viewport.removeEventListener('scroll', updateScrollbar);
        window.removeEventListener('resize', updateScrollbar);
      };
    }, []);

    const handleMouseEnter = () => {
      if (type === 'hover' || type === 'scroll') {
        clearTimeout(hideTimeoutRef.current);
        setShowScrollbar(true);
      }
    };

    const handleMouseLeave = () => {
      if (type === 'hover') {
        hideTimeoutRef.current = setTimeout(() => setShowScrollbar(false), scrollHideDelay);
      }
    };

    const handleScroll = () => {
      if (type === 'scroll') {
        clearTimeout(hideTimeoutRef.current);
        setShowScrollbar(true);
        hideTimeoutRef.current = setTimeout(() => setShowScrollbar(false), scrollHideDelay);
      }
    };

    const showVertical = (orientation === 'vertical' || orientation === 'both') && thumbHeightPercent < 100;
    const showHorizontal = (orientation === 'horizontal' || orientation === 'both') && thumbWidthPercent < 100;

    return (
      <div
        ref={ref}
        className={cn('scroll-area', className)}
        style={{ ...style, '--scrollbar-size': `${scrollbarSize}px` } as React.CSSProperties}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <div
          ref={viewportRef}
          className="scroll-area-viewport"
          onScroll={handleScroll}
        >
          {children}
        </div>

        {showVertical && (
          <div className={cn('scroll-area-scrollbar scroll-area-scrollbar-vertical', showScrollbar && 'scroll-area-scrollbar-visible')}>
            <div
              className="scroll-area-thumb"
              style={{
                height: `${thumbHeightPercent}%`,
                top: `${scrollPercentY * (100 - thumbHeightPercent) / 100}%`,
              }}
            />
          </div>
        )}

        {showHorizontal && (
          <div className={cn('scroll-area-scrollbar scroll-area-scrollbar-horizontal', showScrollbar && 'scroll-area-scrollbar-visible')}>
            <div
              className="scroll-area-thumb"
              style={{
                width: `${thumbWidthPercent}%`,
                left: `${scrollPercentX * (100 - thumbWidthPercent) / 100}%`,
              }}
            />
          </div>
        )}
      </div>
    );
  }
);

ScrollArea.displayName = 'ScrollArea';
