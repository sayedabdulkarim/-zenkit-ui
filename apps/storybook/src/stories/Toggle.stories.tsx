import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toggle } from '@zenkit-ui/core';

const meta: Meta<typeof Toggle> = {
  title: 'Data Display/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [pressed, setPressed] = useState(false);
    return (
      <Toggle pressed={pressed} onPressedChange={setPressed}>
        Toggle
      </Toggle>
    );
  },
};

export const Pressed: Story = {
  render: () => {
    const [pressed, setPressed] = useState(true);
    return (
      <Toggle pressed={pressed} onPressedChange={setPressed}>
        Pressed
      </Toggle>
    );
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Toggle variant="default">Default</Toggle>
      <Toggle variant="outline">Outline</Toggle>
      <Toggle variant="ghost">Ghost</Toggle>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Toggle size="sm">Small</Toggle>
      <Toggle size="md">Medium</Toggle>
      <Toggle size="lg">Large</Toggle>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => {
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);
    return (
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Toggle pressed={bold} onPressedChange={setBold} aria-label="Bold">
          <strong>B</strong>
        </Toggle>
        <Toggle pressed={italic} onPressedChange={setItalic} aria-label="Italic">
          <em>I</em>
        </Toggle>
        <Toggle pressed={underline} onPressedChange={setUnderline} aria-label="Underline">
          <u>U</u>
        </Toggle>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};
