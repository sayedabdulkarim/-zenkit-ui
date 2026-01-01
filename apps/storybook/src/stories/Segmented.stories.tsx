import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Segmented } from '@zenkit-ui/core';

const meta: Meta<typeof Segmented> = {
  title: 'Data Display/Segmented',
  component: Segmented,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('daily');
    return (
      <Segmented
        options={['Daily', 'Weekly', 'Monthly', 'Yearly']}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const WithValues: Story = {
  render: () => {
    const [value, setValue] = useState('list');
    return (
      <Segmented
        options={[
          { label: 'List', value: 'list' },
          { label: 'Grid', value: 'grid' },
          { label: 'Table', value: 'table' },
        ]}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const WithIcons: Story = {
  render: () => {
    const [value, setValue] = useState('left');
    return (
      <Segmented
        options={[
          { label: '⬅️ Left', value: 'left' },
          { label: '⬆️ Center', value: 'center' },
          { label: '➡️ Right', value: 'right' },
        ]}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Segmented options={['S', 'M', 'L']} size="sm" />
      <Segmented options={['S', 'M', 'L']} size="md" />
      <Segmented options={['S', 'M', 'L']} size="lg" />
    </div>
  ),
};

export const Block: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    block: true,
    style: { width: '400px' },
  },
};

export const Disabled: Story = {
  args: {
    options: ['Daily', 'Weekly', 'Monthly'],
    disabled: true,
  },
};

export const DisabledOption: Story = {
  args: {
    options: [
      { label: 'Available', value: 'available' },
      { label: 'Sold Out', value: 'soldout', disabled: true },
      { label: 'Coming Soon', value: 'coming' },
    ],
  },
};
