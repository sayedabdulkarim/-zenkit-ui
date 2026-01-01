import type { Meta, StoryObj } from '@storybook/react';
import { Alert, Button } from '@zenkit-ui/core';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger'],
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'soft'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is an informational alert message.',
  },
};

export const Status: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert status="info">This is an info alert — check it out!</Alert>
      <Alert status="success">This is a success alert — great job!</Alert>
      <Alert status="warning">This is a warning alert — be careful!</Alert>
      <Alert status="danger">This is a danger alert — something went wrong!</Alert>
    </div>
  ),
};

export const WithTitle: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert status="info" title="Information">
        This alert provides additional information about something.
      </Alert>
      <Alert status="success" title="Success!">
        Your changes have been saved successfully.
      </Alert>
      <Alert status="warning" title="Warning">
        Please review your input before proceeding.
      </Alert>
      <Alert status="danger" title="Error">
        There was an error processing your request.
      </Alert>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert status="info" variant="soft" title="Soft Variant">
        This is the default soft/subtle variant.
      </Alert>
      <Alert status="info" variant="outlined" title="Outlined Variant">
        This is the outlined variant with a border.
      </Alert>
      <Alert status="info" variant="filled" title="Filled Variant">
        This is the filled variant with solid background.
      </Alert>
    </div>
  ),
};

export const Closable: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert status="info" closable onClose={() => console.log('Alert closed')}>
        This alert can be dismissed by clicking the close button.
      </Alert>
      <Alert status="success" closable title="Dismissible Alert">
        Click the X to close this alert.
      </Alert>
    </div>
  ),
};

export const WithAction: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert
        status="info"
        title="Update Available"
        action={<Button size="sm">Update Now</Button>}
      >
        A new version is available. Would you like to update?
      </Alert>
      <Alert
        status="warning"
        title="Session Expiring"
        action={
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button size="sm">Extend</Button>
            <Button size="sm" variant="ghost">Logout</Button>
          </div>
        }
      >
        Your session will expire in 5 minutes.
      </Alert>
    </div>
  ),
};

export const CustomIcon: Story = {
  args: {
    status: 'info',
    icon: <span style={{ fontSize: '20px' }}>🔔</span>,
    title: 'Notification',
    children: 'You have a new notification!',
  },
};

export const NoIcon: Story = {
  args: {
    status: 'info',
    icon: null,
    children: 'This alert has no icon.',
  },
};

export const AllVariantsGrid: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem' }}>
      {(['info', 'success', 'warning', 'danger'] as const).map((status) => (
        <div key={status} style={{ display: 'flex', gap: '1rem' }}>
          <Alert status={status} variant="soft" style={{ flex: 1 }}>
            {status} soft
          </Alert>
          <Alert status={status} variant="outlined" style={{ flex: 1 }}>
            {status} outlined
          </Alert>
          <Alert status={status} variant="filled" style={{ flex: 1 }}>
            {status} filled
          </Alert>
        </div>
      ))}
    </div>
  ),
};
