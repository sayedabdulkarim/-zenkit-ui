import type { Meta, StoryObj } from '@storybook/react';
import { RingProgress } from '@zenkit-ui/core';

const meta: Meta<typeof RingProgress> = {
  title: 'Components/RingProgress',
  component: RingProgress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'range', min: 60, max: 200, step: 10 } },
    thickness: { control: { type: 'range', min: 2, max: 20, step: 1 } },
    color: { control: 'select', options: ['primary', 'secondary', 'success', 'warning', 'error'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 65,
  },
};

export const WithLabel: Story = {
  args: {
    value: 75,
    label: '75%',
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <RingProgress value={60} color="primary" label="60%" />
      <RingProgress value={70} color="secondary" label="70%" />
      <RingProgress value={80} color="success" label="80%" />
      <RingProgress value={50} color="warning" label="50%" />
      <RingProgress value={30} color="error" label="30%" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <RingProgress value={65} size={60} label="60" />
      <RingProgress value={65} size={80} label="80" />
      <RingProgress value={65} size={100} label="100" />
      <RingProgress value={65} size={120} label="120" />
    </div>
  ),
};

export const Thickness: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <RingProgress value={65} thickness={4} label="4px" />
      <RingProgress value={65} thickness={8} label="8px" />
      <RingProgress value={65} thickness={12} label="12px" />
      <RingProgress value={65} thickness={16} label="16px" />
    </div>
  ),
};

export const RoundedCaps: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <RingProgress value={65} label="Square" />
      <RingProgress value={65} roundCaps label="Round" />
    </div>
  ),
};

export const MultiSection: Story = {
  render: () => (
    <RingProgress
      sections={[
        { value: 40, color: '#228be6' },
        { value: 25, color: '#40c057' },
        { value: 15, color: '#fab005' },
      ]}
      label="Multi"
    />
  ),
};

export const CustomLabel: Story = {
  render: () => (
    <RingProgress
      value={85}
      size={120}
      thickness={12}
      color="success"
      label={
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold' }}>85%</div>
          <div style={{ fontSize: '12px', color: '#666' }}>Complete</div>
        </div>
      }
    />
  ),
};

export const Dashboard: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div style={{ textAlign: 'center' }}>
        <RingProgress value={92} color="success" size={100} thickness={8} label="92%" />
        <p style={{ marginTop: '0.5rem' }}>Uptime</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <RingProgress value={67} color="primary" size={100} thickness={8} label="67%" />
        <p style={{ marginTop: '0.5rem' }}>CPU</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <RingProgress value={45} color="warning" size={100} thickness={8} label="45%" />
        <p style={{ marginTop: '0.5rem' }}>Memory</p>
      </div>
    </div>
  ),
};
