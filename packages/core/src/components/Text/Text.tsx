'use client';

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface TextProps {
  /** HTML element to render */
  as?: 'p' | 'span' | 'div' | 'label' | 'small' | 'strong' | 'em';
  /** Text size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Font weight */
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  /** Text alignment */
  align?: 'left' | 'center' | 'right' | 'justify';
  /** Whether to truncate text with ellipsis */
  truncate?: boolean;
  /** Number of lines before truncating (requires truncate) */
  lineClamp?: number;
  /** Color variant */
  color?: 'default' | 'muted' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  /** Line height */
  lineHeight?: 'tight' | 'normal' | 'relaxed' | 'loose';
  /** Whether text is inline */
  inline?: boolean;
  /** Text transform */
  transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
  /** Whether to inherit parent styles */
  inherit?: boolean;
  /** Additional class name */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Children */
  children?: React.ReactNode;
}

export const TextBlock = forwardRef<HTMLElement, TextProps & React.HTMLAttributes<HTMLElement>>(
  (
    {
      className,
      as = 'p',
      size = 'md',
      weight = 'normal',
      align,
      truncate,
      lineClamp,
      color = 'default',
      lineHeight = 'normal',
      inline,
      transform,
      inherit,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const Component = as;

    const combinedStyle: React.CSSProperties = {
      ...style,
      ...(lineClamp && {
        display: '-webkit-box',
        WebkitLineClamp: lineClamp,
        WebkitBoxOrient: 'vertical' as const,
        overflow: 'hidden',
      }),
    };

    return React.createElement(
      Component,
      {
        ref,
        className: cn(
          'zk-text',
          !inherit && `zk-text--${size}`,
          !inherit && `zk-text--${weight}`,
          !inherit && `zk-text--${color}`,
          !inherit && `zk-text--${lineHeight}`,
          align && `zk-text--${align}`,
          truncate && 'zk-text--truncate',
          inline && 'zk-text--inline',
          transform && `zk-text--${transform}`,
          inherit && 'zk-text--inherit',
          className
        ),
        style: combinedStyle,
        ...props,
      },
      children
    );
  }
);

TextBlock.displayName = 'TextBlock';
