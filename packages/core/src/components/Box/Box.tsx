'use client';

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** HTML element to render */
  as?: React.ElementType;
  /** Padding */
  p?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Padding horizontal */
  px?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Padding vertical */
  py?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Margin */
  m?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'auto';
  /** Margin horizontal */
  mx?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'auto';
  /** Margin vertical */
  my?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'auto';
  /** Background color */
  bg?: 'transparent' | 'primary' | 'secondary' | 'muted' | 'accent' | 'surface';
  /** Border radius */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Shadow */
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Display */
  display?: 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'none';
  /** Width */
  w?: 'auto' | 'full' | 'screen' | 'fit' | 'min' | 'max';
  /** Height */
  h?: 'auto' | 'full' | 'screen' | 'fit' | 'min' | 'max';
  /** Border */
  border?: boolean;
}

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      className,
      as: Component = 'div',
      p,
      px,
      py,
      m,
      mx,
      my,
      bg,
      radius,
      shadow,
      display,
      w,
      h,
      border,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'zk-box',
          p && `zk-box--p-${p}`,
          px && `zk-box--px-${px}`,
          py && `zk-box--py-${py}`,
          m && `zk-box--m-${m}`,
          mx && `zk-box--mx-${mx}`,
          my && `zk-box--my-${my}`,
          bg && `zk-box--bg-${bg}`,
          radius && `zk-box--radius-${radius}`,
          shadow && `zk-box--shadow-${shadow}`,
          display && `zk-box--${display}`,
          w && `zk-box--w-${w}`,
          h && `zk-box--h-${h}`,
          border && 'zk-box--border',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Box.displayName = 'Box';
