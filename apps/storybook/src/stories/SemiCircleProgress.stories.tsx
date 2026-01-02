import type { Meta, StoryObj } from '@storybook/react';
import { SemiCircleProgress } from '@zenkit-ui/core';

const meta: Meta<typeof SemiCircleProgress> = {
  title: 'Components/SemiCircleProgress',
  component: SemiCircleProgress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'range', min: 100, max: 300, step: 10 } },
    thickness: { control: { type: 'range', min: 4, max: 20, step: 2 } },
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
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <SemiCircleProgress value={60} color="primary" label="Primary" />
      <SemiCircleProgress value={70} color="secondary" label="Secondary" />
      <SemiCircleProgress value={80} color="success" label="Success" />
      <SemiCircleProgress value={50} color="warning" label="Warning" />
      <SemiCircleProgress value={30} color="error" label="Error" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-end' }}>
      <SemiCircleProgress value={65} size={100} label="100" />
      <SemiCircleProgress value={65} size={150} label="150" />
      <SemiCircleProgress value={65} size={200} label="200" />
    </div>
  ),
};

export const Thickness: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <SemiCircleProgress value={65} thickness={6} label="6px" />
      <SemiCircleProgress value={65} thickness={10} label="10px" />
      <SemiCircleProgress value={65} thickness={16} label="16px" />
    </div>
  ),
};

export const CustomLabel: Story = {
  render: () => (
    <SemiCircleProgress
      value={85}
      size={200}
      thickness={12}
      color="success"
      label={
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>85%</div>
          <div style={{ fontSize: '0.875rem', color: '#666' }}>Complete</div>
        </div>
      }
    />
  ),
};

export const SpeedometerStyle: Story = {
  render: () => (
    <div style={{ textAlign: 'center' }}>
      <SemiCircleProgress
        value={72}
        size={200}
        thickness={14}
        color="primary"
        label={
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>72</div>
            <div style={{ fontSize: '0.75rem', color: '#666' }}>mph</div>
          </div>
        }
      />
    </div>
  ),
};

export const Dashboard: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <SemiCircleProgress value={92} color="success" size={120} label="92%" />
        <p>CPU Usage</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <SemiCircleProgress value={67} color="primary" size={120} label="67%" />
        <p>Memory</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <SemiCircleProgress value={45} color="warning" size={120} label="45%" />
        <p>Storage</p>
      </div>
    </div>
  ),
};
