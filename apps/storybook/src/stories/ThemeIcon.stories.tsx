import type { Meta, StoryObj } from '@storybook/react';
import { ThemeIcon } from '@zenkit-ui/core';

const meta: Meta<typeof ThemeIcon> = {
  title: 'Components/ThemeIcon',
  component: ThemeIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    radius: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'xl', 'full'] },
    variant: { control: 'select', options: ['filled', 'light', 'outline', 'subtle', 'transparent'] },
    color: { control: 'select', options: ['primary', 'secondary', 'success', 'warning', 'error', 'gray'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '⚙️',
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <ThemeIcon color="primary">🔵</ThemeIcon>
      <ThemeIcon color="secondary">⚪</ThemeIcon>
      <ThemeIcon color="success">✅</ThemeIcon>
      <ThemeIcon color="warning">⚠️</ThemeIcon>
      <ThemeIcon color="error">❌</ThemeIcon>
      <ThemeIcon color="gray">⚫</ThemeIcon>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <ThemeIcon variant="filled" color="primary">⭐</ThemeIcon>
      <ThemeIcon variant="light" color="primary">⭐</ThemeIcon>
      <ThemeIcon variant="outline" color="primary">⭐</ThemeIcon>
      <ThemeIcon variant="subtle" color="primary">⭐</ThemeIcon>
      <ThemeIcon variant="transparent" color="primary">⭐</ThemeIcon>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <ThemeIcon size="xs">📌</ThemeIcon>
      <ThemeIcon size="sm">📌</ThemeIcon>
      <ThemeIcon size="md">📌</ThemeIcon>
      <ThemeIcon size="lg">📌</ThemeIcon>
      <ThemeIcon size="xl">📌</ThemeIcon>
    </div>
  ),
};

export const Radius: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <ThemeIcon radius="none" color="primary">🔷</ThemeIcon>
      <ThemeIcon radius="sm" color="primary">🔷</ThemeIcon>
      <ThemeIcon radius="md" color="primary">🔷</ThemeIcon>
      <ThemeIcon radius="lg" color="primary">🔷</ThemeIcon>
      <ThemeIcon radius="full" color="primary">🔷</ThemeIcon>
    </div>
  ),
};

export const FeatureList: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <ThemeIcon color="success" size="lg" radius="full">✓</ThemeIcon>
        <div>
          <div style={{ fontWeight: 'bold' }}>Fast Performance</div>
          <div style={{ color: '#666' }}>Optimized for speed</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <ThemeIcon color="primary" size="lg" radius="full">🔒</ThemeIcon>
        <div>
          <div style={{ fontWeight: 'bold' }}>Secure by Default</div>
          <div style={{ color: '#666' }}>Built-in security features</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <ThemeIcon color="warning" size="lg" radius="full">⚡</ThemeIcon>
        <div>
          <div style={{ fontWeight: 'bold' }}>Easy Integration</div>
          <div style={{ color: '#666' }}>Works with your stack</div>
        </div>
      </div>
    </div>
  ),
};

export const Gradient: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <ThemeIcon
        gradient={{ from: '#667eea', to: '#764ba2', deg: 135 }}
        size="xl"
        radius="full"
      >
        🚀
      </ThemeIcon>
      <ThemeIcon
        gradient={{ from: '#f093fb', to: '#f5576c', deg: 135 }}
        size="xl"
        radius="full"
      >
        💖
      </ThemeIcon>
      <ThemeIcon
        gradient={{ from: '#4facfe', to: '#00f2fe', deg: 135 }}
        size="xl"
        radius="full"
      >
        💧
      </ThemeIcon>
    </div>
  ),
};

export const StatusIndicators: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div style={{ textAlign: 'center' }}>
        <ThemeIcon color="success" size="xl" radius="full">✓</ThemeIcon>
        <div style={{ marginTop: '0.5rem' }}>Active</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <ThemeIcon color="warning" size="xl" radius="full">⏳</ThemeIcon>
        <div style={{ marginTop: '0.5rem' }}>Pending</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <ThemeIcon color="error" size="xl" radius="full">✕</ThemeIcon>
        <div style={{ marginTop: '0.5rem' }}>Inactive</div>
      </div>
    </div>
  ),
};
