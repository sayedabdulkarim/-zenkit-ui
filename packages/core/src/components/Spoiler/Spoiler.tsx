'use client';

import React, { forwardRef, useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';

export interface SpoilerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Maximum height when collapsed */
  maxHeight?: number;
  /** Label for show more button */
  showLabel?: React.ReactNode;
  /** Label for show less button */
  hideLabel?: React.ReactNode;
  /** Whether to hide the control button */
  hideControls?: boolean;
  /** Initial expanded state */
  initialExpanded?: boolean;
  /** Controlled expanded state */
  expanded?: boolean;
  /** Called when expanded state changes */
  onExpandedChange?: (expanded: boolean) => void;
  /** Transition duration in ms */
  transitionDuration?: number;
}

export const Spoiler = forwardRef<HTMLDivElement, SpoilerProps>(
  (
    {
      className,
      maxHeight = 100,
      showLabel = 'Show more',
      hideLabel = 'Show less',
      hideControls,
      initialExpanded = false,
      expanded: controlledExpanded,
      onExpandedChange,
      transitionDuration = 300,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const [internalExpanded, setInternalExpanded] = useState(initialExpanded);
    const [showControl, setShowControl] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    const isExpanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded;

    useEffect(() => {
      if (contentRef.current) {
        const height = contentRef.current.scrollHeight;
        setContentHeight(height);
        setShowControl(height > maxHeight);
      }
    }, [children, maxHeight]);

    const handleToggle = () => {
      const newExpanded = !isExpanded;
      setInternalExpanded(newExpanded);
      onExpandedChange?.(newExpanded);
    };

    return (
      <div
        ref={ref}
        className={cn(
          'zk-spoiler',
          isExpanded && 'zk-spoiler--expanded',
          className
        )}
        style={style}
        {...props}
      >
        <div
          ref={contentRef}
          className="zk-spoiler__content"
          style={{
            maxHeight: isExpanded ? contentHeight : maxHeight,
            transitionDuration: `${transitionDuration}ms`,
          }}
        >
          {children}
        </div>
        {showControl && !hideControls && (
          <>
            {!isExpanded && <div className="zk-spoiler__fade" />}
            <button
              type="button"
              className="zk-spoiler__control"
              onClick={handleToggle}
              aria-expanded={isExpanded}
            >
              {isExpanded ? hideLabel : showLabel}
            </button>
          </>
        )}
      </div>
    );
  }
);

Spoiler.displayName = 'Spoiler';
