import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarGroup } from '@zenkit-ui/core';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    shape: { control: 'select', options: ['circle', 'square', 'rounded'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'User avatar',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Avatar src="https://i.pravatar.cc/150?img=1" size="xs" />
      <Avatar src="https://i.pravatar.cc/150?img=2" size="sm" />
      <Avatar src="https://i.pravatar.cc/150?img=3" size="md" />
      <Avatar src="https://i.pravatar.cc/150?img=4" size="lg" />
      <Avatar src="https://i.pravatar.cc/150?img=5" size="xl" />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Avatar src="https://i.pravatar.cc/150?img=1" shape="circle" />
      <Avatar src="https://i.pravatar.cc/150?img=2" shape="rounded" />
      <Avatar src="https://i.pravatar.cc/150?img=3" shape="square" />
    </div>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Avatar fallback="John Doe" />
      <Avatar fallback="Jane Smith" />
      <Avatar fallback="Bob" />
    </div>
  ),
};

export const WithoutImage: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Avatar />
      <Avatar size="lg" />
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <AvatarGroup max={4}>
      <Avatar src="https://i.pravatar.cc/150?img=1" />
      <Avatar src="https://i.pravatar.cc/150?img=2" />
      <Avatar src="https://i.pravatar.cc/150?img=3" />
      <Avatar src="https://i.pravatar.cc/150?img=4" />
      <Avatar src="https://i.pravatar.cc/150?img=5" />
      <Avatar src="https://i.pravatar.cc/150?img=6" />
    </AvatarGroup>
  ),
};
