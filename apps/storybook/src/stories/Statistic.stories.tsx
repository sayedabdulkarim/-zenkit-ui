import type { Meta, StoryObj } from '@storybook/react';
import { Statistic, StatisticGroup } from '@zenkit-ui/core';

const meta: Meta<typeof Statistic> = {
  title: 'Components/Statistic',
  component: Statistic,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Active Users',
    value: 112893,
  },
};

export const WithPrecision: Story = {
  args: {
    title: 'Account Balance',
    value: 112893.64,
    precision: 2,
  },
};

export const WithPrefixSuffix: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '3rem' }}>
      <Statistic title="Sales" value={1128} prefix="$" />
      <Statistic title="Growth" value={93} suffix="%" />
      <Statistic
        title="Likes"
        value={2048}
        prefix={<span>👍</span>}
      />
    </div>
  ),
};

export const CustomStyle: Story = {
  args: {
    title: 'Revenue',
    value: 50000,
    prefix: '$',
    valueStyle: { color: '#3f8600', fontWeight: 'bold' },
  },
};

export const Loading: Story = {
  args: {
    title: 'Loading Data',
    value: 0,
    loading: true,
  },
};

export const Group: Story = {
  render: () => (
    <StatisticGroup>
      <Statistic title="Users" value={1234} />
      <Statistic title="Orders" value={567} />
      <Statistic title="Revenue" value={89012} prefix="$" />
    </StatisticGroup>
  ),
};

export const Dashboard: Story = {
  render: () => (
    <div style={{ padding: '1.5rem', border: '1px solid #e8e8e8', borderRadius: '8px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
        <Statistic title="Total Users" value={24890} />
        <Statistic title="Active Now" value={342} valueStyle={{ color: '#52c41a' }} />
        <Statistic title="Revenue" value={52430} prefix="$" precision={0} />
        <Statistic title="Growth" value={12.5} suffix="%" valueStyle={{ color: '#cf1322' }} />
      </div>
    </div>
  ),
};

export const CustomFormatter: Story = {
  args: {
    title: 'Large Number',
    value: 1234567890,
    formatter: (val) => {
      const num = Number(val);
      if (num >= 1e9) return `${(num / 1e9).toFixed(1)}B`;
      if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M`;
      if (num >= 1e3) return `${(num / 1e3).toFixed(1)}K`;
      return String(val);
    },
  },
};
