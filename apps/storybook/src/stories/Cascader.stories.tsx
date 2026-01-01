import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Cascader } from '@zenkit-ui/core';

const meta: Meta<typeof Cascader> = {
  title: 'Data Entry/Cascader',
  component: Cascader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  {
    value: 'us',
    label: 'United States',
    children: [
      {
        value: 'ca',
        label: 'California',
        children: [
          { value: 'sf', label: 'San Francisco' },
          { value: 'la', label: 'Los Angeles' },
        ],
      },
      {
        value: 'ny',
        label: 'New York',
        children: [
          { value: 'nyc', label: 'New York City' },
          { value: 'buf', label: 'Buffalo' },
        ],
      },
    ],
  },
  {
    value: 'uk',
    label: 'United Kingdom',
    children: [
      {
        value: 'eng',
        label: 'England',
        children: [
          { value: 'lon', label: 'London' },
          { value: 'man', label: 'Manchester' },
        ],
      },
    ],
  },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <Cascader
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Select location"
        style={{ width: '300px' }}
      />
    );
  },
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>(['us', 'ca', 'sf']);
    return (
      <Cascader
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Select location"
        style={{ width: '300px' }}
      />
    );
  },
};

export const Searchable: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <Cascader
        options={options}
        value={value}
        onChange={setValue}
        showSearch
        placeholder="Search location"
        style={{ width: '300px' }}
      />
    );
  },
};

export const ExpandOnHover: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <Cascader
        options={options}
        value={value}
        onChange={setValue}
        expandTrigger="hover"
        placeholder="Hover to expand"
        style={{ width: '300px' }}
      />
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Cascader options={options} size="sm" placeholder="Small" style={{ width: '300px' }} />
      <Cascader options={options} size="md" placeholder="Medium" style={{ width: '300px' }} />
      <Cascader options={options} size="lg" placeholder="Large" style={{ width: '300px' }} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    options: options,
    disabled: true,
    placeholder: 'Disabled',
    style: { width: '300px' },
  },
};
