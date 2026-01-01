import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface CodeProps extends HTMLAttributes<HTMLElement> {
  /** Color scheme */
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

export const Code = forwardRef<HTMLElement, CodeProps>(
  ({ color = 'default', className, children, ...props }, ref) => {
    return (
      <code
        ref={ref}
        className={cn('code', `code-${color}`, className)}
        {...props}
      >
        {children}
      </code>
    );
  }
);

Code.displayName = 'Code';

// Code Block
export interface CodeBlockProps extends HTMLAttributes<HTMLPreElement> {
  /** Language for syntax highlighting */
  language?: string;
  /** Show line numbers */
  showLineNumbers?: boolean;
  /** Filename header */
  filename?: string;
  /** Copy button */
  copyable?: boolean;
  /** Code content */
  children: string;
}

export const CodeBlock = forwardRef<HTMLPreElement, CodeBlockProps>(
  (
    {
      language,
      showLineNumbers = false,
      filename,
      copyable = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const handleCopy = () => {
      navigator.clipboard.writeText(children);
    };

    const lines = children.split('\n');

    return (
      <div className={cn('code-block-wrapper', className)}>
        {(filename || copyable) && (
          <div className="code-block-header">
            {filename && <span className="code-block-filename">{filename}</span>}
            {language && <span className="code-block-language">{language}</span>}
            {copyable && (
              <button
                type="button"
                className="code-block-copy"
                onClick={handleCopy}
                aria-label="Copy code"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
              </button>
            )}
          </div>
        )}
        <pre ref={ref} className="code-block" data-language={language} {...props}>
          {showLineNumbers ? (
            <code className="code-block-content">
              {lines.map((line, i) => (
                <span key={i} className="code-block-line">
                  <span className="code-block-line-number">{i + 1}</span>
                  <span className="code-block-line-content">{line}</span>
                </span>
              ))}
            </code>
          ) : (
            <code className="code-block-content">{children}</code>
          )}
        </pre>
      </div>
    );
  }
);

CodeBlock.displayName = 'CodeBlock';
