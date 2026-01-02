'use client';

import { forwardRef, useMemo, type SVGAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface GaugeProps extends Omit<SVGAttributes<SVGSVGElement>, 'children'> {
  /** Current value */
  value: number;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Size of the gauge */
  size?: number;
  /** Thickness of the arc */
  thickness?: number;
  /** Start angle in degrees (0 is top) */
  startAngle?: number;
  /** End angle in degrees */
  endAngle?: number;
  /** Color of the filled arc */
  color?: string;
  /** Background color of the arc */
  trackColor?: string;
  /** Show value label */
  showValue?: boolean;
  /** Value formatter */
  valueFormatter?: (value: number) => string;
  /** Value label */
  label?: ReactNode;
  /** Sub label */
  subLabel?: ReactNode;
  /** Gradient colors */
  gradient?: { offset: number; color: string }[];
  /** Color segments */
  segments?: { start: number; end: number; color: string }[];
  /** Show ticks */
  showTicks?: boolean;
  /** Number of ticks */
  tickCount?: number;
  /** Animated */
  animated?: boolean;
  /** Animation duration */
  animationDuration?: number;
  /** Needle style */
  needle?: boolean;
  /** Needle color */
  needleColor?: string;
}

export const Gauge = forwardRef<SVGSVGElement, GaugeProps>(
  (
    {
      className,
      value,
      min = 0,
      max = 100,
      size = 120,
      thickness = 10,
      startAngle = -135,
      endAngle = 135,
      color = '#3b82f6',
      trackColor = '#e5e7eb',
      showValue = true,
      valueFormatter = (v) => `${Math.round(v)}`,
      label,
      subLabel,
      gradient,
      segments,
      showTicks = false,
      tickCount = 5,
      animated = true,
      animationDuration = 500,
      needle = false,
      needleColor = '#1f2937',
      ...props
    },
    ref
  ) => {
    const center = size / 2;
    const radius = center - thickness / 2;

    // Normalize value
    const normalizedValue = Math.max(min, Math.min(max, value));
    const percentage = (normalizedValue - min) / (max - min);

    // Convert angles to radians
    const startRad = (startAngle - 90) * (Math.PI / 180);
    const endRad = (endAngle - 90) * (Math.PI / 180);
    const totalAngle = endRad - startRad;
    const valueAngle = startRad + percentage * totalAngle;

    // Calculate arc paths
    const polarToCartesian = (angle: number) => ({
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    });

    const createArc = (startA: number, endA: number) => {
      const start = polarToCartesian(startA);
      const end = polarToCartesian(endA);
      const largeArcFlag = Math.abs(endA - startA) > Math.PI ? 1 : 0;
      const sweepFlag = endA > startA ? 1 : 0;

      return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${end.x} ${end.y}`;
    };

    // Track path
    const trackPath = createArc(startRad, endRad);

    // Value path
    const valuePath = percentage > 0 ? createArc(startRad, valueAngle) : '';

    // Gradient ID
    const gradientId = useMemo(() => `gauge-gradient-${Math.random().toString(36).substr(2, 9)}`, []);

    // Ticks
    const ticks = useMemo(() => {
      if (!showTicks) return [];

      return Array.from({ length: tickCount }, (_, i) => {
        const tickPercentage = i / (tickCount - 1);
        const tickAngle = startRad + tickPercentage * totalAngle;
        const innerRadius = radius - thickness / 2 - 4;
        const outerRadius = radius - thickness / 2 - 10;

        return {
          x1: center + innerRadius * Math.cos(tickAngle),
          y1: center + innerRadius * Math.sin(tickAngle),
          x2: center + outerRadius * Math.cos(tickAngle),
          y2: center + outerRadius * Math.sin(tickAngle),
          value: min + tickPercentage * (max - min),
          labelX: center + (outerRadius - 10) * Math.cos(tickAngle),
          labelY: center + (outerRadius - 10) * Math.sin(tickAngle),
        };
      });
    }, [showTicks, tickCount, startRad, totalAngle, radius, thickness, center, min, max]);

    // Needle
    const needlePoints = useMemo(() => {
      if (!needle) return null;

      const needleLength = radius - thickness - 5;
      const needleWidth = 6;

      const tipX = center + needleLength * Math.cos(valueAngle);
      const tipY = center + needleLength * Math.sin(valueAngle);

      const baseAngle1 = valueAngle + Math.PI / 2;
      const baseAngle2 = valueAngle - Math.PI / 2;

      const base1X = center + needleWidth * Math.cos(baseAngle1);
      const base1Y = center + needleWidth * Math.sin(baseAngle1);
      const base2X = center + needleWidth * Math.cos(baseAngle2);
      const base2Y = center + needleWidth * Math.sin(baseAngle2);

      return `${tipX},${tipY} ${base1X},${base1Y} ${base2X},${base2Y}`;
    }, [needle, radius, thickness, center, valueAngle]);

    // Segment paths
    const segmentPaths = useMemo(() => {
      if (!segments) return [];

      return segments.map((segment) => {
        const segStartPercentage = (segment.start - min) / (max - min);
        const segEndPercentage = (segment.end - min) / (max - min);
        const segStartAngle = startRad + segStartPercentage * totalAngle;
        const segEndAngle = startRad + segEndPercentage * totalAngle;

        return {
          path: createArc(segStartAngle, segEndAngle),
          color: segment.color,
        };
      });
    }, [segments, min, max, startRad, totalAngle]);

    return (
      <svg
        ref={ref}
        className={cn('zk-gauge', className)}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        {...props}
      >
        {/* Gradient definition */}
        {gradient && (
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              {gradient.map((stop, i) => (
                <stop key={i} offset={`${stop.offset}%`} stopColor={stop.color} />
              ))}
            </linearGradient>
          </defs>
        )}

        {/* Track */}
        <path
          d={trackPath}
          fill="none"
          stroke={trackColor}
          strokeWidth={thickness}
          strokeLinecap="round"
        />

        {/* Segments */}
        {segmentPaths.map((seg, i) => (
          <path
            key={i}
            d={seg.path}
            fill="none"
            stroke={seg.color}
            strokeWidth={thickness}
            strokeLinecap="round"
          />
        ))}

        {/* Value arc */}
        {!segments && valuePath && (
          <path
            d={valuePath}
            fill="none"
            stroke={gradient ? `url(#${gradientId})` : color}
            strokeWidth={thickness}
            strokeLinecap="round"
            style={{
              transition: animated ? `stroke-dashoffset ${animationDuration}ms ease-out` : undefined,
            }}
          />
        )}

        {/* Ticks */}
        {ticks.map((tick, i) => (
          <g key={i}>
            <line
              x1={tick.x1}
              y1={tick.y1}
              x2={tick.x2}
              y2={tick.y2}
              stroke={trackColor}
              strokeWidth={1}
            />
          </g>
        ))}

        {/* Needle */}
        {needle && needlePoints && (
          <>
            <polygon
              points={needlePoints}
              fill={needleColor}
              style={{
                transition: animated ? `transform ${animationDuration}ms ease-out` : undefined,
              }}
            />
            <circle cx={center} cy={center} r={8} fill={needleColor} />
            <circle cx={center} cy={center} r={4} fill="#fff" />
          </>
        )}

        {/* Center content */}
        {(showValue || label || subLabel) && (
          <g>
            {showValue && (
              <text
                x={center}
                y={center + (label ? -8 : 0)}
                textAnchor="middle"
                dominantBaseline="middle"
                className="zk-gauge__value"
                fontSize={size / 5}
                fontWeight="600"
                fill="currentColor"
              >
                {valueFormatter(normalizedValue)}
              </text>
            )}
            {label && (
              <text
                x={center}
                y={center + (showValue ? 12 : 0)}
                textAnchor="middle"
                dominantBaseline="middle"
                className="zk-gauge__label"
                fontSize={size / 10}
                fill="currentColor"
                opacity={0.7}
              >
                {label}
              </text>
            )}
            {subLabel && (
              <text
                x={center}
                y={center + 28}
                textAnchor="middle"
                dominantBaseline="middle"
                className="zk-gauge__sublabel"
                fontSize={size / 12}
                fill="currentColor"
                opacity={0.5}
              >
                {subLabel}
              </text>
            )}
          </g>
        )}
      </svg>
    );
  }
);

Gauge.displayName = 'Gauge';
