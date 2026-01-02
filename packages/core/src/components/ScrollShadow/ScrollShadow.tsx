'use client';

import React, { forwardRef, useState, useRef, useEffect, useCallback } from 'react';
import { cn } from '../../utils/cn';

export interface ScrollShadowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Orientation of scroll */
  orientation?: 'horizontal' | 'vertical' | 'both';
  /** Shadow size */
  shadowSize?: number;
  /** Shadow color */
  shadowColor?: string;
  /** Whether to hide scrollbar */
  hideScrollbar?: boolean;
  /** Offset before showing shadow */
  offset?: number;
}

export const ScrollShadow = forwardRef<HTMLDivElement, ScrollShadowProps>(
  (
    {
      className,
      orientation = 'vertical',
      shadowSize = 40,
      shadowColor = 'rgba(0, 0, 0, 0.1)',
      hideScrollbar,
      offset = 0,
      children,
      style,
      onScroll,
      ...props
    },
    ref
  ) => {
    const [scrollState, setScrollState] = useState({
      top: false,
      bottom: false,
      left: false,
      right: false,
    });
    const containerRef = useRef<HTMLDivElement>(null);

    const updateShadows = useCallback(() => {
      const container = containerRef.current;
      if (!container) return;

      const {
        scrollTop,
        scrollLeft,
        scrollHeight,
        scrollWidth,
        clientHeight,
        clientWidth,
      } = container;

      const canScrollVertical = scrollHeight > clientHeight;
      const canScrollHorizontal = scrollWidth > clientWidth;

      setScrollState({
        top: canScrollVertical && scrollTop > offset,
        bottom: canScrollVertical && scrollTop < scrollHeight - clientHeight - offset,
        left: canScrollHorizontal && scrollLeft > offset,
        right: canScrollHorizontal && scrollLeft < scrollWidth - clientWidth - offset,
      });
    }, [offset]);

    useEffect(() => {
      updateShadows();
      window.addEventListener('resize', updateShadows);
      return () => window.removeEventListener('resize', updateShadows);
    }, [updateShadows]);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
      updateShadows();
      onScroll?.(e);
    };

    const showVertical = orientation === 'vertical' || orientation === 'both';
    const showHorizontal = orientation === 'horizontal' || orientation === 'both';

    return (
      <div
        className={cn(
          'zk-scroll-shadow',
          `zk-scroll-shadow--${orientation}`,
          scrollState.top && showVertical && 'zk-scroll-shadow--top',
          scrollState.bottom && showVertical && 'zk-scroll-shadow--bottom',
          scrollState.left && showHorizontal && 'zk-scroll-shadow--left',
          scrollState.right && showHorizontal && 'zk-scroll-shadow--right',
          hideScrollbar && 'zk-scroll-shadow--hide-scrollbar',
          className
        )}
        style={{
          '--scroll-shadow-size': `${shadowSize}px`,
          '--scroll-shadow-color': shadowColor,
          ...style,
        } as React.CSSProperties}
        {...props}
      >
        <div
          ref={(node) => {
            (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
            if (typeof ref === 'function') {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          className="zk-scroll-shadow__content"
          onScroll={handleScroll}
        >
          {children}
        </div>
      </div>
    );
  }
);

ScrollShadow.displayName = 'ScrollShadow';
