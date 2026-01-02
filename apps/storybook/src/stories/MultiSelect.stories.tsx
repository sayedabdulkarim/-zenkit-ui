import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { MultiSelect } from '@zenkit-ui/core';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
  { value: 'preact', label: 'Preact' },
];

const meta: Meta<typeof MultiSelect> = {
  title: 'Components/MultiSelect',
  component: MultiSelect,
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
    const [value, setValue] = useState<string[]>([]);
    return (
      <div style={{ width: '300px' }}>
        <MultiSelect
          options={options}
          value={value}
          onChange={setValue}
          placeholder="Select frameworks"
        />
      </div>
    );
  },
};

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>(['react', 'vue']);
    return (
      <div style={{ width: '300px' }}>
        <MultiSelect
          label="Favorite Frameworks"
          options={options}
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
};

export const Searchable: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <div style={{ width: '300px' }}>
        <MultiSelect
          label="Search & Select"
          options={options}
          value={value}
          onChange={setValue}
          searchable
          placeholder="Type to search..."
        />
      </div>
    );
  },
};

export const Creatable: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    const [opts, setOpts] = useState(options);
    return (
      <div style={{ width: '300px' }}>
        <MultiSelect
          label="Add your own"
          options={opts}
          value={value}
          onChange={setValue}
          creatable
          searchable
          onCreateOption={(label) => {
            const newOpt = { value: label.toLowerCase(), label };
            setOpts([...opts, newOpt]);
          }}
        />
      </div>
    );
  },
};

export const MaxSelected: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <div style={{ width: '300px' }}>
        <MultiSelect
          label="Max 3 selections"
          options={options}
          value={value}
          onChange={setValue}
          maxSelectedValues={3}
        />
      </div>
    );
  },
};

export const Clearable: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>(['react', 'vue']);
    return (
      <div style={{ width: '300px' }}>
        <MultiSelect
          label="Clearable"
          options={options}
          value={value}
          onChange={setValue}
          clearable
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Select',
    options,
    value: ['react', 'vue'],
    disabled: true,
  },
  decorators: [(Story) => <div style={{ width: '300px' }}><Story /></div>],
};
