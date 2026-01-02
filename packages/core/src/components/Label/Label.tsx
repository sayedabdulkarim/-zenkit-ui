'use client';

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** Whether the field is required */
  required?: boolean;
  /** Whether the label is disabled */
  disabled?: boolean;
  /** Size of the label */
  size?: 'sm' | 'md' | 'lg';
  /** Optional description text */
  description?: React.ReactNode;
  /** Whether to show optional indicator */
  showOptional?: boolean;
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      className,
      required,
      disabled,
      size = 'md',
      description,
      showOptional,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <label
        ref={ref}
        className={cn(
          'zk-label',
          `zk-label--${size}`,
          disabled && 'zk-label--disabled',
          className
        )}
        {...props}
      >
        <span className="zk-label__text">
          {children}
          {required && <span className="zk-label__required" aria-hidden="true">*</span>}
          {showOptional && !required && (
            <span className="zk-label__optional">(optional)</span>
          )}
        </span>
        {description && (
          <span className="zk-label__description">{description}</span>
        )}
      </label>
    );
  }
);

Label.displayName = 'Label';
