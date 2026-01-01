import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioGroup } from '@zenkit-ui/core';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    colorScheme: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Radio option',
    name: 'default',
  },
};

export const Checked: Story = {
  args: {
    label: 'Selected option',
    name: 'checked',
    defaultChecked: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Radio size="sm" label="Small radio" name="sizes" value="sm" />
      <Radio size="md" label="Medium radio" name="sizes" value="md" />
      <Radio size="lg" label="Large radio" name="sizes" value="lg" />
    </div>
  ),
};

export const ColorSchemes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Radio colorScheme="primary" label="Primary" name="colors" defaultChecked />
      <Radio colorScheme="secondary" label="Secondary" name="colors2" defaultChecked />
      <Radio colorScheme="success" label="Success" name="colors3" defaultChecked />
      <Radio colorScheme="danger" label="Danger" name="colors4" defaultChecked />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Radio label="Disabled unchecked" name="disabled1" disabled />
      <Radio label="Disabled checked" name="disabled2" disabled defaultChecked />
    </div>
  ),
};

export const VerticalGroup: Story = {
  render: () => {
    const [value, setValue] = useState('option1');
    return (
      <RadioGroup name="vertical" value={value} onChange={setValue}>
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
        <Radio value="option3" label="Option 3" />
        <Radio value="option4" label="Option 4 (disabled)" disabled />
      </RadioGroup>
    );
  },
};

export const HorizontalGroup: Story = {
  render: () => {
    const [value, setValue] = useState('left');
    return (
      <RadioGroup name="horizontal" value={value} onChange={setValue} direction="horizontal">
        <Radio value="left" label="Left" />
        <Radio value="center" label="Center" />
        <Radio value="right" label="Right" />
      </RadioGroup>
    );
  },
};

export const WithError: Story = {
  args: {
    label: 'Required selection',
    error: true,
    name: 'error',
  },
};
