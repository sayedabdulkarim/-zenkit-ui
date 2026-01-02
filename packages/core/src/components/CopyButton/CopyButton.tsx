'use client';

import React, { forwardRef, useState, useCallback } from 'react';
import { cn } from '../../utils/cn';

export interface CopyButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'onError'> {
  /** Value to copy to clipboard */
  value: string;
  /** Timeout in ms before resetting to default state */
  timeout?: number;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Variant style */
  variant?: 'default' | 'filled' | 'outline' | 'subtle';
  /** Color variant */
  color?: 'default' | 'primary' | 'secondary';
  /** Called after copying */
  onCopy?: () => void;
  /** Called on copy error */
  onError?: (error: Error) => void;
  /** Custom children (receives copied state) */
  children?: (props: { copied: boolean; copy: () => void }) => React.ReactNode;
  /** Copy icon/label */
  copyLabel?: React.ReactNode;
  /** Copied icon/label */
  copiedLabel?: React.ReactNode;
}

export const CopyButton = forwardRef<HTMLButtonElement, CopyButtonProps>(
  (
    {
      className,
      value,
      timeout = 2000,
      size = 'md',
      variant = 'default',
      color = 'default',
      onCopy,
      onError,
      children,
      copyLabel = '📋',
      copiedLabel = '✓',
      disabled,
      ...props
    },
    ref
  ) => {
    const [copied, setCopied] = useState(false);

    const copy = useCallback(async () => {
      if (copied || disabled) return;

      try {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        onCopy?.();

        setTimeout(() => {
          setCopied(false);
        }, timeout);
      } catch (error) {
        onError?.(error as Error);
      }
    }, [value, timeout, copied, disabled, onCopy, onError]);

    if (children) {
      return <>{children({ copied, copy })}</>;
    }

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          'zk-copy-button',
          `zk-copy-button--${size}`,
          `zk-copy-button--${variant}`,
          `zk-copy-button--${color}`,
          copied && 'zk-copy-button--copied',
          disabled && 'zk-copy-button--disabled',
          className
        )}
        onClick={copy}
        disabled={disabled}
        aria-label={copied ? 'Copied' : 'Copy to clipboard'}
        {...props}
      >
        <span className="zk-copy-button__icon">
          {copied ? copiedLabel : copyLabel}
        </span>
      </button>
    );
  }
);

CopyButton.displayName = 'CopyButton';
