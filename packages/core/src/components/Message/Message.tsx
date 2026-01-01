'use client';

import { forwardRef, useState, useEffect, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export type MessageType = 'info' | 'success' | 'warning' | 'error' | 'loading';

export interface MessageProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  /** Message type */
  type?: MessageType;
  /** Message content */
  content: ReactNode;
  /** Duration in ms (0 for manual close) */
  duration?: number;
  /** On close callback */
  onClose?: () => void;
  /** Show icon */
  showIcon?: boolean;
  /** Closable */
  closable?: boolean;
}

const icons: Record<MessageType, ReactNode> = {
  info: (
    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
      <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
  success: (
    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  error: (
    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
      <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  ),
  loading: (
    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" className="message-icon-spin">
      <line x1="12" y1="2" x2="12" y2="6" /><line x1="12" y1="18" x2="12" y2="22" /><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" /><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" /><line x1="2" y1="12" x2="6" y2="12" /><line x1="18" y1="12" x2="22" y2="12" /><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" /><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
    </svg>
  ),
};

export const Message = forwardRef<HTMLDivElement, MessageProps>(
  (
    {
      type = 'info',
      content,
      duration = 3000,
      onClose,
      showIcon = true,
      closable = false,
      className,
      ...props
    },
    ref
  ) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      if (duration > 0) {
        const timer = setTimeout(() => {
          setVisible(false);
          onClose?.();
        }, duration);
        return () => clearTimeout(timer);
      }
    }, [duration, onClose]);

    if (!visible) return null;

    return (
      <div
        ref={ref}
        className={cn('message', `message-${type}`, className)}
        role="alert"
        {...props}
      >
        {showIcon && <span className="message-icon">{icons[type]}</span>}
        <span className="message-content">{content}</span>
        {closable && (
          <button
            type="button"
            className="message-close"
            onClick={() => {
              setVisible(false);
              onClose?.();
            }}
          >
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>
    );
  }
);

Message.displayName = 'Message';

// Message Container (for positioning multiple messages)
export interface MessageContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Position */
  position?: 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';
}

export const MessageContainer = forwardRef<HTMLDivElement, MessageContainerProps>(
  ({ position = 'top', className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('message-container', `message-container-${position}`, className)}
      {...props}
    >
      {children}
    </div>
  )
);

MessageContainer.displayName = 'MessageContainer';
