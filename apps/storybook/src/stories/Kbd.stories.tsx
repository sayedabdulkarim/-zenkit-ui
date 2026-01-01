import type { Meta, StoryObj } from '@storybook/react';
import { Kbd } from '@zenkit-ui/core';

const meta: Meta<typeof Kbd> = {
  title: 'Data Display/Kbd',
  component: Kbd,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'K',
  },
};

export const Combination: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
      <Kbd>Ctrl</Kbd>
      <span>+</span>
      <Kbd>C</Kbd>
    </div>
  ),
};

export const CommonShortcuts: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <span style={{ width: '100px' }}>Copy:</span>
        <Kbd>Cmd</Kbd><span>+</span><Kbd>C</Kbd>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <span style={{ width: '100px' }}>Paste:</span>
        <Kbd>Cmd</Kbd><span>+</span><Kbd>V</Kbd>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <span style={{ width: '100px' }}>Save:</span>
        <Kbd>Cmd</Kbd><span>+</span><Kbd>S</Kbd>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <span style={{ width: '100px' }}>Undo:</span>
        <Kbd>Cmd</Kbd><span>+</span><Kbd>Z</Kbd>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Kbd size="sm">Esc</Kbd>
      <Kbd size="md">Esc</Kbd>
      <Kbd size="lg">Esc</Kbd>
    </div>
  ),
};

export const SpecialKeys: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Kbd>Enter</Kbd>
      <Kbd>Tab</Kbd>
      <Kbd>Shift</Kbd>
      <Kbd>Space</Kbd>
      <Kbd>Backspace</Kbd>
      <Kbd>Delete</Kbd>
      <Kbd>↑</Kbd>
      <Kbd>↓</Kbd>
      <Kbd>←</Kbd>
      <Kbd>→</Kbd>
    </div>
  ),
};

export const InText: Story = {
  render: () => (
    <p>
      Press <Kbd>Cmd</Kbd> + <Kbd>K</Kbd> to open the command palette.
    </p>
  ),
};
