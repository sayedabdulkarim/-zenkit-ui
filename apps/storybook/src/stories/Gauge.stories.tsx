import type { Meta, StoryObj } from '@storybook/react';
import { Gauge, Card } from '@zenkit-ui/core';

const meta: Meta<typeof Gauge> = {
  title: 'Data Display/Gauge',
  component: Gauge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current value',
    },
    min: {
      control: 'number',
      description: 'Minimum value',
    },
    max: {
      control: 'number',
      description: 'Maximum value',
    },
    size: {
      control: { type: 'range', min: 100, max: 300, step: 10 },
      description: 'Size of the gauge',
    },
    strokeWidth: {
      control: { type: 'range', min: 4, max: 20, step: 1 },
      description: 'Stroke width',
    },
    showValue: {
      control: 'boolean',
      description: 'Show value in center',
    },
    animated: {
      control: 'boolean',
      description: 'Animate the gauge',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 75,
    size: 150,
  },
};

export const Values: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <Gauge value={0} size={120} label="0%" />
      <Gauge value={25} size={120} label="25%" />
      <Gauge value={50} size={120} label="50%" />
      <Gauge value={75} size={120} label="75%" />
      <Gauge value={100} size={120} label="100%" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <Gauge value={65} size={80} label="Small" />
      <Gauge value={65} size={120} label="Medium" />
      <Gauge value={65} size={180} label="Large" />
    </div>
  ),
};

export const StrokeWidths: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <Gauge value={70} size={120} strokeWidth={4} label="Thin" />
      <Gauge value={70} size={120} strokeWidth={10} label="Medium" />
      <Gauge value={70} size={120} strokeWidth={16} label="Thick" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <Gauge value={60} size={120} color="#3b82f6" label="Blue" />
      <Gauge value={60} size={120} color="#22c55e" label="Green" />
      <Gauge value={60} size={120} color="#f59e0b" label="Orange" />
      <Gauge value={60} size={120} color="#ef4444" label="Red" />
      <Gauge value={60} size={120} color="#8b5cf6" label="Purple" />
    </div>
  ),
};

export const GradientColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <Gauge
        value={85}
        size={150}
        gradientColors={['#3b82f6', '#8b5cf6']}
        label="Blue → Purple"
      />
      <Gauge
        value={85}
        size={150}
        gradientColors={['#22c55e', '#eab308']}
        label="Green → Yellow"
      />
      <Gauge
        value={85}
        size={150}
        gradientColors={['#f59e0b', '#ef4444']}
        label="Orange → Red"
      />
    </div>
  ),
};

export const WithSegments: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <Gauge
        value={30}
        size={150}
        segments={[
          { start: 0, end: 33, color: '#22c55e' },
          { start: 33, end: 66, color: '#f59e0b' },
          { start: 66, end: 100, color: '#ef4444' },
        ]}
        label="Low"
      />
      <Gauge
        value={55}
        size={150}
        segments={[
          { start: 0, end: 33, color: '#22c55e' },
          { start: 33, end: 66, color: '#f59e0b' },
          { start: 66, end: 100, color: '#ef4444' },
        ]}
        label="Medium"
      />
      <Gauge
        value={85}
        size={150}
        segments={[
          { start: 0, end: 33, color: '#22c55e' },
          { start: 33, end: 66, color: '#f59e0b' },
          { start: 66, end: 100, color: '#ef4444' },
        ]}
        label="High"
      />
    </div>
  ),
};

export const CustomRange: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <Gauge
        value={750}
        min={0}
        max={1000}
        size={150}
        label="Score"
        valueFormatter={(v) => `${v}/1000`}
      />
      <Gauge
        value={-5}
        min={-20}
        max={40}
        size={150}
        label="Temperature"
        valueFormatter={(v) => `${v}°C`}
      />
    </div>
  ),
};

export const WithoutValue: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <Gauge value={45} size={120} showValue={false} label="Progress" />
      <Gauge value={80} size={120} showValue={false} label="Complete" color="#22c55e" />
    </div>
  ),
};

export const DashboardExample: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', width: 600 }}>
      <Card style={{ padding: '1.5rem', textAlign: 'center' }}>
        <Gauge
          value={92}
          size={120}
          color="#22c55e"
          label="Uptime"
          valueFormatter={(v) => `${v}%`}
        />
      </Card>
      <Card style={{ padding: '1.5rem', textAlign: 'center' }}>
        <Gauge
          value={67}
          size={120}
          segments={[
            { start: 0, end: 50, color: '#22c55e' },
            { start: 50, end: 80, color: '#f59e0b' },
            { start: 80, end: 100, color: '#ef4444' },
          ]}
          label="CPU Usage"
          valueFormatter={(v) => `${v}%`}
        />
      </Card>
      <Card style={{ padding: '1.5rem', textAlign: 'center' }}>
        <Gauge
          value={45}
          size={120}
          gradientColors={['#3b82f6', '#8b5cf6']}
          label="Memory"
          valueFormatter={(v) => `${v}%`}
        />
      </Card>
    </div>
  ),
};

export const SpeedometerStyle: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <Gauge
        value={45}
        min={0}
        max={160}
        size={180}
        strokeWidth={12}
        startAngle={-135}
        endAngle={135}
        segments={[
          { start: 0, end: 60, color: '#22c55e' },
          { start: 60, end: 100, color: '#f59e0b' },
          { start: 100, end: 160, color: '#ef4444' },
        ]}
        label="Speed"
        valueFormatter={(v) => `${v} km/h`}
      />
      <Gauge
        value={6500}
        min={0}
        max={8000}
        size={180}
        strokeWidth={12}
        startAngle={-135}
        endAngle={135}
        segments={[
          { start: 0, end: 3000, color: '#22c55e' },
          { start: 3000, end: 6000, color: '#f59e0b' },
          { start: 6000, end: 8000, color: '#ef4444' },
        ]}
        label="RPM"
        valueFormatter={(v) => v.toLocaleString()}
      />
    </div>
  ),
};

export const HealthScore: Story = {
  render: () => {
    const score = 78;
    const getColor = (value: number) => {
      if (value >= 80) return '#22c55e';
      if (value >= 60) return '#f59e0b';
      return '#ef4444';
    };

    return (
      <Card style={{ padding: '2rem', textAlign: 'center', width: 300 }}>
        <h3 style={{ margin: '0 0 1rem' }}>Health Score</h3>
        <Gauge
          value={score}
          size={180}
          strokeWidth={14}
          color={getColor(score)}
          valueFormatter={(v) => `${v}`}
        />
        <p style={{ margin: '1rem 0 0', color: '#64748b' }}>
          {score >= 80 ? 'Excellent' : score >= 60 ? 'Good' : 'Needs Improvement'}
        </p>
      </Card>
    );
  },
};

export const Animated: Story = {
  args: {
    value: 85,
    size: 180,
    animated: true,
    animationDuration: 1500,
    gradientColors: ['#3b82f6', '#8b5cf6'],
    label: 'Loading...',
  },
};
