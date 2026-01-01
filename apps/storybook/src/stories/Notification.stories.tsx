import type { Meta, StoryObj } from '@storybook/react';
import { Notification, Button } from '@zenkit-ui/core';

const meta: Meta<typeof Notification> = {
  title: 'Components/Notification',
  component: Notification,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: 'This is a notification message.',
  },
};

export const Types: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Notification type="info" message="This is an info notification." duration={0} />
      <Notification type="success" message="Your action was successful!" duration={0} />
      <Notification type="warning" message="Please review before continuing." duration={0} />
      <Notification type="error" message="Something went wrong." duration={0} />
    </div>
  ),
};

export const WithTitle: Story = {
  args: {
    type: 'success',
    title: 'Success!',
    message: 'Your changes have been saved successfully.',
    duration: 0,
  },
};

export const WithAction: Story = {
  args: {
    type: 'info',
    title: 'Update Available',
    message: 'A new version is available for download.',
    duration: 0,
    action: (
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
        <Button size="sm">Update Now</Button>
        <Button size="sm" variant="outlined">Later</Button>
      </div>
    ),
  },
};

export const NotClosable: Story = {
  args: {
    type: 'warning',
    message: 'This notification cannot be closed manually.',
    closable: false,
    duration: 0,
  },
};

export const CustomIcon: Story = {
  args: {
    icon: <span style={{ fontSize: '20px' }}>🎉</span>,
    title: 'Congratulations!',
    message: 'You have completed all tasks.',
    duration: 0,
  },
};
