import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@zenkit-ui/core';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const basicOptions = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
];

export const Default: Story = {
  args: {
    options: basicOptions,
    placeholder: 'Select a framework',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '250px' }}>
      <Select size="sm" options={basicOptions} placeholder="Small select" />
      <Select size="md" options={basicOptions} placeholder="Medium select" />
      <Select size="lg" options={basicOptions} placeholder="Large select" />
    </div>
  ),
};

export const WithPrefix: Story = {
  args: {
    options: basicOptions,
    placeholder: 'Select framework',
    prefixIcon: <span>🚀</span>,
  },
};

export const WithOptionGroups: Story = {
  args: {
    placeholder: 'Select a language',
    options: [
      {
        label: 'Frontend',
        options: [
          { value: 'js', label: 'JavaScript' },
          { value: 'ts', label: 'TypeScript' },
        ],
      },
      {
        label: 'Backend',
        options: [
          { value: 'python', label: 'Python' },
          { value: 'go', label: 'Go' },
          { value: 'rust', label: 'Rust' },
        ],
      },
    ],
  },
};

export const WithDisabledOptions: Story = {
  args: {
    placeholder: 'Select option',
    options: [
      { value: 'available', label: 'Available' },
      { value: 'disabled', label: 'Disabled option', disabled: true },
      { value: 'another', label: 'Another option' },
    ],
  },
};

export const ErrorState: Story = {
  args: {
    options: basicOptions,
    placeholder: 'Select required',
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    options: basicOptions,
    placeholder: 'Disabled select',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    options: basicOptions,
    placeholder: 'Loading...',
    loading: true,
  },
};

export const FullWidth: Story = {
  args: {
    options: basicOptions,
    placeholder: 'Full width select',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

export const WithChildren: Story = {
  render: () => (
    <Select placeholder="Select with children">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <optgroup label="Group">
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
      </optgroup>
    </Select>
  ),
};
