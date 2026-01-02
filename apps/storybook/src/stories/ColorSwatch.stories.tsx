import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ColorSwatch } from '@zenkit-ui/core';

const meta: Meta<typeof ColorSwatch> = {
  title: 'Components/ColorSwatch',
  component: ColorSwatch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    radius: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'full'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: '#228be6',
  },
};

export const Palette: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <ColorSwatch color="#228be6" />
      <ColorSwatch color="#40c057" />
      <ColorSwatch color="#fab005" />
      <ColorSwatch color="#fa5252" />
      <ColorSwatch color="#7950f2" />
      <ColorSwatch color="#15aabf" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
      <ColorSwatch color="#228be6" size="xs" />
      <ColorSwatch color="#228be6" size="sm" />
      <ColorSwatch color="#228be6" size="md" />
      <ColorSwatch color="#228be6" size="lg" />
      <ColorSwatch color="#228be6" size="xl" />
    </div>
  ),
};

export const Radius: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <ColorSwatch color="#228be6" radius="none" />
      <ColorSwatch color="#40c057" radius="sm" />
      <ColorSwatch color="#fab005" radius="md" />
      <ColorSwatch color="#fa5252" radius="lg" />
      <ColorSwatch color="#7950f2" radius="full" />
    </div>
  ),
};

export const Clickable: Story = {
  render: () => {
    const [selected, setSelected] = useState('#228be6');
    const colors = ['#228be6', '#40c057', '#fab005', '#fa5252', '#7950f2'];
    return (
      <div>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
          {colors.map((color) => (
            <ColorSwatch
              key={color}
              color={color}
              onClick={() => setSelected(color)}
              style={{
                cursor: 'pointer',
                outline: selected === color ? '2px solid currentColor' : 'none',
                outlineOffset: '2px',
              }}
            />
          ))}
        </div>
        <p>Selected: {selected}</p>
      </div>
    );
  },
};

export const WithChildren: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <ColorSwatch color="#228be6" size="lg">
        <span style={{ color: 'white' }}>✓</span>
      </ColorSwatch>
      <ColorSwatch color="#fa5252" size="lg">
        <span style={{ color: 'white' }}>×</span>
      </ColorSwatch>
      <ColorSwatch color="#40c057" size="lg">
        <span style={{ color: 'white' }}>A</span>
      </ColorSwatch>
    </div>
  ),
};

export const Transparent: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <ColorSwatch color="transparent" withShadow />
      <ColorSwatch color="rgba(34, 139, 230, 0.5)" />
      <ColorSwatch color="rgba(250, 82, 82, 0.3)" />
    </div>
  ),
};

export const Gradients: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <ColorSwatch color="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" size="lg" />
      <ColorSwatch color="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" size="lg" />
      <ColorSwatch color="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" size="lg" />
    </div>
  ),
};

export const ColorGrid: Story = {
  render: () => {
    const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
    const blues = ['#e7f5ff', '#d0ebff', '#a5d8ff', '#74c0fc', '#4dabf7', '#339af0', '#228be6', '#1c7ed6', '#1971c2', '#1864ab'];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        <div style={{ display: 'flex', gap: '0.25rem' }}>
          {blues.map((color, i) => (
            <ColorSwatch key={color} color={color} size="sm" radius="sm" />
          ))}
        </div>
        <div style={{ display: 'flex', gap: '0.25rem', fontSize: '0.625rem' }}>
          {shades.map((shade) => (
            <span key={shade} style={{ width: '24px', textAlign: 'center' }}>{shade}</span>
          ))}
        </div>
      </div>
    );
  },
};
