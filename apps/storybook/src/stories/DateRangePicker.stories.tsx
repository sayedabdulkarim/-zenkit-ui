import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DateRangePicker } from '@zenkit-ui/core';

const meta: Meta<typeof DateRangePicker> = {
  title: 'Data Entry/DateRangePicker',
  component: DateRangePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [range, setRange] = useState<[Date | null, Date | null]>([null, null]);
    return (
      <DateRangePicker
        value={range}
        onChange={setRange}
        placeholder={['Start date', 'End date']}
      />
    );
  },
};

export const WithPresets: Story = {
  render: () => {
    const [range, setRange] = useState<[Date | null, Date | null]>([null, null]);
    return (
      <DateRangePicker
        value={range}
        onChange={setRange}
        presets={[
          { label: 'Last 7 days', value: [new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), new Date()] },
          { label: 'Last 30 days', value: [new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), new Date()] },
          { label: 'This month', value: [new Date(new Date().getFullYear(), new Date().getMonth(), 1), new Date()] },
        ]}
      />
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <DateRangePicker size="sm" placeholder={['Start', 'End']} />
      <DateRangePicker size="md" placeholder={['Start', 'End']} />
      <DateRangePicker size="lg" placeholder={['Start', 'End']} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: [new Date(), new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)],
  },
};

export const WithValue: Story = {
  render: () => {
    const today = new Date();
    const nextWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const [range, setRange] = useState<[Date | null, Date | null]>([today, nextWeek]);
    return (
      <DateRangePicker
        value={range}
        onChange={setRange}
      />
    );
  },
};
