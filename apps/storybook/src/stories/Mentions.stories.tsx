import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Mentions } from '@zenkit-ui/core';

const meta: Meta<typeof Mentions> = {
  title: 'Data Entry/Mentions',
  component: Mentions,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const users = [
  { value: 'john', label: 'John Doe' },
  { value: 'jane', label: 'Jane Smith' },
  { value: 'bob', label: 'Bob Johnson' },
  { value: 'alice', label: 'Alice Williams' },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Mentions
        value={value}
        onChange={setValue}
        options={users}
        placeholder="Type @ to mention someone"
        style={{ width: '300px' }}
      />
    );
  },
};

export const WithPrefix: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Mentions
        value={value}
        onChange={setValue}
        options={users}
        prefix="@"
        placeholder="Type @ to mention"
        style={{ width: '300px' }}
      />
    );
  },
};

export const MultiplePrefix: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const tags = [
      { value: 'bug', label: 'Bug' },
      { value: 'feature', label: 'Feature' },
      { value: 'docs', label: 'Documentation' },
    ];
    return (
      <Mentions
        value={value}
        onChange={setValue}
        options={users}
        placeholder="@ for users, # for tags"
        style={{ width: '300px' }}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    options: users,
    disabled: true,
    placeholder: 'Disabled mentions',
    style: { width: '300px' },
  },
};

export const ReadOnly: Story = {
  args: {
    options: users,
    readOnly: true,
    value: 'Hello @john, please review this.',
    style: { width: '300px' },
  },
};
