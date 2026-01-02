import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { YearPicker } from '@zenkit-ui/core';

const meta: Meta<typeof YearPicker> = {
  title: 'Data Entry/YearPicker',
  component: YearPicker,
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
    const [year, setYear] = useState<number | null>(null);
    return (
      <YearPicker
        value={year}
        onChange={setYear}
        placeholder="Select year"
      />
    );
  },
};

export const WithValue: Story = {
  render: () => {
    const [year, setYear] = useState<number | null>(new Date().getFullYear());
    return (
      <YearPicker
        value={year}
        onChange={setYear}
        placeholder="Select year"
      />
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <YearPicker size="sm" placeholder="Small" />
      <YearPicker size="md" placeholder="Medium" />
      <YearPicker size="lg" placeholder="Large" />
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
    const [year, setYear] = useState<number | null>(2024);
    return (
      <YearPicker
        value={year}
        onChange={setYear}
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
      <YearPicker
        minYear={currentYear - 10}
        maxYear={currentYear + 10}
        placeholder="±10 years from now"
      />
    );
  },
};

export const CustomRange: Story = {
  render: () => {
    return (
      <YearPicker
        minYear={1990}
        maxYear={2030}
        placeholder="1990 - 2030"
      />
    );
  },
};
