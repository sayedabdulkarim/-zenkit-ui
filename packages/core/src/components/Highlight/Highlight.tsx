'use client';

import React, { forwardRef, useMemo } from 'react';
import { cn } from '../../utils/cn';

export interface HighlightProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Text to highlight within */
  children: string;
  /** Query string or array of strings to highlight */
  highlight: string | string[];
  /** Color of the highlight */
  color?: 'yellow' | 'green' | 'blue' | 'red' | 'purple' | 'orange';
  /** Whether the highlight should be case sensitive */
  caseSensitive?: boolean;
  /** Custom highlight component */
  highlightComponent?: React.ElementType;
  /** Props to pass to highlight element */
  highlightProps?: React.HTMLAttributes<HTMLElement>;
}

export const Highlight = forwardRef<HTMLSpanElement, HighlightProps>(
  (
    {
      className,
      children,
      highlight,
      color = 'yellow',
      caseSensitive = false,
      highlightComponent: HighlightComponent = 'mark',
      highlightProps,
      ...props
    },
    ref
  ) => {
    const chunks = useMemo(() => {
      if (!highlight || !children) {
        return [{ text: children, highlighted: false }];
      }

      const queries = Array.isArray(highlight) ? highlight : [highlight];
      const validQueries = queries.filter((q) => q.length > 0);

      if (validQueries.length === 0) {
        return [{ text: children, highlighted: false }];
      }

      const escapedQueries = validQueries.map((q) =>
        q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      );

      const regex = new RegExp(
        `(${escapedQueries.join('|')})`,
        caseSensitive ? 'g' : 'gi'
      );

      const parts = children.split(regex);

      return parts.map((part) => ({
        text: part,
        highlighted: validQueries.some((q) =>
          caseSensitive ? part === q : part.toLowerCase() === q.toLowerCase()
        ),
      }));
    }, [children, highlight, caseSensitive]);

    return (
      <span ref={ref} className={cn('zk-highlight', className)} {...props}>
        {chunks.map((chunk, index) =>
          chunk.highlighted ? (
            <HighlightComponent
              key={index}
              className={cn('zk-highlight__mark', `zk-highlight__mark--${color}`)}
              {...highlightProps}
            >
              {chunk.text}
            </HighlightComponent>
          ) : (
            <span key={index}>{chunk.text}</span>
          )
        )}
      </span>
    );
  }
);

Highlight.displayName = 'Highlight';
