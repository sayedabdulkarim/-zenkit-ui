'use client';

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface RingProgressSection {
  value: number;
  color: string;
  tooltip?: string;
}

export interface RingProgressProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Progress value (0-100) or sections */
  value?: number;
  /** Multiple sections */
  sections?: RingProgressSection[];
  /** Size of the ring */
  size?: number;
  /** Thickness of the ring */
  thickness?: number;
  /** Round end caps */
  roundCaps?: boolean;
  /** Label in the center */
  label?: React.ReactNode;
  /** Root color (background ring) */
  rootColor?: string;
  /** Progress color (single value) */
  color?: string;
}

export const RingProgress = forwardRef<HTMLDivElement, RingProgressProps>(
  (
    {
      className,
      value,
      sections,
      size = 120,
      thickness = 12,
      roundCaps = true,
      label,
      rootColor = '#e9ecef',
      color = '#228be6',
      style,
      ...props
    },
    ref
  ) => {
    const radius = (size - thickness) / 2;
    const circumference = 2 * Math.PI * radius;

    const renderSections = () => {
      if (sections && sections.length > 0) {
        let offset = 0;
        return sections.map((section, index) => {
          const dashLength = (section.value / 100) * circumference;
          const dashOffset = -offset;
          offset += dashLength;

          return (
            <circle
              key={index}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={section.color}
              strokeWidth={thickness}
              strokeDasharray={`${dashLength} ${circumference - dashLength}`}
              strokeDashoffset={dashOffset}
              strokeLinecap={roundCaps ? 'round' : 'butt'}
              className="zk-ring-progress__section"
              style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
            >
              {section.tooltip && <title>{section.tooltip}</title>}
            </circle>
          );
        });
      }

      // Single value
      const dashLength = ((value || 0) / 100) * circumference;

      return (
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={thickness}
          strokeDasharray={`${dashLength} ${circumference - dashLength}`}
          strokeDashoffset={0}
          strokeLinecap={roundCaps ? 'round' : 'butt'}
          className="zk-ring-progress__progress"
          style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
        />
      );
    };

    return (
      <div
        ref={ref}
        className={cn('zk-ring-progress', className)}
        style={{
          width: size,
          height: size,
          ...style,
        }}
        {...props}
      >
        <svg width={size} height={size} className="zk-ring-progress__svg">
          {/* Background ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={rootColor}
            strokeWidth={thickness}
            className="zk-ring-progress__root"
          />
          {/* Progress sections */}
          {renderSections()}
        </svg>
        {label && (
          <div className="zk-ring-progress__label">
            {label}
          </div>
        )}
      </div>
    );
  }
);

RingProgress.displayName = 'RingProgress';
