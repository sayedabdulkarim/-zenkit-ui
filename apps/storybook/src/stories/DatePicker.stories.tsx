import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DatePicker } from '@zenkit-ui/core';

const meta: Meta<typeof DatePicker> = {
  title: 'Data Entry/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    return (
      <DatePicker
        value={date}
        onChange={setDate}
        placeholder="Select date"
      />
    );
  },
};

export const WithValue: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(new Date());
    return (
      <DatePicker
        value={date}
        onChange={setDate}
        placeholder="Select date"
      />
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <DatePicker size="sm" placeholder="Small" />
      <DatePicker size="md" placeholder="Medium" />
      <DatePicker size="lg" placeholder="Large" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled',
  },
};

export const WithMinMax: Story = {
  render: () => {
    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), 1);
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    return (
      <DatePicker
        minDate={minDate}
        maxDate={maxDate}
        placeholder="Select date this month"
      />
    );
  },
};

export const Clearable: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(new Date());
    return (
      <DatePicker
        value={date}
        onChange={setDate}
        clearable
        placeholder="Clearable date"
      />
    );
  },
};
