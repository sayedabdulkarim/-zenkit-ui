'use client';

import { Component, type ReactNode, type ErrorInfo } from 'react';
import { cn } from '../../utils/cn';

export interface ErrorBoundaryProps {
  /** Children to render */
  children: ReactNode;
  /** Fallback UI when error occurs */
  fallback?: ReactNode | ((error: Error, resetError: () => void) => ReactNode);
  /** Error callback */
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  /** Reset callback */
  onReset?: () => void;
  /** Reset keys - when these change, the error boundary resets */
  resetKeys?: unknown[];
  /** Class name */
  className?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  static displayName = 'ErrorBoundary';

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.props.onError?.(error, errorInfo);
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps): void {
    const { resetKeys } = this.props;
    const { hasError } = this.state;

    if (hasError && prevProps.resetKeys !== resetKeys) {
      const hasResetKeyChanged = resetKeys?.some(
        (key, index) => key !== prevProps.resetKeys?.[index]
      );

      if (hasResetKeyChanged) {
        this.resetError();
      }
    }
  }

  resetError = (): void => {
    this.props.onReset?.();
    this.setState({ hasError: false, error: null });
  };

  render(): ReactNode {
    const { hasError, error } = this.state;
    const { children, fallback, className } = this.props;

    if (hasError && error) {
      if (typeof fallback === 'function') {
        return fallback(error, this.resetError);
      }

      if (fallback) {
        return fallback;
      }

      // Default fallback UI
      return (
        <div className={cn('error-boundary', className)}>
          <div className="error-boundary-content">
            <svg
              className="error-boundary-icon"
              viewBox="0 0 24 24"
              width="48"
              height="48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <h2 className="error-boundary-title">Something went wrong</h2>
            <p className="error-boundary-message">{error.message}</p>
            <button
              type="button"
              className="error-boundary-button"
              onClick={this.resetError}
            >
              Try again
            </button>
            {process.env.NODE_ENV === 'development' && (
              <details className="error-boundary-details">
                <summary>Error details</summary>
                <pre className="error-boundary-stack">{error.stack}</pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return children;
  }
}

// Hook for using error boundary programmatically
export interface UseErrorBoundaryReturn {
  showBoundary: (error: Error) => void;
}

// Simple error boundary wrapper as a functional component
export interface ErrorBoundaryWrapperProps extends Omit<ErrorBoundaryProps, 'fallback'> {
  /** Fallback component */
  FallbackComponent?: React.ComponentType<{ error: Error; resetError: () => void }>;
}

export const withErrorBoundary = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  errorBoundaryProps?: Omit<ErrorBoundaryProps, 'children'>
): React.FC<P> => {
  const WithErrorBoundary: React.FC<P> = (props) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );

  WithErrorBoundary.displayName = `WithErrorBoundary(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithErrorBoundary;
};

// Default error fallback component
export interface ErrorFallbackProps {
  error: Error;
  resetError: () => void;
  title?: string;
  message?: string;
  showStack?: boolean;
  className?: string;
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetError,
  title = 'Something went wrong',
  message,
  showStack = false,
  className,
}) => (
  <div className={cn('error-fallback', className)}>
    <div className="error-fallback-content">
      <svg
        className="error-fallback-icon"
        viewBox="0 0 24 24"
        width="48"
        height="48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
      <h2 className="error-fallback-title">{title}</h2>
      <p className="error-fallback-message">{message || error.message}</p>
      <button
        type="button"
        className="error-fallback-button"
        onClick={resetError}
      >
        Try again
      </button>
      {showStack && (
        <details className="error-fallback-details">
          <summary>Error details</summary>
          <pre className="error-fallback-stack">{error.stack}</pre>
        </details>
      )}
    </div>
  </div>
);

ErrorFallback.displayName = 'ErrorFallback';
