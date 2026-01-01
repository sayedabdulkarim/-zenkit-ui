import type { Meta, StoryObj } from '@storybook/react';
import { CircularProgress } from '@zenkit-ui/core';

const meta: Meta<typeof CircularProgress> = {
  title: 'Feedback/CircularProgress',
  component: CircularProgress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithValue: Story = {
  args: {
    value: 75,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <CircularProgress size="sm" value={60} />
      <CircularProgress size="md" value={60} />
      <CircularProgress size="lg" value={60} />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <CircularProgress color="primary" value={75} />
      <CircularProgress color="success" value={75} />
      <CircularProgress color="warning" value={75} />
      <CircularProgress color="danger" value={75} />
    </div>
  ),
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
};

export const WithLabel: Story = {
  args: {
    value: 75,
    showValue: true,
  },
};

export const CustomThickness: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <CircularProgress value={60} thickness={2} />
      <CircularProgress value={60} thickness={4} />
      <CircularProgress value={60} thickness={8} />
    </div>
  ),
};
