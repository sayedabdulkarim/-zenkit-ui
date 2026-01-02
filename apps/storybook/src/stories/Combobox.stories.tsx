import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Combobox } from '@zenkit-ui/core';

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
  { value: 'kr', label: 'South Korea' },
];

const meta: Meta<typeof Combobox> = {
  title: 'Components/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return (
      <div style={{ width: '300px' }}>
        <Combobox
          options={countries}
          value={value}
          onChange={setValue}
          placeholder="Select a country"
        />
      </div>
    );
  },
};

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return (
      <div style={{ width: '300px' }}>
        <Combobox
          label="Country"
          options={countries}
          value={value}
          onChange={setValue}
          placeholder="Search countries..."
        />
      </div>
    );
  },
};

export const Creatable: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    const [opts, setOpts] = useState(countries);
    return (
      <div style={{ width: '300px' }}>
        <Combobox
          label="Add new option"
          options={opts}
          value={value}
          onChange={setValue}
          creatable
          onCreateOption={(label) => {
            const newOpt = { value: label.toLowerCase(), label };
            setOpts([...opts, newOpt]);
            setValue(newOpt.value);
          }}
        />
      </div>
    );
  },
};

export const Clearable: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>('us');
    return (
      <div style={{ width: '300px' }}>
        <Combobox
          label="Clearable selection"
          options={countries}
          value={value}
          onChange={setValue}
          clearable
        />
      </div>
    );
  },
};

export const WithDescription: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return (
      <div style={{ width: '300px' }}>
        <Combobox
          label="Country"
          description="Start typing to search"
          options={countries}
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    options: countries,
    value: 'us',
    disabled: true,
  },
  decorators: [(Story) => <div style={{ width: '300px' }}><Story /></div>],
};
