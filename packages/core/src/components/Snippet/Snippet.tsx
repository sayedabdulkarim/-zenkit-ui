'use client';

import { forwardRef, useState, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface SnippetProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onCopy'> {
  /** Code content */
  children: string;
  /** Symbol prefix */
  symbol?: string;
  /** Color variant */
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Show copy button */
  copyable?: boolean;
  /** Disable copy */
  disableCopy?: boolean;
  /** Hide symbol */
  hideSymbol?: boolean;
  /** Copy text (overrides children) */
  copyText?: string;
  /** On copy callback */
  onCopy?: (text: string) => void;
}

export const Snippet = forwardRef<HTMLDivElement, SnippetProps>(
  (
    {
      children,
      symbol = '$',
      color = 'default',
      size = 'md',
      copyable = true,
      disableCopy = false,
      hideSymbol = false,
      copyText,
      onCopy,
      className,
      ...props
    },
    ref
  ) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
      if (disableCopy) return;

      const textToCopy = copyText || children;
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      onCopy?.(textToCopy);

      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <div
        ref={ref}
        className={cn(
          'snippet',
          `snippet-${color}`,
          `snippet-${size}`,
          className
        )}
        {...props}
      >
        <div className="snippet-content">
          {!hideSymbol && <span className="snippet-symbol">{symbol}</span>}
          <pre className="snippet-pre">
            <code className="snippet-code">{children}</code>
          </pre>
        </div>
        {copyable && !disableCopy && (
          <button
            type="button"
            className={cn('snippet-copy', copied && 'snippet-copy-success')}
            onClick={handleCopy}
            aria-label={copied ? 'Copied' : 'Copy'}
          >
            {copied ? (
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
              </svg>
            )}
          </button>
        )}
      </div>
    );
  }
);

Snippet.displayName = 'Snippet';
