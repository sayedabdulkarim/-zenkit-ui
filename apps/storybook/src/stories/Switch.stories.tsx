import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@zenkit-ui/core';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
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
    label: 'Enable notifications',
  },
};

export const Checked: Story = {
  args: {
    label: 'Feature enabled',
    defaultChecked: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch size="sm" label="Small switch" />
      <Switch size="md" label="Medium switch" />
      <Switch size="lg" label="Large switch" />
    </div>
  ),
};

export const ColorSchemes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch colorScheme="primary" label="Primary" defaultChecked />
      <Switch colorScheme="secondary" label="Secondary" defaultChecked />
      <Switch colorScheme="success" label="Success" defaultChecked />
      <Switch colorScheme="danger" label="Danger" defaultChecked />
      <Switch colorScheme="warning" label="Warning" defaultChecked />
      <Switch colorScheme="info" label="Info" defaultChecked />
    </div>
  ),
};

export const Loading: Story = {
  args: {
    label: 'Saving...',
    loading: true,
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch label="Disabled off" disabled />
      <Switch label="Disabled on" disabled defaultChecked />
    </div>
  ),
};

export const WithError: Story = {
  args: {
    label: 'Required toggle',
    error: true,
  },
};

export const LabelOnLeft: Story = {
  args: {
    label: 'Dark mode',
    labelPosition: 'left',
  },
};

export const WithoutLabel: Story = {
  args: {
    'aria-label': 'Toggle setting',
  },
};
