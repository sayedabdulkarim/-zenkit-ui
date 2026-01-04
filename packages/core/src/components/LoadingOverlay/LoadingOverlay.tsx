'use client';

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface LoadingOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the overlay is visible */
  visible?: boolean;
  /** Z-index of the overlay */
  zIndex?: number;
  /** Overlay background opacity */
  overlayOpacity?: number;
  /** Overlay background blur */
  blur?: number;
  /** Custom loader element */
  loader?: React.ReactNode;
  /** Loading text */
  loaderText?: React.ReactNode;
  /** Loader size */
  loaderSize?: 'sm' | 'md' | 'lg' | 'xl';
  /** Transition duration in ms */
  transitionDuration?: number;
  /** Whether the overlay covers the entire viewport */
  fullscreen?: boolean;
}

export const LoadingOverlay = forwardRef<HTMLDivElement, LoadingOverlayProps>(
  (
    {
      className,
      visible = false,
      zIndex = 1000,
      overlayOpacity = 0.75,
      blur = 2,
      loader,
      loaderText,
      loaderSize = 'md',
      transitionDuration = 300,
      fullscreen,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const defaultLoader = (
      <div className={cn('loading-overlay-spinner', `loading-overlay-spinner-${loaderSize}`)}>
        <svg viewBox="0 0 50 50" className="loading-overlay-spinner-svg">
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="4"
            className="loading-overlay-spinner-circle"
          />
        </svg>
      </div>
    );

    return (
      <div
        ref={ref}
        className={cn(
          'loading-overlay-container',
          className
        )}
        style={{
          '--zk-loading-overlay-z-index': zIndex,
          ...style,
        } as React.CSSProperties}
        {...props}
      >
        {children}
        <div
          className={cn(
            'loading-overlay',
            visible && 'loading-overlay-visible',
            fullscreen && 'loading-overlay-fixed',
            blur > 0 && 'loading-overlay-blur'
          )}
        >
          <div className="loading-overlay-content">
            {loader || defaultLoader}
            {loaderText && (
              <div className="loading-overlay-text">{loaderText}</div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

LoadingOverlay.displayName = 'LoadingOverlay';
