import type { Meta, StoryObj } from '@storybook/react';
import { Popconfirm, Button } from '@zenkit-ui/core';

const meta: Meta<typeof Popconfirm> = {
  title: 'Feedback/Popconfirm',
  component: Popconfirm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popconfirm
      title="Are you sure you want to delete this item?"
      onConfirm={() => console.log('Confirmed')}
      onCancel={() => console.log('Cancelled')}
    >
      <Button variant="danger">Delete</Button>
    </Popconfirm>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Popconfirm
      title="Delete this file?"
      description="This action cannot be undone. The file will be permanently removed."
      onConfirm={() => console.log('Confirmed')}
    >
      <Button variant="danger">Delete File</Button>
    </Popconfirm>
  ),
};

export const Positions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', padding: '4rem' }}>
      <Popconfirm title="Confirm action?" placement="top">
        <Button>Top</Button>
      </Popconfirm>
      <Popconfirm title="Confirm action?" placement="bottom">
        <Button>Bottom</Button>
      </Popconfirm>
      <Popconfirm title="Confirm action?" placement="left">
        <Button>Left</Button>
      </Popconfirm>
      <Popconfirm title="Confirm action?" placement="right">
        <Button>Right</Button>
      </Popconfirm>
    </div>
  ),
};

export const CustomButtons: Story = {
  render: () => (
    <Popconfirm
      title="Save changes?"
      okText="Save"
      cancelText="Discard"
      okType="primary"
      onConfirm={() => console.log('Saved')}
      onCancel={() => console.log('Discarded')}
    >
      <Button>Save Draft</Button>
    </Popconfirm>
  ),
};

export const DangerAction: Story = {
  render: () => (
    <Popconfirm
      title="Delete account?"
      description="All your data will be permanently deleted."
      okText="Yes, delete"
      okType="danger"
      icon="⚠️"
      onConfirm={() => console.log('Deleted')}
    >
      <Button variant="danger">Delete Account</Button>
    </Popconfirm>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Popconfirm
      title="Confirm?"
      disabled
    >
      <Button disabled>Disabled</Button>
    </Popconfirm>
  ),
};

export const AsyncConfirm: Story = {
  render: () => (
    <Popconfirm
      title="Submit form?"
      onConfirm={async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log('Submitted');
      }}
    >
      <Button>Submit</Button>
    </Popconfirm>
  ),
};
