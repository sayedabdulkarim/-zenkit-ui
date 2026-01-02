import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RangeSlider } from '@zenkit-ui/core';

const meta: Meta<typeof RangeSlider> = {
  title: 'Components/RangeSlider',
  component: RangeSlider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    color: { control: 'select', options: ['primary', 'secondary', 'success', 'warning', 'error'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<[number, number]>([25, 75]);
    return (
      <div style={{ width: '300px' }}>
        <RangeSlider value={value} onChange={setValue} />
        <p>Range: {value[0]} - {value[1]}</p>
      </div>
    );
  },
};

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState<[number, number]>([20, 80]);
    return (
      <div style={{ width: '300px' }}>
        <RangeSlider label="Price Range" value={value} onChange={setValue} />
      </div>
    );
  },
};

export const WithMarks: Story = {
  render: () => {
    const [value, setValue] = useState<[number, number]>([0, 100]);
    return (
      <div style={{ width: '300px' }}>
        <RangeSlider
          value={value}
          onChange={setValue}
          marks={[
            { value: 0, label: '0' },
            { value: 25, label: '25' },
            { value: 50, label: '50' },
            { value: 75, label: '75' },
            { value: 100, label: '100' },
          ]}
        />
      </div>
    );
  },
};

export const WithTooltip: Story = {
  render: () => {
    const [value, setValue] = useState<[number, number]>([30, 70]);
    return (
      <div style={{ width: '300px' }}>
        <RangeSlider value={value} onChange={setValue} showTooltip />
      </div>
    );
  },
};

export const MinRange: Story = {
  render: () => {
    const [value, setValue] = useState<[number, number]>([20, 80]);
    return (
      <div style={{ width: '300px' }}>
        <RangeSlider
          label="Minimum 20 units apart"
          value={value}
          onChange={setValue}
          minRange={20}
        />
      </div>
    );
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <RangeSlider defaultValue={[20, 80]} color="primary" />
      <RangeSlider defaultValue={[30, 70]} color="secondary" />
      <RangeSlider defaultValue={[25, 75]} color="success" />
      <RangeSlider defaultValue={[35, 65]} color="warning" />
      <RangeSlider defaultValue={[40, 60]} color="error" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    defaultValue: [25, 75],
    disabled: true,
  },
  decorators: [(Story) => <div style={{ width: '300px' }}><Story /></div>],
};
