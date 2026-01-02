import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { AngleSlider } from '@zenkit-ui/core';

const meta: Meta<typeof AngleSlider> = {
  title: 'Components/AngleSlider',
  component: AngleSlider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    color: { control: 'select', options: ['primary', 'secondary', 'success'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [angle, setAngle] = useState(45);
    return (
      <div style={{ textAlign: 'center' }}>
        <AngleSlider value={angle} onChange={setAngle} />
        <p>Angle: {angle}°</p>
      </div>
    );
  },
};

export const WithLabel: Story = {
  render: () => {
    const [angle, setAngle] = useState(90);
    return (
      <AngleSlider
        value={angle}
        onChange={setAngle}
        label="Rotation"
      />
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-end' }}>
      <div style={{ textAlign: 'center' }}>
        <AngleSlider size="sm" defaultValue={30} />
        <p>Small</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <AngleSlider size="md" defaultValue={60} />
        <p>Medium</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <AngleSlider size="lg" defaultValue={90} />
        <p>Large</p>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <AngleSlider defaultValue={45} color="primary" />
      <AngleSlider defaultValue={90} color="secondary" />
      <AngleSlider defaultValue={135} color="success" />
    </div>
  ),
};

export const WithMarks: Story = {
  render: () => {
    const [angle, setAngle] = useState(0);
    return (
      <AngleSlider
        value={angle}
        onChange={setAngle}
        marks={[
          { value: 0, label: 'N' },
          { value: 90, label: 'E' },
          { value: 180, label: 'S' },
          { value: 270, label: 'W' },
        ]}
      />
    );
  },
};

export const Step: Story = {
  render: () => {
    const [angle, setAngle] = useState(0);
    return (
      <div style={{ textAlign: 'center' }}>
        <AngleSlider value={angle} onChange={setAngle} step={15} />
        <p>Snaps to 15° increments: {angle}°</p>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    value: 45,
    disabled: true,
  },
};

export const GradientRotation: Story = {
  render: () => {
    const [angle, setAngle] = useState(45);
    return (
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <AngleSlider value={angle} onChange={setAngle} label="Gradient Angle" />
        <div
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '8px',
            background: `linear-gradient(${angle}deg, #667eea, #764ba2)`,
          }}
        />
      </div>
    );
  },
};
