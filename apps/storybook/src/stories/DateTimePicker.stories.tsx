import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DateTimePicker } from '@zenkit-ui/core';

const meta: Meta<typeof DateTimePicker> = {
  title: 'Data Entry/DateTimePicker',
  component: DateTimePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the picker is disabled',
    },
    clearable: {
      control: 'boolean',
      description: 'Whether the picker is clearable',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    return (
      <DateTimePicker
        value={date}
        onChange={setDate}
        placeholder="Select date and time"
      />
    );
  },
};

export const WithValue: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(new Date());
    return (
      <DateTimePicker
        value={date}
        onChange={setDate}
        placeholder="Select date and time"
      />
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <DateTimePicker size="sm" placeholder="Small" />
      <DateTimePicker size="md" placeholder="Medium" />
      <DateTimePicker size="lg" placeholder="Large" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled',
  },
};

export const Clearable: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(new Date());
    return (
      <DateTimePicker
        value={date}
        onChange={setDate}
        clearable
        placeholder="Clearable"
      />
    );
  },
};

export const WithMinMax: Story = {
  render: () => {
    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), 1);
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59);
    return (
      <DateTimePicker
        minDate={minDate}
        maxDate={maxDate}
        placeholder="Select within this month"
      />
    );
  },
};

export const TwelveHourFormat: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(new Date());
    return (
      <DateTimePicker
        value={date}
        onChange={setDate}
        use12Hours
        placeholder="12-hour format"
      />
    );
  },
};
