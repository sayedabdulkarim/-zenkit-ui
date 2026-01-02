import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { CheckboxGroup, CheckboxGroupItem } from '@zenkit-ui/core';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>(['react']);
    return (
      <CheckboxGroup value={value} onChange={setValue}>
        <CheckboxGroupItem value="react" label="React" />
        <CheckboxGroupItem value="vue" label="Vue" />
        <CheckboxGroupItem value="angular" label="Angular" />
        <CheckboxGroupItem value="svelte" label="Svelte" />
      </CheckboxGroup>
    );
  },
};

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <CheckboxGroup label="Select frameworks" value={value} onChange={setValue}>
        <CheckboxGroupItem value="react" label="React" />
        <CheckboxGroupItem value="vue" label="Vue" />
        <CheckboxGroupItem value="angular" label="Angular" />
      </CheckboxGroup>
    );
  },
};

export const Horizontal: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>(['option1']);
    return (
      <CheckboxGroup orientation="horizontal" value={value} onChange={setValue}>
        <CheckboxGroupItem value="option1" label="Option 1" />
        <CheckboxGroupItem value="option2" label="Option 2" />
        <CheckboxGroupItem value="option3" label="Option 3" />
      </CheckboxGroup>
    );
  },
};

export const WithDescription: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <CheckboxGroup
        label="Notifications"
        description="Choose how you want to be notified"
        value={value}
        onChange={setValue}
      >
        <CheckboxGroupItem value="email" label="Email" />
        <CheckboxGroupItem value="sms" label="SMS" />
        <CheckboxGroupItem value="push" label="Push notifications" />
      </CheckboxGroup>
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <CheckboxGroup
        label="Select at least one"
        error="Please select at least one option"
        value={value}
        onChange={setValue}
      >
        <CheckboxGroupItem value="option1" label="Option 1" />
        <CheckboxGroupItem value="option2" label="Option 2" />
      </CheckboxGroup>
    );
  },
};

export const DisabledItems: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>(['enabled1']);
    return (
      <CheckboxGroup value={value} onChange={setValue}>
        <CheckboxGroupItem value="enabled1" label="Enabled option" />
        <CheckboxGroupItem value="disabled" label="Disabled option" disabled />
        <CheckboxGroupItem value="enabled2" label="Another enabled" />
      </CheckboxGroup>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <CheckboxGroup size="sm" defaultValue={['a']}>
        <CheckboxGroupItem value="a" label="Small A" />
        <CheckboxGroupItem value="b" label="Small B" />
      </CheckboxGroup>
      <CheckboxGroup size="md" defaultValue={['a']}>
        <CheckboxGroupItem value="a" label="Medium A" />
        <CheckboxGroupItem value="b" label="Medium B" />
      </CheckboxGroup>
      <CheckboxGroup size="lg" defaultValue={['a']}>
        <CheckboxGroupItem value="a" label="Large A" />
        <CheckboxGroupItem value="b" label="Large B" />
      </CheckboxGroup>
    </div>
  ),
};
