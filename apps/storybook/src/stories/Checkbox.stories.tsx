import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@zenkit-ui/core';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
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
    label: 'Accept terms and conditions',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked checkbox',
    defaultChecked: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Checkbox size="sm" label="Small checkbox" />
      <Checkbox size="md" label="Medium checkbox" />
      <Checkbox size="lg" label="Large checkbox" />
    </div>
  ),
};

export const ColorSchemes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Checkbox colorScheme="primary" label="Primary" defaultChecked />
      <Checkbox colorScheme="secondary" label="Secondary" defaultChecked />
      <Checkbox colorScheme="success" label="Success" defaultChecked />
      <Checkbox colorScheme="danger" label="Danger" defaultChecked />
      <Checkbox colorScheme="warning" label="Warning" defaultChecked />
      <Checkbox colorScheme="info" label="Info" defaultChecked />
    </div>
  ),
};

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate state',
    indeterminate: true,
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Checkbox label="Disabled unchecked" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
    </div>
  ),
};

export const WithError: Story = {
  args: {
    label: 'Required field',
    error: true,
  },
};

export const LabelOnLeft: Story = {
  args: {
    label: 'Label on left side',
    labelPosition: 'left',
  },
};

export const WithoutLabel: Story = {
  args: {
    'aria-label': 'Checkbox without visible label',
  },
};

export const CheckboxGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Checkbox label="Option 1" name="group" />
      <Checkbox label="Option 2" name="group" defaultChecked />
      <Checkbox label="Option 3" name="group" />
      <Checkbox label="Option 4 (disabled)" name="group" disabled />
    </div>
  ),
};
