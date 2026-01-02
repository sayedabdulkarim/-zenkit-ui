import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toast, Button } from '@zenkit-ui/core';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
    position: { control: 'select', options: ['top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Toast Title',
    message: 'This is a toast message',
    isOpen: true,
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Toast title="Info" message="This is an info toast" variant="info" isOpen />
      <Toast title="Success" message="Operation completed successfully" variant="success" isOpen />
      <Toast title="Warning" message="This action may have consequences" variant="warning" isOpen />
      <Toast title="Error" message="Something went wrong" variant="error" isOpen />
    </div>
  ),
};

export const WithActions: Story = {
  args: {
    title: 'New Update Available',
    message: 'A new version is ready to install',
    variant: 'info',
    isOpen: true,
    action: <Button size="sm">Update Now</Button>,
  },
};

export const Closable: Story = {
  args: {
    title: 'Dismissible Toast',
    message: 'Click the X to close this toast',
    closable: true,
    isOpen: true,
  },
};

const InteractiveToast = () => {
  const [toasts, setToasts] = useState<Array<{ id: number; title: string; message: string; variant: 'info' | 'success' | 'warning' | 'error' }>>([]);
  let idCounter = 0;

  const addToast = (title: string, message: string, variant: 'info' | 'success' | 'warning' | 'error') => {
    const id = ++idCounter;
    setToasts((prev) => [...prev, { id, title, message, variant }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <Button onClick={() => addToast('Info', 'Info toast message', 'info')}>Info Toast</Button>
        <Button onClick={() => addToast('Success', 'Success toast message', 'success')}>Success Toast</Button>
        <Button onClick={() => addToast('Error', 'Error toast message', 'error')}>Error Toast</Button>
      </div>
      <div style={{ position: 'fixed', top: '1rem', right: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {toasts.map((toast) => (
          <Toast key={toast.id} title={toast.title} message={toast.message} variant={toast.variant} isOpen />
        ))}
      </div>
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveToast />,
};
