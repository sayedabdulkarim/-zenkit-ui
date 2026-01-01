import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@zenkit-ui/core';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'home',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Icon name="star" size="xs" />
      <Icon name="star" size="sm" />
      <Icon name="star" size="md" />
      <Icon name="star" size="lg" />
      <Icon name="star" size="xl" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Icon name="heart" color="default" />
      <Icon name="heart" color="primary" />
      <Icon name="heart" color="secondary" />
      <Icon name="heart" color="success" />
      <Icon name="heart" color="warning" />
      <Icon name="heart" color="danger" />
    </div>
  ),
};

export const CustomSize: Story = {
  args: {
    name: 'settings',
    size: 48,
  },
};

export const CustomSvg: Story = {
  args: {
    children: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L1 21h22L12 2zm0 4l7.53 13H4.47L12 6z" />
      </svg>
    ),
    size: 'lg',
    color: 'warning',
  },
};
