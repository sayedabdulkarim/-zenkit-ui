import type { Meta, StoryObj } from '@storybook/react';
import { Chart } from '@zenkit-ui/core';

const meta: Meta<typeof Chart> = {
  title: 'Components/Chart',
  component: Chart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['bar', 'line', 'pie', 'donut'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const salesData = [
  { label: 'Jan', value: 45 },
  { label: 'Feb', value: 52 },
  { label: 'Mar', value: 38 },
  { label: 'Apr', value: 65 },
  { label: 'May', value: 78 },
  { label: 'Jun', value: 56 },
];

export const BarChart: Story = {
  args: {
    type: 'bar',
    data: salesData,
    height: 300,
    width: 500,
    showLabels: true,
  },
};

export const LineChart: Story = {
  args: {
    type: 'line',
    data: salesData,
    height: 300,
    width: 500,
  },
};

export const PieChart: Story = {
  args: {
    type: 'pie',
    data: [
      { label: 'Desktop', value: 45 },
      { label: 'Mobile', value: 35 },
      { label: 'Tablet', value: 20 },
    ],
    height: 300,
    width: 300,
    showLegend: true,
  },
};

export const DonutChart: Story = {
  args: {
    type: 'donut',
    data: [
      { label: 'React', value: 40 },
      { label: 'Vue', value: 30 },
      { label: 'Angular', value: 20 },
      { label: 'Other', value: 10 },
    ],
    height: 300,
    width: 300,
  },
};

export const WithCustomColors: Story = {
  args: {
    type: 'bar',
    data: salesData,
    height: 300,
    width: 500,
    colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dfe6e9'],
  },
};

export const WithValues: Story = {
  args: {
    type: 'bar',
    data: salesData,
    height: 300,
    width: 500,
    showValues: true,
    showLabels: true,
  },
};

export const WithGrid: Story = {
  args: {
    type: 'bar',
    data: salesData,
    height: 300,
    width: 500,
    showGrid: true,
  },
};

export const Loading: Story = {
  args: {
    type: 'bar',
    data: [],
    height: 300,
    width: 500,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    type: 'bar',
    data: [],
    height: 300,
    width: 500,
    emptyMessage: 'No data to display',
  },
};

export const Dashboard: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
      <div>
        <h3>Revenue</h3>
        <Chart type="bar" data={salesData} height={200} width={300} />
      </div>
      <div>
        <h3>Traffic Sources</h3>
        <Chart
          type="donut"
          data={[
            { label: 'Organic', value: 45 },
            { label: 'Direct', value: 30 },
            { label: 'Referral', value: 25 },
          ]}
          height={200}
          width={200}
        />
      </div>
    </div>
  ),
};
