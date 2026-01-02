import type { Meta, StoryObj } from '@storybook/react';
import { Sparkline, Card } from '@zenkit-ui/core';

const meta: Meta<typeof Sparkline> = {
  title: 'Data Display/Sparkline',
  component: Sparkline,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['line', 'bar', 'area'],
      description: 'The type of sparkline',
    },
    width: {
      control: 'number',
      description: 'Width of the sparkline',
    },
    height: {
      control: 'number',
      description: 'Height of the sparkline',
    },
    stroke: {
      control: 'color',
      description: 'Stroke color',
    },
    fill: {
      control: 'color',
      description: 'Fill color',
    },
    curved: {
      control: 'boolean',
      description: 'Use curved lines',
    },
    showDots: {
      control: 'boolean',
      description: 'Show dots on data points',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [5, 10, 5, 20, 8, 15, 12, 18, 14, 22, 18, 25];
const volatileData = [10, 5, 15, 8, 20, 12, 25, 15, 30, 18, 22, 28];
const trendingUp = [5, 8, 6, 10, 12, 15, 14, 18, 20, 22, 25, 28];
const trendingDown = [28, 25, 22, 20, 18, 14, 15, 12, 10, 6, 8, 5];

export const Default: Story = {
  args: {
    data: sampleData,
    width: 120,
    height: 30,
  },
};

export const LineTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ width: 60 }}>Line:</span>
        <Sparkline data={sampleData} type="line" width={150} height={40} stroke="#3b82f6" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ width: 60 }}>Area:</span>
        <Sparkline data={sampleData} type="area" width={150} height={40} stroke="#3b82f6" fill="#3b82f6" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ width: 60 }}>Bar:</span>
        <Sparkline data={sampleData} type="bar" width={150} height={40} fill="#3b82f6" />
      </div>
    </div>
  ),
};

export const CurvedLine: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ width: 80 }}>Straight:</span>
        <Sparkline data={volatileData} type="line" width={150} height={40} stroke="#8b5cf6" curved={false} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ width: 80 }}>Curved:</span>
        <Sparkline data={volatileData} type="line" width={150} height={40} stroke="#8b5cf6" curved />
      </div>
    </div>
  ),
};

export const WithDots: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Sparkline data={sampleData} type="line" width={200} height={50} stroke="#22c55e" showDots dotRadius={3} />
      <Sparkline data={sampleData} type="area" width={200} height={50} stroke="#22c55e" fill="#22c55e" showDots dotRadius={2} curved />
    </div>
  ),
};

export const HighlightMinMax: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ width: 60 }}>Line:</span>
        <Sparkline
          data={volatileData}
          type="line"
          width={200}
          height={50}
          stroke="#64748b"
          showDots
          highlightMinMax
          minColor="#ef4444"
          maxColor="#22c55e"
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ width: 60 }}>Bar:</span>
        <Sparkline
          data={volatileData}
          type="bar"
          width={200}
          height={50}
          fill="#64748b"
          highlightMinMax
          minColor="#ef4444"
          maxColor="#22c55e"
        />
      </div>
    </div>
  ),
};

export const WithReferenceLine: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Average line at 15:</span>
        <Sparkline
          data={volatileData}
          type="area"
          width={200}
          height={60}
          stroke="#3b82f6"
          fill="#3b82f6"
          curved
          referenceLine={15}
          referenceLineColor="#dc2626"
        />
      </div>
    </div>
  ),
};

export const ColorVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Sparkline data={trendingUp} type="line" width={150} height={40} stroke="#22c55e" curved />
      <Sparkline data={trendingDown} type="line" width={150} height={40} stroke="#ef4444" curved />
      <Sparkline data={sampleData} type="line" width={150} height={40} stroke="#f59e0b" curved />
      <Sparkline data={volatileData} type="line" width={150} height={40} stroke="#8b5cf6" curved />
    </div>
  ),
};

export const BarStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ width: 100 }}>Default gap:</span>
        <Sparkline data={sampleData} type="bar" width={150} height={40} fill="#3b82f6" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ width: 100 }}>No gap:</span>
        <Sparkline data={sampleData} type="bar" width={150} height={40} fill="#3b82f6" barGap={0} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ width: 100 }}>Large gap:</span>
        <Sparkline data={sampleData} type="bar" width={150} height={40} fill="#3b82f6" barGap={0.5} />
      </div>
    </div>
  ),
};

export const InDashboardCards: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', width: 500 }}>
      <Card style={{ padding: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Revenue</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>$12,450</div>
            <div style={{ fontSize: '0.75rem', color: '#22c55e' }}>+12.5%</div>
          </div>
          <Sparkline data={trendingUp} type="area" width={80} height={40} stroke="#22c55e" fill="#22c55e" curved />
        </div>
      </Card>
      <Card style={{ padding: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Users</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>8,234</div>
            <div style={{ fontSize: '0.75rem', color: '#ef4444' }}>-3.2%</div>
          </div>
          <Sparkline data={trendingDown} type="area" width={80} height={40} stroke="#ef4444" fill="#ef4444" curved />
        </div>
      </Card>
      <Card style={{ padding: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Orders</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>1,429</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>+0.5%</div>
          </div>
          <Sparkline data={sampleData} type="bar" width={80} height={40} fill="#3b82f6" />
        </div>
      </Card>
      <Card style={{ padding: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Sessions</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>24.5K</div>
            <div style={{ fontSize: '0.75rem', color: '#22c55e' }}>+8.1%</div>
          </div>
          <Sparkline data={volatileData} type="line" width={80} height={40} stroke="#8b5cf6" curved showDots dotRadius={1.5} />
        </div>
      </Card>
    </div>
  ),
};

export const InlineWithText: Story = {
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        Stock price today: $142.50
        <Sparkline data={trendingUp} type="line" width={60} height={20} stroke="#22c55e" curved />
        <span style={{ color: '#22c55e', fontSize: '0.875rem' }}>↑ 2.3%</span>
      </p>
      <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
        CPU Usage: 45%
        <Sparkline data={volatileData} type="area" width={60} height={20} stroke="#f59e0b" fill="#f59e0b" />
      </p>
      <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
        Memory: 2.4GB
        <Sparkline data={sampleData} type="bar" width={60} height={20} fill="#8b5cf6" />
      </p>
    </div>
  ),
};

export const EmptyData: Story = {
  args: {
    data: [],
    width: 150,
    height: 40,
  },
};
