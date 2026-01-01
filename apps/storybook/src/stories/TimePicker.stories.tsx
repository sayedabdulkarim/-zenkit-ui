import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TimePicker } from '@zenkit-ui/core';

const meta: Meta<typeof TimePicker> = {
  title: 'Data Entry/TimePicker',
  component: TimePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [time, setTime] = useState<string>('');
    return (
      <TimePicker
        value={time}
        onChange={setTime}
        placeholder="Select time"
      />
    );
  },
};

export const WithValue: Story = {
  render: () => {
    const [time, setTime] = useState<string>('14:30');
    return (
      <TimePicker
        value={time}
        onChange={setTime}
        placeholder="Select time"
      />
    );
  },
};

export const TwelveHour: Story = {
  render: () => {
    const [time, setTime] = useState<string>('');
    return (
      <TimePicker
        value={time}
        onChange={setTime}
        use12Hours
        placeholder="Select time (12h)"
      />
    );
  },
};

export const WithSeconds: Story = {
  render: () => {
    const [time, setTime] = useState<string>('');
    return (
      <TimePicker
        value={time}
        onChange={setTime}
        showSeconds
        placeholder="HH:MM:SS"
      />
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <TimePicker size="sm" placeholder="Small" />
      <TimePicker size="md" placeholder="Medium" />
      <TimePicker size="lg" placeholder="Large" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: '09:00',
  },
};
