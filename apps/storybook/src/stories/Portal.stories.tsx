import type { Meta, StoryObj } from '@storybook/react';
import { useState, useRef } from 'react';
import { Portal, Button } from '@zenkit-ui/core';

const meta: Meta<typeof Portal> = {
  title: 'Utility/Portal',
  component: Portal,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [visible, setVisible] = useState(false);
    return (
      <div>
        <Button onClick={() => setVisible(!visible)}>
          {visible ? 'Hide' : 'Show'} Portal Content
        </Button>
        {visible && (
          <Portal>
            <div
              style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                padding: '1rem',
                background: '#1890ff',
                color: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              }}
            >
              I&apos;m rendered at the end of document body!
            </div>
          </Portal>
        )}
      </div>
    );
  },
};

export const ToContainer: Story = {
  render: () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    return (
      <div>
        <Button onClick={() => setVisible(!visible)}>
          {visible ? 'Hide' : 'Show'} Portal
        </Button>
        <div
          ref={containerRef}
          style={{
            marginTop: '1rem',
            padding: '2rem',
            background: '#f5f5f5',
            borderRadius: '8px',
            minHeight: '150px',
            position: 'relative',
          }}
        >
          <p>Portal container (content will be rendered here)</p>
          {visible && (
            <Portal container={containerRef.current}>
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  padding: '1rem',
                  background: '#52c41a',
                  color: 'white',
                  borderRadius: '8px',
                }}
              >
                Rendered inside the container!
              </div>
            </Portal>
          )}
        </div>
      </div>
    );
  },
};

export const Modal: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        {open && (
          <Portal>
            <div
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
              }}
              onClick={() => setOpen(false)}
            >
              <div
                style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '8px',
                  maxWidth: '400px',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <h3 style={{ margin: '0 0 1rem' }}>Modal Title</h3>
                <p>This modal is rendered using Portal to escape the DOM hierarchy.</p>
                <Button onClick={() => setOpen(false)}>Close</Button>
              </div>
            </div>
          </Portal>
        )}
      </div>
    );
  },
};

export const Tooltip: Story = {
  render: () => {
    const [position, setPosition] = useState({ x: 0, y: 0, visible: false });

    return (
      <div>
        <div
          style={{
            padding: '2rem',
            background: '#f5f5f5',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setPosition({
              x: rect.left + rect.width / 2,
              y: rect.top - 10,
              visible: true,
            });
          }}
          onMouseLeave={() => setPosition((p) => ({ ...p, visible: false }))}
        >
          Hover over me
        </div>
        {position.visible && (
          <Portal>
            <div
              style={{
                position: 'fixed',
                left: position.x,
                top: position.y,
                transform: 'translate(-50%, -100%)',
                padding: '0.5rem 1rem',
                background: '#333',
                color: 'white',
                borderRadius: '4px',
                fontSize: '14px',
                zIndex: 1000,
              }}
            >
              Tooltip content
            </div>
          </Portal>
        )}
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ padding: '1rem', background: '#f5f5f5', borderRadius: '8px' }}>
      <Portal disabled>
        <div
          style={{
            padding: '1rem',
            background: '#1890ff',
            color: 'white',
            borderRadius: '4px',
          }}
        >
          Portal is disabled - rendered in place
        </div>
      </Portal>
    </div>
  ),
};
