import type { Meta, StoryObj } from '@storybook/react';
import { Toast, useToast, Button } from '@zenkit-ui/core';

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

const ToastHookExample = () => {
  const { addToast } = useToast();

  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Button onClick={() => addToast({ title: 'Info', message: 'Info toast', variant: 'info' })}>
        Info Toast
      </Button>
      <Button onClick={() => addToast({ title: 'Success', message: 'Success toast', variant: 'success' })}>
        Success Toast
      </Button>
      <Button onClick={() => addToast({ title: 'Error', message: 'Error toast', variant: 'error' })}>
        Error Toast
      </Button>
    </div>
  );
};

export const WithHook: Story = {
  render: () => <ToastHookExample />,
};
