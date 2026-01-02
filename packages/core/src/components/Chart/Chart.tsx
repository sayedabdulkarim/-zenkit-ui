'use client';

import React, { forwardRef, useMemo } from 'react';
import { cn } from '../../utils/cn';

export interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Chart data */
  data: ChartDataPoint[];
  /** Chart type */
  type?: 'bar' | 'line' | 'pie' | 'donut';
  /** Chart height */
  height?: number;
  /** Chart width */
  width?: number | string;
  /** Whether to show labels */
  showLabels?: boolean;
  /** Whether to show values */
  showValues?: boolean;
  /** Whether to show legend */
  showLegend?: boolean;
  /** Whether to show grid lines */
  showGrid?: boolean;
  /** Color palette */
  colors?: string[];
  /** Animation duration in ms */
  animationDuration?: number;
  /** Whether chart is loading */
  loading?: boolean;
  /** Empty state message */
  emptyMessage?: string;
}

const defaultColors = [
  '#228be6', '#40c057', '#fab005', '#fa5252', '#7950f2',
  '#15aabf', '#82c91e', '#fd7e14', '#e64980', '#be4bdb',
];

export const Chart = forwardRef<HTMLDivElement, ChartProps>(
  (
    {
      className,
      data,
      type = 'bar',
      height = 300,
      width = '100%',
      showLabels = true,
      showValues = false,
      showLegend = true,
      showGrid = true,
      colors = defaultColors,
      animationDuration = 500,
      loading,
      emptyMessage = 'No data available',
      style,
      ...props
    },
    ref
  ) => {
    const maxValue = useMemo(() => Math.max(...data.map((d) => d.value), 0), [data]);
    const total = useMemo(() => data.reduce((sum, d) => sum + d.value, 0), [data]);

    const getColor = (index: number) => colors[index % colors.length];

    const renderBarChart = () => {
      if (data.length === 0) {
        return <div className="zk-chart__empty">{emptyMessage}</div>;
      }

      const barWidth = 100 / data.length;

      return (
        <div className="zk-chart__bar-container">
          {showGrid && (
            <div className="zk-chart__grid">
              {[0, 25, 50, 75, 100].map((percent) => (
                <div key={percent} className="zk-chart__grid-line" style={{ bottom: `${percent}%` }}>
                  <span className="zk-chart__grid-label">
                    {Math.round((maxValue * percent) / 100)}
                  </span>
                </div>
              ))}
            </div>
          )}
          <div className="zk-chart__bars">
            {data.map((item, index) => {
              const barHeight = maxValue > 0 ? (item.value / maxValue) * 100 : 0;
              return (
                <div
                  key={index}
                  className="zk-chart__bar-wrapper"
                  style={{ width: `${barWidth}%` }}
                >
                  <div
                    className="zk-chart__bar"
                    style={{
                      height: `${barHeight}%`,
                      backgroundColor: item.color || getColor(index),
                      transitionDuration: `${animationDuration}ms`,
                    }}
                  >
                    {showValues && (
                      <span className="zk-chart__bar-value">{item.value}</span>
                    )}
                  </div>
                  {showLabels && (
                    <span className="zk-chart__bar-label">{item.label}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
    };

    const renderPieChart = () => {
      if (data.length === 0 || total === 0) {
        return <div className="zk-chart__empty">{emptyMessage}</div>;
      }

      let cumulativePercent = 0;
      const isDonut = type === 'donut';

      return (
        <div className="zk-chart__pie-container">
          <svg viewBox="0 0 100 100" className="zk-chart__pie">
            {data.map((item, index) => {
              const percent = (item.value / total) * 100;
              const startAngle = cumulativePercent * 3.6;
              cumulativePercent += percent;
              const endAngle = cumulativePercent * 3.6;

              const startX = 50 + 40 * Math.cos((Math.PI * (startAngle - 90)) / 180);
              const startY = 50 + 40 * Math.sin((Math.PI * (startAngle - 90)) / 180);
              const endX = 50 + 40 * Math.cos((Math.PI * (endAngle - 90)) / 180);
              const endY = 50 + 40 * Math.sin((Math.PI * (endAngle - 90)) / 180);

              const largeArc = percent > 50 ? 1 : 0;

              const pathD = isDonut
                ? `M ${startX} ${startY} A 40 40 0 ${largeArc} 1 ${endX} ${endY}`
                : `M 50 50 L ${startX} ${startY} A 40 40 0 ${largeArc} 1 ${endX} ${endY} Z`;

              return (
                <path
                  key={index}
                  d={pathD}
                  fill={isDonut ? 'none' : item.color || getColor(index)}
                  stroke={isDonut ? item.color || getColor(index) : 'white'}
                  strokeWidth={isDonut ? 15 : 1}
                  className="zk-chart__pie-slice"
                  style={{
                    transitionDuration: `${animationDuration}ms`,
                  }}
                >
                  <title>{`${item.label}: ${item.value} (${percent.toFixed(1)}%)`}</title>
                </path>
              );
            })}
          </svg>
        </div>
      );
    };

    const renderLineChart = () => {
      if (data.length === 0) {
        return <div className="zk-chart__empty">{emptyMessage}</div>;
      }

      const points = data.map((item, index) => {
        const x = (index / (data.length - 1 || 1)) * 100;
        const y = maxValue > 0 ? 100 - (item.value / maxValue) * 100 : 100;
        return { x, y, ...item };
      });

      const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

      return (
        <div className="zk-chart__line-container">
          {showGrid && (
            <div className="zk-chart__grid">
              {[0, 25, 50, 75, 100].map((percent) => (
                <div key={percent} className="zk-chart__grid-line" style={{ bottom: `${percent}%` }} />
              ))}
            </div>
          )}
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="zk-chart__line-svg">
            <path
              d={pathD}
              fill="none"
              stroke={colors[0]}
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              className="zk-chart__line-path"
            />
            {points.map((point, index) => (
              <circle
                key={index}
                cx={point.x}
                cy={point.y}
                r="3"
                fill={colors[0]}
                className="zk-chart__line-point"
              >
                <title>{`${point.label}: ${point.value}`}</title>
              </circle>
            ))}
          </svg>
          {showLabels && (
            <div className="zk-chart__line-labels">
              {data.map((item, index) => (
                <span key={index} className="zk-chart__line-label">
                  {item.label}
                </span>
              ))}
            </div>
          )}
        </div>
      );
    };

    const renderChart = () => {
      switch (type) {
        case 'pie':
        case 'donut':
          return renderPieChart();
        case 'line':
          return renderLineChart();
        case 'bar':
        default:
          return renderBarChart();
      }
    };

    const renderLegend = () => {
      if (!showLegend || data.length === 0) return null;

      return (
        <div className="zk-chart__legend">
          {data.map((item, index) => (
            <div key={index} className="zk-chart__legend-item">
              <span
                className="zk-chart__legend-color"
                style={{ backgroundColor: item.color || getColor(index) }}
              />
              <span className="zk-chart__legend-label">{item.label}</span>
              {showValues && (
                <span className="zk-chart__legend-value">{item.value}</span>
              )}
            </div>
          ))}
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={cn(
          'zk-chart',
          `zk-chart--${type}`,
          loading && 'zk-chart--loading',
          className
        )}
        style={{
          height,
          width,
          ...style,
        }}
        {...props}
      >
        {loading ? (
          <div className="zk-chart__loading">Loading...</div>
        ) : (
          <>
            {renderChart()}
            {renderLegend()}
          </>
        )}
      </div>
    );
  }
);

Chart.displayName = 'Chart';
