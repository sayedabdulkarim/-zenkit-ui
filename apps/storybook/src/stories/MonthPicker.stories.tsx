import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { MonthPicker } from '@zenkit-ui/core';

const meta: Meta<typeof MonthPicker> = {
  title: 'Data Entry/MonthPicker',
  component: MonthPicker,
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
    const [value, setValue] = useState<{ month: number; year: number } | null>(null);
    return (
      <MonthPicker
        value={value}
        onChange={setValue}
        placeholder="Select month"
      />
    );
  },
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState<{ month: number; year: number } | null>({
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    });
    return (
      <MonthPicker
        value={value}
        onChange={setValue}
        placeholder="Select month"
      />
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <MonthPicker size="sm" placeholder="Small" />
      <MonthPicker size="md" placeholder="Medium" />
      <MonthPicker size="lg" placeholder="Large" />
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
    const [value, setValue] = useState<{ month: number; year: number } | null>({
      month: 5,
      year: 2024,
    });
    return (
      <MonthPicker
        value={value}
        onChange={setValue}
        clearable
        placeholder="Clearable"
      />
    );
  },
};

export const WithMinMaxYear: Story = {
  render: () => {
    const currentYear = new Date().getFullYear();
    return (
      <MonthPicker
        minYear={currentYear - 2}
        maxYear={currentYear + 2}
        placeholder="Last 2 years to next 2 years"
      />
    );
  },
};
