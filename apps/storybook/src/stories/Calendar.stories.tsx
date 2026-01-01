import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Calendar } from '@zenkit-ui/core';

const meta: Meta<typeof Calendar> = {
  title: 'Data Display/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(new Date());
    return (
      <Calendar
        value={date}
        onChange={setDate}
      />
    );
  },
};

export const WithEvents: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(new Date());
    const today = new Date();
    return (
      <Calendar
        value={date}
        onChange={setDate}
        events={[
          { date: new Date(today.getFullYear(), today.getMonth(), 5), title: 'Meeting' },
          { date: new Date(today.getFullYear(), today.getMonth(), 15), title: 'Launch' },
          { date: new Date(today.getFullYear(), today.getMonth(), 25), title: 'Review' },
        ]}
      />
    );
  },
};

export const FullScreen: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(new Date());
    return (
      <Calendar
        value={date}
        onChange={setDate}
        fullScreen
      />
    );
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const MonthView: Story = {
  render: () => (
    <Calendar
      mode="month"
      value={new Date()}
    />
  ),
};

export const YearView: Story = {
  render: () => (
    <Calendar
      mode="year"
      value={new Date()}
    />
  ),
};

export const Disabled: Story = {
  args: {
    value: new Date(),
    disabled: true,
  },
};
