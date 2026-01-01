import type { Meta, StoryObj } from '@storybook/react';
import { SpeedDial } from '@zenkit-ui/core';

const meta: Meta<typeof SpeedDial> = {
  title: 'Navigation/SpeedDial',
  component: SpeedDial,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const actions = [
  { key: 'copy', icon: '📋', label: 'Copy' },
  { key: 'save', icon: '💾', label: 'Save' },
  { key: 'print', icon: '🖨️', label: 'Print' },
  { key: 'share', icon: '📤', label: 'Share' },
];

export const Default: Story = {
  render: () => (
    <div style={{ height: '400px', position: 'relative' }}>
      <SpeedDial
        actions={actions}
        onActionClick={(key) => console.log('Action:', key)}
      />
    </div>
  ),
};

export const Directions: Story = {
  render: () => (
    <div style={{ height: '500px', position: 'relative', display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ width: '50%', height: '50%', position: 'relative', border: '1px solid #eee' }}>
        <SpeedDial actions={actions} direction="up" position="bottom-right" />
        <span style={{ position: 'absolute', top: 10, left: 10 }}>Up</span>
      </div>
      <div style={{ width: '50%', height: '50%', position: 'relative', border: '1px solid #eee' }}>
        <SpeedDial actions={actions} direction="down" position="top-right" />
        <span style={{ position: 'absolute', top: 10, left: 10 }}>Down</span>
      </div>
      <div style={{ width: '50%', height: '50%', position: 'relative', border: '1px solid #eee' }}>
        <SpeedDial actions={actions} direction="left" position="bottom-right" />
        <span style={{ position: 'absolute', top: 10, left: 10 }}>Left</span>
      </div>
      <div style={{ width: '50%', height: '50%', position: 'relative', border: '1px solid #eee' }}>
        <SpeedDial actions={actions} direction="right" position="bottom-left" />
        <span style={{ position: 'absolute', top: 10, left: 10 }}>Right</span>
      </div>
    </div>
  ),
};

export const HoverTrigger: Story = {
  render: () => (
    <div style={{ height: '400px', position: 'relative' }}>
      <SpeedDial
        actions={actions}
        trigger="hover"
        onActionClick={(key) => console.log('Action:', key)}
      />
    </div>
  ),
};

export const CustomIcon: Story = {
  render: () => (
    <div style={{ height: '400px', position: 'relative' }}>
      <SpeedDial
        actions={actions}
        icon="✨"
        onActionClick={(key) => console.log('Action:', key)}
      />
    </div>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <div style={{ height: '400px', position: 'relative' }}>
      <SpeedDial
        actions={actions}
        showLabels
        onActionClick={(key) => console.log('Action:', key)}
      />
    </div>
  ),
};
