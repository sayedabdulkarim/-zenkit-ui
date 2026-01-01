import type { Meta, StoryObj } from '@storybook/react';
import { FloatButton, FloatButtonGroup } from '@zenkit-ui/core';

const meta: Meta<typeof FloatButton> = {
  title: 'Utility/FloatButton',
  component: FloatButton,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const MessageIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const Default: Story = {
  render: () => (
    <div style={{ height: '300px', position: 'relative' }}>
      <FloatButton icon={<PlusIcon />} />
    </div>
  ),
};

export const WithTooltip: Story = {
  render: () => (
    <div style={{ height: '300px', position: 'relative' }}>
      <FloatButton icon={<PlusIcon />} tooltip="Add new item" />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div style={{ height: '300px', position: 'relative', display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
      <FloatButton icon={<PlusIcon />} shape="circle" style={{ position: 'relative' }} />
      <FloatButton icon={<PlusIcon />} shape="square" style={{ position: 'relative' }} />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ height: '300px', position: 'relative', display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
      <FloatButton icon={<PlusIcon />} variant="default" style={{ position: 'relative' }} />
      <FloatButton icon={<PlusIcon />} variant="primary" style={{ position: 'relative' }} />
    </div>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <div style={{ height: '300px', position: 'relative' }}>
      <FloatButton icon={<MessageIcon />} badge={5} />
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <div style={{ height: '400px', position: 'relative' }}>
      <FloatButtonGroup trigger="hover" icon={<PlusIcon />}>
        <FloatButton icon={<MessageIcon />} tooltip="Message" />
        <FloatButton icon={<PlusIcon />} tooltip="Add" />
      </FloatButtonGroup>
    </div>
  ),
};
