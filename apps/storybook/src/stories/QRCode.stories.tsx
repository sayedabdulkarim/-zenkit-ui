import type { Meta, StoryObj } from '@storybook/react';
import { QRCode } from '@zenkit-ui/core';

const meta: Meta<typeof QRCode> = {
  title: 'Data Display/QRCode',
  component: QRCode,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'https://example.com',
  },
};

export const WithSize: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <QRCode value="https://example.com" size={64} />
      <QRCode value="https://example.com" size={128} />
      <QRCode value="https://example.com" size={200} />
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    value: 'https://example.com',
    icon: '🏠',
    iconSize: 32,
  },
};

export const WithColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <QRCode value="https://example.com" color="#1890ff" />
      <QRCode value="https://example.com" color="#52c41a" />
      <QRCode value="https://example.com" color="#eb2f96" />
    </div>
  ),
};

export const WithBackground: Story = {
  args: {
    value: 'https://example.com',
    bgColor: '#f0f0f0',
    color: '#333',
  },
};

export const Bordered: Story = {
  args: {
    value: 'https://example.com',
    bordered: true,
  },
};

export const Loading: Story = {
  args: {
    value: 'https://example.com',
    status: 'loading',
  },
};

export const Expired: Story = {
  args: {
    value: 'https://example.com',
    status: 'expired',
    onRefresh: () => alert('Refresh clicked'),
  },
};
