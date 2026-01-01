import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { NumberInput } from '@zenkit-ui/core';

const meta: Meta<typeof NumberInput> = {
  title: 'Data Entry/NumberInput',
  component: NumberInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<number | undefined>(0);
    return (
      <NumberInput
        value={value}
        onChange={setValue}
        placeholder="Enter number"
      />
    );
  },
};

export const WithMinMax: Story = {
  render: () => {
    const [value, setValue] = useState<number | undefined>(5);
    return (
      <NumberInput
        value={value}
        onChange={setValue}
        min={0}
        max={10}
        placeholder="0-10"
      />
    );
  },
};

export const WithStep: Story = {
  render: () => {
    const [value, setValue] = useState<number | undefined>(0);
    return (
      <NumberInput
        value={value}
        onChange={setValue}
        step={5}
        placeholder="Step: 5"
      />
    );
  },
};

export const WithPrecision: Story = {
  render: () => {
    const [value, setValue] = useState<number | undefined>(3.14);
    return (
      <NumberInput
        value={value}
        onChange={setValue}
        precision={2}
        step={0.01}
        placeholder="2 decimal places"
      />
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '200px' }}>
      <NumberInput size="sm" placeholder="Small" />
      <NumberInput size="md" placeholder="Medium" />
      <NumberInput size="lg" placeholder="Large" />
    </div>
  ),
};

export const WithControls: Story = {
  render: () => {
    const [value, setValue] = useState<number | undefined>(50);
    return (
      <NumberInput
        value={value}
        onChange={setValue}
        showControls
        min={0}
        max={100}
      />
    );
  },
};

export const WithPrefixSuffix: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '200px' }}>
      <NumberInput prefix="$" placeholder="Price" />
      <NumberInput suffix="%" placeholder="Percentage" />
      <NumberInput prefix="$" suffix="USD" placeholder="Currency" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 100,
  },
};
