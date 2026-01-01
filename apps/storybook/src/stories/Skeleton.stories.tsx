import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton, SkeletonAvatar, SkeletonCard } from '@zenkit-ui/core';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['text', 'circular', 'rectangular', 'rounded'] },
    animation: { control: 'select', options: ['pulse', 'wave', false] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'text',
    width: 200,
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <p style={{ marginBottom: '0.5rem' }}>Text</p>
        <Skeleton variant="text" width={200} />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem' }}>Circular</p>
        <Skeleton variant="circular" width={50} height={50} />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem' }}>Rectangular</p>
        <Skeleton variant="rectangular" width={200} height={100} />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem' }}>Rounded</p>
        <Skeleton variant="rounded" width={200} height={100} />
      </div>
    </div>
  ),
};

export const MultipleLines: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <Skeleton variant="text" lines={4} />
    </div>
  ),
};

export const Animations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <p style={{ marginBottom: '0.5rem' }}>Pulse (default)</p>
        <Skeleton variant="rectangular" width={200} height={50} animation="pulse" />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem' }}>Wave</p>
        <Skeleton variant="rectangular" width={200} height={50} animation="wave" />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem' }}>No animation</p>
        <Skeleton variant="rectangular" width={200} height={50} animation={false} />
      </div>
    </div>
  ),
};

export const Avatar: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <SkeletonAvatar size={32} />
      <SkeletonAvatar size={40} />
      <SkeletonAvatar size={56} />
      <SkeletonAvatar size={72} />
    </div>
  ),
};

export const Card: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <div style={{ width: 300 }}>
        <SkeletonCard />
      </div>
      <div style={{ width: 300 }}>
        <SkeletonCard avatar={false} lines={5} />
      </div>
    </div>
  ),
};

export const ContentPlaceholder: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <SkeletonAvatar size={48} />
      <div style={{ flex: 1 }}>
        <Skeleton variant="text" width="30%" style={{ marginBottom: '0.5rem' }} />
        <Skeleton variant="text" lines={2} />
      </div>
    </div>
  ),
};
