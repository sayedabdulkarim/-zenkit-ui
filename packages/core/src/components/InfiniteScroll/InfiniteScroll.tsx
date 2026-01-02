'use client';

import { forwardRef, useRef, useEffect, useCallback, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface InfiniteScrollProps extends HTMLAttributes<HTMLDivElement> {
  /** Children to render */
  children: ReactNode;
  /** Callback when more items should be loaded */
  onLoadMore: () => void | Promise<void>;
  /** Whether there are more items to load */
  hasMore: boolean;
  /** Whether currently loading */
  loading?: boolean;
  /** Loading indicator component */
  loader?: ReactNode;
  /** End message when no more items */
  endMessage?: ReactNode;
  /** Threshold in pixels before triggering load */
  threshold?: number;
  /** Scroll direction */
  direction?: 'down' | 'up';
  /** Use window scroll instead of container */
  useWindow?: boolean;
  /** Inverse scroll (for chat-like interfaces) */
  inverse?: boolean;
  /** Initial load */
  initialLoad?: boolean;
  /** Scroll container height */
  height?: number | string;
}

export const InfiniteScroll = forwardRef<HTMLDivElement, InfiniteScrollProps>(
  (
    {
      className,
      children,
      onLoadMore,
      hasMore,
      loading = false,
      loader,
      endMessage,
      threshold = 100,
      direction = 'down',
      useWindow = false,
      inverse = false,
      initialLoad = true,
      height,
      ...props
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const loadingRef = useRef(false);
    const initialLoadDone = useRef(false);

    const handleLoadMore = useCallback(async () => {
      if (loadingRef.current || loading || !hasMore) return;

      loadingRef.current = true;
      try {
        await onLoadMore();
      } finally {
        loadingRef.current = false;
      }
    }, [onLoadMore, loading, hasMore]);

    const checkScrollPosition = useCallback(() => {
      if (!hasMore || loading || loadingRef.current) return;

      if (useWindow) {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = window.innerHeight;

        if (direction === 'down' || !inverse) {
          if (scrollHeight - scrollTop - clientHeight <= threshold) {
            handleLoadMore();
          }
        } else {
          if (scrollTop <= threshold) {
            handleLoadMore();
          }
        }
      } else {
        const container = containerRef.current;
        if (!container) return;

        const { scrollTop, scrollHeight, clientHeight } = container;

        if (direction === 'down' && !inverse) {
          if (scrollHeight - scrollTop - clientHeight <= threshold) {
            handleLoadMore();
          }
        } else if (direction === 'up' || inverse) {
          if (scrollTop <= threshold) {
            handleLoadMore();
          }
        }
      }
    }, [hasMore, loading, useWindow, direction, inverse, threshold, handleLoadMore]);

    // Initial load
    useEffect(() => {
      if (initialLoad && !initialLoadDone.current && hasMore) {
        initialLoadDone.current = true;
        handleLoadMore();
      }
    }, [initialLoad, hasMore, handleLoadMore]);

    // Scroll listener
    useEffect(() => {
      const scrollElement = useWindow ? window : containerRef.current;
      if (!scrollElement) return;

      const handleScroll = () => {
        checkScrollPosition();
      };

      scrollElement.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        scrollElement.removeEventListener('scroll', handleScroll);
      };
    }, [useWindow, checkScrollPosition]);

    // Set ref
    useEffect(() => {
      if (typeof ref === 'function') {
        ref(containerRef.current);
      } else if (ref) {
        ref.current = containerRef.current;
      }
    }, [ref]);

    const defaultLoader = (
      <div className="zk-infinite-scroll__loader">
        <svg className="zk-infinite-scroll__spinner" viewBox="0 0 24 24" width="24" height="24">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="31.4" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" values="0 12 12;360 12 12" dur="1s" repeatCount="indefinite" />
          </circle>
        </svg>
        <span>Loading...</span>
      </div>
    );

    const defaultEndMessage = (
      <div className="zk-infinite-scroll__end">
        No more items
      </div>
    );

    const loaderElement = loading && hasMore ? (loader || defaultLoader) : null;
    const endElement = !hasMore ? (endMessage || defaultEndMessage) : null;

    return (
      <div
        ref={containerRef}
        className={cn(
          'zk-infinite-scroll',
          inverse && 'zk-infinite-scroll--inverse',
          className
        )}
        style={{
          height,
          overflow: height ? 'auto' : undefined,
          display: inverse ? 'flex' : undefined,
          flexDirection: inverse ? 'column-reverse' : undefined,
        }}
        {...props}
      >
        {inverse && loaderElement}
        {children}
        {!inverse && loaderElement}
        {endElement}
      </div>
    );
  }
);

InfiniteScroll.displayName = 'InfiniteScroll';
