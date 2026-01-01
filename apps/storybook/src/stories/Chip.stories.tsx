import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '@zenkit-ui/core';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Chip',
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Chip color="default">Default</Chip>
      <Chip color="primary">Primary</Chip>
      <Chip color="secondary">Secondary</Chip>
      <Chip color="success">Success</Chip>
      <Chip color="warning">Warning</Chip>
      <Chip color="danger">Danger</Chip>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Chip variant="solid" color="primary">Solid</Chip>
      <Chip variant="soft" color="primary">Soft</Chip>
      <Chip variant="outline" color="primary">Outline</Chip>
      <Chip variant="dot" color="primary">Dot</Chip>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
      <Chip size="sm">Small</Chip>
      <Chip size="md">Medium</Chip>
      <Chip size="lg">Large</Chip>
    </div>
  ),
};

export const Closable: Story = {
  args: {
    children: 'Closable Chip',
    closable: true,
    onClose: () => alert('Chip closed!'),
  },
};

export const WithAvatar: Story = {
  args: {
    children: 'John Doe',
    avatar: <span style={{ fontSize: '12px' }}>JD</span>,
  },
};

export const Clickable: Story = {
  args: {
    children: 'Clickable',
    onClick: () => alert('Chip clicked!'),
  },
};
