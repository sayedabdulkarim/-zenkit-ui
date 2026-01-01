import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Slider } from '@zenkit-ui/core';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    color: { control: 'select', options: ['primary', 'secondary', 'success', 'danger', 'warning'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 50,
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState(30);
    return (
      <div style={{ width: '300px' }}>
        <Slider
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <p>Value: {value}</p>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '300px' }}>
      <Slider size="sm" defaultValue={25} />
      <Slider size="md" defaultValue={50} />
      <Slider size="lg" defaultValue={75} />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '300px' }}>
      <Slider color="primary" defaultValue={50} />
      <Slider color="secondary" defaultValue={50} />
      <Slider color="success" defaultValue={50} />
      <Slider color="danger" defaultValue={50} />
      <Slider color="warning" defaultValue={50} />
    </div>
  ),
};

export const WithMarks: Story = {
  args: {
    defaultValue: 50,
    showMarks: true,
    min: 0,
    max: 100,
  },
};

export const CustomRange: Story = {
  render: () => {
    const [value, setValue] = useState(5);
    return (
      <div style={{ width: '300px' }}>
        <Slider
          min={1}
          max={10}
          step={1}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          showMarks
        />
        <p>Rating: {value}/10</p>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: 50,
    disabled: true,
  },
};
