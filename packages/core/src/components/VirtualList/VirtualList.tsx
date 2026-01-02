'use client';

import { forwardRef, useState, useRef, useEffect, useCallback, type HTMLAttributes, type ReactNode, type CSSProperties } from 'react';
import { cn } from '../../utils/cn';

export interface VirtualListProps<T> extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'onScroll'> {
  /** Data items to render */
  data: T[];
  /** Height of each item (or function for variable heights) */
  itemHeight: number | ((index: number, item: T) => number);
  /** Container height */
  height: number | string;
  /** Width of the container */
  width?: number | string;
  /** Render function for each item */
  renderItem: (item: T, index: number, style: CSSProperties) => ReactNode;
  /** Number of items to overscan */
  overscan?: number;
  /** On scroll callback with scroll position */
  onScrollChange?: (scrollTop: number) => void;
  /** Key extractor */
  getKey?: (item: T, index: number) => string | number;
  /** Loading state */
  loading?: boolean;
  /** Loading component */
  loadingComponent?: ReactNode;
  /** Empty state component */
  emptyComponent?: ReactNode;
  /** Gap between items */
  gap?: number;
  /** Scroll to index */
  scrollToIndex?: number;
}

export const VirtualList = forwardRef<HTMLDivElement, VirtualListProps<unknown>>(
  <T,>(
    {
      className,
      data,
      itemHeight,
      height,
      width = '100%',
      renderItem,
      overscan = 3,
      onScrollChange,
      getKey,
      loading = false,
      loadingComponent,
      emptyComponent,
      gap = 0,
      scrollToIndex,
      ...props
    }: VirtualListProps<T>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollTop, setScrollTop] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);

    // Get item height at index
    const getItemHeight = useCallback((index: number): number => {
      if (typeof itemHeight === 'function') {
        return itemHeight(index, data[index] as T);
      }
      return itemHeight;
    }, [itemHeight, data]);

    // Calculate total height
    const getTotalHeight = useCallback((): number => {
      if (typeof itemHeight === 'number') {
        return data.length * itemHeight + (data.length - 1) * gap;
      }
      return data.reduce((acc, _, index) => acc + getItemHeight(index) + (index < data.length - 1 ? gap : 0), 0);
    }, [data, itemHeight, gap, getItemHeight]);

    // Get item offset
    const getItemOffset = useCallback((index: number): number => {
      if (typeof itemHeight === 'number') {
        return index * (itemHeight + gap);
      }
      let offset = 0;
      for (let i = 0; i < index; i++) {
        offset += getItemHeight(i) + gap;
      }
      return offset;
    }, [itemHeight, gap, getItemHeight]);

    // Get visible range
    const getVisibleRange = useCallback((): { start: number; end: number } => {
      if (typeof itemHeight === 'number') {
        const start = Math.max(0, Math.floor(scrollTop / (itemHeight + gap)) - overscan);
        const visibleCount = Math.ceil(containerHeight / (itemHeight + gap));
        const end = Math.min(data.length - 1, start + visibleCount + overscan * 2);
        return { start, end };
      }

      // Variable height calculation
      let start = 0;
      let offset = 0;

      while (offset < scrollTop && start < data.length) {
        offset += getItemHeight(start) + gap;
        start++;
      }
      start = Math.max(0, start - overscan - 1);

      let end = start;
      offset = getItemOffset(start);

      while (offset < scrollTop + containerHeight && end < data.length) {
        offset += getItemHeight(end) + gap;
        end++;
      }
      end = Math.min(data.length - 1, end + overscan);

      return { start, end };
    }, [scrollTop, containerHeight, data.length, itemHeight, gap, overscan, getItemHeight, getItemOffset]);

    // Handle scroll
    const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
      const newScrollTop = e.currentTarget.scrollTop;
      setScrollTop(newScrollTop);
      onScrollChange?.(newScrollTop);
    }, [onScrollChange]);

    // Update container height on mount/resize
    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const updateHeight = () => {
        setContainerHeight(container.clientHeight);
      };

      updateHeight();

      const observer = new ResizeObserver(updateHeight);
      observer.observe(container);

      return () => observer.disconnect();
    }, []);

    // Scroll to index
    useEffect(() => {
      if (scrollToIndex !== undefined && containerRef.current) {
        const offset = getItemOffset(scrollToIndex);
        containerRef.current.scrollTop = offset;
      }
    }, [scrollToIndex, getItemOffset]);

    // Set ref
    useEffect(() => {
      if (typeof ref === 'function') {
        ref(containerRef.current);
      } else if (ref) {
        ref.current = containerRef.current;
      }
    }, [ref]);

    if (loading) {
      return (
        <div className={cn('zk-virtual-list', 'zk-virtual-list--loading', className)} style={{ height, width }}>
          {loadingComponent || (
            <div className="zk-virtual-list__loading">Loading...</div>
          )}
        </div>
      );
    }

    if (data.length === 0) {
      return (
        <div className={cn('zk-virtual-list', 'zk-virtual-list--empty', className)} style={{ height, width }}>
          {emptyComponent || (
            <div className="zk-virtual-list__empty">No items</div>
          )}
        </div>
      );
    }

    const { start, end } = getVisibleRange();
    const totalHeight = getTotalHeight();

    const items: ReactNode[] = [];
    for (let i = start; i <= end; i++) {
      const item = data[i] as T;
      const key = getKey ? getKey(item, i) : i;
      const itemStyle: CSSProperties = {
        position: 'absolute',
        top: getItemOffset(i),
        left: 0,
        right: 0,
        height: getItemHeight(i),
      };
      items.push(
        <div key={key} style={itemStyle}>
          {renderItem(item, i, itemStyle)}
        </div>
      );
    }

    return (
      <div
        ref={containerRef}
        className={cn('zk-virtual-list', className)}
        style={{ height, width, overflow: 'auto', position: 'relative' }}
        onScroll={handleScroll}
        {...props}
      >
        <div style={{ height: totalHeight, position: 'relative' }}>
          {items}
        </div>
      </div>
    );
  }
) as <T>(props: VirtualListProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> }) => JSX.Element;

(VirtualList as { displayName?: string }).displayName = 'VirtualList';
