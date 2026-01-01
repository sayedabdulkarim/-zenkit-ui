import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '@zenkit-ui/core';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    status: { control: 'select', options: ['default', 'success', 'warning', 'danger'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 60,
  },
};

export const WithLabel: Story = {
  args: {
    value: 75,
    showLabel: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Progress value={60} size="sm" />
      <Progress value={60} size="md" />
      <Progress value={60} size="lg" />
    </div>
  ),
};

export const Statuses: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Progress value={25} status="default" />
      <Progress value={50} status="success" />
      <Progress value={75} status="warning" />
      <Progress value={90} status="danger" />
    </div>
  ),
};

export const Striped: Story = {
  args: {
    value: 60,
    striped: true,
  },
};

export const Animated: Story = {
  args: {
    value: 60,
    striped: true,
    animated: true,
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
};
