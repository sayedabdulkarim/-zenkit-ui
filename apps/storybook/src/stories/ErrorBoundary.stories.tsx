import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ErrorBoundary, Button, Card } from '@zenkit-ui/core';

const meta: Meta<typeof ErrorBoundary> = {
  title: 'Utilities/ErrorBoundary',
  component: ErrorBoundary,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Component that throws an error
const BuggyComponent = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('This is a simulated error for demonstration purposes.');
  }
  return (
    <div style={{ padding: '2rem', background: '#f0fdf4', borderRadius: '8px', textAlign: 'center' }}>
      <span style={{ fontSize: '2rem' }}>✅</span>
      <p style={{ margin: '1rem 0 0', color: '#16a34a' }}>Component rendered successfully!</p>
    </div>
  );
};

export const Default: Story = {
  render: () => {
    const [hasError, setHasError] = useState(false);

    return (
      <div style={{ width: 400 }}>
        <div style={{ marginBottom: '1rem' }}>
          <Button onClick={() => setHasError(!hasError)}>
            {hasError ? 'Fix Component' : 'Break Component'}
          </Button>
        </div>
        <ErrorBoundary>
          <BuggyComponent shouldThrow={hasError} />
        </ErrorBoundary>
      </div>
    );
  },
};

export const WithCustomFallback: Story = {
  render: () => {
    const [hasError, setHasError] = useState(false);

    const customFallback = (
      <Card style={{ padding: '2rem', textAlign: 'center', background: '#fef2f2' }}>
        <span style={{ fontSize: '3rem' }}>🔧</span>
        <h3 style={{ margin: '1rem 0 0.5rem', color: '#dc2626' }}>Oops! Something went wrong</h3>
        <p style={{ margin: 0, color: '#7f1d1d' }}>
          We're working on fixing this. Please try again later.
        </p>
        <Button
          style={{ marginTop: '1rem' }}
          variant="outline"
          colorScheme="danger"
          onClick={() => setHasError(false)}
        >
          Try Again
        </Button>
      </Card>
    );

    return (
      <div style={{ width: 400 }}>
        <div style={{ marginBottom: '1rem' }}>
          <Button onClick={() => setHasError(!hasError)}>
            {hasError ? 'Reset' : 'Trigger Error'}
          </Button>
        </div>
        <ErrorBoundary fallback={customFallback}>
          <BuggyComponent shouldThrow={hasError} />
        </ErrorBoundary>
      </div>
    );
  },
};

export const WithFallbackRender: Story = {
  render: () => {
    const [hasError, setHasError] = useState(false);
    const [key, setKey] = useState(0);

    return (
      <div style={{ width: 400 }}>
        <div style={{ marginBottom: '1rem' }}>
          <Button onClick={() => setHasError(true)}>
            Trigger Error
          </Button>
        </div>
        <ErrorBoundary
          key={key}
          fallbackRender={({ error, resetErrorBoundary }) => (
            <Card style={{ padding: '2rem', background: '#fffbeb' }}>
              <h3 style={{ margin: '0 0 0.5rem', color: '#d97706' }}>⚠️ Error Caught</h3>
              <p style={{ margin: '0 0 1rem', color: '#92400e', fontSize: '0.875rem' }}>
                {error.message}
              </p>
              <Button
                size="sm"
                onClick={() => {
                  setHasError(false);
                  setKey(k => k + 1);
                  resetErrorBoundary();
                }}
              >
                Reset
              </Button>
            </Card>
          )}
        >
          <BuggyComponent shouldThrow={hasError} />
        </ErrorBoundary>
      </div>
    );
  },
};

export const WithOnError: Story = {
  render: () => {
    const [hasError, setHasError] = useState(false);
    const [errorLog, setErrorLog] = useState<string[]>([]);

    return (
      <div style={{ width: 500 }}>
        <div style={{ marginBottom: '1rem' }}>
          <Button onClick={() => setHasError(true)}>
            Trigger Error
          </Button>
          <Button
            variant="outline"
            style={{ marginLeft: '0.5rem' }}
            onClick={() => {
              setHasError(false);
              setErrorLog([]);
            }}
          >
            Reset
          </Button>
        </div>

        <ErrorBoundary
          key={hasError ? 'error' : 'ok'}
          onError={(error, errorInfo) => {
            setErrorLog(prev => [
              ...prev,
              `[${new Date().toLocaleTimeString()}] Error: ${error.message}`,
            ]);
            // In a real app, you might send this to an error tracking service
            console.log('Error logged:', error, errorInfo);
          }}
        >
          <BuggyComponent shouldThrow={hasError} />
        </ErrorBoundary>

        {errorLog.length > 0 && (
          <div style={{ marginTop: '1rem', padding: '1rem', background: '#1e293b', borderRadius: '8px' }}>
            <div style={{ color: '#94a3b8', marginBottom: '0.5rem', fontSize: '0.75rem' }}>
              Error Log (onError callback):
            </div>
            {errorLog.map((log, i) => (
              <div key={i} style={{ color: '#f87171', fontSize: '0.875rem', fontFamily: 'monospace' }}>
                {log}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  },
};

export const NestedErrorBoundaries: Story = {
  render: () => {
    const [parentError, setParentError] = useState(false);
    const [childError, setChildError] = useState(false);

    return (
      <div style={{ width: 500 }}>
        <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
          <Button size="sm" onClick={() => setParentError(true)}>
            Break Parent
          </Button>
          <Button size="sm" onClick={() => setChildError(true)}>
            Break Child
          </Button>
          <Button size="sm" variant="outline" onClick={() => {
            setParentError(false);
            setChildError(false);
          }}>
            Reset All
          </Button>
        </div>

        <ErrorBoundary
          key={parentError ? 'parent-error' : 'parent-ok'}
          fallback={
            <Card style={{ padding: '2rem', background: '#fef2f2', textAlign: 'center' }}>
              <h3 style={{ color: '#dc2626' }}>Parent Error Boundary</h3>
              <p>The entire section has crashed.</p>
            </Card>
          }
        >
          <Card style={{ padding: '1rem' }}>
            <h4 style={{ margin: '0 0 1rem' }}>Parent Component</h4>
            <BuggyComponent shouldThrow={parentError} />

            <div style={{ marginTop: '1rem', padding: '1rem', background: '#f8fafc', borderRadius: '8px' }}>
              <ErrorBoundary
                key={childError ? 'child-error' : 'child-ok'}
                fallback={
                  <div style={{ padding: '1rem', background: '#fef2f2', borderRadius: '8px', textAlign: 'center' }}>
                    <span style={{ color: '#dc2626' }}>⚠️ Child Error (isolated)</span>
                  </div>
                }
              >
                <h5 style={{ margin: '0 0 0.5rem' }}>Nested Child Component</h5>
                <BuggyComponent shouldThrow={childError} />
              </ErrorBoundary>
            </div>
          </Card>
        </ErrorBoundary>
      </div>
    );
  },
};

export const MinimalFallback: Story = {
  render: () => {
    const [hasError, setHasError] = useState(true);

    return (
      <div style={{ width: 300 }}>
        <div style={{ marginBottom: '1rem' }}>
          <Button onClick={() => setHasError(!hasError)}>
            Toggle Error
          </Button>
        </div>
        <ErrorBoundary
          key={hasError ? 'error' : 'ok'}
          fallback={<div style={{ color: '#dc2626', padding: '1rem' }}>Error loading component</div>}
        >
          <BuggyComponent shouldThrow={hasError} />
        </ErrorBoundary>
      </div>
    );
  },
};
