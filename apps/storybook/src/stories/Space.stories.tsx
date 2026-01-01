import type { Meta, StoryObj } from '@storybook/react';
import { Space, Button } from '@zenkit-ui/core';

const meta: Meta<typeof Space> = {
  title: 'Layout/Space',
  component: Space,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Space>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Space>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Space direction="vertical">
      <Button fullWidth>Button 1</Button>
      <Button fullWidth>Button 2</Button>
      <Button fullWidth>Button 3</Button>
    </Space>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size}>
          <p style={{ marginBottom: '0.5rem' }}>Size: {size}</p>
          <Space size={size}>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
          </Space>
        </div>
      ))}
    </div>
  ),
};

export const CustomSize: Story = {
  render: () => (
    <Space size={32}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Space>
  ),
};

export const WithDivider: Story = {
  render: () => (
    <Space divider={<span style={{ color: 'var(--border)' }}>|</span>}>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </Space>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {(['start', 'center', 'end', 'baseline'] as const).map((align) => (
        <div key={align}>
          <p style={{ marginBottom: '0.5rem' }}>Align: {align}</p>
          <Space align={align} size="md">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </Space>
        </div>
      ))}
    </div>
  ),
};

export const Wrap: Story = {
  render: () => (
    <div style={{ maxWidth: '300px' }}>
      <Space wrap>
        {Array.from({ length: 10 }).map((_, i) => (
          <Button key={i}>Button {i + 1}</Button>
        ))}
      </Space>
    </div>
  ),
};
