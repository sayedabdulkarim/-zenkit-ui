import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ColorInput } from '@zenkit-ui/core';

const meta: Meta<typeof ColorInput> = {
  title: 'Components/ColorInput',
  component: ColorInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    format: { control: 'select', options: ['hex', 'rgb', 'hsl'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('#228be6');
    return (
      <div style={{ width: '250px' }}>
        <ColorInput value={value} onChange={setValue} />
      </div>
    );
  },
};

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState('#40c057');
    return (
      <div style={{ width: '250px' }}>
        <ColorInput
          label="Brand Color"
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
};

export const WithSwatches: Story = {
  render: () => {
    const [value, setValue] = useState('#fa5252');
    return (
      <div style={{ width: '250px' }}>
        <ColorInput
          label="Pick a color"
          value={value}
          onChange={setValue}
          swatches={['#228be6', '#40c057', '#fab005', '#fa5252', '#7950f2', '#15aabf']}
        />
      </div>
    );
  },
};

export const Formats: Story = {
  render: () => {
    const [hex, setHex] = useState('#228be6');
    const [rgb, setRgb] = useState('rgb(34, 139, 230)');
    const [hsl, setHsl] = useState('hsl(211, 100%, 50%)');
    return (
      <div style={{ width: '250px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <ColorInput label="HEX format" value={hex} onChange={setHex} format="hex" />
        <ColorInput label="RGB format" value={rgb} onChange={setRgb} format="rgb" />
        <ColorInput label="HSL format" value={hsl} onChange={setHsl} format="hsl" />
      </div>
    );
  },
};

export const WithAlpha: Story = {
  render: () => {
    const [value, setValue] = useState('rgba(34, 139, 230, 0.5)');
    return (
      <div style={{ width: '250px' }}>
        <ColorInput
          label="With Alpha"
          value={value}
          onChange={setValue}
          withAlpha
        />
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ width: '250px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ColorInput size="sm" defaultValue="#228be6" />
      <ColorInput size="md" defaultValue="#40c057" />
      <ColorInput size="lg" defaultValue="#fa5252" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    value: '#228be6',
    disabled: true,
  },
  decorators: [(Story) => <div style={{ width: '250px' }}><Story /></div>],
};
