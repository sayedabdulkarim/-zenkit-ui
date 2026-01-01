import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Autocomplete } from '@zenkit-ui/core';

const meta: Meta<typeof Autocomplete> = {
  title: 'Data Entry/Autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
  { value: 'fig', label: 'Fig' },
  { value: 'grape', label: 'Grape' },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string>('');
    return (
      <Autocomplete
        options={fruits}
        value={value}
        onChange={setValue}
        placeholder="Search fruits..."
      />
    );
  },
};

export const WithInitialValue: Story = {
  render: () => {
    const [value, setValue] = useState<string>('apple');
    return (
      <Autocomplete
        options={fruits}
        value={value}
        onChange={setValue}
        placeholder="Search fruits..."
      />
    );
  },
};

export const Clearable: Story = {
  render: () => {
    const [value, setValue] = useState<string>('banana');
    return (
      <Autocomplete
        options={fruits}
        value={value}
        onChange={setValue}
        clearable
        placeholder="Clearable"
      />
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Autocomplete options={fruits} size="sm" placeholder="Small" />
      <Autocomplete options={fruits} size="md" placeholder="Medium" />
      <Autocomplete options={fruits} size="lg" placeholder="Large" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    options: fruits,
    disabled: true,
    placeholder: 'Disabled',
  },
};

export const WithDisabledOptions: Story = {
  args: {
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana', disabled: true },
      { value: 'cherry', label: 'Cherry' },
      { value: 'date', label: 'Date', disabled: true },
    ],
    placeholder: 'Some options disabled',
  },
};
