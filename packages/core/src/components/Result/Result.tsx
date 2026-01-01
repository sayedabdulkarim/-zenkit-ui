import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

type ResultStatus = 'success' | 'error' | 'info' | 'warning' | '404' | '403' | '500';

export interface ResultProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Result status */
  status?: ResultStatus;
  /** Custom icon */
  icon?: ReactNode;
  /** Title */
  title?: ReactNode;
  /** Subtitle/description */
  subtitle?: ReactNode;
  /** Extra content (buttons) */
  extra?: ReactNode;
}

const statusIcons: Record<ResultStatus, ReactNode> = {
  success: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="72" height="72">
      <circle cx="12" cy="12" r="10" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  error: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="72" height="72">
      <circle cx="12" cy="12" r="10" />
      <path d="M15 9l-6 6M9 9l6 6" />
    </svg>
  ),
  info: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="72" height="72">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="72" height="72">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <path d="M12 9v4M12 17h.01" />
    </svg>
  ),
  '404': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="72" height="72">
      <circle cx="12" cy="12" r="10" />
      <path d="M16 16s-1.5-2-4-2-4 2-4 2M9 9h.01M15 9h.01" />
    </svg>
  ),
  '403': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="72" height="72">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  ),
  '500': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="72" height="72">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <path d="M12 9v4M12 17h.01" />
    </svg>
  ),
};

const statusClasses: Record<ResultStatus, string> = {
  success: 'result-success',
  error: 'result-error',
  info: 'result-info',
  warning: 'result-warning',
  '404': 'result-404',
  '403': 'result-403',
  '500': 'result-500',
};

export const Result = forwardRef<HTMLDivElement, ResultProps>(
  (
    {
      status = 'info',
      icon,
      title,
      subtitle,
      extra,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const displayIcon = icon !== undefined ? icon : statusIcons[status];

    return (
      <div
        ref={ref}
        className={cn('result', statusClasses[status], className)}
        {...props}
      >
        {displayIcon && <div className="result-icon">{displayIcon}</div>}
        {title && <div className="result-title">{title}</div>}
        {subtitle && <div className="result-subtitle">{subtitle}</div>}
        {extra && <div className="result-extra">{extra}</div>}
        {children && <div className="result-content">{children}</div>}
      </div>
    );
  }
);

Result.displayName = 'Result';
