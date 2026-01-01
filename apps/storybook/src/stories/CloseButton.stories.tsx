import type { Meta, StoryObj } from '@storybook/react';
import { CloseButton } from '@zenkit-ui/core';

const meta: Meta<typeof CloseButton> = {
  title: 'Components/CloseButton',
  component: CloseButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => alert('Closed!'),
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <CloseButton size="sm" />
      <CloseButton size="md" />
      <CloseButton size="lg" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <CloseButton variant="subtle" />
      <CloseButton variant="solid" />
      <CloseButton variant="ghost" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const InCard: Story = {
  render: () => (
    <div style={{
      padding: '1rem',
      border: '1px solid #eee',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      minWidth: '300px'
    }}>
      <span>Notification message</span>
      <CloseButton size="sm" />
    </div>
  ),
};
