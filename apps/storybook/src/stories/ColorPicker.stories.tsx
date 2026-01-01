import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ColorPicker } from '@zenkit-ui/core';

const meta: Meta<typeof ColorPicker> = {
  title: 'Data Entry/ColorPicker',
  component: ColorPicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [color, setColor] = useState<string>('#1890ff');
    return (
      <ColorPicker
        value={color}
        onChange={setColor}
      />
    );
  },
};

export const WithPresets: Story = {
  render: () => {
    const [color, setColor] = useState<string>('#ff4d4f');
    return (
      <ColorPicker
        value={color}
        onChange={setColor}
        presets={[
          '#ff4d4f', '#fa8c16', '#fadb14', '#52c41a',
          '#13c2c2', '#1890ff', '#722ed1', '#eb2f96',
        ]}
      />
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <ColorPicker size="sm" value="#1890ff" />
      <ColorPicker size="md" value="#52c41a" />
      <ColorPicker size="lg" value="#722ed1" />
    </div>
  ),
};

export const WithAlpha: Story = {
  render: () => {
    const [color, setColor] = useState<string>('rgba(24, 144, 255, 0.5)');
    return (
      <ColorPicker
        value={color}
        onChange={setColor}
        showAlpha
      />
    );
  },
};

export const WithInput: Story = {
  render: () => {
    const [color, setColor] = useState<string>('#1890ff');
    return (
      <ColorPicker
        value={color}
        onChange={setColor}
        showInput
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    value: '#1890ff',
    disabled: true,
  },
};
