'use client';

import { forwardRef, useMemo, type SVGAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface SparklineProps extends Omit<SVGAttributes<SVGSVGElement>, 'children'> {
  /** Data points */
  data: number[];
  /** Chart type */
  type?: 'line' | 'bar' | 'area';
  /** Width */
  width?: number;
  /** Height */
  height?: number;
  /** Stroke color */
  stroke?: string;
  /** Fill color (for area/bar) */
  fill?: string;
  /** Stroke width */
  strokeWidth?: number;
  /** Show dots on data points */
  showDots?: boolean;
  /** Dot radius */
  dotRadius?: number;
  /** Curved line */
  curved?: boolean;
  /** Highlight min/max */
  highlightMinMax?: boolean;
  /** Min color */
  minColor?: string;
  /** Max color */
  maxColor?: string;
  /** Bar gap ratio (0-1) */
  barGap?: number;
  /** Animation duration */
  animationDuration?: number;
  /** Reference line value */
  referenceLine?: number;
  /** Reference line color */
  referenceLineColor?: string;
  /** Tooltip formatter */
  tooltipFormatter?: (value: number, index: number) => string;
}

export const Sparkline = forwardRef<SVGSVGElement, SparklineProps>(
  (
    {
      className,
      data,
      type = 'line',
      width = 100,
      height = 30,
      stroke = 'currentColor',
      fill = 'none',
      strokeWidth = 1.5,
      showDots = false,
      dotRadius = 2,
      curved = false,
      highlightMinMax = false,
      minColor = '#ef4444',
      maxColor = '#22c55e',
      barGap = 0.2,
      animationDuration = 0,
      referenceLine,
      referenceLineColor = '#9ca3af',
      ...props
    },
    ref
  ) => {
    const padding = showDots ? dotRadius + 2 : 2;

    const { minIndex, maxIndex, normalizedData } = useMemo(() => {
      if (data.length === 0) return { minIndex: -1, maxIndex: -1, normalizedData: [] };

      const min = Math.min(...data);
      const max = Math.max(...data);
      const range = max - min || 1;

      const normalized = data.map((value) => (value - min) / range);

      const chartWidth = width - padding * 2;
      const chartHeight = height - padding * 2;

      const pts = normalized.map((value, index) => {
        const x = padding + (index / (data.length - 1 || 1)) * chartWidth;
        const y = padding + (1 - value) * chartHeight;
        return { x, y, value: data[index] };
      });

      const minIdx = data.indexOf(min);
      const maxIdx = data.indexOf(max);

      return {
        minIndex: minIdx,
        maxIndex: maxIdx,
        normalizedData: pts,
      };
    }, [data, width, height, padding]);

    const linePath = useMemo(() => {
      if (normalizedData.length < 2) return '';

      if (curved) {
        // Catmull-Rom spline for smooth curves
        let path = `M ${normalizedData[0].x},${normalizedData[0].y}`;

        for (let i = 0; i < normalizedData.length - 1; i++) {
          const p0 = normalizedData[Math.max(0, i - 1)];
          const p1 = normalizedData[i];
          const p2 = normalizedData[i + 1];
          const p3 = normalizedData[Math.min(normalizedData.length - 1, i + 2)];

          const cp1x = p1.x + (p2.x - p0.x) / 6;
          const cp1y = p1.y + (p2.y - p0.y) / 6;
          const cp2x = p2.x - (p3.x - p1.x) / 6;
          const cp2y = p2.y - (p3.y - p1.y) / 6;

          path += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`;
        }

        return path;
      }

      return `M ${normalizedData.map((p) => `${p.x},${p.y}`).join(' L ')}`;
    }, [normalizedData, curved]);

    const areaPath = useMemo(() => {
      if (normalizedData.length < 2 || type !== 'area') return '';

      const chartHeight = height - padding;
      return `${linePath} L ${normalizedData[normalizedData.length - 1].x},${chartHeight} L ${normalizedData[0].x},${chartHeight} Z`;
    }, [linePath, normalizedData, type, height, padding]);

    const referenceLineY = useMemo(() => {
      if (referenceLine === undefined || data.length === 0) return null;

      const min = Math.min(...data);
      const max = Math.max(...data);
      const range = max - min || 1;
      const normalized = (referenceLine - min) / range;
      const chartHeight = height - padding * 2;

      return padding + (1 - normalized) * chartHeight;
    }, [referenceLine, data, height, padding]);

    const bars = useMemo(() => {
      if (type !== 'bar' || data.length === 0) return [];

      const min = Math.min(...data, 0);
      const max = Math.max(...data);
      const range = max - min || 1;

      const chartWidth = width - padding * 2;
      const chartHeight = height - padding * 2;
      const barWidth = (chartWidth / data.length) * (1 - barGap);
      const gapWidth = (chartWidth / data.length) * barGap;
      const baseline = max > 0 && min < 0 ? padding + ((max - 0) / range) * chartHeight : height - padding;

      return data.map((value, index) => {
        const normalizedHeight = Math.abs(value - Math.min(min, 0)) / range;
        const barHeight = normalizedHeight * chartHeight;
        const x = padding + index * (barWidth + gapWidth);
        const y = value >= 0 ? baseline - barHeight : baseline;

        return {
          x,
          y,
          width: barWidth,
          height: Math.max(barHeight, 1),
          value,
        };
      });
    }, [type, data, width, height, padding, barGap]);

    if (data.length === 0) {
      return (
        <svg
          ref={ref}
          className={cn('zk-sparkline', className)}
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          {...props}
        >
          <text x={width / 2} y={height / 2} textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#9ca3af">
            No data
          </text>
        </svg>
      );
    }

    return (
      <svg
        ref={ref}
        className={cn('zk-sparkline', `zk-sparkline--${type}`, className)}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        {...props}
      >
        {/* Reference line */}
        {referenceLineY !== null && (
          <line
            x1={padding}
            y1={referenceLineY}
            x2={width - padding}
            y2={referenceLineY}
            stroke={referenceLineColor}
            strokeWidth={1}
            strokeDasharray="3,3"
          />
        )}

        {/* Area fill */}
        {type === 'area' && (
          <path
            d={areaPath}
            fill={fill !== 'none' ? fill : stroke}
            fillOpacity={0.2}
            stroke="none"
          />
        )}

        {/* Line */}
        {(type === 'line' || type === 'area') && (
          <path
            d={linePath}
            fill="none"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: animationDuration ? '1000' : undefined,
              strokeDashoffset: animationDuration ? '1000' : undefined,
              animation: animationDuration ? `zk-sparkline-draw ${animationDuration}ms ease-out forwards` : undefined,
            }}
          />
        )}

        {/* Bars */}
        {type === 'bar' &&
          bars.map((bar, index) => (
            <rect
              key={index}
              x={bar.x}
              y={bar.y}
              width={bar.width}
              height={bar.height}
              fill={
                highlightMinMax && index === minIndex
                  ? minColor
                  : highlightMinMax && index === maxIndex
                  ? maxColor
                  : fill !== 'none'
                  ? fill
                  : stroke
              }
              rx={1}
            />
          ))}

        {/* Dots */}
        {showDots &&
          (type === 'line' || type === 'area') &&
          normalizedData.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r={dotRadius}
              fill={
                highlightMinMax && index === minIndex
                  ? minColor
                  : highlightMinMax && index === maxIndex
                  ? maxColor
                  : stroke
              }
            />
          ))}
      </svg>
    );
  }
);

Sparkline.displayName = 'Sparkline';
