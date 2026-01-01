import type { Meta, StoryObj } from '@storybook/react';
import { Message, Button } from '@zenkit-ui/core';

const meta: Meta<typeof Message> = {
  title: 'Feedback/Message',
  component: Message,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Message type="info" content="This is an info message" />
      <Message type="success" content="This is a success message" />
      <Message type="warning" content="This is a warning message" />
      <Message type="error" content="This is an error message" />
    </div>
  ),
};

export const Info: Story = {
  args: {
    type: 'info',
    content: 'This is an informational message.',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    content: 'Operation completed successfully!',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    content: 'Please review your changes before proceeding.',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    content: 'An error occurred while processing your request.',
  },
};

export const WithDuration: Story = {
  args: {
    type: 'info',
    content: 'This message will disappear after 5 seconds',
    duration: 5000,
  },
};

export const Closable: Story = {
  args: {
    type: 'info',
    content: 'Click the X to close this message',
    closable: true,
  },
};

export const Loading: Story = {
  args: {
    type: 'loading',
    content: 'Loading data...',
  },
};

export const Interactive: Story = {
  render: () => {
    const showMessage = (type: 'info' | 'success' | 'warning' | 'error') => {
      // In real usage, you'd use the message API
      alert(`${type} message triggered`);
    };

    return (
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Button onClick={() => showMessage('info')}>Info</Button>
        <Button onClick={() => showMessage('success')}>Success</Button>
        <Button onClick={() => showMessage('warning')}>Warning</Button>
        <Button onClick={() => showMessage('error')}>Error</Button>
      </div>
    );
  },
};
